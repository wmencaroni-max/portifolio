# Handoff

Data: 26/11/2026. Agente: Claude Code.

## O que mudou
- Projeto criado com `npm create astro@latest` (template minimal), `astro add react tailwind` e `shadcn init --base radix --preset nova`; componente `sheet` (com `button`) adicionado.
- Conteúdo e design migrados da versão HTML anterior (removida) para `src/data/perfil.ts`, `Layout.astro`, `Header.astro`, `MobileNav.tsx`, `index.astro` e `global.css`.
- Customização local em `src/components/ui/sheet.tsx`: rótulo do botão de fechar "Close" para "Fechar".
- Documentação completa em README, AGENTS, CLAUDE, docs/ e ONDE_ACHAR.

## Localização
Pasta do projeto `wendel-portfolio/`. Sem Git (não inicializado).

## Evidências
- `npx astro check`: 12 arquivos, 0 erros, 0 avisos, 0 dicas.
- `npm run build`: 1 página, `dist/index.html` 39,8 KB; JS de React só para a ilha móvel.
- Navegador 1280px e 375px: sem rolagem horizontal; 40 de 40 blocos `.reveal` com opacidade 1 no estado final; 0 invisíveis com JS desativado.
- Menu móvel: Enter abre, foco dentro após 12 Tabs, Esc fecha, foco volta para "Abrir menu", link "Trajetória" fecha o painel e posiciona a seção a 84px do topo.
- Tema: alterna `dark` e grava `localStorage.theme = light`.
- Contraste: menor par 4,78 (data no tema claro).
- Menu ativo (1280px): nenhum no topo, "Trajetória" na seção, "Contato" no fim da página, nenhum ao voltar ao topo.
- Console do navegador: 0 erros.

## Rodada 2 (26/11/2026): foto e inglês
- Foto enviada pelo dono (378x349, recorte circular do LinkedIn) salva em `referencias/foto-linkedin-original.png`.
- `scripts/otimizar-foto.mjs` (sharp 0.35.5, devDependency): detecta o círculo, recorta focando o rosto, amplia para 800x800 (lanczos3), mediana 3, nitidez e leve ajuste de brilho e saturação. Saídas: `public/foto.webp` (21,7 KB) e `public/foto.jpg` (38,6 KB, usado no og:image e JSON-LD). Não é ampliação por IA.
- Limite: a mão de outra pessoa continua no canto inferior esquerdo da foto; no site ela fica coberta pelo card "Conversão".
- Topo agora mostra a foto em moldura circular com anel em gradiente (`.photo-ring`), `<picture>` WebP com fallback JPG e preload com fetchpriority high.
- Inglês: conteúdo dos dois idiomas em `src/data/perfil.ts` (`conteudo.pt` e `conteudo.en`); página compartilhada `src/components/PaginaInicial.astro`; rotas `/` e `/en/`. Botão de idioma no header (EN/PT), `lang` do html, hreflang pt-BR/en/x-default, og:locale e sitemap com alternates.
- `sheet.tsx`: nova prop `closeLabel` (customização local, padrão "Fechar").

Evidências da rodada 2:
- `npx astro check`: 0 erros, 0 avisos. `npm run build`: `/index.html` e `/en/index.html` gerados.
- `/`, `/en/`, `/foto.webp`, `/foto.jpg`, `/sitemap.xml`, `/robots.txt`: HTTP 200.
- 1280px: foto 800x800 exibida a 408px (nítida em telas 2x), WebP servido, círculo inteiro.
- `/en/`: lang "en", título, menu e textos em inglês; nenhuma das palavras do menu em português presente; og:locale en_US; botão "PT" leva a "/".
- 375px (pt e en): sem rolagem horizontal; header sem sobreposição; menu móvel com links, rótulo de fechar ("Close"/"Fechar") e CTA no idioma certo.
- Erros 500 no log do dev server às 19:43 foram transitórios, durante a troca de arquivos; após a troca, todas as rotas respondem 200.

