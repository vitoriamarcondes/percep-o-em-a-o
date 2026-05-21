import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/contato")({
  head: () => ({
    meta: [
      { title: "Contato — Vitória Marcondes" },
      { name: "description", content: "Se a sua marca precisa de mais do que aparência, talvez ela precise de direção. Vamos conversar." },
      { property: "og:title", content: "Contato — Vitória Marcondes" },
      { property: "og:description", content: "Vamos construir uma presença mais clara, sensível e estrategicamente desejável." },
    ],
  }),
  component: Contato,
});

function Contato() {
  return (
    <div className="mx-auto max-w-[1400px] px-6 md:px-10 py-16 md:py-24">
      <p className="eyebrow text-editorial">16 · Contato · Fechamento editorial</p>
      <h1 className="font-display text-5xl md:text-8xl mt-4 leading-[0.9] max-w-5xl">
        Se a sua marca precisa de mais do que aparência, talvez ela precise de <span className="italic">direção</span>.
      </h1>
      <p className="mt-10 max-w-2xl text-ink/75 text-lg leading-relaxed">
        Vamos construir uma presença mais clara, sensível e estrategicamente desejável.
      </p>

      <div className="grid lg:grid-cols-12 gap-10 mt-16">
        <div className="lg:col-span-7">
          <form className="edito-card p-8 md:p-10 space-y-6" onSubmit={(e) => { e.preventDefault(); window.location.href = "mailto:ola@vitoriamarcondes.com"; }}>
            <Field label="Nome" placeholder="Como você assina." />
            <Field label="Marca / Projeto" placeholder="O que você está construindo." />
            <Field label="E-mail" type="email" placeholder="Para onde devo responder." />
            <div>
              <label className="eyebrow text-editorial">O que precisa ser percebido?</label>
              <textarea
                rows={5}
                placeholder="Conte brevemente onde a marca está e o que precisa mudar."
                className="w-full mt-3 bg-transparent border-b border-ink/30 focus:border-lime outline-none py-3 text-base font-display resize-none"
              />
            </div>
            <button className="btn-ink w-full justify-center">Enviar mensagem →</button>
          </form>
        </div>

        <div className="lg:col-span-5 space-y-5">
          <div className="edito-card p-7 bg-ink text-background">
            <p className="eyebrow text-lime mb-3">Assinatura</p>
            <p className="font-display text-3xl">Vitória Marcondes</p>
            <p className="text-sm text-background/70 mt-2">Brand Strategy · Creative Direction · Visual Storytelling</p>
          </div>
          <ContactRow label="E-mail" value="ola@vitoriamarcondes.com" href="mailto:ola@vitoriamarcondes.com" />
          <ContactRow label="LinkedIn" value="/in/vitoriamarcondes" href="#" />
          <ContactRow label="Instagram" value="@vitoriamarcondes" href="#" />
          <ContactRow label="Currículo" value="Download PDF" href="#" />
          <div className="edito-card p-7 bg-mist/40">
            <p className="font-display text-2xl italic">
              Transformo <span className="lime-underline not-italic">percepção</span> em presença.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Field({ label, placeholder, type = "text" }: { label: string; placeholder: string; type?: string }) {
  return (
    <div>
      <label className="eyebrow text-editorial">{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        className="w-full mt-3 bg-transparent border-b border-ink/30 focus:border-lime outline-none py-3 text-base font-display"
      />
    </div>
  );
}

function ContactRow({ label, value, href }: { label: string; value: string; href: string }) {
  return (
    <a href={href} className="edito-card p-6 flex items-center justify-between group hover:bg-lime transition-colors">
      <div>
        <p className="eyebrow text-editorial">{label}</p>
        <p className="font-display text-lg mt-1">{value}</p>
      </div>
      <span className="text-2xl group-hover:translate-x-1 transition-transform">→</span>
    </a>
  );
}