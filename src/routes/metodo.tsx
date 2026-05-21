import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";

export const Route = createFileRoute("/metodo")({
  head: () => ({
    meta: [
      { title: "Método — Jornada de Presença · Vitória Marcondes" },
      { name: "description", content: "Território → Essência → Linguagem → Presença. Um sistema para transformar intenção em valor percebido." },
      { property: "og:title", content: "Jornada de Presença — Método" },
      { property: "og:description", content: "Um processo para transformar intenção em valor percebido." },
    ],
  }),
  component: Metodo,
});

const steps = [
  {
    n: "01",
    title: "Território",
    body: "Entendo onde a marca está, quem ela quer alcançar e qual espaço pode ocupar.",
    tags: "Mercado · público · comportamento · nicho · concorrência · cultura · oportunidade",
    q: "Que lugar essa marca pode ocupar na percepção das pessoas?",
  },
  {
    n: "02",
    title: "Essência",
    body: "Organizo o que sustenta a marca por dentro.",
    tags: "Propósito · valores · diferenciação · manifesto · personalidade · promessa · desejo",
    q: "O que essa marca quer significar?",
  },
  {
    n: "03",
    title: "Linguagem",
    body: "Transformo estratégia em expressão visual e verbal.",
    tags: "Direção de arte · tom de voz · paleta · tipografia · fotografia · símbolos · moodboard",
    q: "Como essa marca precisa aparecer, falar e ser reconhecida?",
  },
  {
    n: "04",
    title: "Presença",
    body: "Desdobro a marca em pontos reais de contato.",
    tags: "Campanhas · conteúdo · eventos · ativações · relacionamento · comunidade · memória",
    q: "Como essa marca deixa de apenas comunicar e passa a fazer parte da vida das pessoas?",
  },
];

const builds = [
  { t: "Estratégia de marca", d: "Posicionamento, público, território, diferenciação, narrativa e valor percebido." },
  { t: "Direção criativa", d: "Conceito, campanha, moodboard, estética, produção visual e atmosfera." },
  { t: "Branding emocional", d: "Manifesto, tom de voz, universo simbólico, personalidade e vínculo." },
  { t: "Comunicação estratégica", d: "Conteúdo, linha editorial, eventos, ativações, relacionamento e presença digital." },
  { t: "Moodboards estratégicos", d: "Pesquisa visual, códigos estéticos, referências, paleta, linguagem e direção de percepção." },
];

function Metodo() {
  const [open, setOpen] = useState<string>("01");
  return (
    <div>
      <section className="mx-auto max-w-[1400px] px-6 md:px-10 pt-16 md:pt-24 pb-12">
        <p className="eyebrow text-editorial">Método · Sistema de inteligência</p>
        <h1 className="font-display text-5xl md:text-8xl mt-4 leading-[0.9] max-w-4xl">
          Jornada de <span className="italic">Presença</span>.
        </h1>
        <p className="mt-8 max-w-xl text-ink/75 text-lg leading-relaxed">
          Um processo para transformar intenção em valor percebido. Quatro etapas conectadas — território, essência, linguagem e presença.
        </p>
      </section>

      <section className="mx-auto max-w-[1400px] px-6 md:px-10 pb-24">
        <div className="space-y-3">
          {steps.map((s) => {
            const isOpen = open === s.n;
            return (
              <button
                key={s.n}
                onClick={() => setOpen(s.n)}
                className={`edito-card w-full text-left p-6 md:p-8 transition-all duration-500 ${isOpen ? "bg-ink text-background" : "hover:border-lime"}`}
              >
                <div className="flex items-start gap-6 md:gap-12">
                  <span className={`font-display text-5xl md:text-7xl leading-none ${isOpen ? "text-lime" : "text-editorial"}`}>{s.n}</span>
                  <div className="flex-1">
                    <h3 className="font-display text-3xl md:text-5xl">{s.title}</h3>
                    <p className={`mt-3 text-base md:text-lg ${isOpen ? "text-background/80" : "text-ink/75"}`}>{s.body}</p>
                    {isOpen && (
                      <div className="mt-6 space-y-5">
                        <p className="text-xs uppercase tracking-[0.2em] text-background/60">{s.tags}</p>
                        <p className="font-display text-2xl italic text-lime">"{s.q}"</p>
                      </div>
                    )}
                  </div>
                  <span className={`text-2xl ${isOpen ? "text-lime" : "text-ink/40"}`}>{isOpen ? "—" : "+"}</span>
                </div>
              </button>
            );
          })}
        </div>
      </section>

      <section className="bg-paper/50">
        <div className="mx-auto max-w-[1400px] px-6 md:px-10 py-24">
          <p className="eyebrow text-editorial">O que eu construo</p>
          <h2 className="font-display text-4xl md:text-6xl mt-3 max-w-3xl leading-[1]">
            Cada projeto pede uma construção diferente.
          </h2>
          <p className="mt-6 max-w-xl text-ink/70">
            Às vezes a marca precisa de clareza. Às vezes de linguagem. Às vezes de campanha. Às vezes de uma nova forma de ser percebida.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mt-12">
            {builds.map((b, i) => (
              <div key={b.t} className="edito-card p-7 group hover:bg-ink hover:text-background transition-colors duration-500">
                <span className="eyebrow text-editorial group-hover:text-lime">0{i + 1}</span>
                <h3 className="font-display text-2xl mt-6">{b.t}</h3>
                <p className="mt-3 text-sm opacity-75 leading-relaxed">{b.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1400px] px-6 md:px-10 py-24 text-center">
        <p className="font-display text-3xl md:text-5xl italic max-w-3xl mx-auto">
          "Propósito não é discurso. É <span className="lime-underline not-italic">comportamento</span> traduzido em linguagem."
        </p>
        <div className="mt-10 flex justify-center gap-3">
          <Link to="/projetos" className="btn-ink">Ver projetos →</Link>
          <Link to="/contato" className="btn-ghost">Conversar</Link>
        </div>
      </section>
    </div>
  );
}