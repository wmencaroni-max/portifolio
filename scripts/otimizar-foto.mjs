// Melhora e otimiza a foto de perfil em formato QUADRADO.
// Uso: node scripts/otimizar-foto.mjs [entrada]   (padrão: referencias/foto-linkedin-original.png)
// Saída: public/foto.webp (800x800), public/foto.jpg (800x800, para Open Graph)
//
// O original é um recorte circular de 378x349 sobre fundo escuro. O script:
// 1. detecta o círculo;
// 2. define um recorte quadrado focado no rosto (os cantos ficam fora do círculo);
// 3. preenche os cantos com um degradê feito das cores da própria foto
//    (fundo cinza do estúdio em cima, camiseta escura embaixo), com borda suavizada;
// 4. amplia para 800x800 (lanczos3), reduz ruído e aplica nitidez.
// Não é ampliação por IA: não cria detalhes que não existem na imagem original.
import sharp from "sharp";

const entrada = process.argv[2] ?? "referencias/foto-linkedin-original.png";
const TAM = 800;

const { data, info } = await sharp(entrada).removeAlpha().raw().toBuffer({ resolveWithObject: true });
const px = (x, y) => { const i = (Math.round(y) * info.width + Math.round(x)) * 3; return [data[i], data[i + 1], data[i + 2]]; };
const fundo = px(0, 0);
let x0 = Infinity, y0 = Infinity, x1 = 0, y1 = 0;
for (let y = 0; y < info.height; y++) {
  for (let x = 0; x < info.width; x++) {
    const [r, g, b] = px(x, y);
    if (Math.abs(r - fundo[0]) + Math.abs(g - fundo[1]) + Math.abs(b - fundo[2]) > 40) {
      x0 = Math.min(x0, x); y0 = Math.min(y0, y); x1 = Math.max(x1, x); y1 = Math.max(y1, y);
    }
  }
}
const d = Math.min(x1 - x0, y1 - y0);
const cx = x0 + d / 2, cy = y0 + d / 2, raio = d / 2 - 3;

// Média de cor numa pequena área (frações do diâmetro, a partir do canto do círculo)
const media = (fx, fy, r = 4) => {
  const acc = [0, 0, 0]; let n = 0;
  for (let dy = -r; dy <= r; dy++) for (let dx = -r; dx <= r; dx++) {
    const c = px(x0 + d * fx + dx, y0 + d * fy + dy); acc[0] += c[0]; acc[1] += c[1]; acc[2] += c[2]; n++;
  }
  return acc.map((v) => Math.round(v / n));
};
const hex = (c) => "#" + c.map((v) => v.toString(16).padStart(2, "0")).join("");
const corTopo = media(0.88, 0.35);   // fundo cinza do estúdio, à direita da cabeça
const corBase = media(0.72, 0.95);   // camiseta escura
console.log("círculo:", { x0, y0, d }, "cores de preenchimento:", hex(corTopo), hex(corBase));

// Recorte quadrado focado no rosto (frações do diâmetro, ajustadas visualmente para esta foto)
const rec = { left: Math.round(x0 + d * 0.11), top: Math.round(y0 + d * 0.02), lado: Math.round(d * 0.86) };

// Fundo em degradê + foto circular com borda suave, tudo na resolução original do recorte
const fundoSvg = `<svg width="${info.width}" height="${info.height}"><defs><linearGradient id="g" x1="0" y1="0" x2="0" y2="1">
  <stop offset="0.5" stop-color="${hex(corTopo)}"/><stop offset="0.68" stop-color="${hex(corBase)}"/></linearGradient></defs>
  <rect width="100%" height="100%" fill="url(#g)"/></svg>`;
const mascara = `<svg width="${info.width}" height="${info.height}"><defs><filter id="f" x="-20%" y="-20%" width="140%" height="140%"><feGaussianBlur stdDeviation="7"/></filter></defs>
  <circle cx="${cx}" cy="${cy}" r="${raio - 12}" fill="#fff" filter="url(#f)"/></svg>`;

// A máscara vira o canal alfa da foto. Em sharp 0.35.5 (verificado em 26/11/2026), dentro de um
// mesmo pipeline o removeAlpha roda depois do joinChannel/composite e desfaz o alfa; por isso
// a foto RGB sem alfa (`data`, acima) entra num pipeline novo.
const alfa = await sharp(Buffer.from(mascara)).extractChannel(3).raw().toBuffer();
const fotoCircular = await sharp(data, { raw: { width: info.width, height: info.height, channels: 3 } })
  .joinChannel(alfa, { raw: { width: info.width, height: info.height, channels: 1 } })
  .png().toBuffer();
const composta = await sharp(Buffer.from(fundoSvg)).composite([{ input: fotoCircular }]).png().toBuffer();

const base = sharp(composta)
  .extract({ left: rec.left, top: rec.top, width: rec.lado, height: rec.lado })
  .resize(TAM, TAM, { kernel: "lanczos3" })
  .median(3)
  .sharpen({ sigma: 1.1, m1: 0.8, m2: 2.2 })
  .modulate({ brightness: 1.02, saturation: 1.04 });

await base.clone().webp({ quality: 86, effort: 6 }).toFile("public/foto.webp");
await base.clone().jpeg({ quality: 86, mozjpeg: true }).toFile("public/foto.jpg");
console.log("recorte:", rec, "gerado: public/foto.webp e public/foto.jpg");
