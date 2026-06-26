import { createFileRoute, Link, useLocation } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { projects, FILTERS } from "@/data/projects";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { ArrowLeft, ArrowRight, X } from "lucide-react";

const isVideoMedia = (media: string) => media.toLowerCase().endsWith(".mp4");

const getHashProjectId = (hash: string) => {
  const projectId = hash.replace("#", "");

  return projects.some((p) => p.id === projectId) ? projectId : null;
};

const getSearchProjectId = (search: unknown) => {
  if (typeof search === "string") {
    const projectId = new URLSearchParams(search).get("project");

    return projectId && projects.some((p) => p.id === projectId) ? projectId : null;
  }

  if (!search || typeof search !== "object" || !("project" in search)) {
    return null;
  }

  const projectId = String(search.project);

  return projects.some((p) => p.id === projectId) ? projectId : null;
};

function InstagramLinks({ value }: { value: string }) {
  const handles = value.match(/@[a-zA-Z0-9._]+/g) ?? [];

  return (
    <p className="mt-3 text-sm leading-relaxed text-ink/55">
      Instagram:{" "}
      {handles.map((handle, index) => (
        <span key={handle}>
          {index > 0 && " · "}
          <a
            href={`https://www.instagram.com/${handle.slice(1)}/`}
            target="_blank"
            rel="noreferrer"
            className="underline decoration-ink/25 underline-offset-4 transition-colors hover:text-editorial hover:decoration-editorial"
          >
            {handle}
          </a>
        </span>
      ))}
    </p>
  );
}

export const Route = createFileRoute("/projetos")({
  head: () => ({
    meta: [
      { title: "Universos construídos — Projetos · Vitória Marcondes" },
      { name: "description", content: "Projetos de marca, campanha, conteúdo e experiência apresentados pelo que criaram: clareza, desejo, estrutura, narrativa e presença." },
      { property: "og:title", content: "Universos construídos — Projetos" },
      { property: "og:description", content: "Cada projeto parte de uma pergunta: o que precisava mudar na percepção?" },
    ],
  }),
  component: Projetos,
});

