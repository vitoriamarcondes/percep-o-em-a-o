import { createFileRoute } from "@tanstack/react-router";
import { TypewriterText } from "@/components/typewriter-text";
import { buildSeo } from "@/lib/seo";

export const Route = createFileRoute("/contato")({
  head: () =>
    buildSeo({
      title: "Contato para estratégia de marca e direção criativa · Vitória Marcondes",
      description:
        "Se a sua marca precisa de mais do que aparência, talvez ela precise de direção. Vamos conversar sobre estratégia de marca, presença e comunicação.",
      path: "/contato",
      ogTitle: "Contato — Vitória Marcondes",
      ogDescription:
        "Vamos construir uma presença mais clara, sensível e estrategicamente desejável.",
    }),
  component: Contato,
});

function Contato() {
  return (
    <div className="mx-auto max-w-[1400px] px-6 md:px-10 py-16 md:py-24">
      <p className="eyebrow text-editorial">16 · Contato · Fechamento editorial</p>
      <TypewriterText
        as="h1"
        speed={32}
        className="font-display text-5xl md:text-8xl mt-4 leading-[0.9] max-w-5xl"
        segments={[
          { text: "Se a sua marca precisa de mais do que aparência, talvez ela precise de " },
          { text: "direção", className: "italic lime-underline" },
          { text: "." },
        ]}
      />
      <p className="mt-10 max-w-2xl text-ink/75 text-lg leading-relaxed">
        Vamos construir uma presença mais clara, sensível e estrategicamente desejável.
      </p>

      <div className="grid lg:grid-cols-12 gap-10 mt-16">
        <div className="lg:col-span-7">
          <form
            className="edito-card p-8 md:p-10 space-y-6"
            onSubmit={(e) => {
              e.preventDefault();
              window.location.href = "mailto:ola@vitoriamarcondes.com";
            }}
          >
            <Field label="Nome" name="nome" autoComplete="name" placeholder="Como você assina." />
            <Field
              label="Marca / Projeto"
              name="marca"
              autoComplete="organization"
              placeholder="O que você está construindo."
            />
            <Field
              label="E-mail"
              name="email"
              type="email"
              autoComplete="email"
              placeholder="Para onde devo responder."
            />
            <div>
              <label htmlFor="contato-mensagem" className="eyebrow text-editorial">
                O que precisa ser percebido?
              </label>
              <textarea
                id="contato-mensagem"
                name="mensagem"
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
            <p className="text-sm text-background/70 mt-2">
              Brand Strategy · Creative Direction · Visual Storytelling
            </p>
          </div>
          <ContactRow
            label="E-mail"
            value="ola@vitoriamarcondes.com"
            href="mailto:ola@vitoriamarcondes.com"
          />
          <ContactRow
            label="LinkedIn"
            value="/in/vitoriamarcondes"
            href="https://www.linkedin.com/in/vitoriamarcondes/"
          />
          <ContactRow
            label="Instagram"
            value="@vitoriamarcondes"
            href="https://www.instagram.com/vitoriamarcondes/"
          />
          <ContactRow
            label="Currículo"
            value="Solicitar por e-mail"
            href="mailto:ola@vitoriamarcondes.com?subject=Solicita%C3%A7%C3%A3o%20de%20curr%C3%ADculo"
          />
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

function Field({
  label,
  name,
  placeholder,
  type = "text",
  autoComplete,
}: {
  label: string;
  name: string;
  placeholder: string;
  type?: string;
  autoComplete?: string;
}) {
  const id = `contato-${name}`;
  return (
    <div>
      <label htmlFor={id} className="eyebrow text-editorial">
        {label}
      </label>
      <input
        id={id}
        name={name}
        type={type}
        autoComplete={autoComplete}
        placeholder={placeholder}
        className="w-full mt-3 bg-transparent border-b border-ink/30 focus:border-lime outline-none py-3 text-base font-display"
      />
    </div>
  );
}

function ContactRow({ label, value, href }: { label: string; value: string; href: string }) {
  return (
    <a
      href={href}
      className="edito-card p-6 flex items-center justify-between group hover:bg-lime transition-colors"
    >
      <div>
        <p className="eyebrow text-editorial">{label}</p>
        <p className="font-display text-lg mt-1">{value}</p>
      </div>
      <span className="text-2xl group-hover:translate-x-1 transition-transform">→</span>
    </a>
  );
}
