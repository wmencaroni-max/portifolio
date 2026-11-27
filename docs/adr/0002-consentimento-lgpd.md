# 0002 Consentimento LGPD próprio, sem biblioteca, com medição só após aceite

Status e data: aceita, 26/11/2026.

Contexto: o dono pediu um banner de consentimento conforme a LGPD. O site não tinha nenhuma medição; o dono pode querer Google Analytics depois.

Decisão: banner próprio em Astro + TS (`ConsentBanner.astro`, `src/scripts/consentimento.ts`), sem dependência nova. Duas categorias: Necessários (tema e escolha de privacidade no localStorage, sempre ativos) e Estatísticas (opcional, desligado por padrão). Aceitar e Recusar com o mesmo destaque. Escolha versionada (`VERSAO_CONSENTIMENTO`) e revogável pelo rodapé. GA4 só é injetado com consentimento e `perfil.gaId` preenchido. Política de Privacidade em páginas próprias, pt e en.

Alternativas: biblioteca de CMP (mais peso e configuração para um site sem rastreamento); banner só informativo (não atende consentimento para estatísticas); não ter banner enquanto não há medição (o dono pediu explicitamente).

Justificativa: zero JS de terceiros por padrão, controle total do texto nos dois idiomas, acessível por teclado.

Consequências: enquanto `gaId` estiver vazio, a categoria Estatísticas não tem efeito prático (o texto diz "só é carregada se você permitir"). Se outra ferramenta for adicionada, ela deve ouvir o evento `consentimento:atualizado` ou ler `html[data-consent-estatisticas]`, e a versão do consentimento deve mudar. O texto da política é modelo e depende de revisão jurídica.

Referências: Lei 13.709/2018 (art. 7º, I e art. 18); Guia orientativo de cookies da ANPD.
