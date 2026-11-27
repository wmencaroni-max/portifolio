# Requisitos

## Objetivo
Portfólio pessoal de página única que apresenta Wendel Moretti Mencaroni e leva o visitante a entrar em contato. Inspirado na estrutura de phmr.com.br (topo com foto, faixa, resultados, trajetória, método, soluções, contato), com identidade visual própria.

## Fonte do conteúdo
- Confirmado por busca pública em 26/11/2026: nome, cargo (Tech Analytics Senior), especialidades (data science, processamento de big data, analytics, growth hacking) e cidade (São Bernardo do Campo, SP).
- A confirmar: experiências, formação, certificações, ferramentas, foto, e-mail, WhatsApp, domínio. O perfil do LinkedIn exige login e não pôde ser lido.

## Seções
Topo, faixa de áreas, Sobre, Competências, Trajetória, Método, Como posso ajudar, Contato, Rodapé.

## Critérios de aceite
- [x] Build estático sem erros e `astro check` com 0 erros.
- [x] Sem rolagem horizontal em 375px e 1280px.
- [x] Todo o conteúdo visível com JavaScript desativado.
- [x] Menu móvel: abre pelo teclado, prende o foco, fecha com Esc e devolve o foco ao botão; links levam à seção.
- [x] Tema claro e escuro, com preferência salva; respeita `prefers-color-scheme` na primeira visita.
- [x] Contraste de texto principal e secundário de pelo menos 4,5:1 nos dois temas.
- [x] Movimento reduzido respeitado (`prefers-reduced-motion`).
- [x] SEO: title, description, canonical, Open Graph, JSON-LD Person, robots.txt e sitemap.xml.
- [x] Sem scripts de terceiros por padrão; estatísticas só com consentimento (ADR 0002).
- [x] Banner de consentimento LGPD: Aceitar e Recusar com o mesmo destaque, Personalizar, escolha revogável pelo rodapé, acessível por teclado.
- [x] Política de Privacidade em pt e en.
- [x] WhatsApp (11) 98775-9692: botão flutuante, botão no contato e rodapé, com mensagem pronta por idioma.
- [ ] Revisão jurídica da Política de Privacidade (pendente do dono).
- [x] Foto do perfil no topo (melhorada e otimizada em WebP com fallback JPG).
- [x] Versão em inglês em /en/ com seletor de idioma, hreflang e og:locale.
- [ ] Dados reais do perfil preenchidos nos dois idiomas (pendente do dono).
- [ ] Domínio final configurado em `perfil.site`, robots.txt e sitemap.xml.
