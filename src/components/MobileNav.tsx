import { useState } from "react";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";

type Item = { href: string; rotulo: string };
type Textos = { abrir: string; fechar: string; titulo: string; descricao: string; nav: string; cta: string };

// Ilha React: menu lateral no celular (foco preso, Esc fecha, foco volta ao botão).
export default function MobileNav({ itens, linkedin, textos }: { itens: Item[]; linkedin: string; textos: Textos }) {
  const [aberto, setAberto] = useState(false);

  const irPara = (href: string) => {
    setAberto(false);
    // espera o Sheet fechar e devolver o foco antes de rolar
    setTimeout(() => document.querySelector(href)?.scrollIntoView({ behavior: "smooth" }), 220);
  };

  return (
    <Sheet open={aberto} onOpenChange={setAberto}>
      <SheetTrigger asChild>
        <Button variant="outline" size="icon-lg" className="size-10 rounded-full" aria-label={textos.abrir}>
          <Menu />
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-[82%] bg-background" closeLabel={textos.fechar}>
        <SheetHeader className="pt-6">
          <SheetTitle className="text-lg">{textos.titulo}</SheetTitle>
          <SheetDescription>{textos.descricao}</SheetDescription>
        </SheetHeader>
        <nav aria-label={textos.nav} className="flex flex-col px-2">
          {itens.map((i) => (
            <a
              key={i.href}
              href={i.href}
              onClick={(e) => {
                // Âncora na mesma página: fecha o menu e rola. Link para outra página: navegação normal.
                if (!i.href.startsWith("#")) return;
                e.preventDefault();
                irPara(i.href);
              }}
              className="rounded-lg px-3 py-3 text-base font-medium text-foreground hover:bg-muted"
            >
              {i.rotulo}
            </a>
          ))}
        </nav>
        <div className="mt-auto p-4">
          <a href={linkedin} target="_blank" rel="noopener" className="btn-pill btn-primary w-full">
            {textos.cta}
          </a>
        </div>
      </SheetContent>
    </Sheet>
  );
}
