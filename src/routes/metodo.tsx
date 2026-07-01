import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import heroCoverMagazine from "@/assets/hero-cover-magazine.webp";
import heroCoverWall from "@/assets/hero-cover-wall.webp";
import metodoEntregasVitoria from "@/assets/metodo-entregas-vitoria.jpeg";
import moodboardSite from "@/assets/moodboard-site.png";
import processoMoodboard from "@/assets/processo-moodboard.jpeg";
import { projectSummaries } from "@/data/projects-meta";
import { buildSeo } from "@/lib/seo";

export const Route = createFileRoute("/metodo")({
  head: () =>
    buildSeo({
      title: "Método de sistemas de marca · Vitória Marcondes",
      description:
        "Construção de sistemas de marca em cinco etapas, conectando estratégia, expressão e experiência.",
      path: "/metodo",
      ogTitle: "Sistema de marca — Método",
      ogDescription:
        "Um processo para orientar identidade, comunicação, campanhas e experiência de marca.",
    }),
  component: Metodo,
});

const steps = [
  {
    n: "01",
    title: "Leitura de Contexto",
    short: "Investigação estratégica sobre mercado, comportamento, concorrência e oportunidades.",
    body: [
      "Toda decisão começa pela compreensão do contexto em que a marca existe.",
      "Investigo mercado, concorrência, comportamento, tendências, referências, percepção e cultura para identificar o espaço que essa marca pode ocupar.",
      "Também estudo a história do negócio, as motivações do fundador, os objetivos do projeto e o impacto que ele pretende gerar.",
      "Esse diagnóstico orienta todas as decisões das próximas etapas.",
    ],
    topics: [
      "Posicionamento",
      "Pesquisa de mercado",
      "SWOT",
      "Público",
      "Narrativa comportamental",
      "Concorrência direta e indireta",
      "Referências culturais",
      "Tendências",
      "Mapa de oportunidades",
    ],
    q: "O contexto define quais oportunidades realmente fazem sentido para a marca.",
  },
  {
    n: "02",
    title: "Arquitetura de Marca",
    short: "Organização estratégica do DNA da marca antes da identidade visual.",
    body: [
      "Antes de criar qualquer elemento visual, construo um sistema estratégico que orienta todas as decisões do projeto.",
    ],
    bases: [
      {
        t: "Essência",
        d: "O que a marca acredita e quais princípios orientam suas decisões.",
      },
      {
        t: "Materialização",
        d: "Como esses princípios aparecem em produtos, serviços, atendimento, processos e ações. A marca precisa comprovar aquilo que comunica.",
      },
      {
        t: "Expressão",
        d: "Como a marca ocupa o mundo por meio da estética, do tom de voz, da fotografia, das formas, cores e códigos visuais.",
      },
      {
        t: "Impacto",
        d: "Como tudo isso cria identificação, pertencimento e experiência para as pessoas.",
      },
    ],
    topics: [
      "Posicionamento",
      "Plataforma de marca",
      "Narrativa",
      "Moodboards estratégicos",
      "Território",
      "Linguagem",
      "Direção conceitual",
    ],
    q: "Uma marca forte nasce da coerência entre aquilo que acredita, faz, comunica e entrega.",
  },
  {
    n: "03",
    title: "Sistema de Expressão",
    short: "Transformação da estratégia em uma identidade reconhecível.",
    body: [
      "Com a estratégia consolidada, desenvolvo um sistema visual capaz de tornar a marca memorável.",
      "Mais do que criar um logotipo, construo códigos visuais que sustentam reconhecimento, diferenciação e consistência em qualquer ponto de contato.",
      "Cada decisão visual nasce de uma justificativa estratégica.",
    ],
    topics: [
      "Identidade visual",
      "Direção criativa",
      "Tipografia",
      "Paleta",
      "Fotografia",
      "Sistema gráfico",
      "Aplicações",
      "Design",
    ],
    q: "A identidade visual traduz as decisões estratégicas da marca.",
  },
  {
    n: "04",
    title: "Direção Criativa",
    short: "Tradução da estratégia em desejo, repertório e significado.",
    body: [
      "Desenvolvo conceitos, campanhas, narrativas, manifestos e direções criativas capazes de construir um imaginário próprio.",
      "O objetivo é fazer com que a marca seja reconhecida não apenas pelo que vende, mas pelo universo que representa e pelas conexões que cria com as pessoas.",
    ],
    topics: [
      "Conceito criativo",
      "Manifesto",
      "Campanhas",
      "Storytelling",
      "Conteúdo",
      "Lifestyle",
      "Brand experience",
    ],
    q: "Direção criativa amplia como a marca será lembrada além do produto.",
  },
  {
    n: "05",
    title: "Experiência de Marca",
    short: "Planejamento da experiência da marca em todos os pontos de contato.",
    body: [
      "Defino como a marca se apresenta em cada canal, experiência e interação para garantir coerência entre o que comunica e aquilo que as pessoas realmente vivenciam.",
      "Redes sociais, conteúdo, eventos, ativações, ambientes físicos, relacionamento e experiência deixam de funcionar como ações isoladas e passam a fazer parte do mesmo sistema.",
    ],
    topics: [
      "Estratégia de conteúdo",
      "Linha editorial",
      "Experiência de marca",
      "Eventos",
      "Ativações",
      "Visual merchandising",
      "Jornada do cliente",
      "Presença digital",
    ],
    q: "A força de uma marca está na consistência entre discurso, experiência e percepção.",
  },
];

