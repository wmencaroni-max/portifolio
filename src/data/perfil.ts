// Conteúdo do site em um só lugar, em português (pt) e inglês (en).
// Origem: busca pública em 26/11/2026 (o LinkedIn exige login para ver o perfil completo).
// Itens com "A CONFIRMAR" ou texto entre [colchetes] precisam ser preenchidos pelo dono,
// nos DOIS idiomas.

export type Idioma = "pt" | "en";

// Dados que não mudam com o idioma
export const perfil = {
  nome: "Wendel Moretti Mencaroni",
  nomeCurto: "Wendel",
  cargo: "Tech Analytics Senior",
  cidade: "São Bernardo do Campo, SP",
  especialidades: ["Data Science", "Big Data", "Analytics", "Growth Hacking"],
  linkedin: "https://www.linkedin.com/in/wendel-moretti-mencaroni-38410910a/",
  // A CONFIRMAR: e-mail
  email: "",
  // WhatsApp informado pelo dono em 26/11/2026: (11) 98775-9692
  whatsapp: { exibicao: "(11) 98775-9692", e164: "5511987759692" },
  // A CONFIRMAR: domínio final
  site: "https://www.seudominio.com.br",
  // Gerada por scripts/otimizar-foto.mjs a partir de referencias/foto-linkedin-original.png
  foto: { webp: "/foto.webp", jpg: "/foto.jpg" },
  // Google Analytics 4 (ex.: "G-XXXXXXX"). Vazio = nenhuma medição é carregada.
  // Mesmo preenchido, só carrega se o visitante aceitar "Estatísticas" no banner.
  gaId: "",
};

export const rotas: Record<Idioma, string> = { pt: "/", en: "/en/" };
export const rotasPrivacidade: Record<Idioma, string> = { pt: "/privacidade/", en: "/en/privacy/" };

/** Link do WhatsApp com mensagem pronta no idioma da página */
export const linkWhatsApp = (mensagem: string) =>
  `https://wa.me/${perfil.whatsapp.e164}?text=${encodeURIComponent(mensagem)}`;

// Versão do texto de consentimento: mude quando as finalidades mudarem para pedir de novo
export const VERSAO_CONSENTIMENTO = "2026-11-26";

