// Interações leves sem React: tema, header ao rolar, entrada ao rolar e menu ativo.
const root = document.documentElement;

document.querySelectorAll<HTMLButtonElement>("[data-theme-toggle]").forEach((btn) => {
  btn.addEventListener("click", () => {
    const dark = !root.classList.contains("dark");
    root.classList.toggle("dark", dark);
    localStorage.setItem("theme", dark ? "dark" : "light");
  });
});

const header = document.querySelector<HTMLElement>("[data-header]");
const onScroll = () => header?.toggleAttribute("data-scrolled", window.scrollY > 8);
onScroll();
window.addEventListener("scroll", onScroll, { passive: true });

const reveals = document.querySelectorAll<HTMLElement>(".reveal");
if ("IntersectionObserver" in window) {
  const io = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        const el = entry.target as HTMLElement;
        const irmaos = [...(el.parentElement?.children ?? [])].filter((c) => c.classList.contains("reveal"));
        el.style.setProperty("--d", `${Math.min(irmaos.indexOf(el), 6) * 70}ms`);
        el.classList.add("in");
        io.unobserve(el);
      }
    },
    { rootMargin: "0px 0px -8% 0px", threshold: 0.08 },
  );
  reveals.forEach((el) => io.observe(el));
} else {
  reveals.forEach((el) => el.classList.add("in"));
}

// Menu ativo: a seção que cruza o meio da tela. No topo, nenhuma; no fim da página, a última.
const links = [...document.querySelectorAll<HTMLAnchorElement>("[data-nav] a[href^='#']")];
const secoes = links
  .map((a) => document.querySelector<HTMLElement>(a.getAttribute("href")!))
  .filter((s): s is HTMLElement => !!s);

const marcarAtivo = () => {
  let id: string | null = null;
  const fim = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4;
  if (fim) id = secoes.at(-1)?.id ?? null;
  else if (window.scrollY >= 200) {
    const meio = window.innerHeight / 2;
    id = secoes.find((s) => { const r = s.getBoundingClientRect(); return r.top <= meio && r.bottom > meio; })?.id ?? null;
  }
  links.forEach((a) => {
    const ativo = id !== null && a.getAttribute("href") === `#${id}`;
    a.toggleAttribute("data-active", ativo);
    if (ativo) a.setAttribute("aria-current", "true");
    else a.removeAttribute("aria-current");
  });
};
let agendado = false;
window.addEventListener("scroll", () => {
  if (agendado) return;
  agendado = true;
  requestAnimationFrame(() => { agendado = false; marcarAtivo(); });
}, { passive: true });
marcarAtivo();