const builds = [
  {
    t: "Estratégia de Marca",
    d: "Posicionamento, pesquisa, diferenciação, território, arquitetura de marca e direcionamento estratégico.",
  },
  {
    t: "Direção Criativa",
    d: "Conceitos, campanhas, direção de arte, moodboards e sistemas visuais.",
  },
  {
    t: "Identidade Visual",
    d: "Logotipo, tipografia, paleta, fotografia, linguagem gráfica e aplicações.",
  },
  {
    t: "Narrativa & Conteúdo",
    d: "Tom de voz, storytelling, campanhas, manifestos, conteúdo e construção de imaginário.",
  },
  {
    t: "Experiência & Presença",
    d: "Jornada do cliente, conteúdo, canais, ativações, eventos e pontos de contato.",
  },
];

const projectTeasers = projectSummaries
  .filter((project) => project.image && !project.image.toLowerCase().endsWith(".mp4"))
  .slice(0, 5)
  .map((project) => ({
    title: project.title,
    image: project.image as string,
  }));

const editorialFrames = [
  {
    n: "01",
    title: "Contexto",
    src: moodboardSite,
    alt: "Moodboard editorial com referências visuais",
  },
  {
    n: "02",
    title: "Direção",
    src: processoMoodboard,
    alt: "Mesa de processo criativo com referências",
  },
  {
    n: "03",
    title: "Expressão",
    src: heroCoverWall,
    alt: "Painel de referências visuais",
  },
];

