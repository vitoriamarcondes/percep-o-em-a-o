import { createFileRoute, Link } from "@tanstack/react-router";
import portrait from "@/assets/vitoria-portrait.jpg";
import olharRevista from "@/assets/olhar-revista.png";
import heroEditorial from "@/assets/hero-editorial.jpg";
import heroCoverCollageBw from "@/assets/hero-cover-collage-bw.jpeg";
import heroCoverWall from "@/assets/hero-cover-wall.png";
import marcaValorPercebido from "@/assets/marca-valor-percebido.jpeg";
import heroCoverMagazine from "@/assets/hero-cover-magazine.png";
import { buildSeo } from "@/lib/seo";

const mosaicImages = [
  { src: heroCoverMagazine, alt: "Revista aberta com referências de moda" },
  { src: heroEditorial, alt: "Retrato editorial" },
  { src: heroCoverCollageBw, alt: "Pesquisa visual em preto e branco" },
  { src: heroCoverWall, alt: "Painel de referências visuais" },
  { src: marcaValorPercebido, alt: "Processo criativo no tablet" },
  { src: olharRevista, alt: "Revista editorial sobre a mesa" },
];

// Spans que ladrilham um bloco 4×3 no desktop (focal 2×2, uma vertical, duas faixas largas).
const mosaicSpans = [
  "sm:col-span-2 sm:row-span-2",
  "",
  "sm:row-span-2",
  "",
  "sm:col-span-2",
  "sm:col-span-2",
];

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
          <p className="eyebrow text-editorial">O Olhar · Tese editorial</p>
          <h1 className="font-display text-5xl md:text-8xl mt-4 leading-[0.9]">
            Meu olhar começa <span className="italic">antes</span> da imagem.
          </h1>
          <div className="mt-12 max-w-xl text-ink/80 leading-relaxed space-y-5 text-base">
            <p>
              Sou Vitória Marcondes. Trabalho com estratégia de marca, direção criativa e
              comunicação para transformar intenção em linguagem.
            </p>
            <p>
              Antes de criar, eu leio contexto, público, mercado, comportamento e percepção. Depois,
              traduzo isso em imagem, palavra, campanha, conteúdo, experiência e presença.
            </p>
            <p>
              Não penso marcas como peças soltas. Penso como sistemas de percepção: com voz, imagem,
              ritmo, atmosfera, símbolos, desejo e memória.
            </p>
          </div>
          <p className="mt-12 font-display text-3xl md:text-4xl italic max-w-xl leading-snug">
            O que parece estética, para mim, começa como{" "}
            <span className="lime-underline not-italic">leitura</span>.
          </p>

          <div className="mt-14 flex flex-wrap gap-2.5">
            {[
              "visual code",
              "brand feeling",
              "perception shift",
              "tone direction",
              "atmosphere",
              "from insight to atmosphere",
            ].map((t) => (
              <span key={t} className="pill !text-[10px] !py-2">
                {t}
              </span>
            ))}
          </div>

          <div className="mt-12">
            <p className="eyebrow text-editorial mb-4">Mosaico · referências em movimento</p>
            <div className="grid grid-cols-2 sm:grid-cols-4 auto-rows-[110px] sm:auto-rows-[150px] gap-2 grid-flow-dense">
              {mosaicImages.map((m, i) => (
                <div key={m.src} className={`overflow-hidden rounded-xl ${mosaicSpans[i]}`}>
                  <img
                    src={m.src}
                    alt={m.alt}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  />
                </div>
              ))}
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
              Atravessar mercados diferentes me ensinou a ler pessoas antes de criar para marcas.
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
