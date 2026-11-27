# 0001 Astro + Tailwind com ilha React só no menu móvel

Status e data: aceita, 26/11/2026.

Contexto: o dono pediu que sites novos sigam o guia "Desenvolvimento com IA" (Astro e Tailwind para páginas de conteúdo; React com shadcn/ui só onde a interação justificar). A primeira versão era HTML, CSS e JS puros.

Decisão: migrar para Astro 7 + Tailwind 4, saída estática. Única ilha React: MobileNav (Sheet do shadcn/ui), hidratada com `client:media` abaixo de 1024px. Tema, entrada ao rolar e menu ativo ficam em TS puro.

Alternativas: manter HTML puro (mais leve, mas fora do padrão do dono); React em toda a página (contraria o guia).

Justificativa: o Sheet resolve foco preso, Esc e devolução de foco com componente já testado; o resto não precisa de React.

Consequências: no desktop nenhum JS de React é baixado; no celular cerca de 300 KB sem compressão (client + react-dom + MobileNav). O menu móvel não funciona sem JS.

Referências: https://docs.astro.build/en/guides/integrations-guide/react/ , https://ui.shadcn.com/docs