function Metodo() {
  const [open, setOpen] = useState<string | null>(null);

  return (
    <div>
      <section className="mx-auto max-w-[1400px] px-6 md:px-10 pt-16 md:pt-24 pb-12">
        <p className="eyebrow text-editorial">Método · Sistema de Marca</p>
        <h1 className="font-display text-5xl md:text-8xl mt-4 leading-[0.9] max-w-4xl">
          Construção de sistemas de marca em <span className="italic lime-underline">cinco etapas</span>.
        </h1>
        <p className="mt-8 max-w-2xl text-ink/75 text-lg leading-relaxed">
          Cada projeto nasce de uma{" "}
          <strong className="font-semibold">investigação estratégica</strong> e evolui para um
          sistema capaz de orientar <strong className="font-semibold">identidade</strong>,{" "}
          <strong className="font-semibold">comunicação</strong>,{" "}
          <strong className="font-semibold">campanhas</strong> e{" "}
          <strong className="font-semibold">experiência de marca</strong>. O objetivo não é apenas
          criar uma boa imagem, mas construir uma presença consistente e relevante ao longo do tempo.
        </p>
      </section>

      <section className="mx-auto max-w-[1400px] px-6 md:px-10 pb-24">
        <div className="space-y-3">
          {steps.map((s) => {
            const isOpen = open === s.n;

            return (
              <button
                key={s.n}
                onClick={() => setOpen(isOpen ? null : s.n)}
                className={`edito-card group w-full text-left p-6 md:p-8 transition-all duration-500 ${
                  isOpen ? "bg-ink text-background" : "hover:bg-ink hover:text-background"
                }`}
              >
                <div className="flex items-start gap-6 md:gap-12">
                  <span
                    className={`font-display text-5xl md:text-7xl leading-none ${
                      isOpen ? "text-lime" : "text-editorial group-hover:text-lime"
                    }`}
                  >
                    {s.n}
                  </span>
                  <div className="flex-1">
                    <h3 className="font-display text-3xl md:text-5xl">{s.title}</h3>
                    <p
                      className={`mt-3 text-base md:text-lg ${
                        isOpen ? "text-background/80" : "text-ink/75 group-hover:text-background/80"
                      }`}
                    >
                      {s.n === "02" ? (
                        <>
                          Organização estratégica do{" "}
                          <strong className="font-semibold">DNA da marca</strong>{" "}
                          antes da identidade visual.
                        </>
                      ) : (
                        s.short
                      )}
                    </p>
                    {isOpen && (
                      <div className="mt-7 space-y-7">
                        <div className="max-w-3xl space-y-4 text-sm leading-relaxed text-background/78 md:text-base">
                          {s.body.map((paragraph) => (
                            <p key={paragraph}>
                              {paragraph ===
                              "Toda decisão começa pela compreensão do contexto em que a marca existe." ? (
                                <strong className="font-semibold text-background">
                                  Toda decisão começa pela compreensão do contexto em que a marca existe.
                                </strong>
                              ) : paragraph ===
                              "Desenvolvo conceitos, campanhas, narrativas, manifestos e direções criativas capazes de construir um imaginário próprio." ? (
                                <>
                                  Desenvolvo{" "}
                                  <strong className="font-semibold text-background">
                                    conceitos, campanhas, narrativas, manifestos e direções
                                    criativas
                                  </strong>{" "}
                                  capazes de construir um imaginário próprio.
                                </>
                              ) : paragraph ===
                              "Defino como a marca se apresenta em cada canal, experiência e interação para garantir coerência entre o que comunica e aquilo que as pessoas realmente vivenciam." ? (
                                <>
                                  Defino como a marca se apresenta em cada{" "}
                                  <strong className="font-semibold text-background">
                                    canal, experiência e interação
                                  </strong>{" "}
                                  para garantir coerência entre o que comunica e aquilo que as
                                  pessoas realmente vivenciam.
                                </>
                              ) : paragraph ===
                                "Mais do que criar um logotipo, construo códigos visuais que sustentam reconhecimento, diferenciação e consistência em qualquer ponto de contato." ? (
                                <>
                                  Mais do que criar um logotipo, construo{" "}
                                  <strong className="font-semibold text-background">
                                    códigos visuais
                                  </strong>{" "}
                                  que sustentam{" "}
                                  <strong className="font-semibold text-background">
                                    reconhecimento
                                  </strong>
                                  ,{" "}
                                  <strong className="font-semibold text-background">
                                    diferenciação
                                  </strong>{" "}
                                  e{" "}
                                  <strong className="font-semibold text-background">
                                    consistência
                                  </strong>{" "}
                                  em qualquer ponto de contato.
                                </>
                              ) : (
                                paragraph
                              )}
                            </p>
                          ))}
                          {s.n === "02" && (
                            <>
                              <p>
                                Em vez de trabalhar com modelos tradicionais de missão, visão e
                                valores, organizo a construção da marca por meio de{" "}
                                <strong className="font-semibold text-background">
                                  4 perguntas
                                </strong>{" "}
                                que orientam todas as decisões do projeto. A partir delas,
                                definimos como a marca{" "}
                                <strong className="font-semibold text-background">pensa</strong>,{" "}
                                <strong className="font-semibold text-background">age</strong>,{" "}
                                <strong className="font-semibold text-background">
                                  se apresenta
                                </strong>{" "}
                                e{" "}
                                <strong className="font-semibold text-background">
                                  cria conexões
                                </strong>{" "}
                                consistentes com as pessoas:
                              </p>
                              <ul className="space-y-2 pl-5">
                                <li className="list-disc marker:text-lime">
                                  No que a marca{" "}
                                  <strong className="font-semibold text-background">
                                    acredita
                                  </strong>
                                  ?
                                </li>
                                <li className="list-disc marker:text-lime">
                                  Como ela{" "}
                                  <strong className="font-semibold text-background">
                                    transforma
                                  </strong>{" "}
                                  isso em prática?
                                </li>
                                <li className="list-disc marker:text-lime">
                                  Como ela se{" "}
                                  <strong className="font-semibold text-background">
                                    apresenta
                                  </strong>{" "}
                                  ao mundo?
                                </li>
                                <li className="list-disc marker:text-lime">
                                  Como ela{" "}
                                  <strong className="font-semibold text-background">deseja</strong>{" "}
                                  ser lembrada?
                                </li>
                              </ul>
                            </>
                          )}
                        </div>

                        {s.bases && (
                          <div className="grid gap-3 md:grid-cols-2">
                            {s.bases.map((base) => (
                              <div
                                key={base.t}
                                className="rounded-[1rem] border border-background/15 p-4"
                              >
                                <p className="eyebrow text-lime">{base.t}</p>
                                <p className="mt-2 text-sm leading-relaxed text-background/72">
                                  {base.t === "Essência" ? (
                                    <>
                                      O que a marca acredita e{" "}
                                      <strong className="font-semibold text-background">
                                        quais princípios
                                      </strong>{" "}
                                      orientam suas decisões.
                                    </>
                                  ) : base.t === "Materialização" ? (
                                    <>
                                      Como esses princípios{" "}
                                      <strong className="font-semibold text-background">
                                        aparecem
                                      </strong>{" "}
                                      em produtos, serviços, atendimento, processos e ações. A marca
                                      precisa{" "}
                                      <strong className="font-semibold text-background">
                                        comprovar
                                      </strong>{" "}
                                      aquilo que comunica.
                                    </>
                                  ) : base.t === "Expressão" ? (
                                    <>
                                      Como a marca{" "}
                                      <strong className="font-semibold text-background">
                                        ocupa o mundo
                                      </strong>{" "}
                                      por meio da estética, do tom de voz, da fotografia, das formas,
                                      cores e códigos visuais.
                                    </>
                                  ) : base.t === "Impacto" ? (
                                    <>
                                      Como tudo isso{" "}
                                      <strong className="font-semibold text-background">
                                        cria identificação
                                      </strong>
                                      , pertencimento e experiência para as pessoas.
                                    </>
                                  ) : (
                                    base.d
                                  )}
                                </p>
                              </div>
                            ))}
                          </div>
                        )}

                        <div>
                          <p className="eyebrow text-background/50">Tópicos</p>
                          <div className="mt-3 flex flex-wrap gap-2">
                            {s.topics.map((topic) => (
                              <span
                                key={topic}
                                className="rounded-full border border-background/18 px-3 py-1 text-xs uppercase tracking-[0.14em] text-background/70"
                              >
                                {topic}
                              </span>
                            ))}
                          </div>
                        </div>

                        <p className="font-display text-2xl italic text-lime">{s.q}</p>
                      </div>
                    )}
                  </div>
                  <span
                    className={`flex shrink-0 items-center gap-2 pt-1 text-xs uppercase tracking-[0.18em] ${
                      isOpen ? "text-lime" : "text-ink/55 group-hover:text-lime"
                    }`}
                  >
                    <span>{isOpen ? "Fechar" : "Leia mais"}</span>
                    <span className="text-2xl leading-none">{isOpen ? "—" : "+"}</span>
                  </span>
                </div>
              </button>
            );
          })}
        </div>
      </section>

      <section className="bg-background py-8 md:py-14">
        <div className="mx-auto max-w-[1400px] px-6 md:px-10">
          <div className="overflow-hidden rounded-[5px] border border-ink/15 bg-background shadow-2xl">
            <div className="relative aspect-[4/3] overflow-hidden border-b border-ink/15 md:aspect-[16/7]">
              <img
                src={heroCoverMagazine}
                alt="Composição editorial para sistema de marca"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-ink/20" />
              <div className="absolute inset-x-6 top-5 flex items-center justify-between text-background md:inset-x-8">
                <span className="eyebrow text-[10px]">Sistema visual</span>
                <span className="eyebrow text-[10px]">Método · 05 etapas</span>
              </div>
              <div className="absolute inset-x-6 top-1/2 -translate-y-1/2 text-center text-background md:inset-x-10">
                <p className="font-display text-5xl leading-[0.82] md:text-8xl">
                  marca em
                  <span className="block italic text-lime">movimento</span>
                </p>
              </div>
            </div>

            <div className="border-b border-ink/15 px-6 py-12 text-center md:px-16 md:py-16">
              <p className="mx-auto max-w-3xl font-display text-3xl leading-tight md:text-5xl">
                Um sistema de marca organiza estratégia, imagem e presença para que cada ponto de
                contato pareça parte do mesmo universo.
              </p>
            </div>

            <div className="grid border-ink/15 md:grid-cols-[0.9fr_0.95fr_0.9fr_0.9fr]">
              <div className="relative min-h-[360px] overflow-hidden border-b border-ink/15 md:border-b-0 md:border-r">
                <img
                  src={editorialFrames[0].src}
                  alt={editorialFrames[0].alt}
                  className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                />
                <span className="absolute bottom-5 left-5 font-display text-4xl text-background">
                  {editorialFrames[0].n}
                </span>
              </div>

              <div className="flex min-h-[360px] flex-col justify-center border-b border-ink/15 px-7 py-10 md:border-b-0 md:border-r">
                <p className="eyebrow text-editorial">Do conceito à aplicação</p>
                <h2 className="mt-5 font-display text-4xl leading-[0.95]">
                  Direção que vira sistema.
                </h2>
                <p className="mt-6 text-sm leading-relaxed text-ink/65">
                  A construção combina leitura de contexto, arquitetura de marca, identidade,
                  campanha e experiência para sustentar uma presença reconhecível.
                </p>
                <Link
                  to="/contato"
                  className="mt-8 w-fit text-xs uppercase tracking-[0.18em] underline underline-offset-4"
                >
                  Conversar sobre projeto
                </Link>
              </div>

              {editorialFrames.slice(1).map((frame) => (
                <div
                  key={frame.n}
                  className="relative min-h-[360px] overflow-hidden border-b border-ink/15 last:border-b-0 md:border-b-0 md:border-r md:last:border-r-0"
                >
                  <img
                    src={frame.src}
                    alt={frame.alt}
                    className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-ink/5" />
                  <span className="absolute bottom-5 left-5 font-display text-4xl text-background">
                    {frame.n}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-paper/50">
        <div className="mx-auto max-w-[1400px] px-6 md:px-10 py-24">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(320px,0.55fr)] lg:items-end">
            <div>
              <p className="eyebrow text-editorial">O que eu construo</p>
              <h2 className="font-display text-4xl md:text-6xl mt-3 max-w-3xl leading-[1]">
                Cada projeto pede um <span className="lime-underline">sistema diferente</span>.
              </h2>
              <div className="mt-6 max-w-2xl space-y-4 text-ink/70 leading-relaxed">
                <p>Nem toda marca precisa das mesmas entregas.</p>
                <p>
                  Algumas começam pelo posicionamento. Outras precisam reorganizar sua comunicação,
                  criar uma identidade visual, desenvolver campanhas ou estruturar sua presença no
                  mercado.
                </p>
                <p className="font-semibold">
                  Meu trabalho é identificar o que faz sentido para cada contexto e construir um
                  sistema que conecte estratégia, expressão e experiência de forma coerente.
                </p>
              </div>
            </div>

            <Link
              to="/projetos"
              className="group block overflow-hidden rounded-[5px] border border-ink/15 bg-background transition-colors duration-300 hover:border-ink"
            >
              <div className="flex items-center justify-between border-b border-ink/15 px-4 py-3">
                <span className="eyebrow text-[10px] text-editorial">Criações</span>
              </div>
              <div className="relative h-52 overflow-hidden bg-ink">
                <div className="absolute inset-y-0 left-0 flex w-max gap-2 p-2 project-teaser-track group-hover:[animation-play-state:paused]">
                  {[...projectTeasers, ...projectTeasers].map((project, index) => (
                    <div
                      key={`${project.title}-${index}`}
                      className="relative h-full w-32 shrink-0 overflow-hidden rounded-[4px] bg-paper"
                    >
                      <img
                        src={project.image}
                        alt={project.title}
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                        loading="lazy"
                      />
                    </div>
                  ))}
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-ink/35 via-transparent to-ink/35" />
              </div>
              <div className="px-4 py-4">
                <span className="inline-flex text-xs uppercase tracking-[0.18em] text-ink underline underline-offset-4">
                  Ver projetos →
                </span>
              </div>
            </Link>
          </div>

          <div className="mt-14 overflow-hidden rounded-[5px] border border-ink/15 bg-background">
            <div className="grid grid-cols-[minmax(150px,0.9fr)_minmax(0,1.55fr)] items-stretch">
              <div className="relative h-full overflow-hidden border-r border-ink/15">
                <img
                  src={metodoEntregasVitoria}
                  alt="Vitória Marcondes"
                  className="h-full w-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-ink/5" />
                <span className="absolute left-5 top-5 eyebrow text-ink">Quick links</span>
                <span className="absolute bottom-5 left-5 bg-background/90 px-3 py-1 eyebrow text-[10px] text-ink backdrop-blur">
                  Vitória Marcondes
                </span>
              </div>

              <div className="grid grid-rows-5 divide-y divide-ink/15">
                {builds.map((b, i) => (
                  <div
                    key={b.t}
                    className="group grid min-h-[132px] grid-cols-[56px_1fr] transition-colors duration-300 hover:bg-ink hover:text-background sm:grid-cols-[72px_1fr] lg:min-h-[148px]"
                  >
                    <div className="flex items-center justify-center border-r border-ink/15">
                      <span className="origin-center -rotate-90 whitespace-nowrap text-xs font-semibold uppercase tracking-[0.18em] text-editorial group-hover:text-lime sm:text-sm">
                        0{i + 1}
                      </span>
                    </div>
                    <div className="flex flex-col justify-center px-5 py-5 sm:px-8">
                      <h3 className="font-display text-2xl leading-none sm:text-3xl">
                        {b.t}
                      </h3>
                      <p className="mt-3 max-w-3xl text-sm leading-relaxed text-ink/65 group-hover:text-background/75">
                        {b.d}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1400px] px-6 md:px-10 py-24 text-center">
        <p className="font-display text-3xl md:text-5xl italic max-w-4xl mx-auto">
          Marcas não são construídas por etapas isoladas, mas pela conexão entre{" "}
          <span className="lime-underline not-italic">
            estratégia, expressão e experiência
          </span>
          .
        </p>
        <div className="mt-10 flex justify-center gap-3">
          <Link to="/projetos" className="btn-ink">
            Ver projetos →
          </Link>
          <Link to="/contato" className="btn-ghost">
            Conversar
          </Link>
        </div>
      </section>
    </div>
  );
}
