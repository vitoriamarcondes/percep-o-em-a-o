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
          <h1 className="font-display text-5xl md:text-7xl mt-4 leading-[0.9]">
            Toda marca é uma forma de{" "}
            <span className="lime-underline italic">enxergar o mundo</span>.
          </h1>
          <div className="mt-12 max-w-xl text-ink/80 leading-relaxed space-y-5 text-base">
            <p>
              Sou Vitória Marcondes, estrategista de marca e diretora criativa. Desenvolvo projetos
              na interseção entre Brand Strategy, Direção Criativa e Comunicação, conectando
              pesquisa, comportamento, mercado e expressão para construir marcas mais relevantes.
            </p>
            <p>
              Não separo estratégia de criação. Pesquisa, posicionamento, direção criativa e
              comunicação fazem parte do mesmo processo. É dessa integração que surgem marcas mais
              consistentes, campanhas mais relevantes e experiências que permanecem na memória.
            </p>
            <p>
              Ao longo da minha trajetória, atuei em projetos de branding, campanhas institucionais,
              comunicação pública, marketing, ESG e iniciativas de impacto social. Transitar por
              diferentes mercados ampliou meu repertório e fortaleceu uma forma de trabalhar que
              combina investigação estratégica, sensibilidade criativa e visão de negócio.
            </p>
            <p>
              Hoje desenvolvo sistemas de marca capazes de orientar identidade, campanhas, conteúdo,
              experiências e relacionamento, considerando o contexto cultural, os objetivos do
              negócio e as pessoas que fazem parte dessa construção.
            </p>
          </div>
          <p className="mt-12 font-display text-3xl md:text-4xl italic max-w-xl leading-snug">
            Direção criativa orientada por{" "}
            <span className="lime-underline not-italic">
              estratégia, comportamento, cultura e mercado
            </span>
            .
          </p>

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
              Vitória Marcondes · São Paulo
            </span>
          </div>
          <div className="edito-card p-6 bg-mist/40">
            <p className="eyebrow text-editorial mb-3">Repertório</p>
            <p className="font-display text-xl italic leading-snug">
              Toda decisão criativa parte da compreensão das pessoas, do contexto e das dinâmicas do mercado.
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
