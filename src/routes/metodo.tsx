import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";

export const Route = createFileRoute("/metodo")({
  head: () => ({
    meta: [
      { title: "Método — 4 pilares de marca · Vitória Marcondes" },
      { name: "description", content: "Estratégia de negócio, essência, expressão e comunicação. Quatro pilares que constroem a jornada da marca e o vínculo com pessoas." },
      { property: "og:title", content: "4 pilares de marca — Método" },
      { property: "og:description", content: "Quatro pilares que constroem a jornada da marca e o vínculo estratégico com pessoas." },
    ],
  }),
  component: Metodo,
});

const steps = [
  {
    n: "01",
    title: "Estratégia de negócio",
    body: "Onde o criativo encontra o estratégico. Defino como a marca compete, para quem fala e o que promete antes de qualquer estética.",
    tags: "Posicionamento · mantras da marca · análise de mercado · cliente ideal · oferta · nichos e subnichos",
    q: "Antes de comunicar, é preciso decidir onde a marca compete e o que ela promete.",
  },
  {
    n: "02",
    title: "Essência de marca",
    body: "O que sustenta a marca por dentro — o núcleo simbólico do qual tudo o resto se desdobra.",
    tags: "DNA · personalidade · valores · arquétipo · história de criação · manifesto · lifestyle · moodboard",
    q: "A essência é o que sustenta a marca quando ninguém está olhando.",
  },
  {
    n: "03",
    title: "Expressão visual e verbal",
    body: "Traduzo estratégia e essência em forma reconhecível — tudo o que faz a marca ser vista, lida e ouvida.",
    tags: "Cor · tipografia · logo · identidade fotográfica · símbolos · ícones · tom de voz · trilha sonora",
    q: "Estética é estratégia tornada visível.",
  },
  {
    n: "04",
    title: "Estratégia de comunicação",
    body: "Como tudo isso vira presença viva — produção de conteúdo, formatos, linha editorial e o processo que estrutura a operação.",
    tags: "Produção de conteúdo · formatos · linha editorial · ferramentas · processo · estrutura",
    q: "Conteúdo é o desdobramento da estratégia no cotidiano das pessoas.",
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
        <p className="eyebrow text-editorial">Método · 4 pilares de marca</p>
        <h1 className="font-display text-5xl md:text-8xl mt-4 leading-[0.9] max-w-4xl">
          Estratégia de marca em <span className="italic">quatro pilares</span>.
        </h1>
        <p className="mt-8 max-w-xl text-ink/75 text-lg leading-relaxed">
          Em cada projeto, esses quatro pilares constroem a <span className="lime-underline">jornada da marca</span> e estruturam a interação com os clientes — criando vínculo estratégico entre marca e pessoas.
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
          "Marca forte não é a que aparece mais. É a que cria <span className="lime-underline not-italic">vínculo</span> com pessoas de maneira estratégica."
        </p>
        <div className="mt-10 flex justify-center gap-3">
          <Link to="/projetos" className="btn-ink">Ver projetos →</Link>
          <Link to="/contato" className="btn-ghost">Conversar</Link>
        </div>
      </section>
    </div>
  );
}