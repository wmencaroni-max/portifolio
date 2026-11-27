# Arquitetura

Site estático em Astro, bilíngue. Duas rotas (`src/pages/index.astro` para pt e `src/pages/en/index.astro` para en) que renderizam o mesmo componente `PaginaInicial.astro` com `lang`.

| Caminho | Responsabilidade |
| --- | --- |
| `src/data/perfil.ts` | Todo o conteúdo: `perfil` (dados fixos), `conteudo.pt` e `conteudo.en` (textos), `rotas` |
| `src/components/PaginaInicial.astro` | Todas as seções da página, a partir de `conteudo[lang]` |
| `src/layouts/Layout.astro` | `<head>` (SEO, hreflang, Open Graph, JSON-LD, preload da foto), script inline de tema e da classe `js`, link de pular conteúdo |
| `src/components/Header.astro` | Cabeçalho fixo, menu de desktop, botão de idioma, botão de tema |
| `scripts/otimizar-foto.mjs` | Gera `public/foto.webp` e `public/foto.jpg` a partir de `referencias/` |
| `src/components/Footer.astro` | Rodapé comum: LinkedIn, WhatsApp, Política, Preferências de privacidade, voltar |
| `src/components/WhatsAppFlutuante.astro` | Botão fixo de WhatsApp com mensagem pronta no idioma |
| `src/components/ConsentBanner.astro` + `src/scripts/consentimento.ts` | Consentimento LGPD (ADR 0002): banner, preferências, gravação versionada, carga condicional do GA4 |
| `src/components/PaginaPrivacidade.astro` | Política de Privacidade; rotas `/privacidade/` e `/en/privacy/` |
| `src/components/MobileNav.tsx` | Ilha React com o Sheet do shadcn/ui; hidratada só com `client:media="(max-width: 1023px)"` |
| `src/components/IconLinkedin.astro` | Ícone de marca em SVG |
| `src/components/ui/` | Componentes shadcn/ui (button, sheet) |
| `src/scripts/site.ts` | JS leve sem framework: alternar tema, borda do header, entrada ao rolar, menu ativo |
| `src/styles/global.css` | Tailwind 4, tokens de tema e classes de componentes do site |
| `public/` | favicon.svg, robots.txt, sitemap.xml (e futura foto.jpg) |

## Comportamento sem JavaScript
As animações de entrada só escondem elementos quando o `<html>` tem a classe `js`, adicionada pelo script inline. Sem JS, tudo aparece. O menu de desktop é HTML puro; o menu móvel depende de JS (limitação aceita: os links continuam acessíveis rolando a página).

## Dados e integrações
Não há formulário, banco nem API. Contato por links (WhatsApp com mensagem pronta, LinkedIn; e-mail quando preenchido). No navegador ficam `localStorage.theme` e `localStorage.consentimento` (`{versao, estatisticas, data}`). Medição: nenhuma por padrão; GA4 apenas com consentimento e `perfil.gaId`. Sem JS o banner fica oculto e nada é gravado.
