import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import heroImg from "@/assets/hero-editorial.jpg";
import mood1 from "@/assets/moodboard-1.jpg";
import mood2 from "@/assets/moodboard-2.jpg";
import { projects, FILTERS } from "@/data/projects";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Vitória Marcondes — Transformo percepção em presença" },
      {
        name: "description",
        content:
          "Estratégia de marca, direção criativa e comunicação para marcas que precisam ser mais claras, desejáveis e memoráveis.",
      },
      { property: "og:title", content: "Vitória Marcondes — Brand · Creative Direction" },
      {
        property: "og:description",
        content: "Não crio apenas o que uma marca mostra. Construo o que ela passa a significar.",
      },
    ],
  }),
  component: Home,
});

function Home() {
  const [filter, setFilter] = useState<string>("Todos");
  const visible = projects.filter((p) => filter === "Todos" || p.filters.includes(filter));

  return (
    <div>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="mx-auto max-w-[1400px] px-6 md:px-10 pt-10 md:pt-16 pb-20">
          <div className="flex items-center gap-3 mb-10">
            <span className="h-2 w-2 rounded-full bg-lime" />
            <span className="eyebrow text-ink/70">Direção Criativa & Brand Intelligence</span>
            <span className="hidden md:block flex-1 h-px bg-ink/15" />
            <span className="hidden md:block eyebrow text-ink/50">Creative Brand Intelligence</span>
          </div>

          <div className="grid gap-12 xl:grid-cols-[minmax(0,1.75fr)_minmax(340px,0.75fr)] xl:gap-10 items-start xl:items-end">
            <div className="relative z-20 min-w-0 xl:pr-4">
              <h1 className="font-display text-[3.25rem] sm:text-[4.6rem] xl:text-[5.9rem] 2xl:text-[6.75rem] leading-[0.98] tracking-[0] text-balance">
                <span className="block">Faça sua marca</span>
                <span className="block">ganhar voz,</span>
                <span className="block">
                  <span className="italic font-light">desejo</span> e{" "}
                  <span className="lime-underline">presença</span>.
                </span>
              </h1>
              <p className="mt-10 max-w-xl text-lg md:text-xl text-ink/75 leading-relaxed">
                Direção criativa e inteligência de mercado que transforma estratégia em narrativa,
                imagem, desejo e expressão.
              </p>
              <p className="mt-6 max-w-xl text-base text-ink/55 italic font-display">
                "Não crio apenas o que uma marca mostra. Construo o que ela passa a significar."
              </p>
              <div className="mt-10 flex flex-wrap gap-3">
                <Link to="/projetos" className="btn-ink">
                  Explorar projetos →
                </Link>
                <Link to="/processo" className="btn-ghost">
                  Conhecer meu processo
                </Link>
              </div>
              <div className="mt-12 flex items-center gap-6 text-xs eyebrow text-ink/60">
                <span>Vitória Marcondes</span>
                <span className="h-px w-12 bg-ink/30" />
                <span>Brand · Direction · Storytelling</span>
              </div>
            </div>
            <div className="relative z-0 min-w-0 w-full max-w-[420px] justify-self-start xl:justify-self-end xl:max-w-[460px]">
              <div className="edito-card aspect-[4/5] relative">
                <img
                  src={heroImg}
                  alt="Editorial portrait"
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-5 left-5 right-5 flex justify-between text-[10px] eyebrow text-background mix-blend-difference">
                  <span>Cover · 2026</span>
                  <span>Nº 01</span>
                </div>
                <div className="absolute bottom-5 left-5 right-5 flex justify-between items-end text-background mix-blend-difference">
                  <span className="font-display text-2xl italic">in motion</span>
                  <span className="eyebrow text-[10px]">brand feeling</span>
                </div>
              </div>
              <div className="absolute -bottom-6 -left-4 rotate-[-4deg] bg-lime text-ink px-4 py-2 rounded-full eyebrow text-[10px] shadow-lg">
                from insight to atmosphere
              </div>
              <div className="absolute -top-4 -right-2 rotate-[6deg] bg-mist text-ink px-4 py-2 rounded-full eyebrow text-[10px] shadow-lg">
                perception shift
              </div>
            </div>
          </div>
        </div>

        {/* Project marquee */}
        <div className="border-y border-ink/15 py-5 bg-paper/40 overflow-hidden">
          <div className="marquee whitespace-nowrap font-display text-2xl md:text-3xl italic">
            {[...projects, ...projects].map((p, i) => (
              <span key={i} className="flex items-center gap-6">
                <span className="eyebrow text-xs not-italic text-editorial">{p.number}</span>
                {p.title}
                <span className="text-lime">✦</span>
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* FILTERS */}
      <section className="mx-auto max-w-[1400px] px-6 md:px-10 py-16">
        <div className="flex items-end justify-between flex-wrap gap-4 mb-8">
          <div>
            <p className="eyebrow text-editorial">02 · Index editorial</p>
            <h2 className="font-display text-4xl md:text-5xl mt-2">Filtrar por território</h2>
          </div>
          <p className="text-sm text-ink/60 max-w-xs">
            Cada projeto é apresentado pelo que transformou — não pela marca, mas pela percepção.
          </p>
        </div>
        <div className="flex flex-wrap gap-2">
          {FILTERS.map((f) => (
            <button
              key={f}
              className="pill"
              data-active={filter === f}
              onClick={() => setFilter(f)}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Projects grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {visible.map((p) => (
            <ProjectCard key={p.id} p={p} />
          ))}
        </div>
      </section>

      {/* DOR */}
      <section className="bg-paper/50">
        <div className="mx-auto max-w-[1400px] px-6 md:px-10 py-24 grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7">
            <p className="eyebrow text-editorial mb-6">03 · Diagnóstico</p>
            <h2 className="font-display text-4xl md:text-6xl leading-[1] max-w-2xl">
              Sua marca pode ser boa. Mas ela está sendo <span className="italic">percebida</span>{" "}
              do jeito certo?
            </h2>
            <div className="mt-10 max-w-xl text-ink/75 space-y-4 text-base leading-relaxed">
              <p>Boas ideias nem sempre viram marcas fortes.</p>
              <p>
                Às vezes falta clareza. Às vezes falta desejo. Às vezes falta consistência. Às vezes
                falta uma linguagem que organize tudo.
              </p>
              <p>
                Eu trabalho nesse espaço: entre o que a marca é, o que ela quer vender e o que as
                pessoas precisam perceber para se aproximar.
              </p>
            </div>
            <div className="mt-10 inline-block">
              <p className="font-display text-2xl md:text-3xl italic">
                Marca não é só aparência. É <span className="lime-underline">valor percebido</span>.
              </p>
            </div>
          </div>
          <div className="lg:col-span-5 relative">
            <div className="edito-card aspect-[4/5]">
              <img
                src={mood1}
                alt="Strategist moodboard"
                loading="lazy"
                className="w-full h-full object-cover"
              />
            </div>
            <span className="absolute -top-3 left-6 bg-background border border-ink/20 rounded-full px-3 py-1 eyebrow text-[10px]">
              visual code
            </span>
            <span className="absolute -bottom-3 right-6 bg-editorial text-background rounded-full px-3 py-1 eyebrow text-[10px]">
              brand feeling
            </span>
          </div>
        </div>
      </section>

      {/* POSICIONAMENTO */}
      <section className="mx-auto max-w-[1400px] px-6 md:px-10 py-24">
        <p className="eyebrow text-editorial">04 · Posicionamento</p>
        <h2 className="font-display text-4xl md:text-6xl mt-3 max-w-3xl leading-[1]">
          Não vendo estética. Construo <span className="italic">valor percebido</span>.
        </h2>
        <p className="mt-8 max-w-2xl text-ink/75 leading-relaxed">
          Meu trabalho conecta estratégia comercial, direção criativa, comportamento e narrativa
          para transformar marcas, campanhas e experiências em presenças mais reconhecíveis. Ajudo
          projetos a saírem do genérico e ocuparem um lugar mais claro na mente, no desejo e na vida
          das pessoas.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-14">
          {[
            {
              n: "i",
              t: "Clareza",
              d: "Para marcas que precisam comunicar melhor o próprio valor.",
            },
            {
              n: "ii",
              t: "Desejo",
              d: "Para produtos, serviços e ideias que precisam ganhar imaginário.",
            },
            { n: "iii", t: "Consistência", d: "Para comunicações que ainda parecem fragmentadas." },
            {
              n: "iv",
              t: "Presença",
              d: "Para marcas que querem ser lembradas pelo que significam.",
            },
          ].map((c) => (
            <div
              key={c.t}
              className="edito-card p-7 group hover:bg-ink hover:text-background transition-colors duration-500"
            >
              <div className="flex items-center justify-between mb-12">
                <span className="eyebrow text-editorial group-hover:text-lime">{c.n}</span>
                <span className="text-lime opacity-0 group-hover:opacity-100 transition-opacity">
                  ✦
                </span>
              </div>
              <h3 className="font-display text-3xl">{c.t}</h3>
              <p className="mt-3 text-sm opacity-70 leading-relaxed">{c.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* NUMEROS */}
      <section className="bg-ink text-background">
        <div className="mx-auto max-w-[1400px] px-6 md:px-10 py-24">
          <p className="eyebrow text-lime">05 · Repertório aplicado</p>
          <h2 className="font-display text-4xl md:text-6xl mt-3 max-w-3xl leading-[1]">
            Experiência aplicada em marca, público e comunicação.
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-background/10 mt-14 rounded-3xl overflow-hidden">
            {[
              {
                n: "7+",
                l: "anos",
                d: "atuando entre comunicação, campanhas, conteúdo, direção visual e estratégia.",
              },
              {
                n: "3×",
                l: "mais carteira atendida",
                d: "em experiência comercial com relacionamento, capacitação e adaptação de linguagem.",
              },
              {
                n: "400+",
                l: "pessoas",
                d: "em experiência criada e produzida com ingressos esgotados.",
              },
              {
                n: "03",
                l: "reconhecimentos",
                d: "por impacto, crescimento e conexão em projeto de comunicação.",
              },
              {
                n: "08",
                l: "setores",
                d: "moda, lifestyle, previdência, setor público, comercial, institucional, social e marcas com propósito.",
              },
              {
                n: "∞",
                l: "leituras",
                d: "atravessar mercados diferentes me ensinou a ler pessoas antes de criar para marcas.",
              },
            ].map((s, i) => (
              <div key={i} className="bg-ink p-8 md:p-10">
                <div className="font-display text-6xl md:text-7xl text-lime leading-none">
                  {s.n}
                </div>
                <div className="eyebrow mt-3 text-background/60">{s.l}</div>
                <p className="mt-4 text-sm text-background/80 leading-relaxed">{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MANIFESTO */}
      <section className="bg-mist/40">
        <div className="mx-auto max-w-4xl px-6 md:px-10 py-32 text-center">
          <p className="eyebrow text-editorial">06 · Manifesto</p>
          <h2 className="font-display text-4xl md:text-7xl mt-6 leading-[1.02]">
            <span className="lime-underline">Percepção</span> antes da estética.
          </h2>
          <div className="mt-12 text-lg md:text-xl leading-[1.7] text-ink/80 space-y-5 font-display italic">
            <p>Uma marca não é construída apenas pelo que mostra.</p>
            <p>Ela é construída pelo que repete, sustenta e faz sentir.</p>
            <p>Antes de criar, eu entendo.</p>
            <p>Antes de propor, eu leio.</p>
            <p>Antes de desenhar, eu procuro o que precisa ser percebido.</p>
          </div>
          <p className="mt-14 font-display text-3xl md:text-4xl">
            O bonito chama atenção. O <span className="italic">coerente</span> permanece.
          </p>
          <div className="mt-10">
            <Link to="/metodo" className="btn-ink">
              Ver método completo
            </Link>
          </div>
        </div>
      </section>

      {/* THOUGHT STARTERS */}
      <section className="mx-auto max-w-[1400px] px-6 md:px-10 py-24">
        <p className="eyebrow text-editorial">07 · Thought starters</p>
        <h2 className="font-display text-4xl md:text-5xl mt-3 max-w-2xl">
          Perguntas que organizam meu raciocínio.
        </h2>
        <div className="grid md:grid-cols-2 gap-5 mt-12">
          {[
            "O que essa marca precisa fazer as pessoas sentirem?",
            "Que percepção precisa mudar?",
            "O que ainda está confuso entre intenção e comunicação?",
            "Como transformar isso em linguagem, experiência e valor percebido?",
          ].map((q, i) => (
            <div key={i} className="edito-card p-8 flex gap-6 hover:border-lime transition-colors">
              <span className="font-display text-5xl text-editorial leading-none">0{i + 1}</span>
              <p className="font-display text-2xl leading-snug">{q}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-[1400px] px-6 md:px-10 pb-24">
        <div className="edito-card relative overflow-hidden bg-ink text-background p-12 md:p-20">
          <div className="absolute inset-0 opacity-40">
            <img src={mood2} alt="" className="w-full h-full object-cover" loading="lazy" />
          </div>
          <div className="relative max-w-3xl">
            <p className="eyebrow text-lime">Fechamento editorial</p>
            <h2 className="font-display text-4xl md:text-6xl mt-4 leading-[1]">
              Se a sua marca precisa de mais do que aparência,
              <br />
              talvez ela precise de <span className="italic">direção</span>.
            </h2>
            <p className="mt-8 text-background/80 max-w-xl">
              Vamos construir uma presença mais clara, sensível e estrategicamente desejável.
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <Link to="/contato" className="btn-ink bg-lime text-ink hover:bg-background">
                Iniciar conversa
              </Link>
              <Link
                to="/projetos"
                className="btn-ghost border-background text-background hover:bg-background hover:text-ink"
              >
                Ver universos construídos
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function ProjectCard({ p }: { p: (typeof projects)[number] }) {
  return (
    <Link
      to="/projetos"
      hash={p.id}
      className="edito-card group block relative overflow-hidden hover:-translate-y-1 transition-transform duration-500"
    >
      <div className="aspect-[4/5] overflow-hidden relative">
        <img
          src={p.image}
          alt={p.title}
          loading="lazy"
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-ink/0 group-hover:bg-ink/60 transition-colors duration-500 flex items-end p-6">
          <div className="text-background opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            <span className="eyebrow text-lime">{p.hover}</span>
            <p className="font-display text-2xl italic mt-2">{p.shift}</p>
          </div>
        </div>
        <span className="absolute top-4 left-4 bg-background/90 backdrop-blur rounded-full px-3 py-1 eyebrow text-[10px]">
          Nº {p.number}
        </span>
        <span className="absolute top-4 right-4 bg-lime rounded-full px-3 py-1 eyebrow text-[10px]">
          percepção em ação
        </span>
      </div>
      <div className="p-6">
        <p className="eyebrow text-editorial mb-3">{p.context}</p>
        <h3 className="font-display text-2xl leading-tight">{p.title}</h3>
        <p className="mt-3 text-xs text-ink/55 uppercase tracking-wider">{p.category}</p>
      </div>
    </Link>
  );
}
