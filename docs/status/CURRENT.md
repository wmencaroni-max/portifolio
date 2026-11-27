# Situação atual (27/11/2026)

Site funcional em português (/) e inglês (/en/), com foto, experiências e formação do LinkedIn, WhatsApp, banner de consentimento LGPD e Política de Privacidade. Código no repositório privado https://github.com/wmencaroni-max/portifolio (branch `main`). Validado localmente em http://localhost:4321 (`npm run dev`). Não publicado.

## Pendente do dono
1. E-mail em `perfil.email` (também vale incluir no item 1 da Política de Privacidade).
2. Domínio final em `perfil.site`, `public/robots.txt` e `public/sitemap.xml`.
3. Opcional: ID do Google Analytics 4 em `perfil.gaId`. Só carrega com consentimento.
4. Revisão jurídica da Política de Privacidade; depois, remover o aviso de modelo (`privacidade.aviso`).
5. Opcional: foto maior em que só o dono apareça; rodar `node scripts/otimizar-foto.mjs <arquivo>`.
6. Opcional: certificações (o LinkedIn não tem nenhuma cadastrada em 27/11/2026).
7. Opcional: resultados com números por experiência (o LinkedIn não traz métricas).

## Fonte do conteúdo
Experiências, formação, "Sobre" e ferramentas lidos do LinkedIn do dono, logado no navegador do app, em 27/11/2026.
