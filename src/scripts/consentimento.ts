// Gerencia o consentimento (LGPD): mostra o banner, grava a escolha e só carrega
// estatísticas (Google Analytics) quando há consentimento E um ID configurado em perfil.gaId.

type Escolha = { versao: string; estatisticas: boolean; data: string };
const CHAVE = "consentimento";

const banner = document.getElementById("consentimento") as HTMLElement | null;

if (banner) {
  const versao = banner.dataset.versao ?? "";
  const gaId = banner.dataset.ga ?? "";
  const opcoes = banner.querySelector<HTMLElement>("[data-consent-opcoes]")!;
  const caixa = banner.querySelector<HTMLInputElement>("#consent-estatisticas")!;
  const btnSalvar = banner.querySelector<HTMLButtonElement>('[data-consent="salvar"]')!;
  const btnPersonalizar = banner.querySelector<HTMLButtonElement>('[data-consent="personalizar"]')!;
  const status = banner.querySelector<HTMLElement>("[data-consent-status]")!;
  const titulo = banner.querySelector<HTMLElement>("#consentimento-titulo")!;
  let focoAnterior: HTMLElement | null = null;

  const ler = (): Escolha | null => {
    try {
      const e = JSON.parse(localStorage.getItem(CHAVE) ?? "null") as Escolha | null;
      return e && e.versao === versao ? e : null;
    } catch { return null; }
  };

  const carregarEstatisticas = () => {
    if (!gaId || document.getElementById("ga-script")) return;
    (window as any)[`ga-disable-${gaId}`] = false;
    const s = document.createElement("script");
    s.id = "ga-script";
    s.async = true;
    s.src = `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(gaId)}`;
    document.head.appendChild(s);
    const w = window as any;
    w.dataLayer = w.dataLayer || [];
    w.gtag = function () { w.dataLayer.push(arguments); };
    w.gtag("js", new Date());
    w.gtag("config", gaId, { anonymize_ip: true });
  };

  const desligarEstatisticas = () => {
    if (!gaId) return;
    (window as any)[`ga-disable-${gaId}`] = true;
    // Remove cookies do Google Analytics deste domínio
    document.cookie.split(";").map((c) => c.trim().split("=")[0]).filter((n) => n.startsWith("_ga"))
      .forEach((n) => { document.cookie = `${n}=; Max-Age=0; path=/`; document.cookie = `${n}=; Max-Age=0; path=/; domain=.${location.hostname}`; });
  };

  const aplicar = (e: Escolha) => {
    document.documentElement.dataset.consentEstatisticas = String(e.estatisticas);
    if (e.estatisticas) carregarEstatisticas(); else desligarEstatisticas();
    window.dispatchEvent(new CustomEvent("consentimento:atualizado", { detail: e }));
  };

  const mostrarOpcoes = (sim: boolean) => {
    opcoes.hidden = !sim;
    btnSalvar.hidden = !sim;
    btnPersonalizar.hidden = sim;
    btnPersonalizar.setAttribute("aria-expanded", String(sim));
  };

  const abrir = (comOpcoes: boolean, focar: boolean) => {
    caixa.checked = ler()?.estatisticas ?? false;
    mostrarOpcoes(comOpcoes);
    banner.hidden = false;
    document.documentElement.classList.add("consent-aberto");
    if (focar) titulo.focus();
  };

  const fechar = () => {
    banner.hidden = true;
    document.documentElement.classList.remove("consent-aberto");
    focoAnterior?.focus();
    focoAnterior = null;
  };

  const salvar = (estatisticas: boolean) => {
    const e: Escolha = { versao, estatisticas, data: new Date().toISOString() };
    localStorage.setItem(CHAVE, JSON.stringify(e));
    aplicar(e);
    status.textContent = status.dataset.texto ?? "";
    fechar();
  };

  banner.addEventListener("click", (ev) => {
    const acao = (ev.target as HTMLElement).closest<HTMLElement>("[data-consent]")?.dataset.consent;
    if (acao === "aceitar") salvar(true);
    else if (acao === "recusar") salvar(false);
    else if (acao === "salvar") salvar(caixa.checked);
    else if (acao === "personalizar") { mostrarOpcoes(true); caixa.focus(); }
  });

  // Link "Preferências de privacidade" (rodapé): reabre com as opções visíveis
  document.querySelectorAll<HTMLElement>("[data-abrir-consentimento]").forEach((el) =>
    el.addEventListener("click", (ev) => {
      ev.preventDefault();
      focoAnterior = el;
      abrir(true, true);
    }),
  );

  const salva = ler();
  if (salva) aplicar(salva);
  else abrir(false, false);
}
