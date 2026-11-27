# Stack

Versões lidas de `npm ls --depth=0` em 26/11/2026. A fonte de verdade é `package.json` + `package-lock.json`.

| Pacote | Versão | Motivo |
| --- | --- | --- |
| astro | 7.4.13 | Site de conteúdo com saída estática (padrão das diretrizes para páginas de conteúdo) |
| @astrojs/react | 7.1.9 | Ilhas React só onde há interação |
| react / react-dom | 19.3.1 | Base da ilha MobileNav |
| tailwindcss / @tailwindcss/vite | 4.3.5 | Estilos; integração via plugin Vite (`astro.config.mjs`) |
| shadcn (CLI) | 4.23.1 | Adição de componentes; estilo `radix-nova`, base `radix` (`components.json`) |
| radix-ui | 1.8.1 | Primitivas do Sheet (Dialog) e Slot |
| cn | 0.5.2 | Mescla de classes usada pelos componentes shadcn. Verificado: pacote do repositório shadcn-ui/cn, exporta `cn`, `cn("px-2","px-4")` resulta em `px-4` |
| class-variance-authority | 0.7.1 | Variantes do Button |
| lucide-react | 1.81.0 | Ícones (renderizados no servidor, sem JS). Não tem ícone "Linkedin" |
| tw-animate-css | 1.4.0 | Animações do Sheet |
| @fontsource-variable/geist | 5.3.0 | Fonte Geist auto-hospedada (sem requisição externa) |
| @astrojs/check / typescript | 0.9.12 / 6.0.3 | `npx astro check` (dev) |
| withastro/action, actions/checkout, actions/deploy-pages | v6, v7, v5 | Deploy no GitHub Pages (guia oficial do Astro, 27/11/2026) |
| sharp | 0.35.5 | Processamento da foto em `scripts/otimizar-foto.mjs` (dev; mesma versão já usada pelo Astro) |

Gerenciador: npm 11.20.0. Node verificado: 26.13.1 (o `engines` pede 22.23.4 ou superior).

## Restrições
- Sem scripts de terceiros, analytics ou fontes remotas.
- Não adicionar React fora de ilhas justificadas.
