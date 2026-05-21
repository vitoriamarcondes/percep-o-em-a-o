import { Link } from "@tanstack/react-router";

export function SiteFooter() {
  return (
    <footer className="bg-ink text-background mt-32">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10 py-20">
        <div className="grid md:grid-cols-12 gap-12">
          <div className="md:col-span-7">
            <p className="eyebrow text-lime mb-6">Manifesto contínuo</p>
            <h2 className="font-display text-4xl md:text-6xl leading-[0.95]">
              Transformo <span className="italic">percepção</span><br />
              em <span className="text-lime">presença</span>.
            </h2>
            <p className="mt-8 max-w-md text-background/70 text-sm leading-relaxed">
              Brand Strategy · Creative Direction · Visual Storytelling.
              <br />Para marcas que querem ser lembradas pelo que significam.
            </p>
          </div>
          <div className="md:col-span-5 grid grid-cols-2 gap-8 text-sm">
            <div className="space-y-3">
              <p className="eyebrow text-background/50">Navegar</p>
              <Link to="/olhar" className="block hover:text-lime transition-colors">Olhar</Link>
              <Link to="/metodo" className="block hover:text-lime transition-colors">Método</Link>
              <Link to="/projetos" className="block hover:text-lime transition-colors">Projetos</Link>
              <Link to="/processo" className="block hover:text-lime transition-colors">Processo</Link>
            </div>
            <div className="space-y-3">
              <p className="eyebrow text-background/50">Contato</p>
              <a href="mailto:ola@vitoriamarcondes.com" className="block hover:text-lime transition-colors">E-mail</a>
              <a href="#" className="block hover:text-lime transition-colors">LinkedIn</a>
              <a href="#" className="block hover:text-lime transition-colors">Instagram</a>
              <a href="#" className="block hover:text-lime transition-colors">Currículo</a>
            </div>
          </div>
        </div>
        <div className="mt-16 pt-8 border-t border-background/15 flex flex-wrap items-center justify-between gap-4 text-xs text-background/50">
          <span>© {new Date().getFullYear()} Vitória Marcondes. Todos os direitos.</span>
          <span className="eyebrow">From insight to atmosphere</span>
        </div>
      </div>
    </footer>
  );
}