function Projetos() {
  const location = useLocation();
  const [filter, setFilter] = useState<string>("Todos");
  const [active, setActive] = useState<string | null>(() =>
    typeof window === "undefined"
      ? getSearchProjectId(location.search)
      : getHashProjectId(window.location.hash) ?? getSearchProjectId(window.location.search),
  );
  const visible = projects
    .filter((p) => filter === "Todos" || p.filters.includes(filter))
    .sort((a, b) => Number(a.number) - Number(b.number));
  const hashProjectId =
    typeof window === "undefined" ? null : getHashProjectId(location.hash || window.location.hash);
  const searchProjectId =
    typeof window === "undefined"
      ? getSearchProjectId(location.search)
      : getSearchProjectId(window.location.search);
  const activeProject = projects.find((p) => p.id === (active ?? searchProjectId ?? hashProjectId));

  useEffect(() => {
    const syncProjectFromHash = () => {
      setActive(
        getSearchProjectId(window.location.search) ??
          getHashProjectId(location.hash || window.location.hash),
      );
    };

    syncProjectFromHash();
    window.addEventListener("hashchange", syncProjectFromHash);

    return () => window.removeEventListener("hashchange", syncProjectFromHash);
  }, [location.hash]);

  const openProject = (projectId: string) => {
    window.history.replaceState(null, "", `?project=${projectId}`);
    setActive(projectId);
  };

  const closeProject = () => {
    window.history.replaceState(null, "", window.location.pathname);
    setActive(null);
    requestAnimationFrame(() => {
      document.getElementById("filtrar-territorio")?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    });
  };

  return (
    <div>
      {/* Transition intro */}
      <section className="bg-ink text-background">
        <div className="mx-auto max-w-[1400px] px-6 md:px-10 py-24 md:py-32">
          <p className="eyebrow text-lime">Transição editorial · 10</p>
          <h1 className="font-display text-5xl md:text-8xl mt-6 leading-[0.9] max-w-4xl">
            Os projetos aparecem pelo que <span className="italic">transformaram</span>.
          </h1>
          <div className="mt-10 max-w-2xl text-background/75 space-y-4 leading-relaxed">
            <p>Não apresento lugares como protagonistas. Apresento raciocínios, decisões e mudanças de percepção.</p>
            <p className="font-display italic text-xl">
              Cada projeto parte de uma pergunta:<br />
              <span className="text-lime">"O que precisava mudar na forma como essa marca, campanha ou experiência era percebida?"</span>
            </p>
          </div>
        </div>
      </section>

      <section id="filtrar-territorio" className="mx-auto max-w-[1400px] px-6 md:px-10 py-16">
        <div className="flex items-end justify-between flex-wrap gap-6 mb-10">
          <div>
            <p className="eyebrow text-editorial">11 · Universos construídos</p>
            <h2 className="font-display text-4xl md:text-5xl mt-3">
              Explorar por universo criativo
            </h2>
          </div>
          <div className="flex flex-wrap gap-2">
            {FILTERS.map((f) => (
              <button key={f} className="pill" data-active={filter === f} onClick={() => setFilter(f)}>
                {f}
              </button>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {visible.map((p, i) => (
            <article
              key={p.id}
              id={p.id}
              className={`edito-card overflow-hidden group ${i % 3 === 0 ? "md:col-span-2" : ""}`}
            >
              <div className={`grid ${i % 3 === 0 ? "md:grid-cols-2" : ""} gap-0`}>
                <div className={`relative overflow-hidden ${i % 3 === 0 ? "aspect-[4/3] md:aspect-auto" : "aspect-[4/3]"}`}>
                  {!p.image ? (
                    <ProjectTextCover project={p} compact={i % 3 !== 0} />
                  ) : isVideoMedia(p.image) ? (
                    <video
                      src={p.image}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      autoPlay
                      loop
                      muted
                      playsInline
                      preload="metadata"
                    />
                  ) : (
                    <img
                      src={p.image}
                      alt={p.title}
                      loading="lazy"
                      className={`w-full h-full group-hover:scale-105 transition-transform duration-700 ${
                        p.id === "presenca-permanece" ? "object-contain bg-ink" : "object-cover"
                      }`}
                    />
                  )}
                  <span className="absolute top-5 left-5 bg-background/90 backdrop-blur rounded-full px-3 py-1 eyebrow text-[10px]">
                    Nº {p.number} · processo de criação
                  </span>
                </div>
                <div className="p-8 md:p-10 flex flex-col">
                  <p className="eyebrow text-editorial">{p.context}</p>
                  <h3 className="font-display text-3xl md:text-4xl mt-4 leading-[1]">{p.title}</h3>
                  <p className="mt-4 text-xs uppercase tracking-wider text-ink/55">{p.category}</p>
                  <p className="mt-6 text-sm text-ink/75 leading-relaxed">{p.resume}</p>
                  <div className="mt-6 pt-6 border-t border-ink/10">
                    <p className="eyebrow text-editorial mb-2">Síntese</p>
                    <p className="font-display text-xl italic">{p.synthesis}</p>
                  </div>
                  <button onClick={() => openProject(p.id)} className="btn-ink mt-8 self-start">
                    Abrir criação →
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Modal */}
      {activeProject && (
        <div className="fixed inset-0 z-[80] bg-ink/70 backdrop-blur-sm overflow-y-auto" onClick={closeProject}>
          <div
            className="min-h-full flex items-start justify-center p-4 md:p-10"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="bg-background rounded-3xl max-w-4xl w-full overflow-hidden">
              <div className="relative">
                {activeProject.image ? (
                  <ProjectGallery
                    images={activeProject.gallery ?? [activeProject.image]}
                    title={activeProject.title}
                  />
                ) : (
                  <ProjectTextCover project={activeProject} />
                )}
                <button onClick={closeProject} className="absolute top-5 right-5 bg-background rounded-full w-10 h-10 flex items-center justify-center hover:bg-lime">
                  ×
                </button>
              </div>
              <div className="p-8 md:p-12">
                <p className="eyebrow text-editorial">{activeProject.context} · Nº {activeProject.number}</p>
                <h3 className="font-display text-4xl md:text-5xl mt-4 leading-[1]">{activeProject.title}</h3>
                <p className="mt-3 text-xs uppercase tracking-wider text-ink/55">{activeProject.category}</p>

                <ProjectDetailBlocks project={activeProject} />

                <div className="mt-10 flex flex-wrap gap-2">
                  {activeProject.filters.map((f) => (
                    <span key={f} className="pill !text-[10px]">{f}</span>
                  ))}
                </div>

                <button onClick={closeProject} className="btn-ghost mt-10">← Voltar aos projetos</button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Feedbacks */}
      <section className="bg-paper/40">
        <div className="mx-auto max-w-[1400px] px-6 md:px-10 py-24">
          <p className="eyebrow text-editorial">15 · Vestígios</p>
          <h2 className="font-display text-4xl md:text-6xl mt-3 max-w-3xl leading-[1]">
            O que fica depois da entrega.
          </h2>
          <p className="mt-6 max-w-xl text-ink/70">
            Alguns resultados aparecem em números. Outros aparecem na forma como a marca passa a ser entendida, lembrada e desejada.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mt-12">
            {[
              "A Vitória organizou em linguagem algo que a marca ainda não sabia explicar.",
              "O projeto ganhou clareza sem perder sensibilidade.",
              "Ela não entrega só estética. Entrega leitura, intenção e direção.",
              "O processo transformou ideias soltas em uma marca mais clara.",
              "A marca passou a ter uma presença mais coerente, desejável e fácil de reconhecer.",
            ].map((t, i) => (
              <div key={i} className="edito-card p-7">
                <span className="font-display text-4xl text-lime leading-none">"</span>
                <p className="font-display text-xl italic leading-snug mt-2">{t}</p>
              </div>
            ))}
          </div>
          <div className="mt-12">
            <Link to="/contato" className="btn-ink">Iniciar uma conversa →</Link>
          </div>
        </div>
      </section>
    </div>
  );
}

function ProjectTextCover({
  project,
  compact = false,
}: {
  project: (typeof projects)[number];
  compact?: boolean;
}) {
  const isLizianto = project.id === "lizianto";
  const isAvanzzo = project.id === "avanzzo";
  const isRetiroAcenda = project.id === "retiro-acenda";
  const isSoleil = project.id === "soleil";
  const coverDescription = project.resume.split("\n\n")[0];

  return (
    <div
      className={`relative flex h-full min-h-[320px] w-full flex-col justify-between overflow-hidden p-8 text-ink md:p-10 ${
        isLizianto
          ? "bg-[#eadfdc]"
          : isAvanzzo
            ? "bg-[#ddd2c4]"
            : isRetiroAcenda
              ? "bg-[#dce2d2]"
              : isSoleil
                ? "bg-[#f2d98d]"
                : "bg-mist/55"
      }`}
    >
      <div
        className={`absolute -right-16 -top-16 h-56 w-56 rounded-full border ${
          isLizianto ? "border-[#8f5f69]/25" : "border-editorial/20"
        }`}
      />
      <div
        className={`absolute -bottom-24 -left-12 h-72 w-72 rounded-full border ${
          isLizianto ? "border-[#8f5f69]/20" : "border-editorial/15"
        }`}
      />
      <div className="relative flex items-center gap-3">
        <span className="h-2 w-2 rounded-full bg-lime" />
        <span className="eyebrow text-editorial">{project.category}</span>
      </div>
      <div className="relative py-10">
        <p className="font-display text-5xl italic leading-none md:text-7xl">{project.title}</p>
        {!compact && (
          <p className="mt-5 max-w-md text-sm leading-relaxed text-ink/65">
            {coverDescription}
          </p>
        )}
      </div>
      <p className="relative font-display text-xl italic text-editorial">{project.shift}</p>
    </div>
  );
}

function ProjectGallery({ images, title }: { images: string[]; title: string }) {
  const [previewIndex, setPreviewIndex] = useState<number | null>(null);
  const previewMedia = previewIndex === null ? null : images[previewIndex];
  const hasMultipleImages = images.length > 1;
  const showPrevious = () => {
    setPreviewIndex((current) => {
      if (current === null) return current;
      return (current - 1 + images.length) % images.length;
    });
  };
  const showNext = () => {
    setPreviewIndex((current) => {
      if (current === null) return current;
      return (current + 1) % images.length;
    });
  };

  return (
    <div className="relative bg-ink">
      <Carousel opts={{ loop: images.length > 1 }} className="group/gallery">
        <CarouselContent className="-ml-0">
          {images.map((image, index) => (
            <CarouselItem key={`${image}-${index}`} className="pl-0">
              <div className="aspect-[16/9]">
                <button
                  type="button"
                  className="h-full w-full cursor-zoom-in overflow-hidden"
                  onClick={() => setPreviewIndex(index)}
                  aria-label={`Abrir ${title} - mídia ${index + 1}`}
                >
                  {isVideoMedia(image) ? (
                    <video
                      src={image}
                      className="h-full w-full object-cover transition-transform duration-500 hover:scale-[1.02]"
                      autoPlay
                      loop
                      muted
                      playsInline
                      preload="metadata"
                    />
                  ) : (
                    <img
                      src={image}
                      alt={`${title} - imagem ${index + 1}`}
                      className="h-full w-full object-cover transition-transform duration-500 hover:scale-[1.02]"
                    />
                  )}
                </button>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        {hasMultipleImages && (
          <>
            <CarouselPrevious className="left-4 bg-background/90 hover:bg-lime" />
            <CarouselNext className="right-4 bg-background/90 hover:bg-lime" />
            <div className="absolute bottom-4 left-4 rounded-full bg-background/90 px-3 py-1 text-[10px] uppercase tracking-[0.18em] text-ink">
              Galeria do trabalho
            </div>
          </>
        )}
      </Carousel>

      {previewMedia && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-ink/95 p-4 md:p-8"
          onClick={() => setPreviewIndex(null)}
        >
          <button
            type="button"
            className="absolute right-5 top-5 z-10 flex h-11 w-11 items-center justify-center rounded-full bg-background text-ink transition hover:bg-lime"
            onClick={(event) => {
              event.stopPropagation();
              setPreviewIndex(null);
            }}
            aria-label="Fechar pré-visualização"
          >
            <X className="h-5 w-5" />
          </button>

          {hasMultipleImages && (
            <>
              <button
                type="button"
                className="absolute left-4 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-background/90 text-ink transition hover:bg-lime md:left-8"
                onClick={(event) => {
                  event.stopPropagation();
                  showPrevious();
                }}
                aria-label="Imagem anterior"
              >
                <ArrowLeft className="h-5 w-5" />
              </button>
              <button
                type="button"
                className="absolute right-4 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-background/90 text-ink transition hover:bg-lime md:right-8"
                onClick={(event) => {
                  event.stopPropagation();
                  showNext();
                }}
                aria-label="Próxima imagem"
              >
                <ArrowRight className="h-5 w-5" />
              </button>
            </>
          )}

          {isVideoMedia(previewMedia) ? (
            <video
              key={previewMedia}
              src={previewMedia}
              className="max-h-full max-w-full object-contain"
              controls
              autoPlay
              playsInline
              onClick={(event) => event.stopPropagation()}
            />
          ) : (
            <img
              src={previewMedia}
              alt={`${title} - imagem ampliada`}
              className="max-h-full max-w-full object-contain"
              onClick={(event) => event.stopPropagation()}
            />
          )}
        </div>
      )}
    </div>
  );
}

function renderFormattedText(text: string) {
  return text.split(/(\*\*[^*]+\*\*)/g).map((part, index) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return <strong key={index}>{part.slice(2, -2)}</strong>;
    }

    return part;
  });
}

function ProjectDetailBlocks({ project }: { project: (typeof projects)[number] }) {
  if (project.id === "soleil") {
    return (
      <div className="mt-10 space-y-8">
        <Block label="SOBRE" body={project.resume} />
        <Block label="ESCOPO" body={project.scope ?? []} />
        <Block label="DIREÇÃO CRIATIVA" body={project.creativeDirection ?? ""} />
        <Block label="EXPRESSÃO" body={project.expression ?? ""} />
        <Block label="SKILLS" body={project.skills ?? []} />
        <Block label="SÍNTESE" body={project.synthesis} accent />
      </div>
    );
  }

  if (project.id === "retiro-acenda") {
    return (
      <div className="mt-10 space-y-8">
        <Block label="SOBRE" body={project.resume} />
        <Block label="ESCOPO" body={project.scope ?? []} />
        <Block label="DIREÇÃO CRIATIVA" body={project.creativeDirection ?? ""} />
        <Block label="EXPRESSÃO" body={project.expression ?? ""} />
        <Block label="IMPACTO" body={project.impact ?? ""} />
        <Block label="SKILLS" body={project.skills ?? []} />
        <Block label="SÍNTESE" body={project.synthesis} accent />
      </div>
    );
  }

  if (project.id === "avanzzo") {
    return (
      <div className="mt-10 space-y-8">
        <Block label="SOBRE" body={project.resume} />
        <Block label="CONCEITO" body={project.concept ?? ""} />
        <Block
          label="PESQUISA E INTELIGÊNCIA DE MERCADO"
          body={project.marketResearch ?? ""}
        />
        <Block label="ESTRATÉGIA" body={project.strategy ?? ""} />
        <Block label="CURADORIA DE INFLUENCIADORAS" body={project.curation ?? ""} />
        <Block label="PLANEJAMENTO EDITORIAL" body={project.editorialPlanning ?? ""} />
        <Block label="ENTREGAS" body={project.deliveries ?? []} />
        <Block label="RESULTADO" body={project.results ?? []} />
        <Block label="SÍNTESE" body={project.synthesis} accent />
      </div>
    );
  }

  if (project.id === "lizianto") {
    return (
      <div className="mt-10 space-y-8">
        <Block label="SOBRE" body={project.resume} />
        <Block label="ESCOPO" body={project.scope ?? []} />
        <Block label="DIREÇÃO CRIATIVA" body={project.creativeDirection ?? ""} />
        <Block label="EXPRESSÃO" body={project.expression ?? ""} />
        <Block label="SKILLS" body={project.skills ?? []} />
        <Block label="SÍNTESE" body={project.synthesis} accent />
      </div>
    );
  }

  if (project.id === "florescer") {
    return (
      <div className="mt-10 space-y-8">
        <Block label="Contexto" body={project.resume} />
        <Block label="Conceito" body={project.concept ?? project.shift} />
        <Block label="Direção Criativa" body={project.creativeDirection ?? ""} />
        <Block label="Ensaio Fotográfico" body={project.photoEssay ?? ""} />
        <Block label="Estrutura" body={project.structure ?? ""} />
        <Block label="Entregas" body={project.deliveries ?? []} />
        <Block label="Resultado" body={project.results ?? []} />
        <Block label="Síntese" body={project.synthesis} accent />
      </div>
    );
  }

  if (project.id === "truvarao") {
    return (
      <div className="mt-10 space-y-8">
        <Block label="Cliente" body={project.client ?? ""} />
        <Block label="O desafio" body={project.challenge ?? ""} />
        <Block label="O conceito" body={project.concept ?? project.shift} />
        <Block label="Escopo" body={project.scope ?? []} />
        <Block label="Direção Criativa" body={project.creativeDirection ?? ""} />
        <Block label="Resultado" body={project.results ?? []} />
        <Block label="Repertório Construído" body={project.repertoire ?? ""} />
        <Block label="Skills" body={project.skills ?? []} />
        <Block label="Síntese" body={project.synthesis} accent />
      </div>
    );
  }

  if (project.id === "ate-quando-explicar-obvio") {
    return (
      <div className="mt-10 space-y-8">
        <Block label="SOBRE" body={project.resume} />
        <Block label="Desafio" body={project.creativeDirection ?? ""} />
        <Block label="Conceito estratégico" body={project.shift} />
        <Block label="Escopo" body={project.scope ?? []} />
        {project.impact && <Block label="Impacto" body={project.impact} />}
        <Block label="Resultados" body={project.results ?? []} />
        <Block label="Síntese" body={project.synthesis} accent />
      </div>
    );
  }

  return (
    <div className="mt-10 space-y-8">
      <Block label="SOBRE" body={project.resume} />
      <Block
        label="Escopo"
        body={
          project.scope ??
          "O insight estratégico identificou um descompasso entre a intenção da marca e o que estava sendo percebido pelo público real."
        }
      />
      {project.servedBrands && (
        <div>
          <p className="eyebrow text-editorial mb-3">Marcas atendidas</p>
          <p className="whitespace-pre-line text-ink/80 leading-relaxed">
            {project.servedBrands}
          </p>
          {project.servedBrandsInstagram && (
            <InstagramLinks value={project.servedBrandsInstagram} />
          )}
        </div>
      )}
      <Block
        label={
          project.id === "produto-imaginario" || project.id === "presenca-permanece"
            ? "Desafio"
            : "Direção criativa"
        }
        body={
          project.creativeDirection ??
          "Inspirada pelo significado da palavra havaiana Nalu (onda), a marca foi construída a partir das ideias de movimento, fluidez, liberdade e conexão com a natureza.\n\nMais do que uma marca de beachwear, Nalu propõe uma experiência onde diferentes corpos, histórias e identidades encontram espaço para existir sem hierarquias."
        }
      />
      {project.id !== "publico-estrategia" && (
        <Block
          label={
            project.id === "produto-imaginario"
              ? "Resultados"
              : project.id === "presenca-permanece"
                ? "Estratégia"
                : project.id === "saude-e-previdencia"
                  ? "Expressão"
                  : project.id === "a-conversa-ta-boa"
                    ? "Conceito"
                    : "expessão"
          }
          body={project.results ?? project.shift}
        />
      )}
      {project.expression && <Block label="Expressão" body={project.expression} />}
      <Block
        label={project.id === "presenca-permanece" ? "Conceito criativo" : "Skills"}
        body={
          project.skills ??
          "Competências estratégicas, criativas e relacionais mobilizadas ao longo do projeto."
        }
      />
      {project.note && <Note body={project.note} />}
      {project.manifesto && <Block label="Manifesto" body={project.manifesto} />}
      {project.slogan && <Block label="Slogan" body={project.slogan} />}
      <Block label="Síntese" body={project.synthesis} accent />
    </div>
  );
}

function Note({ body }: { body: string }) {
  return (
    <p className="whitespace-pre-line text-sm leading-relaxed text-ink/55">
      {renderFormattedText(body)}
    </p>
  );
}

function Block({ label, body, accent }: { label: string; body: string | string[]; accent?: boolean }) {
  return (
    <div className={`${accent ? "bg-mist/40 rounded-2xl p-6" : ""}`}>
      <p className="eyebrow text-editorial mb-3">{label}</p>
      {Array.isArray(body) ? (
        <ul className="grid gap-2 text-ink/80 leading-relaxed sm:grid-cols-2">
          {body.map((item) => (
            <li key={item} className="flex gap-2">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-lime" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      ) : (
        <p className={accent ? "whitespace-pre-line font-display text-xl italic leading-snug md:text-2xl" : "whitespace-pre-line text-ink/80 leading-relaxed"}>{renderFormattedText(body)}</p>
      )}
    </div>
  );
}
