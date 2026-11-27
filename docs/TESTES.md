# Testes

Não há suíte automatizada (página estática sem lógica de negócio). A validação é feita assim:

## Automáticas
```powershell
npx astro check
npm run build
```
Esperado: 0 erros, 0 avisos; `dist/index.html` gerado.

## No navegador (http://localhost:4321)
1. 1280px e 375px: sem rolagem horizontal (`document.documentElement.scrollWidth <= innerWidth`).
2. Rolar até o fim e esperar o estado final: todos os `.reveal` com opacidade 1 e largura maior que zero.
3. Sem JS: remover a classe `js` do `<html>` e conferir que todos os `.reveal` ficam com opacidade 1.
4. Menu móvel (375px): focar "Abrir menu", Enter abre, Tab não sai do painel, Esc fecha e o foco volta ao botão; clicar num link fecha e rola até a seção.
5. Tema: o botão alterna a classe `dark` e grava `localStorage.theme`.
6. Idiomas: em /en/ conferir `lang="en"`, menu e textos em inglês, botão "PT" levando a "/"; em / o botão "EN" leva a "/en/". Rótulo de fechar do menu móvel no idioma certo.
7. Foto: `/foto.webp` e `/foto.jpg` com 200; foto quadrada inteira no topo em 375px e 1280px; `document.elementFromPoint` no centro da foto retorna a IMG; gráficos `.wm-chart` com z-index 0 e sem sobrepor a coluna de texto.
8. Consentimento: com `localStorage.consentimento` apagado, o banner aparece; Recusar grava `estatisticas:false` e não volta após recarregar; o link "Preferências de privacidade" do rodapé reabre com foco no título; interruptor por Espaço; Salvar devolve o foco ao link; sem `gaId` não existe `#ga-script`. Em 375px o botão de WhatsApp some com o banner aberto.
9. WhatsApp: `href` = `https://wa.me/5511987759692?text=...` com a mensagem do idioma da página.
10. Privacidade: /privacidade/ e /en/privacy/ com 200, botão de idioma alternando entre elas, menu apontando para a página inicial.
11. Abrir as capturas e conferir visualmente.

Se o dev server responder 500 com "Cannot find module" logo após criar um componente novo, reinicie o servidor (cache do Vite).

## Limites
- Painel do navegador oculto deixa as transições lentas; para capturar o estado final, desative transições temporariamente.
- Não houve teste em Safari/iOS real nem com leitor de tela real.
- Lighthouse não foi executado.

## Último registro (26/11/2026)
Todos os itens 1 a 6 passaram. Detalhes em docs/status/HANDOFF.md.
