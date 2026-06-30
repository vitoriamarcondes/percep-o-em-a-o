import { createFileRoute, Link } from "@tanstack/react-router";
import portrait from "@/assets/vitoria-portrait.jpg";
import moodboardSite from "@/assets/moodboard-site.png";
import { buildSeo } from "@/lib/seo";

export const Route = createFileRoute("/olhar")({
  head: () =>
    buildSeo({
      title: "Olhar estratégico para marcas · Vitória Marcondes",
      description:
        "Sou Vitória Marcondes. Antes de criar, eu leio contexto, público, mercado e percepção. Depois, traduzo isso em linguagem.",
      path: "/olhar",
      ogTitle: "O olhar — Vitória Marcondes",
      ogDescription: "O que parece estética, para mim, começa como leitura.",
      type: "profile",
    }),
  component: Olhar,
});

function Olhar() {
  return (
    <div className="mx-auto max-w-[1400px] px-6 md:px-10 py-16 md:py-24">
      <div className="grid lg:grid-cols-12 gap-12 items-start">
        <div className="lg:col-span-7">
          <p className="eyebrow text-editorial">Sobre mim · Tese editorial</p>
          <h1 className="font-display text-5xl md:text-[4rem] mt-4 leading-[0.9]">
            Toda marca é uma forma de{" "}
            <span className="lime-underline italic">enxergar o mundo</span>.
          </h1>
          <div className="mt-12 max-w-xl text-ink/80 leading-relaxed space-y-5 text-base">
            <p>
              <strong className="font-semibold">
                Sou Vitória Marcondes, estrategista de marca e diretora criativa.
              </strong>{" "}
              Desenvolvo projetos na interseção entre{" "}
              <strong className="font-semibold">
                Brand Strategy, Direção Criativa e Comunicação
              </strong>
              , conectando{" "}
              <strong className="font-semibold">
                pesquisa, comportamento, mercado e expressão
              </strong>{" "}
              para construir marcas mais relevantes.
            </p>
            <p>
              Não separo estratégia de criação.{" "}
              <strong className="font-semibold">
                Pesquisa, posicionamento, direção criativa e comunicação
              </strong>{" "}
              fazem parte do mesmo processo. É dessa integração que surgem marcas mais consistentes,
              campanhas mais relevantes e experiências que permanecem na memória.
            </p>
            <p>
              Ao longo da minha trajetória, atuei em projetos de{" "}
              <strong className="font-semibold">
                branding, campanhas institucionais, comunicação pública, marketing, ESG e
                iniciativas de impacto social
              </strong>
              . Transitar por diferentes mercados ampliou meu repertório e desenvolveu minha forma
              de trabalhar que combina{" "}
              <strong className="font-semibold">
                investigação estratégica, sensibilidade criativa e visão de negócio
              </strong>
              .
            </p>
            <p>
              Hoje desenvolvo <strong className="font-semibold">sistemas de marca</strong> capazes
              de orientar{" "}
              <strong className="font-semibold">
                identidade, campanhas, conteúdo, experiências e relacionamento
              </strong>
              , considerando o contexto cultural, os objetivos do negócio e as pessoas que fazem
              parte desse conjunto.
            </p>
          </div>
          <a
            href="/vitoria-marcondes-curriculo.pdf"
            download
            className="edito-card group mt-8 flex max-w-lg items-center justify-between gap-6 bg-mist/40 p-5 text-ink transition-colors duration-300 hover:bg-lime md:p-6"
          >
            <span>
              <span className="eyebrow text-editorial group-hover:text-ink">Currículo</span>
              <span className="mt-2 block font-display text-2xl italic leading-tight">
                Baixar currículo completo
              </span>
            </span>
            <span className="shrink-0 text-3xl leading-none transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </a>
          <div className="edito-card mt-12 max-w-lg bg-ink p-5 text-background md:p-6">
            <p className="eyebrow text-lime">Tese de atuação</p>
            <p className="mt-3 font-display text-2xl md:text-3xl italic leading-snug">
              Direção criativa orientada por{" "}
              <span className="not-italic text-lime">estratégia, comportamento, cultura e mercado</span>
              .
            </p>
          </div>

          <div className="mt-14 flex flex-wrap gap-2.5">
            {[
              "Brand Strategy",
              "Creative Direction",
              "Consumer Insights",
              "Brand Positioning",
              "Market Intelligence",
              "Brand Experience",
            ].map((t) => (
              <span key={t} className="pill !text-[10px] !py-2">
                {t}
              </span>
            ))}
          </div>

          <div className="mt-12">
            <p className="eyebrow text-editorial mb-4">Mosaico · referências em movimento</p>
            <div className="overflow-hidden rounded-xl bg-mist/40 ring-1 ring-ink/10 shadow-sm">
              <img
                src={moodboardSite}
                alt="Moodboard editorial com referências visuais em cores e preto e branco"
                loading="lazy"
                className="block h-auto w-full"
              />
            </div>
          </div>
        </div>

        <div className="lg:col-span-5 space-y-5 lg:sticky lg:top-24">
          <div className="edito-card aspect-[4/5] relative">
            <img src={portrait} alt="Vitória Marcondes" className="w-full h-full object-cover" />
            <span className="absolute bottom-5 left-5 bg-background/90 backdrop-blur rounded-full px-3 py-1 eyebrow text-[10px]">
              Vitória Marcondes
            </span>
          </div>
          <div className="edito-card p-6 bg-mist/40">
            <p className="eyebrow text-editorial mb-3">Repertório</p>
            <p className="font-display text-xl italic leading-snug">
              Toda decisão criativa parte da compreensão das pessoas, do contexto e das referências
              que influenciam seu público.
            </p>
          </div>
        </div>
      </div>

      <div className="mt-24 flex flex-wrap gap-3">
        <Link to="/metodo" className="btn-ink">
          Conhecer o método →
        </Link>
        <Link to="/projetos" className="btn-ghost">
          Ver projetos
        </Link>
      </div>
    </div>
  );
}
