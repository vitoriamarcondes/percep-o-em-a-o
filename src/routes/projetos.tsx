import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { projects, FILTERS } from "@/data/projects";

export const Route = createFileRoute("/projetos")({
  head: () => ({
    meta: [
      { title: "Universos construídos — Projetos · Vitória Marcondes" },
      { name: "description", content: "Projetos de marca, campanha, conteúdo e experiência apresentados pelo que criaram: clareza, desejo, estrutura, narrativa e presença." },
      { property: "og:title", content: "Universos construídos — Projetos" },
      { property: "og:description", content: "Cada projeto parte de uma pergunta: o que precisava mudar na percepção?" },
    ],
  }),
  component: Projetos,
});

function Projetos() {
  const [filter, setFilter] = useState<string>("Todos");
  const [active, setActive] = useState<string | null>(null);
  const visible = projects.filter((p) => filter === "Todos" || p.filters.includes(filter));
  const activeProject = projects.find((p) => p.id === active);

  return (
    <div>
      {/* Transition intro */}
      <section className="bg-ink text-background">
        <div className="mx-auto max-w-[1400px] px-6 md:px-10 py-24 md:py-32">
          <p className="eyebrow text-lime">Transição editorial · 10</p>
          <h1 className="font-display text-5xl md:text-8xl mt-6 leading-[0.9] max-w-4xl">
            Os projetos aparecem pelo que <span className="italic">transformaram</span>.
          </h1>
          <div className="mt-10 max-w-2xl text-background/75 space-y-4 leading-relaxed">
            <p>Não apresento lugares como protagonistas. Apresento raciocínios, decisões e mudanças de percepção.</p>
            <p className="font-display italic text-xl">
              Cada projeto parte de uma pergunta:<br />
              <span className="text-lime">"O que precisava mudar na forma como essa marca, campanha ou experiência era percebida?"</span>
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1400px] px-6 md:px-10 py-16">
        <div className="flex items-end justify-between flex-wrap gap-6 mb-10">
          <div>
            <p className="eyebrow text-editorial">11 · Universos construídos</p>
            <h2 className="font-display text-4xl md:text-5xl mt-3">Filtrar por território</h2>
          </div>
          <div className="flex flex-wrap gap-2">
            {FILTERS.map((f) => (
              <button key={f} className="pill" data-active={filter === f} onClick={() => setFilter(f)}>
                {f}
              </button>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {visible.map((p, i) => (
            <article
              key={p.id}
              id={p.id}
              className={`edito-card overflow-hidden group ${i % 3 === 0 ? "md:col-span-2" : ""}`}
            >
              <div className={`grid ${i % 3 === 0 ? "md:grid-cols-2" : ""} gap-0`}>
                <div className={`relative overflow-hidden ${i % 3 === 0 ? "aspect-[4/3] md:aspect-auto" : "aspect-[4/3]"}`}>
                  <img src={p.image} alt={p.title} loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  <span className="absolute top-5 left-5 bg-background/90 backdrop-blur rounded-full px-3 py-1 eyebrow text-[10px]">
                    Nº {p.number} · percepção em ação
                  </span>
                </div>
                <div className="p-8 md:p-10 flex flex-col">
                  <p className="eyebrow text-editorial">{p.context}</p>
                  <h3 className="font-display text-3xl md:text-4xl mt-4 leading-[1]">{p.title}</h3>
                  <p className="mt-4 text-xs uppercase tracking-wider text-ink/55">{p.category}</p>
                  <p className="mt-6 text-sm text-ink/75 leading-relaxed">{p.resume}</p>
                  <div className="mt-6 pt-6 border-t border-ink/10">
                    <p className="eyebrow text-editorial mb-2">Virada</p>
                    <p className="font-display text-xl italic">{p.shift}</p>
                  </div>
                  <button onClick={() => setActive(p.id)} className="btn-ink mt-8 self-start">
                    Abrir processo →
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Modal */}
      {activeProject && (
        <div className="fixed inset-0 z-[80] bg-ink/70 backdrop-blur-sm overflow-y-auto" onClick={() => setActive(null)}>
          <div
            className="min-h-full flex items-start justify-center p-4 md:p-10"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="bg-background rounded-3xl max-w-4xl w-full overflow-hidden">
              <div className="relative aspect-[16/9]">
                <img src={activeProject.image} alt="" className="w-full h-full object-cover" />
                <button onClick={() => setActive(null)} className="absolute top-5 right-5 bg-background rounded-full w-10 h-10 flex items-center justify-center hover:bg-lime">
                  ×
                </button>
              </div>
              <div className="p-8 md:p-12">
                <p className="eyebrow text-editorial">{activeProject.context} · Nº {activeProject.number}</p>
                <h3 className="font-display text-4xl md:text-5xl mt-4 leading-[1]">{activeProject.title}</h3>
                <p className="mt-3 text-xs uppercase tracking-wider text-ink/55">{activeProject.category}</p>

                <div className="mt-10 space-y-8">
                  <Block label="O que estava em jogo" body={activeProject.resume} />
                  <Block label="Minha leitura" body="O insight estratégico identificou um descompasso entre a intenção da marca e o que estava sendo percebido pelo público real." />
                  <Block label="Direção criada" body="A estratégia virou linguagem visual, verbal e experiencial — com tom, ritmo e atmosfera próprios." />
                  <Block label="Virada de percepção" body={activeProject.shift} />
                  <Block label="Síntese" body={activeProject.synthesis} accent />
                </div>

                <div className="mt-10 flex flex-wrap gap-2">
                  {activeProject.filters.map((f) => (
                    <span key={f} className="pill !text-[10px]">{f}</span>
                  ))}
                </div>

                <button onClick={() => setActive(null)} className="btn-ghost mt-10">← Voltar aos projetos</button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Feedbacks */}
      <section className="bg-paper/40">
        <div className="mx-auto max-w-[1400px] px-6 md:px-10 py-24">
          <p className="eyebrow text-editorial">15 · Vestígios</p>
          <h2 className="font-display text-4xl md:text-6xl mt-3 max-w-3xl leading-[1]">
            O que fica depois da entrega.
          </h2>
          <p className="mt-6 max-w-xl text-ink/70">
            Alguns resultados aparecem em números. Outros aparecem na forma como a marca passa a ser entendida, lembrada e desejada.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mt-12">
            {[
              "A Vitória organizou em linguagem algo que a marca ainda não sabia explicar.",
              "O projeto ganhou clareza sem perder sensibilidade.",
              "Ela não entrega só estética. Entrega leitura, intenção e direção.",
              "O processo transformou ideias soltas em uma marca mais clara.",
              "A marca passou a ter uma presença mais coerente, desejável e fácil de reconhecer.",
            ].map((t, i) => (
              <div key={i} className="edito-card p-7">
                <span className="font-display text-4xl text-lime leading-none">"</span>
                <p className="font-display text-xl italic leading-snug mt-2">{t}</p>
              </div>
            ))}
          </div>
          <div className="mt-12">
            <Link to="/contato" className="btn-ink">Iniciar uma conversa →</Link>
          </div>
        </div>
      </section>
    </div>
  );
}

function Block({ label, body, accent }: { label: string; body: string; accent?: boolean }) {
  return (
    <div className={`${accent ? "bg-mist/40 rounded-2xl p-6" : ""}`}>
      <p className="eyebrow text-editorial mb-3">{label}</p>
      <p className={accent ? "font-display text-2xl italic leading-snug" : "text-ink/80 leading-relaxed"}>{body}</p>
    </div>
  );
}