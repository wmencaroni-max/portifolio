# Regras de trabalho

## Antes de editar
- Leia README, docs/status/CURRENT.md, docs/status/HANDOFF.md e as decisões em docs/adr/.
- Confira a pasta, a branch, a revisão e as alterações existentes.
- Leia package.json, package-lock.json e a configuração antes de propor dependências. O gerenciador é o npm; não crie outro lockfile.
- Confirme o comportamento esperado e os critérios de aceite (docs/REQUISITOS.md).

## Durante a implementação
- Conteúdo: edite só em src/data/perfil.ts, sempre em `conteudo.pt` E `conteudo.en` (o tipo `Conteudo` obriga as mesmas chaves). Não invente experiências, empresas, números ou contatos; deixe "A CONFIRMAR".
- Foto: não edite public/foto.* à mão; rode `node scripts/otimizar-foto.mjs`.
- Privacidade: nenhum script de terceiros fora de `src/scripts/consentimento.ts`. Toda ferramenta de medição ou marketing nova depende de consentimento (evento `consentimento:atualizado`), precisa constar na Política de Privacidade e exige mudar `VERSAO_CONSENTIMENTO` (ADR 0002).
- Reutilize os tokens de src/styles/global.css e os componentes existentes (docs/DESIGN-SYSTEM.md).
- React só em ilhas onde a interação justificar (hoje: MobileNav). O resto é Astro estático.
- shadcn/ui: leia components.json e src/components/ui antes de adicionar; use `npx shadcn@4.23.1 add <item> --dry-run` e revise o diff. Não use `--overwrite` (sheet.tsx tem customização: prop `closeLabel`).
- Confirme APIs na fonte local ou na documentação da versão instalada. Exemplo: lucide-react 1.81.0 não exporta ícone "Linkedin".
- Texto das entregas sem travessão.
- Mantenha credenciais fora dos documentos e do Git.

## Validação
- `npx astro check` e `npm run build` precisam terminar sem erro.
- Em tela, confira 375px e 1280px, teclado, foco, tema claro e escuro e o conteúdo com JS desativado (docs/TESTES.md).
- Não remova verificações para fazer uma alteração passar.

## Servidor de desenvolvimento
- `npm run dev` (porta 4321). Em segundo plano: `npx astro dev --background`; gerencie com `npx astro dev stop | status | logs`.

## Entrega
- Informe mudança, evidência, limitações e próxima ação.
- Atualize a documentação afetada e docs/status/HANDOFF.md.
- Só descreva como executado ou publicado aquilo que tiver comprovação.

## Documentação do Astro
- https://docs.astro.build (componentes, ilhas de framework, estilos com Tailwind).
