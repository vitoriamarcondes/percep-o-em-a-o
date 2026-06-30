import { createFileRoute, Link } from "@tanstack/react-router";
import processoMoodboard from "@/assets/processo-moodboard.jpeg";
import { buildSeo } from "@/lib/seo";

export const Route = createFileRoute("/processo")({
  head: () =>
    buildSeo({
      title: "Processo de branding e direção criativa · Vitória Marcondes",
      description:
        "Como eu penso antes de criar. Pesquisa, escuta, observação, referências, tensão, intenção e linguagem para marcas com presença.",
      path: "/processo",
      ogTitle: "Processo vivo — Vitória Marcondes",
      ogDescription: "O que parece intuitivo quase sempre foi profundamente observado.",
    }),
  component: Processo,
});

const blocks = [
  {
    t: "Pesquisa",
    d: "Mercado, comportamento, cultura, concorrência e oportunidades de posicionamento.",
  },
  {
    t: "Moodboard",
    d: "Referências visuais, códigos estéticos, territórios de marca e direções criativas.",
  },
  {
    t: "Narrativa",
    d: "Posicionamento, proposta de valor, personalidade, linguagem e mensagens-chave.",
  },
  {
    t: "Sistema Visual",
    d: "Identidade visual, tipografia, paleta, fotografia e elementos de reconhecimento.",
  },
  { t: "Tom de voz", d: "Linguagem, critérios editoriais e consistência na comunicação." },
  {
    t: "Campanha",
    d: "Conceito criativo, narrativa, ativações e construção de valor percebido.",
  },
  {
    t: "Experiência",
    d: "Experiência da marca, ativações, eventos e relacionamento com o público.",
  },
  { t: "Métrica", d: "Vestígio, feedback, percepção transformada." },
];

function Processo() {
  return (
    <div>
      <section className="mx-auto max-w-[1400px] px-6 md:px-10 pt-16 md:pt-24 pb-12">
        <p className="eyebrow text-editorial">13 · Processo de criação</p>
        <h1 className="font-display text-5xl md:text-7xl mt-4 leading-[0.9] max-w-5xl">
          Da pesquisa à <span className="lime-underline italic">criação</span>.
        </h1>
        <div className="grid lg:grid-cols-12 gap-12 mt-12">
          <div className="lg:col-span-7">
            <div className="space-y-5 text-ink/80 leading-relaxed">
              <p>
                <strong className="font-semibold">Pesquisa, comportamento e repertório</strong>{" "}
                estruturam o início de cada projeto. É nesse momento que organizo{" "}
                <strong className="font-semibold">
                  referências, identifico oportunidades
                </strong>{" "}
                e <strong className="font-semibold">construo os critérios</strong> que vão orientar
                todas as escolhas seguintes.
              </p>
              <p>
                Quando essa base está definida,{" "}
                <strong className="font-semibold">identidade</strong>,{" "}
                <strong className="font-semibold">linguagem</strong>,{" "}
                <strong className="font-semibold">campanhas</strong> e{" "}
                <strong className="font-semibold">experiências</strong> passam a fazer parte de um
                mesmo sistema, aumentando a{" "}
                <strong className="font-semibold">presença e o valor percebido</strong> da marca.
              </p>
              <p className="edito-card bg-mist/40 px-5 py-4 font-display text-lg md:text-xl italic text-ink">
                Toda escolha criativa precisa responder a uma intenção estratégica.
              </p>
            </div>

            <div className="mt-10 grid grid-cols-2 gap-3 xl:grid-cols-4">
              {blocks.map((b, i) => (
                <div
                  key={b.t}
                  className="edito-card group relative overflow-hidden bg-background p-4 shadow-sm ring-1 ring-ink/10 transition-colors duration-300 hover:bg-ink hover:text-background hover:ring-lime"
                >
                  <span className="absolute inset-x-0 top-0 h-1 bg-lime" />
                  <span className="eyebrow inline-flex h-7 w-7 items-center justify-center rounded-full bg-lime text-ink">
                    0{i + 1}
                  </span>
                  <h3 className="mt-5 font-display text-xl font-semibold leading-tight">{b.t}</h3>
                  <p className="mt-3 text-xs font-medium leading-relaxed text-ink/70 group-hover:text-background/80">
                    {b.d}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className="lg:col-span-5">
            <div className="edito-card overflow-hidden aspect-[4/5]">
              <img
                src={processoMoodboard}
                alt="Vitória organizando referências em um moodboard visual"
                loading="lazy"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-mist/40">
        <div className="mx-auto max-w-3xl px-6 md:px-10 py-24 text-center">
          <p className="eyebrow text-editorial">14 · Valor de Marca</p>
          <h2 className="font-display mt-4 text-4xl leading-[1.02] md:text-5xl">
            Marcas relevantes alinham
            <span className="block">
              <span className="lime-underline">intenção</span>,{" "}
              <span className="lime-underline italic">comportamento</span> e
            </span>
            <span className="block">
              <span className="lime-underline">comunicação</span>.
            </span>
          </h2>
          <div className="mt-10 space-y-5 text-ink/80 leading-relaxed">
            <p>
              Quando propósito faz parte da estratégia, ele deixa de ser um discurso institucional e
              passa a orientar a forma como a marca se posiciona, se relaciona e entrega valor.
            </p>
            <p>
              É essa coerência que melhora a reputação, gera identificação e constrói relações de
              longo prazo.
            </p>
          </div>
          <div className="mt-12">
            <Link to="/contato" className="btn-ink">
              Trabalhar comigo →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
