# 0003 Publicação no GitHub Pages com base /portifolio

Status e data: aceita, 27/11/2026.

Contexto: o dono pediu um link público para o site. O repositório `wmencaroni-max/portifolio` era privado, e no plano gratuito o GitHub Pages exige repositório público.

Decisão: tornar o repositório público e publicar com GitHub Actions seguindo o guia oficial do Astro (https://docs.astro.build/en/guides/deploy/github/, consultado em 27/11/2026): `site: https://wmencaroni-max.github.io`, `base: /portifolio`, workflow `withastro/action@v6` + `actions/deploy-pages@v5`. Todos os caminhos internos passam pelo helper `caminho()`, que usa `import.meta.env.BASE_URL`.

Alternativas: Netlify ou Vercel (outra conta e configuração); branch gh-pages com build manual (sem automação); domínio próprio (ainda não existe).

Consequências: código, foto, WhatsApp e histórico ficam públicos (o dono foi avisado e escolheu publicar). Commits usam o e-mail noreply do GitHub. robots.txt em subcaminho não é lido por buscadores (só vale na raiz do domínio); o sitemap continua útil via Search Console. Com domínio próprio: trocar `site`, remover `base` e atualizar sitemap e robots.
