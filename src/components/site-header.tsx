import { Link } from "@tanstack/react-router";
import { useState } from "react";

const nav = [
  { to: "/", label: "Início" },
  { to: "/olhar", label: "Olhar" },
  { to: "/metodo", label: "Método" },
  { to: "/projetos", label: "Projetos" },
  { to: "/processo", label: "Processo" },
  { to: "/contato", label: "Contato" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 bg-lime border-b border-ink/10">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10 flex items-center justify-between h-16">
        <Link to="/" className="flex items-baseline gap-2">
          <span className="font-display text-xl tracking-tight">Vitória Marcondes</span>
        </Link>
        <nav className="hidden md:flex items-center gap-7">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className="text-[13px] tracking-[0.08em] uppercase text-ink/80 hover:text-ink transition-colors relative group"
              activeProps={{ className: "text-ink" }}
            >
              {n.label}
              <span className="absolute -bottom-1 left-0 h-[2px] w-0 bg-lime group-hover:w-full transition-all duration-300" />
            </Link>
          ))}
        </nav>
        <Link to="/contato" className="hidden md:inline-flex btn-ink !py-2 !px-4 !text-[11px]">
          Trabalhar juntos
        </Link>
        <button className="md:hidden eyebrow" onClick={() => setOpen(!open)} aria-label="menu">
          {open ? "Fechar" : "Menu"}
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t border-ink/10 bg-lime">
          <nav className="flex flex-col p-6 gap-4">
            {nav.map((n) => (
              <Link key={n.to} to={n.to} onClick={() => setOpen(false)} className="font-display text-2xl">
                {n.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
