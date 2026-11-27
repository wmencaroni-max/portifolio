# Design System

Tokens em `src/styles/global.css` (`:root` = claro, `.dark` = escuro; escuro é o padrão). Classes Tailwind usam os tokens (`bg-background`, `text-muted-foreground`, `bg-data` etc.).

## Cores

| Token | Claro | Escuro | Uso |
| --- | --- | --- | --- |
| background | #f6f7fb | #0b1020 | Fundo da página |
| surface-alt | #eef0f7 | #0f1529 | Seções alternadas |
| card | #ffffff | #131a31 | Cartões |
| foreground | #0e1428 | #e8ebf7 | Texto principal |
| muted-foreground | #4f587a | #a3abc8 | Texto secundário |
| primary | #4f5bd5 | #8b95ff | Ação, kicker, foco |
| data | #08807c | #3ee6c4 | Destaques de dados, check, resultados |
| border | #dde1ee | #232c4a | Bordas |
| --grad | índigo para verde-água | índigo claro para ciano | Títulos em destaque, monograma, números |

Contraste medido (WCAG): texto principal 17,07 (claro) e 15,92 (escuro); secundário 6,52 e 7,56; botão primário 5,54 e 7,07; data 4,78 e 10,92.

## Tipografia
- Família: Geist Variable (auto-hospedada), fallback system-ui.
- H1: clamp(2.4rem, 5.6vw, 4.1rem), peso 700, tracking -0.04em.
- H2: clamp(1.9rem, 3.8vw, 2.9rem), peso 700.
- Kicker: monoespaçada, 0.8rem, caixa alta, tracking 0.14em, com traço em gradiente.
- Corpo: 1rem a 1.25rem; texto secundário em muted-foreground.

## Espaçamento e forma
- Container: até 1160px com 1.25rem de margem lateral.
- Seções: py-20 (celular) e py-28 (md+).
- Raio base 0.875rem; cartões grandes 28px; botões em pílula.

## Componentes
- `.btn-pill` + `.btn-primary` ou `.btn-ghost`: links de ação.
- `.card-site`: cartão com elevação no hover.
- `.kicker`: rótulo de seção.
- shadcn `Button` e `Sheet`: só dentro da ilha MobileNav.

## Topo: foto e marca d'água
- Layout: texto à esquerda e foto à direita, centralizados verticalmente, a partir de 768px; abaixo disso, foto embaixo do texto.
- Foto quadrada em `.photo-frame`: borda de 5px em gradiente, raio 28px (imagem 23px), sombra suave, z-10.
- Gráficos decorativos atrás da foto (`.wm-bars`, `.wm-line`, `.wm-donut`): z-0, `pointer-events: none`, `aria-hidden`, opacidade 0,4 a 0,7 (um pouco maior no escuro). Ficam acima, à esquerda e abaixo da foto, sem invadir a coluna de texto. `.hero-visual` usa `isolation: isolate`.

## Movimento
- Entrada ao rolar: opacidade e 14px de deslocamento, 0.7s, ease-out-soft, escalonamento de 70ms.
- Gráficos do topo: barras crescem (1.2s) e a linha é desenhada (2.2s) uma vez.
- Contínuos: faixa de áreas (38s, pausa no hover), ponto de status.
- `prefers-reduced-motion`: animações e transições desativadas, conteúdo visível.

## Acessibilidade
- Foco visível com outline na cor primary.
- Link "Pular para o conteúdo".
- Ícones decorativos com `aria-hidden`; botões só com ícone têm `aria-label`.
- Menu ativo marcado com `aria-current`.
