# Situação atual (26/11/2026)

Site funcional em português (/) e inglês (/en/), com foto, WhatsApp, banner de consentimento LGPD e Política de Privacidade (/privacidade/ e /en/privacy/). Validado localmente em http://localhost:4321 (`npm run dev`). Não publicado.

## Pendente do dono (preencher em `conteudo.pt` e `conteudo.en` de src/data/perfil.ts)
1. Experiências do LinkedIn (cargo, empresa, período, um resultado com número).
2. Formação e certificações.
3. Ferramentas que realmente usa (lista atual é genérica).
4. E-mail em `perfil.email` (também vale incluir no item 1 da Política de Privacidade).
5. Domínio final em `perfil.site`, `public/robots.txt` e `public/sitemap.xml`.
6. Opcional: ID do Google Analytics 4 em `perfil.gaId`. Só carrega com consentimento.
7. Revisão jurídica da Política de Privacidade; depois, remover o aviso de modelo (`privacidade.aviso`).
8. Opcional: foto maior em que só o dono apareça; rodar `node scripts/otimizar-foto.mjs <arquivo>`.

## Bloqueios
O perfil do LinkedIn exige login; o conteúdo depende de o dono colar o texto ou o PDF do perfil.