## Rodada 3 (26/11/2026): foto quadrada e gráficos como marca d'água
- `scripts/otimizar-foto.mjs` agora gera foto QUADRADA: os cantos fora do círculo original são preenchidos com degradê das cores da própria foto (#9799a5 fundo, #121317 camiseta) e máscara com borda suave. Saídas: foto.webp 19,7 KB, foto.jpg 36,0 KB.
- Achado no sharp 0.35.5: no mesmo pipeline, `removeAlpha` roda depois de `joinChannel`/`composite` e desfaz o alfa (cantos saíam opacos). Solução: a foto RGB entra num pipeline novo antes do `joinChannel`. Registrado no script.
- Topo: foto em `.photo-frame` (quadrada, cantos 28px, borda em gradiente, z-10). Os cards "Conversão" e "Experimentos" foram removidos; no lugar, três gráficos maiores (`.wm-bars`, `.wm-line`, `.wm-donut`), z-0, sem eventos, opacidade de 0,4 a 0,7, dentro de `.hero-visual` com `isolation: isolate`.
- Textos `hero.cardConversao` e `hero.cardExperimentos` e o keyframe `float` removidos (sem uso).
- Limite: a mão de outra pessoa voltou a aparecer no canto inferior esquerdo da foto (antes ficava coberta pelo card).

Evidências da rodada 3:
- `npx astro check` 0 erros; build gera / e /en/; console 0 erros.
- 1280px: foto 400x400 a z-10; gráficos 312x248, 512x256 e 136x136 a z-0; o ponto central da foto é a própria imagem; nenhum gráfico sobrepõe a coluna de texto (borda esquerda 684px, texto termina em 683px); sem rolagem horizontal. Tema claro e escuro conferidos em captura.
- 375px (/en/): foto 300px, sem rolagem horizontal, gráficos visíveis ao redor.

## Rodada 4 (26/11/2026): foto ao lado do título também em telas médias
- Topo passa a ter duas colunas a partir de 768px (`md:grid-cols-[1.2fr_.8fr]`), antes só a partir de 1024px. Foto 300px no md e 400px no lg.
- Entre 768 e 1023px os gráficos da marca d'água ficam mais perto da foto (media query própria) para não invadir o texto.
- Evidências: foto à direita do texto e centralizada verticalmente com ele em 800px (en, centros 406/406), 967px (centros 421/421) e 1280px (445/445); gráficos não invadem a coluna de texto; sem rolagem horizontal; em 375px continua empilhado (foto 300px). Check 0 erros, build ok, console 0 erros.

## Rodada 5 (26/11/2026): WhatsApp e consentimento LGPD
- WhatsApp (11) 98775-9692 informado pelo dono: `perfil.whatsapp`, `linkWhatsApp()` com mensagem pronta por idioma. Botão flutuante (`WhatsAppFlutuante.astro`, 58px, canto inferior direito), botão principal na seção Contato, link no rodapé e `telephone` no JSON-LD.
- Banner de consentimento (`ConsentBanner.astro` + `src/scripts/consentimento.ts`): Aceitar todos / Recusar opcionais com o mesmo estilo; Personalizar mostra Necessários (sempre ativo) e Estatísticas (desligado por padrão). Escolha em `localStorage.consentimento` com versão e data; muda `VERSAO_CONSENTIMENTO` para pedir de novo. Link "Preferências de privacidade" no rodapé reabre. GA4 só carrega com consentimento E `perfil.gaId` preenchido (hoje vazio, então nada é carregado); ao revogar, desliga e apaga cookies `_ga`.
- Política de Privacidade em /privacidade/ e /en/privacy/ (`PaginaPrivacidade.astro`), com aviso de que precisa de revisão jurídica.
- `Footer.astro` extraído; `Header` e `Layout` aceitam páginas internas (`naHome`, `paginas`); MobileNav só intercepta âncoras da mesma página.
- Sitemap com as 4 URLs e alternates.
- O dev server precisou ser reiniciado: ficou com 500 em cache porque o Layout importou ConsentBanner antes de o arquivo existir.

Evidências da rodada 5:
- `astro check` 0 erros (22 arquivos); build gera /, /en/, /privacidade/, /en/privacy/; todas com HTTP 200; banner sai com `hidden` no HTML das 4 páginas.
- 1280px, primeira visita: banner visível (440x269 no canto inferior esquerdo), WhatsApp visível sem sobreposição, nenhum script do Google.
- Clique em Recusar: grava `estatisticas:false`, fecha, anuncia "Preferências salvas."; após recarregar o banner não volta.
- Teclado: Enter no link do rodapé reabre com opções e foco no título; 2 Tabs chegam ao interruptor; Espaço liga; 3 Tabs chegam a "Salvar preferências"; Enter grava `estatisticas:true` e o foco volta ao link do rodapé. Sem gaId, nenhum script carregado.
- 375px (/en/): banner na largura toda, botões com 44px de altura (Customize corrigido de 20px para 44px), WhatsApp escondido enquanto o banner está aberto e visível depois de Accept all; mensagem do WhatsApp em inglês; sem rolagem horizontal.
- Privacidade: lang, h1, 7 seções, canonical e hreflang corretos; botão de idioma alterna entre /privacidade/ e /en/privacy/; menu aponta para /#sobre e /en/#sobre.
- Contraste do botão WhatsApp (#052e16 sobre #25d366): 7,52:1.

## Rodada 6 (27/11/2026): Git, GitHub e conteúdo do LinkedIn
- Repositório Git inicializado (`main`), `.gitattributes` com LF para texto. Identidade só neste repositório: Wendel Moretti Mencaroni <361768123+wmencaroni-max@users.noreply.github.com>.
- Repositório privado criado no GitHub pela interface web: https://github.com/wmencaroni-max/portifolio. Primeiro commit 3d8d522 enviado; `git ls-remote` igual ao HEAD local.
- Conteúdo lido do LinkedIn logado: 9 cargos (Hotmart, Mutant, GFT x3, Cognizant x2, Stefanini, Lelo Eventos), formação (pós Mackenzie 2022 a 2023; Sistemas de Informação, Fundação Santo André 2013 a 2016), "Sobre" e lista de ferramentas. Sem certificações cadastradas.
- Cargo atual corrigido para Growth Analytics Sênior (en: Senior Growth Analyst), agora por idioma em `conteudo.*.cargo`; JSON-LD com `worksFor` e `alumniOf`.
- O chip de cada experiência mostra local e modelo de trabalho (o LinkedIn não traz números de resultado).

Evidências da rodada 6:
- `astro check` 0 erros; build gera as 4 páginas; console 0 erros.
- 1280px (pt): 9 itens na linha do tempo, primeiro Hotmart e último Lelo Eventos; 2 itens de formação; 15 ferramentas; 0 marcadores [Empresa]/[Cargo]/[Curso]; JSON-LD jobTitle "Growth Analytics Sênior"; sem rolagem horizontal.
- 375px (en): lang en, 9 cargos em inglês, nenhuma palavra de teste em português, título mais longo termina em 355px de 375px, sem rolagem horizontal.

## Rodada 7 (27/11/2026): publicação no GitHub Pages
- Pedido do dono: link público. Ele escolheu publicar o site (GitHub Pages), ciente de que código, foto e WhatsApp ficam públicos.
- `base: /portifolio` + helper `caminho()`; workflow `.github/workflows/deploy.yml` do guia oficial do Astro (ADR 0003). Commit e91e030.
- Repositório alterado para público em Settings > Danger Zone (sem pedido de senha). Pages com fonte "GitHub Actions".

Evidências da rodada 7:
- Build local: 4 páginas, 0 links internos sem `/portifolio` em dist/*.html; navegação por clique em /portifolio/ (idioma, política, voltar) ok.
- API pública: `private: false, visibility: public`.
- Run https://github.com/wmencaroni-max/portifolio/actions/runs/45999172836: completed success.
- https://wmencaroni-max.github.io/portifolio/: /, /en/, /privacidade/, /en/privacy/, foto.webp, foto.jpg, favicon.svg, sitemap.xml com HTTP 200; HTML com experiências e link do WhatsApp; no navegador: foto 800x800, JS ativo, banner de consentimento visível na primeira visita, 9 experiências, todas as requisições do site 200.

## Rodada 8 (27/11/2026): número do WhatsApp só nos botões
- Pedido do dono: tirar o número visível. Removido o texto abaixo do botão na seção Contato e o número no item 1 da Política de Privacidade (pt e en), que agora indica o botão de WhatsApp. O número segue nos links wa.me dos três botões e no JSON-LD (não visível).
- Evidências: astro check 0 erros; build ok; 0 ocorrências do número como texto nas 4 páginas geradas; no navegador, texto da página sem o número e 3 links wa.me (contato, rodapé, flutuante).

## Rodada 9 (27/11/2026): idiomas
- Informado pelo dono: Espanhol avançado, Inglês intermediário. Card "Idiomas" ao lado de Formação acadêmica (Trajetória), empilhado no celular; escala visual 4/5 e 3/5 com aria-label ("Espanhol: Avançado, 4 de 5"). Dados em `conteudo.*.trajetoria.idiomas`. JSON-LD `knowsLanguage`: pt-BR, es, en (pt-BR inferido: site e perfil em português).
- Ponto vazio da escala trocado de bg-muted (quase invisível no tema escuro) para contorno muted-foreground/50.
- Evidências: astro check 0 erros; 1280px lado a lado com mesma altura (214px); 375px empilhado, sem rolagem horizontal; textos e aria em pt e en.

## Não verificado
Safari/iOS real, leitor de tela real, Lighthouse, publicação, revisão de inglês por falante nativo, carregamento real do GA4 com um ID (nenhuma requisição externa foi feita nos testes), revisão jurídica da Política de Privacidade, abertura real do WhatsApp no celular.

## Próxima ação
Preencher os dados pendentes nos DOIS idiomas (docs/status/CURRENT.md) e rodar de novo `npx astro check`, `npm run build` e o roteiro de docs/TESTES.md.
