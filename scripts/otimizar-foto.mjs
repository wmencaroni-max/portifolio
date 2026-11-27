// Gera a foto de perfil do site em formato QUADRADO a partir de uma foto comum.
// Uso: node scripts/otimizar-foto.mjs [entrada]   (padrão: referencias/foto-perfil.webp)
// Saída: public/foto.webp (800x800) e public/foto.jpg (800x800, para Open Graph e JSON-LD)
//
// Recorte quadrado centralizado (fit "cover"), redução com lanczos3 e nitidez leve.
// Para fotos com o rosto fora do centro, mude `posicao` (ex.: "north" para priorizar o topo).
// Histórico: a versão anterior tratava o recorte circular de 378x349 do LinkedIn (ver git log).
import sharp from "sharp";

const entrada = process.argv[2] ?? "referencias/foto-perfil.webp";
const TAM = 800;
const posicao = "centre";

const meta = await sharp(entrada).metadata();
if (Math.min(meta.width, meta.height) < TAM) {
  console.warn(`Aviso: a foto tem ${meta.width}x${meta.height}; menor que ${TAM}px, vai ser ampliada e pode perder nitidez.`);
}

const base = sharp(entrada)
  .rotate() // respeita a orientação EXIF
  .resize(TAM, TAM, { fit: "cover", position: posicao, kernel: "lanczos3" })
  .sharpen({ sigma: 0.6 });

await base.clone().webp({ quality: 85, effort: 6 }).toFile("public/foto.webp");
await base.clone().jpeg({ quality: 85, mozjpeg: true }).toFile("public/foto.jpg");
console.log(`entrada ${meta.width}x${meta.height} -> public/foto.webp e public/foto.jpg (${TAM}x${TAM})`);
