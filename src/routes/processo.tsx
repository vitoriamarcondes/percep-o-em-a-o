import { createFileRoute, Link } from "@tanstack/react-router";
import mood2 from "@/assets/moodboard-2.jpg";

export const Route = createFileRoute("/processo")({
  head: () => ({
    meta: [
      { title: "Processo vivo — Vitória Marcondes" },
      { name: "description", content: "Como eu penso antes de criar. Pesquisa, escuta, observação, referências, tensão, intenção e linguagem." },
      { property: "og:title", content: "Processo vivo — Vitória Marcondes" },
      { property: "og:description", content: "O que parece intuitivo quase sempre foi profundamente observado." },
    ],
  }),
  component: Processo,
});

const blocks = [
  { t: "Pesquisa", d: "Contexto, mercado, cultura, sinais fracos." },
  { t: "Moodboard", d: "Códigos visuais, atmosfera, referências." },
  { t: "Narrativa", d: "Posicionamento em palavras, tese e tom." },
  { t: "Direção visual", d: "Paleta, tipografia, fotografia, símbolos." },
  { t: "Tom de voz", d: "Como a marca fala. O que ela escolhe não dizer." },
  { t: "Campanha", d: "Imaginário e desejo em peças vivas." },
  { t: "Experiência", d: "Eventos, ativações, presença física." },
  { t: "Métrica", d: "Vestígio, feedback, percepção transformada." },
];

function Processo() {
  return (
    <div>
      <section className="mx-auto max-w-[1400px] px-6 md:px-10 pt-16 md:pt-24 pb-12">
        <p className="eyebrow text-editorial">13 · Processo vivo</p>
        <h1 className="font-display text-5xl md:text-8xl mt-4 leading-[0.9] max-w-4xl">
          Como eu <span className="italic">penso</span> antes de criar.
        </h1>
        <div className="grid lg:grid-cols-12 gap-12 mt-12">
          <div className="lg:col-span-7 space-y-5 text-ink/80 leading-relaxed">
            <p>Meu processo não começa abrindo um arquivo de design. Começa entendendo o que precisa ser percebido.</p>
            <p>Eu leio o contexto. Escuto o público. Observo repertórios. Organizo referências. Busco tensão. Defino intenção. Crio linguagem.</p>
            <p>Depois disso, a estética deixa de ser decoração. Ela vira <span className="lime-underline">estratégia visível</span>.</p>
            <p className="font-display text-2xl italic mt-8">
              O que parece intuitivo quase sempre foi profundamente observado.
            </p>
          </div>
          <div className="lg:col-span-5">
            <div className="edito-card overflow-hidden aspect-[4/5]">
              <img src={mood2} alt="" loading="lazy" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1400px] px-6 md:px-10 pb-24">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-3">
          {blocks.map((b, i) => (
            <div key={b.t} className="edito-card p-6 group hover:bg-lime transition-colors duration-300">
              <span className="eyebrow text-editorial group-hover:text-ink">0{i + 1}</span>
              <h3 className="font-display text-2xl mt-6">{b.t}</h3>
              <p className="mt-3 text-sm text-ink/70 group-hover:text-ink/90 leading-relaxed">{b.d}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-mist/40">
        <div className="mx-auto max-w-3xl px-6 md:px-10 py-24 text-center">
          <p className="eyebrow text-editorial">14 · Marcas com propósito</p>
          <h2 className="font-display text-4xl md:text-6xl mt-4 leading-[1]">
            Propósito não é discurso. É <span className="italic">comportamento</span> traduzido em linguagem.
          </h2>
          <div className="mt-10 space-y-5 text-ink/80 leading-relaxed">
            <p>Trabalho com marcas que têm algo real para sustentar: uma causa, uma visão, uma mudança de percepção ou um jeito mais consciente de existir no mercado.</p>
            <p>Propósito precisa aparecer no tom, na imagem, na campanha, na experiência, na forma de se relacionar.</p>
            <p className="font-display text-2xl italic">Uma marca com propósito não precisa parecer perfeita. Precisa parecer <span className="lime-underline not-italic">inteira</span>.</p>
          </div>
          <div className="mt-12">
            <Link to="/contato" className="btn-ink">Trabalhar comigo →</Link>
          </div>
        </div>
      </section>
    </div>
  );
}