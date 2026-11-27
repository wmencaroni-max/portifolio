// Conteúdo do site em um só lugar, em português (pt) e inglês (en).
// Origem: busca pública em 26/11/2026 (o LinkedIn exige login para ver o perfil completo).
// Itens com "A CONFIRMAR" ou texto entre [colchetes] precisam ser preenchidos pelo dono,
// nos DOIS idiomas.

export type Idioma = "pt" | "en";

// Prefixo do site publicado (astro.config: base "/portifolio"). Todo caminho interno passa por aqui.
const BASE = import.meta.env.BASE_URL.endsWith("/") ? import.meta.env.BASE_URL.slice(0, -1) : import.meta.env.BASE_URL;
export const caminho = (p: string) => `${BASE}${p}`;

// Dados que não mudam com o idioma
export const perfil = {
  nome: "Wendel Moretti Mencaroni",
  nomeCurto: "Wendel",
  cargo: "Growth Analytics Sênior",
  cidade: "São Bernardo do Campo, SP",
  especialidades: ["Data Science", "Big Data", "Analytics", "Growth Hacking"],
  linkedin: "https://www.linkedin.com/in/wendel-moretti-mencaroni-38410910a/",
  // A CONFIRMAR: e-mail
  email: "",
  // WhatsApp informado pelo dono em 26/11/2026: (11) 98775-9692
  whatsapp: { exibicao: "(11) 98775-9692", e164: "5511987759692" },
  // Origem do site publicado (GitHub Pages). Os caminhos já incluem a base "/portifolio".
  site: "https://wmencaroni-max.github.io",
  // Gerada por scripts/otimizar-foto.mjs a partir de referencias/foto-linkedin-original.png
  foto: { webp: caminho("/foto.webp"), jpg: caminho("/foto.jpg") },
  // Google Analytics 4 (ex.: "G-XXXXXXX"). Vazio = nenhuma medição é carregada.
  // Mesmo preenchido, só carrega se o visitante aceitar "Estatísticas" no banner.
  gaId: "",
};

export const rotas: Record<Idioma, string> = { pt: caminho("/"), en: caminho("/en/") };
export const rotasPrivacidade: Record<Idioma, string> = { pt: caminho("/privacidade/"), en: caminho("/en/privacy/") };

/** Link do WhatsApp com mensagem pronta no idioma da página */
export const linkWhatsApp = (mensagem: string) =>
  `https://wa.me/${perfil.whatsapp.e164}?text=${encodeURIComponent(mensagem)}`;

// Ferramentas listadas na seção "Sobre" do LinkedIn (iguais nos dois idiomas)
const ferramentas = [
  "Google Analytics 4", "Google Tag Manager", "Google Ads", "Looker Studio", "Firebase",
  "Google Marketing Platform", "Adobe Analytics", "Power BI", "AppsFlyer", "Search Console",
  "Python", "R", "JavaScript", "APIs", "Digibee",
];

// Versão do texto de consentimento: mude quando as finalidades mudarem para pedir de novo
export const VERSAO_CONSENTIMENTO = "2026-11-26";