const pt = {
  htmlLang: "pt-BR",
  ogLocale: "pt_BR",
  titulo: `${perfil.nome} | ${perfil.cargo} · Data Science, Big Data e Growth`,
  descricao: `${perfil.nome}, ${perfil.cargo} em ${perfil.cidade}. Data science, processamento de big data, analytics e growth hacking para transformar dados em crescimento.`,
  ui: {
    pular: "Pular para o conteúdo",
    inicio: "início",
    alternarTema: "Alternar tema claro ou escuro",
    outroIdioma: { rotulo: "EN", aria: "Switch to English", hreflang: "en" },
    abrirMenu: "Abrir menu",
    fecharMenu: "Fechar",
    menuTitulo: "Menu",
    menuDescricao: "Navegue pelas seções do site.",
    menuPrincipal: "Principal",
    menuMovel: "Menu móvel",
    rodape: "Rodapé",
    voltarTopo: "Voltar ao topo ↑",
    fotoAlt: `Foto de ${perfil.nome}`,
    infoRapida: "Informações rápidas",
    areas: "Áreas de atuação",
    ferramentas: "Ferramentas e tecnologias",
    subMarca: "Tech Analytics",
  },
  navegacao: [
    { href: "#sobre", rotulo: "Sobre" },
    { href: "#competencias", rotulo: "Competências" },
    { href: "#trajetoria", rotulo: "Trajetória" },
    { href: "#metodo", rotulo: "Método" },
    { href: "#servicos", rotulo: "Como ajudo" },
    { href: "#contato", rotulo: "Contato" },
  ],
  hero: {
    tituloA: "Transformo dados em ",
    tituloB: "decisões que fazem o negócio crescer.",
    lead: "Uno data science, processamento de big data, analytics e growth hacking para descobrir onde estão as oportunidades e medir o que realmente gera resultado.",
    ctaPrincipal: "Vamos conversar",
    disponivel: "Aberto a projetos e conversas",
  },
  faixa: ["Data Science", "Big Data", "Analytics", "Growth Hacking", "Experimentação", "Dashboards", "Modelagem de dados", "Métricas de produto"],
  sobre: {
    kicker: "Sobre",
    titulo: "Dados só têm valor quando viram ação.",
    p1: `Sou <strong>${perfil.cargo}</strong>, com especialidade em <strong>data science</strong>, <strong>processamento de big data</strong>, <strong>analytics</strong> e <strong>growth hacking</strong>. Meu trabalho é conectar engenharia de dados e estratégia de negócio: estruturar a coleta, processar grandes volumes de informação e transformar isso em análises claras que orientam decisões.`,
    p2: "Acredito em crescimento guiado por evidência: hipóteses bem definidas, métricas confiáveis e experimentos que mostram, com números, o que funciona.",
    stats: [
      { valor: "4", texto: "pilares: ciência de dados, big data, analytics e growth" },
      { valor: "360°", texto: "da coleta do dado até a decisão de negócio" },
      { valor: "SP", texto: "São Bernardo do Campo, atuação remota ou híbrida" },
    ],
  },
  competencias: {
    kicker: "Competências",
    titulo: "Do dado bruto ao crescimento mensurável",
    lead: "Quatro frentes que se complementam para gerar resultado de ponta a ponta.",
    itens: [
      { icone: "chart", titulo: "Data Science", texto: "Modelos estatísticos e preditivos, segmentação e análise exploratória para responder perguntas de negócio com rigor." },
      { icone: "database", titulo: "Big Data", texto: "Processamento e modelagem de grandes volumes de dados, com pipelines confiáveis e bases prontas para análise." },
      { icone: "bars", titulo: "Analytics", texto: "Plano de medição, KPIs bem definidos e dashboards que mostram o que importa, sem ruído." },
      { icone: "trend", titulo: "Growth Hacking", texto: "Experimentos rápidos em funil, aquisição e retenção para encontrar alavancas de crescimento escaláveis." },
    ],
    // A CONFIRMAR: ferramentas que você realmente usa
    ferramentas: ["SQL", "Python", "Big Data", "ETL / ELT", "Modelagem de dados", "Dashboards e BI", "Testes A/B", "Web e Product Analytics"],
  },
  trajetoria: {
    kicker: "Trajetória",
    titulo: "Experiência profissional",
    formacaoTitulo: "Formação e certificações",
    // A CONFIRMAR: experiências do LinkedIn, da mais recente para a mais antiga
    experiencias: [
      { periodo: "20XX a atual", cargo: "Tech Analytics Senior", empresa: "[Empresa]", destaque: "[Resultado de destaque com número]", descricao: "[Escopo, responsabilidades e impacto em data science, big data, analytics e growth.]" },
      { periodo: "20XX a 20XX", cargo: "[Cargo]", empresa: "[Empresa]", destaque: "[Resultado de destaque com número]", descricao: "[Descrição curta das entregas e do impacto.]" },
      { periodo: "20XX a 20XX", cargo: "[Cargo]", empresa: "[Empresa]", destaque: "[Resultado de destaque com número]", descricao: "[Descrição curta das entregas e do impacto.]" },
    ],
    // A CONFIRMAR: formação e certificações
    formacao: [
      { titulo: "[Curso]", detalhe: "[Instituição], [ano]" },
      { titulo: "[Certificação]", detalhe: "[Emissor], [ano]" },
    ],
  },
  metodo: {
    kicker: "Método",
    tituloA: "Quanto do seu crescimento é ",
    sorte: "sorte",
    tituloB: " e quanto é ",
    metodo: "método",
    lead: "Um ciclo contínuo para sair do “achismo” e chegar a decisões com evidência.",
    etapas: [
      { n: "01", tag: "Base", titulo: "Coletar e medir", texto: "Plano de medição, eventos bem definidos e dados confiáveis desde a origem." },
      { n: "02", tag: "Estrutura", titulo: "Processar e modelar", texto: "Pipelines e modelos de dados que escalam com o volume e com o negócio." },
      { n: "03", tag: "Diagnóstico", titulo: "Analisar e priorizar", texto: "Funis, cohorts e dashboards para encontrar gargalos e as maiores oportunidades." },
      { n: "04", tag: "Crescimento", titulo: "Experimentar e escalar", texto: "Hipóteses, testes A/B e iteração rápida para escalar o que comprovadamente funciona." },
    ],
  },
  servicos: {
    kicker: "Como posso ajudar",
    titulo: "Onde eu gero mais valor",
    selo: "Mais procurado",
    itens: [
      { titulo: "Estratégia e cultura de dados", itens: ["Plano de medição e KPIs", "Governança e qualidade de dados", "Dashboards executivos"], destaque: false },
      { titulo: "Growth orientado a dados", itens: ["Análise de funil e retenção", "Roadmap de experimentos", "Testes A/B e leitura de resultados"], destaque: true },
      { titulo: "Data science aplicada", itens: ["Segmentação e modelos preditivos", "Processamento de big data", "Insights acionáveis para o negócio"], destaque: false },
    ],
  },
  contato: {
    kicker: "Contato",
    titulo: "Vamos conversar?",
    texto: "Seja para um projeto, uma oportunidade ou só trocar ideias sobre dados e crescimento, fico feliz em conversar.",
    linkedin: "Falar no LinkedIn",
    email: "Enviar e-mail",
  },
  whatsapp: {
    rotulo: "Falar no WhatsApp",
    flutuante: "Conversar no WhatsApp",
    mensagem: "Olá, Wendel! Vi seu site e gostaria de conversar.",
    novaAba: "(abre em nova aba)",
  },
  consentimento: {
    titulo: "Privacidade e uso de dados",
    texto: "Usamos armazenamento local essencial para o site funcionar (por exemplo, lembrar o tema escolhido). Com a sua permissão, também podemos usar ferramentas de estatística para entender, de forma agregada, como o site é visitado. Você pode mudar sua escolha a qualquer momento.",
    saibaMais: "Política de Privacidade",
    aceitar: "Aceitar todos",
    recusar: "Recusar opcionais",
    personalizar: "Personalizar",
    salvar: "Salvar preferências",
    necessarios: "Necessários",
    necessariosTexto: "Guardam sua escolha de tema e de privacidade neste navegador. Não são enviados a terceiros. Sempre ativos.",
    sempreAtivo: "Sempre ativo",
    estatisticas: "Estatísticas",
    estatisticasTexto: "Medição agregada de visitas (por exemplo, Google Analytics). Só é carregada se você permitir.",
    preferencias: "Preferências de privacidade",
    salvo: "Preferências salvas.",
  },
  privacidade: {
    titulo: "Política de Privacidade",
    descricao: `Como ${perfil.nome} trata dados pessoais neste site, conforme a Lei Geral de Proteção de Dados (Lei 13.709/2018).`,
    atualizado: "Atualizada em 26/11/2026",
    voltar: "Voltar ao site",
    secoes: [
      { titulo: "1. Quem é o controlador", texto: `O controlador dos dados tratados neste site é ${perfil.nome}, ${perfil.cidade}. Contato para assuntos de privacidade: WhatsApp ${perfil.whatsapp.exibicao}.` },
      { titulo: "2. Quais dados são tratados", texto: "Este site não tem formulários e não pede dados pessoais. No seu navegador ficam guardadas apenas a escolha de tema (claro ou escuro) e a sua escolha de privacidade. Se você permitir estatísticas e elas estiverem ativas, podem ser coletados dados técnicos de navegação de forma agregada, como páginas visitadas, tipo de dispositivo e cidade aproximada." },
      { titulo: "3. Para que os dados são usados", texto: "Armazenamento necessário: lembrar suas preferências (base legal: legítimo interesse e execução do serviço solicitado). Estatísticas: entender o uso do site para melhorá-lo (base legal: consentimento, art. 7º, I, da LGPD). Não vendemos dados nem os usamos para publicidade." },
      { titulo: "4. Compartilhamento", texto: "Se as estatísticas forem ativadas com o seu consentimento, os dados de navegação são processados pelo Google (Google Analytics), que pode tratá-los fora do Brasil conforme as próprias políticas. Ao clicar no WhatsApp ou no LinkedIn você sai deste site, e o tratamento passa a seguir as políticas dessas plataformas." },
      { titulo: "5. Por quanto tempo", texto: "As preferências ficam no seu navegador até você limpá-las ou mudar a escolha. Dados de estatística, quando ativos, seguem o prazo de retenção configurado na ferramenta (padrão de 14 meses no Google Analytics)." },
      { titulo: "6. Seus direitos", texto: "Você pode, a qualquer momento: confirmar se tratamos seus dados, pedir acesso, correção, anonimização, portabilidade ou eliminação, saber com quem foram compartilhados e revogar o consentimento (art. 18 da LGPD). Para revogar as estatísticas, use o link “Preferências de privacidade” no rodapé. Para os demais pedidos, use o contato do item 1. Você também pode reclamar à ANPD (gov.br/anpd)." },
      { titulo: "7. Mudanças nesta política", texto: "Se as finalidades mudarem, esta página será atualizada e o banner pedirá sua escolha novamente." },
    ],
    aviso: "Este texto é um modelo e deve ser revisado por um profissional jurídico antes da publicação.",
  },
};

