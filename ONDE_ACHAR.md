# Onde achar

| O quê | Onde |
| --- | --- |
| Site publicado | https://wmencaroni-max.github.io/portifolio/ |
| Repositório | https://github.com/wmencaroni-max/portifolio (branch `main`) |
| Deploy | `.github/workflows/deploy.yml`; acompanhe em github.com/wmencaroni-max/portifolio/actions |
| Caminhos internos (base /portifolio) | use `caminho()` de src/data/perfil.ts, nunca "/..." direto |
| Git neste PC | `C:\Program Files\Git\cmd\git.exe` (não está no PATH do PowerShell da sessão) |
| Site local | http://localhost:4321/portifolio/ (`npm run dev`) |
| Versão final local | `npm run build` e depois `npm run preview` |
| Textos do site | src/data/perfil.ts |
| Cores e tokens | src/styles/global.css (documentado em docs/DESIGN-SYSTEM.md) |
| Menu móvel | src/components/MobileNav.tsx |
| SEO (title, description, JSON-LD) | src/layouts/Layout.astro |
| robots e sitemap | public/robots.txt, public/sitemap.xml |
| Versão em inglês | http://localhost:4321/portifolio/en/ (textos em `conteudo.en` de src/data/perfil.ts) |
| Foto original | referencias/foto-linkedin-original.png |
| Foto do site | public/foto.webp e public/foto.jpg (gerar de novo: `node scripts/otimizar-foto.mjs`) |
| Número do WhatsApp e mensagem pronta | `perfil.whatsapp` e `conteudo.*.whatsapp` em src/data/perfil.ts |
| Google Analytics (opcional) | `perfil.gaId` em src/data/perfil.ts; só carrega com consentimento |
| Textos do banner e da Política | `conteudo.*.consentimento` e `conteudo.*.privacidade` em src/data/perfil.ts |
| Pedir consentimento de novo | mudar `VERSAO_CONSENTIMENTO` em src/data/perfil.ts |
| Política de Privacidade | http://localhost:4321/portifolio/privacidade/ e /portifolio/en/privacy/ |
| Configuração shadcn | components.json |
| Diretrizes de desenvolvimento do dono | C:\Users\GAMING-PC\Downloads\Desenvolvimento_com_IA_Obsidian.md |
| Perfil de origem | https://www.linkedin.com/in/wendel-moretti-mencaroni-38410910a/ (exige login) |