const pt = {
  htmlLang: "pt-BR",
  ogLocale: "pt_BR",
  cargo: "Growth Analytics Sênior",
  titulo: `${perfil.nome} | Growth Analytics Sênior · Data Science, Big Data e Growth`,
  descricao: `${perfil.nome}, Growth Analytics Sênior em ${perfil.cidade}. Mais de 10 anos com dados: digital analytics, ciência de dados, big data e growth hacking para web e app.`,
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
    subMarca: "Growth Analytics",
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
    // Fonte: seção "Sobre" do LinkedIn, lida em 27/11/2026
    p1: `Sou <strong>Growth Analytics Sênior</strong> na <strong>Hotmart</strong>, especialista em <strong>Ciência de Dados (Big Data Processing and Analytics)</strong> pelo Mackenzie e bacharel em Sistemas de Informação. Trabalho com dados há <strong>mais de 10 anos</strong>: do entendimento das necessidades do time ao mapa de tags, implementação via dataLayer, relatórios com os KPIs do negócio e melhorias na jornada do usuário em web e app, praticando growth hacking.`,
    p2: "Também atuei como analista funcional sênior em integrações de APIs com Digibee, documentação técnica e gestão das entregas do time de desenvolvimento com metodologias ágeis. Tomo decisões baseadas em dados e uso arquitetura de dados, visualização, raspagem de dados e análise textual com Python, R e IA.",
    stats: [
      { valor: "10+", texto: "anos trabalhando com dados" },
      { valor: "Pós", texto: "em Ciência de Dados e Big Data pelo Mackenzie" },
      { valor: "LATAM", texto: "projetos para América Latina e Europa (Google, via Cognizant)" },
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
    // Fonte: seção "Sobre" do LinkedIn (Digital Analytics e desenvolvimento)
    ferramentas: ferramentas,
  },
  trajetoria: {
    kicker: "Trajetória",
    titulo: "Experiência profissional",
    formacaoTitulo: "Formação acadêmica",
    // Fonte: LinkedIn > Experiência, lido em 27/11/2026 (mais recente primeiro)
    experiencias: [
      { periodo: "ago/2025 a atual", cargo: "Growth Analytics Sênior", empresa: "Hotmart", destaque: "São Paulo · Híbrido", descricao: "Growth analytics com tagueamento e análise de dados para apoiar a evolução dos produtos e da jornada dos usuários." },
      { periodo: "mai/2024 a set/2025", cargo: "Tech Analytics Senior", empresa: "Mutant", destaque: "São Paulo · Híbrido", descricao: "Interação com o negócio para entender necessidades, documentação técnica para implementação de tags no site e app de uma grande instituição financeira, homologação dos eventos, dashboards com os KPIs do negócio e mentalidade de growth baseada em dados." },
      { periodo: "jul/2022 a fev/2024", cargo: "Analista Funcional Sênior", empresa: "GFT", destaque: "São Paulo", descricao: "Comunicação com clientes para entender necessidades de integração, documentação técnica para pipelines com Digibee e distribuição de tarefas ao time de desenvolvimento, garantindo os prazos." },
      { periodo: "mar/2022 a jun/2022", cargo: "Web Analytics Pleno", empresa: "GFT", destaque: "Remoto", descricao: "Necessidades de uma construtora nacional: documentação de tagueamento, análises e extrações de dados com GA4, Google Ads, Looker Studio e Firebase, e desempenho de tráfego e campanhas para apoiar decisões do negócio." },
      { periodo: "jul/2020 a fev/2022", cargo: "Web Analytics", empresa: "GFT", destaque: "Remoto · América Latina", descricao: "Atendimento a clientes de toda a América Latina de uma grande instituição financeira: documentação de tagueamento, relatórios com GA4, Google Ads, Looker Studio e Firebase, e análise de tráfego de sites, apps e campanhas." },
      { periodo: "set/2019 a fev/2020", cargo: "Web Analytics Specialist and Consultant (Google)", empresa: "Cognizant", destaque: "América do Sul, Central e Europa", descricao: "Google Tag Manager, Google Analytics (eventos, metas, e-commerce, remarketing), Google Ads, Merchant Center, otimização de performance e AMP, com integração em Magento, Shopify, WordPress e outros CMSs." },
      { periodo: "jul/2018 a ago/2019", cargo: "Agente de Atendimento III", empresa: "Cognizant", destaque: "São Paulo", descricao: "Suporte às ferramentas de publicidade online do Google por e-mail, chat e telefone, analisando cada caso para oferecer a melhor solução." },
      { periodo: "nov/2016 a jun/2018", cargo: "Analista de Suporte Técnico", empresa: "Stefanini", destaque: "São Paulo", descricao: "Suporte e administração do Office 365 corporativo da SoftwareOne, com conferências entre América Latina e especialistas da Índia (espanhol e inglês) e relatórios diários." },
      { periodo: "dez/2010 a dez/2014", cargo: "Auxiliar Administrativo", empresa: "Lelo Eventos", destaque: "Santo André", descricao: "Testes, conferência e liberação de equipamentos profissionais de sonorização e iluminação." },
    ],
    // Fonte: LinkedIn > Formação acadêmica. Não há certificações cadastradas no LinkedIn.
    formacao: [
      { titulo: "Pós-graduação (Especialização) em Ciência de Dados: Big Data Processing and Analytics", detalhe: "Universidade Presbiteriana Mackenzie, 2022 a 2023" },
      { titulo: "Bacharelado em Sistemas de Informação", detalhe: "Centro Universitário Fundação Santo André, 2013 a 2016" },
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
  cargo: "Senior Growth Analyst",
  titulo: `${perfil.nome} | Senior Growth Analyst · Data Science, Big Data and Growth`,
  descricao: `${perfil.nome}, Senior Growth Analyst based in ${perfil.cidade}, Brazil. 10+ years working with data: digital analytics, data science, big data and growth hacking for web and apps.`,
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
    subMarca: "Growth Analytics",
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
    p1: `I'm a <strong>Senior Growth Analyst</strong> at <strong>Hotmart</strong>, with a specialization in <strong>Data Science (Big Data Processing and Analytics)</strong> from Mackenzie University and a bachelor's degree in Information Systems. I've been working with data for <strong>more than 10 years</strong>: from understanding the team's needs to tag mapping, dataLayer implementation, KPI reports and user journey improvements on web and app, practicing growth hacking.`,
    p2: "I have also worked as a senior functional analyst on API integrations with Digibee, technical documentation and managing the development team's deliveries with agile methods. I make data-driven decisions and work with data architecture, visualization, web scraping and text analysis using Python, R and AI.",
    stats: [
      { valor: "10+", texto: "years working with data" },
      { valor: "Post", texto: "graduate degree in Data Science and Big Data, Mackenzie" },
      { valor: "LATAM", texto: "projects for Latin America and Europe (Google, via Cognizant)" },
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
    ferramentas: ferramentas,
  },
  trajetoria: {
    kicker: "Experience",
    titulo: "Professional experience",
    formacaoTitulo: "Education",
    experiencias: [
      { periodo: "Aug 2025 to present", cargo: "Senior Growth Analyst", empresa: "Hotmart", destaque: "São Paulo · Hybrid", descricao: "Growth analytics with tagging and data analysis to support the evolution of products and the user journey." },
      { periodo: "May 2024 to Sep 2025", cargo: "Tech Analytics Senior", empresa: "Mutant", destaque: "São Paulo · Hybrid", descricao: "Worked with the business to understand needs, wrote technical documentation for tag implementation on the website and app of a large financial institution, validated the events, built KPI dashboards and applied a data-driven growth mindset." },
      { periodo: "Jul 2022 to Feb 2024", cargo: "Senior Functional Analyst", empresa: "GFT", destaque: "São Paulo", descricao: "Worked with clients to understand integration needs, wrote technical documentation for Digibee pipelines and assigned tasks to the development team, ensuring deadlines were met." },
      { periodo: "Mar 2022 to Jun 2022", cargo: "Web Analytics (Mid-level)", empresa: "GFT", destaque: "Remote", descricao: "For a national construction company: tagging documentation, data analysis and extraction with GA4, Google Ads, Looker Studio and Firebase, and traffic and campaign performance analysis to support business decisions." },
      { periodo: "Jul 2020 to Feb 2022", cargo: "Web Analytics", empresa: "GFT", destaque: "Remote · Latin America", descricao: "Served clients across Latin America for a large financial institution: tagging documentation, reports with GA4, Google Ads, Looker Studio and Firebase, and traffic analysis for websites, apps and campaigns." },
      { periodo: "Sep 2019 to Feb 2020", cargo: "Web Analytics Specialist and Consultant (Google)", empresa: "Cognizant", destaque: "South and Central America, Europe", descricao: "Google Tag Manager, Google Analytics (events, goals, e-commerce, remarketing), Google Ads, Merchant Center, performance optimization and AMP, integrated with Magento, Shopify, WordPress and other CMSs." },
      { periodo: "Jul 2018 to Aug 2019", cargo: "Customer Support Agent III", empresa: "Cognizant", destaque: "São Paulo", descricao: "Support for Google's online advertising tools by email, chat and phone, analyzing each case to offer the best solution." },
      { periodo: "Nov 2016 to Jun 2018", cargo: "Technical Support Analyst", empresa: "Stefanini", destaque: "São Paulo", descricao: "Support and administration of SoftwareOne's corporate Office 365, bridging calls between Latin America and specialists in India (Spanish and English) and writing daily reports." },
      { periodo: "Dec 2010 to Dec 2014", cargo: "Administrative Assistant", empresa: "Lelo Eventos", destaque: "Santo André", descricao: "Testing, checking and releasing professional sound and lighting equipment." },
    ],
    formacao: [
      { titulo: "Postgraduate Specialization in Data Science: Big Data Processing and Analytics", detalhe: "Mackenzie Presbyterian University, 2022 to 2023" },
      { titulo: "Bachelor's Degree in Information Systems", detalhe: "Fundação Santo André University Center, 2013 to 2016" },
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