export type Conteudo = typeof pt;

const en: Conteudo = {
  htmlLang: "en",
  ogLocale: "en_US",
  titulo: `${perfil.nome} | ${perfil.cargo} · Data Science, Big Data and Growth`,
  descricao: `${perfil.nome}, ${perfil.cargo} based in ${perfil.cidade}, Brazil. Data science, big data processing, analytics and growth hacking to turn data into growth.`,
  ui: {
    pular: "Skip to content",
    inicio: "home",
    alternarTema: "Toggle light or dark theme",
    outroIdioma: { rotulo: "PT", aria: "Mudar para português", hreflang: "pt-BR" },
    abrirMenu: "Open menu",
    fecharMenu: "Close",
    menuTitulo: "Menu",
    menuDescricao: "Browse the sections of the site.",
    menuPrincipal: "Main",
    menuMovel: "Mobile menu",
    rodape: "Footer",
    voltarTopo: "Back to top ↑",
    fotoAlt: `Photo of ${perfil.nome}`,
    infoRapida: "Quick facts",
    areas: "Areas of expertise",
    ferramentas: "Tools and technologies",
    subMarca: "Tech Analytics",
  },
  navegacao: [
    { href: "#sobre", rotulo: "About" },
    { href: "#competencias", rotulo: "Skills" },
    { href: "#trajetoria", rotulo: "Experience" },
    { href: "#metodo", rotulo: "Method" },
    { href: "#servicos", rotulo: "How I help" },
    { href: "#contato", rotulo: "Contact" },
  ],
  hero: {
    tituloA: "I turn data into ",
    tituloB: "decisions that make businesses grow.",
    lead: "I combine data science, big data processing, analytics and growth hacking to find where the opportunities are and measure what truly drives results.",
    ctaPrincipal: "Let's talk",
    disponivel: "Open to projects and conversations",
  },
  faixa: ["Data Science", "Big Data", "Analytics", "Growth Hacking", "Experimentation", "Dashboards", "Data modeling", "Product metrics"],
  sobre: {
    kicker: "About",
    titulo: "Data only matters when it turns into action.",
    p1: `I'm a <strong>${perfil.cargo}</strong> specialized in <strong>data science</strong>, <strong>big data processing</strong>, <strong>analytics</strong> and <strong>growth hacking</strong>. My work connects data engineering with business strategy: structuring data collection, processing large volumes of information and turning it into clear analyses that guide decisions.`,
    p2: "I believe in evidence-driven growth: well-defined hypotheses, reliable metrics and experiments that show, with numbers, what works.",
    stats: [
      { valor: "4", texto: "pillars: data science, big data, analytics and growth" },
      { valor: "360°", texto: "from data collection to business decision" },
      { valor: "BR", texto: "São Bernardo do Campo, SP, available remote or hybrid" },
    ],
  },
  competencias: {
    kicker: "Skills",
    titulo: "From raw data to measurable growth",
    lead: "Four complementary areas that deliver results end to end.",
    itens: [
      { icone: "chart", titulo: "Data Science", texto: "Statistical and predictive models, segmentation and exploratory analysis to answer business questions rigorously." },
      { icone: "database", titulo: "Big Data", texto: "Processing and modeling large volumes of data, with reliable pipelines and analysis-ready datasets." },
      { icone: "bars", titulo: "Analytics", texto: "Measurement plans, well-defined KPIs and dashboards that show what matters, without noise." },
      { icone: "trend", titulo: "Growth Hacking", texto: "Fast experiments across funnel, acquisition and retention to find scalable growth levers." },
    ],
    ferramentas: ["SQL", "Python", "Big Data", "ETL / ELT", "Data modeling", "Dashboards and BI", "A/B testing", "Web and Product Analytics"],
  },
  trajetoria: {
    kicker: "Experience",
    titulo: "Professional experience",
    formacaoTitulo: "Education and certifications",
    experiencias: [
      { periodo: "20XX to present", cargo: "Tech Analytics Senior", empresa: "[Company]", destaque: "[Key result with a number]", descricao: "[Scope, responsibilities and impact in data science, big data, analytics and growth.]" },
      { periodo: "20XX to 20XX", cargo: "[Role]", empresa: "[Company]", destaque: "[Key result with a number]", descricao: "[Short description of deliverables and impact.]" },
      { periodo: "20XX to 20XX", cargo: "[Role]", empresa: "[Company]", destaque: "[Key result with a number]", descricao: "[Short description of deliverables and impact.]" },
    ],
    formacao: [
      { titulo: "[Degree]", detalhe: "[Institution], [year]" },
      { titulo: "[Certification]", detalhe: "[Issuer], [year]" },
    ],
  },
  metodo: {
    kicker: "Method",
    tituloA: "How much of your growth is ",
    sorte: "luck",
    tituloB: " and how much is ",
    metodo: "method",
    lead: "A continuous cycle to move from guesswork to evidence-based decisions.",
    etapas: [
      { n: "01", tag: "Foundation", titulo: "Collect and measure", texto: "Measurement plan, well-defined events and reliable data from the source." },
      { n: "02", tag: "Structure", titulo: "Process and model", texto: "Pipelines and data models that scale with volume and with the business." },
      { n: "03", tag: "Diagnosis", titulo: "Analyze and prioritize", texto: "Funnels, cohorts and dashboards to find bottlenecks and the biggest opportunities." },
      { n: "04", tag: "Growth", titulo: "Experiment and scale", texto: "Hypotheses, A/B tests and fast iteration to scale what is proven to work." },
    ],
  },
  servicos: {
    kicker: "How I can help",
    titulo: "Where I add the most value",
    selo: "Most requested",
    itens: [
      { titulo: "Data strategy and culture", itens: ["Measurement plan and KPIs", "Data governance and quality", "Executive dashboards"], destaque: false },
      { titulo: "Data-driven growth", itens: ["Funnel and retention analysis", "Experiment roadmap", "A/B testing and result analysis"], destaque: true },
      { titulo: "Applied data science", itens: ["Segmentation and predictive models", "Big data processing", "Actionable business insights"], destaque: false },
    ],
  },
  contato: {
    kicker: "Contact",
    titulo: "Let's talk?",
    texto: "Whether it's a project, an opportunity or just exchanging ideas about data and growth, I'd be happy to talk.",
    linkedin: "Message me on LinkedIn",
    email: "Send an email",
  },
  whatsapp: {
    rotulo: "Message me on WhatsApp",
    flutuante: "Chat on WhatsApp",
    mensagem: "Hi Wendel! I saw your website and would like to talk.",
    novaAba: "(opens in a new tab)",
  },
  consentimento: {
    titulo: "Privacy and data use",
    texto: "We use essential local storage for the site to work (for example, to remember your theme). With your permission, we may also use analytics tools to understand, in aggregate, how the site is visited. You can change your choice at any time.",
    saibaMais: "Privacy Policy",
    aceitar: "Accept all",
    recusar: "Reject optional",
    personalizar: "Customize",
    salvar: "Save preferences",
    necessarios: "Necessary",
    necessariosTexto: "Store your theme and privacy choices in this browser. Never sent to third parties. Always on.",
    sempreAtivo: "Always on",
    estatisticas: "Analytics",
    estatisticasTexto: "Aggregated visit measurement (for example, Google Analytics). Only loaded if you allow it.",
    preferencias: "Privacy preferences",
    salvo: "Preferences saved.",
  },
  privacidade: {
    titulo: "Privacy Policy",
    descricao: `How ${perfil.nome} handles personal data on this website, under Brazil's General Data Protection Law (LGPD, Law 13,709/2018).`,
    atualizado: "Last updated on November 26, 2026",
    voltar: "Back to the site",
    secoes: [
      { titulo: "1. Data controller", texto: `The controller of the data processed on this website is ${perfil.nome}, ${perfil.cidade}, Brazil. Privacy contact: WhatsApp +55 ${perfil.whatsapp.exibicao}.` },
      { titulo: "2. What data is processed", texto: "This website has no forms and does not ask for personal data. Your browser only stores your theme choice (light or dark) and your privacy choice. If you allow analytics and it is active, technical browsing data may be collected in aggregate, such as pages visited, device type and approximate city." },
      { titulo: "3. Why the data is used", texto: "Necessary storage: remembering your preferences (legal basis: legitimate interest and providing the requested service). Analytics: understanding how the site is used in order to improve it (legal basis: consent, LGPD art. 7, I). We do not sell data or use it for advertising." },
      { titulo: "4. Sharing", texto: "If analytics is enabled with your consent, browsing data is processed by Google (Google Analytics), which may process it outside Brazil under its own policies. When you click WhatsApp or LinkedIn you leave this website, and those platforms' policies apply." },
      { titulo: "5. Retention", texto: "Preferences stay in your browser until you clear them or change your choice. Analytics data, when active, follows the retention period set in the tool (14 months by default in Google Analytics)." },
      { titulo: "6. Your rights", texto: "At any time you may: confirm whether we process your data, request access, correction, anonymization, portability or deletion, learn with whom it was shared and withdraw consent (LGPD art. 18). To withdraw analytics consent, use the “Privacy preferences” link in the footer. For other requests, use the contact in item 1. You may also file a complaint with Brazil's data protection authority, ANPD (gov.br/anpd)." },
      { titulo: "7. Changes to this policy", texto: "If the purposes change, this page will be updated and the banner will ask for your choice again." },
    ],
    aviso: "This text is a template and should be reviewed by a legal professional before publication.",
  },
};

export const conteudo: Record<Idioma, Conteudo> = { pt, en };
