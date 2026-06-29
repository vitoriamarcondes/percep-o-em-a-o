import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
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

function Metodo() {
  const [open, setOpen] = useState<string>("01");

  return (
    <div>
      <section className="mx-auto max-w-[1400px] px-6 md:px-10 pt-16 md:pt-24 pb-12">
        <p className="eyebrow text-editorial">Método · Sistema de Marca</p>
        <h1 className="font-display text-5xl md:text-8xl mt-4 leading-[0.9] max-w-4xl">
          Construção de sistemas de marca em <span className="italic lime-underline">cinco etapas</span>.
        </h1>
        <p className="mt-8 max-w-2xl text-ink/75 text-lg leading-relaxed">
          Cada projeto nasce de uma investigação estratégica e evolui para um sistema capaz de
          orientar identidade, comunicação, campanhas e experiência de marca. O objetivo não é
          apenas criar uma boa imagem, mas construir uma presença consistente e relevante ao longo
          do tempo.
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
                className={`edito-card w-full text-left p-6 md:p-8 transition-all duration-500 ${
                  isOpen ? "bg-ink text-background" : "hover:border-lime"
                }`}
              >
                <div className="flex items-start gap-6 md:gap-12">
                  <span
                    className={`font-display text-5xl md:text-7xl leading-none ${
                      isOpen ? "text-lime" : "text-editorial"
                    }`}
                  >
                    {s.n}
                  </span>
                  <div className="flex-1">
                    <h3 className="font-display text-3xl md:text-5xl">{s.title}</h3>
                    <p
                      className={`mt-3 text-base md:text-lg ${
                        isOpen ? "text-background/80" : "text-ink/75"
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
                  <span className={`text-2xl ${isOpen ? "text-lime" : "text-ink/40"}`}>
                    {isOpen ? "—" : "+"}
                  </span>
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
            Cada projeto pede um <span className="lime-underline">sistema diferente</span>.
          </h2>
          <div className="mt-6 max-w-2xl space-y-4 text-ink/70 leading-relaxed">
            <p>Nem toda marca precisa das mesmas entregas.</p>
            <p>
              Algumas começam pelo posicionamento. Outras precisam reorganizar sua comunicação,
              criar uma identidade visual, desenvolver campanhas ou estruturar sua presença no
              mercado.
            </p>
            <p>
              Meu trabalho é identificar o que faz sentido para cada contexto e construir um
              sistema que conecte estratégia, expressão e experiência de forma coerente.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mt-12">
            {builds.map((b, i) => (
              <div
                key={b.t}
                className="edito-card p-7 group hover:bg-ink hover:text-background transition-colors duration-500"
              >
                <span className="eyebrow text-editorial group-hover:text-lime">0{i + 1}</span>
                <h3 className="font-display text-2xl mt-6">{b.t}</h3>
                <p className="mt-3 text-sm opacity-75 leading-relaxed">{b.d}</p>
              </div>
            ))}
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
