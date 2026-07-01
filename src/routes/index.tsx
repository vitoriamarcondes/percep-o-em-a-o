import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { LazyVideo } from "@/components/lazy-video";
import { Reveal } from "@/components/reveal";
import heroCoverCollageBw from "@/assets/hero-cover-collage-bw.webp";
import homeFechamentoEditorial from "@/assets/home-fechamento-editorial.jpeg";
import heroCoverMagazine from "@/assets/hero-cover-magazine.webp";
import heroCoverWall from "@/assets/hero-cover-wall.webp";
import heroImg from "@/assets/hero-editorial.webp";
import marcaValorPercebido from "@/assets/marca-valor-percebido.webp";
import marcaValorPercebidoVideo from "@/assets/marca-valor-percebido-video.mp4";
import mood2 from "@/assets/moodboard-2.jpg";
import homeThoughtStartersVideo from "@/assets/home-thought-starters-video.mp4";
import { FILTERS, FILTER_DESCRIPTIONS, projectSummaries, type ProjectSummary } from "@/data/projects-meta";
import { buildSeo } from "@/lib/seo";

const marqueeItems = [
  { number: "01", title: "Leitura de mercado." },
  { number: "02", title: "Intelig\u00eancia cultural." },
  { number: "03", title: "Narrativa de marca." },
  { number: "04", title: "Dire\u00e7\u00e3o criativa." },
  { number: "05", title: "C\u00f3digos de express\u00e3o." },
  { number: "06", title: "Constru\u00e7\u00e3o de desejo." },
  { number: "07", title: "Presen\u00e7a estrat\u00e9gica." },
];

const brandPartners = [
  { name: "Ambev", logo: "/brand-logos/ambev.png", href: "https://www.ambev.com.br/" },
  {
    name: "Mina",
    logo: "/brand-logos/mina.png",
    href: "https://www.instagram.com/e.s.t.u.d.i.o.m.i.n.a/",
  },
  { name: "Taiji", logo: "/brand-logos/taiji.png", href: "https://www.instagram.com/taiji.store/" },
  {
    name: "VILA VILAÇA",
    logo: "/brand-logos/vila-vilaca.png",
    href: "https://www.instagram.com/vilavilacajoalheria/",
  },
  {
    name: "Misses",
    logo: "/brand-logos/misses.png",
    href: "https://www.instagram.com/missesbrand/",
  },
  { name: "2Tempos", logo: "/brand-logos/2tempos.png", href: "https://www.instagram.com/2tempos/" },
  { name: "Le Cult", logo: "/brand-logos/le-cult.png", href: "https://www.instagram.com/lecult/" },
  { name: "Vivaz", logo: "/brand-logos/vivaz.png", href: "https://www.instagram.com/vivazbrasil/" },
  { name: "Raris", logo: "/brand-logos/raris.png", href: "https://www.instagram.com/rarisbrand/" },
  { name: "Ceres", logo: "/brand-logos/ceres.png", href: "https://www.ceres.org.br/" },
  {
    name: "Tikhê Arquitetura",
    logo: "/brand-logos/tikhe-arquitetura.png",
    href: "https://www.instagram.com/tikhe.arquitetura/",
  },
  {
    name: "Madavelas",
    logo: "/brand-logos/madavelas.png",
    href: "https://www.instagram.com/madavelas.home/",
  },
  {
    name: "Eternità Joalheria",
    logo: "/brand-logos/eternita-joalheria.png",
    href: "https://www.instagram.com/eternitajoalheria/",
  },
  {
    name: "Kalandra Brand",
    logo: "/brand-logos/kalandra-brand.png",
    href: "https://www.instagram.com/kalandra.brand/",
  },
  {
    name: "Debora Carvalho",
    logo: "/brand-logos/debora-carvalho.png",
    href: "https://www.instagram.com/deboracarvalhobrand/",
  },
  { name: "CGDF", logo: "/brand-logos/cgdf.png", href: "https://www.instagram.com/cgdfoficial/" },
];

const isVideoMedia = (media: string) => media.toLowerCase().endsWith(".mp4");

const heroCoverImages = [
  { src: heroImg, alt: "Retrato editorial" },
  { src: heroCoverCollageBw, alt: "Pesquisa visual em preto e branco" },
  { src: heroCoverWall, alt: "Painel de referências visuais" },
  { src: marcaValorPercebido, alt: "Processo criativo no tablet" },
  { src: heroCoverMagazine, alt: "Revista aberta com referências de moda" },
];

export const Route = createFileRoute("/")({
  head: () =>
    buildSeo({
      title: "Vitória Marcondes — Transformo percepção em presença",
      description:
        "Estratégia de marca, direção criativa e comunicação para marcas que precisam ser mais claras, desejáveis e memoráveis.",
      path: "/",
      ogTitle: "Vitória Marcondes — Transformo percepção em presença",
      ogDescription:
        "Não crio apenas o que uma marca mostra. Construo o que ela passa a significar.",
    }),
  component: Home,
});

function Home() {
  const [filter, setFilter] = useState<string>("Todos");
  const statsRef = useRef<HTMLElement>(null);
  const [statsActive, setStatsActive] = useState(false);
  const visible = projectSummaries.filter((p) => filter === "Todos" || p.filters.includes(filter));

  useEffect(() => {
    const element = statsRef.current;

    if (!element) return;

    const updateVisibility = () => {
      const rect = element.getBoundingClientRect();
      const visibleTrigger = window.innerHeight * 0.76;
      const isVisible = rect.top < visibleTrigger && rect.bottom > window.innerHeight * 0.14;

      setStatsActive(isVisible);
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        setStatsActive(entry.isIntersecting);
      },
      { rootMargin: "0px 0px -12% 0px", threshold: 0.35 },
    );

    observer.observe(element);
    updateVisibility();
    window.addEventListener("scroll", updateVisibility, { passive: true });
    window.addEventListener("resize", updateVisibility);

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", updateVisibility);
      window.removeEventListener("resize", updateVisibility);
    };
  }, []);

  return (
    <div>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="mx-auto max-w-[1400px] px-6 md:px-10 pt-10 md:pt-16 pb-20">
          <div className="flex items-center gap-3 mb-10">
            <span className="h-2 w-2 rounded-full bg-lime" />
            <span className="eyebrow text-ink/70">Direção Criativa & Brand Intelligence</span>
            <span className="hidden md:block flex-1 h-px bg-ink/15" />
            <span className="hidden md:flex flex-col items-end gap-1 text-right">
              <span className="eyebrow text-ink/60">
                Mercado &middot; Cultura &middot; Dire&ccedil;&atilde;o de Arte
              </span>
            </span>
          </div>

          <div className="grid gap-12 xl:grid-cols-[minmax(0,1.6fr)_minmax(400px,0.9fr)] xl:gap-12 items-start">
            <div className="relative z-20 min-w-0 xl:pr-4">
              <h1 className="font-display text-[3.15rem] sm:text-[4.45rem] xl:text-[5.55rem] 2xl:text-[6.35rem] leading-[0.98] tracking-[0] text-balance">
                <span className="block">Faça sua marca</span>
                <span className="block whitespace-nowrap">
                  ganhar voz, <span className="italic font-light">desejo</span>
                </span>
                <span className="block">
                  & <span className="lime-underline">presença</span>.
                </span>
              </h1>
              <p className="mt-10 max-w-xl text-lg md:text-xl text-ink/75 leading-relaxed">
                Direção criativa e inteligência de mercado que transforma estratégia em narrativa,
                imagem, propósito e expressão.
              </p>
              <p className="mt-6 max-w-xl text-base text-ink/55 italic font-display">
                "Marcas se tornam referências pela combinação entre arte, estratégia e posicionamento."
              </p>
              <div className="mt-10 flex flex-wrap gap-3">
                <Link to="/projetos" className="btn-ink">
                  Explorar projetos →
                </Link>
                <Link to="/processo" className="btn-ghost">
                  Conhecer meu processo
                </Link>
              </div>
              <div className="mt-12 flex items-center gap-6 text-xs eyebrow text-ink/60">
                <span>Vitória Marcondes</span>
              </div>
            </div>
            <div className="relative z-0 min-w-0 w-full max-w-[460px] justify-self-start xl:justify-self-end xl:max-w-[520px]">
              <div className="edito-card aspect-[4/5] relative bg-background p-6">
                <div
                  className="hero-cover-slideshow rounded-[1.25rem]"
                  aria-label="Capa editorial em movimento"
                >
                  <div className="hero-cover-track">
                    {[...heroCoverImages, heroCoverImages[0]].map((image, index) => (
                      <img
                        key={`${image.src}-${index}`}
                        src={image.src}
                        alt={image.alt}
                        className="hero-cover-slide"
                        fetchPriority={index === 0 ? "high" : undefined}
                        loading={index === 0 ? "eager" : "lazy"}
                        decoding="async"
                      />
                    ))}
                  </div>
                </div>
                <div className="absolute top-5 left-6 right-6 flex justify-between text-[10px] eyebrow text-ink">
                  <span>Cover · 2026</span>
                  <span>Nº 01</span>
                </div>
                <div className="absolute bottom-5 left-6 right-6 flex justify-between items-end text-ink">
                  <span className="font-display text-2xl italic">in motion</span>
                  <span className="eyebrow text-[10px]">brand feeling</span>
                </div>
              </div>
              <div className="absolute -bottom-6 -left-4 rotate-[-4deg] bg-lime text-ink px-4 py-2 rounded-full eyebrow text-[10px] shadow-lg">
                from insight to atmosphere
              </div>
              <div className="absolute -top-4 -right-2 rotate-[6deg] bg-mist text-ink px-4 py-2 rounded-full eyebrow text-[10px] shadow-lg">
                perception shift
              </div>
            </div>
          </div>
        </div>

        {/* Project marquee */}
        <div className="border-y border-ink/15 py-5 bg-paper/40 overflow-hidden">
          <div className="marquee whitespace-nowrap font-display text-2xl md:text-3xl italic">
            {[...marqueeItems, ...marqueeItems].map((p, i) => (
              <span key={i} className="flex items-center gap-6">
                <span className="eyebrow text-xs not-italic text-editorial">{p.number}</span>
                {p.title}
                <span className="text-lime">✦</span>
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* BRANDS */}
      <Reveal as="section" className="brand-belt border-b border-ink/10 bg-background">
        <div className="mx-auto max-w-[1400px] px-6 md:px-10 py-16 md:py-20">
          <div className="grid gap-8 lg:grid-cols-[0.55fr_1.45fr] lg:items-center">
            <div>
              <p className="eyebrow text-editorial">02 &middot; PORTFÓLIO DE MARCAS</p>
              <h2 className="font-display text-4xl md:text-5xl mt-3 leading-[1]">
                Repertório de Mercado
              </h2>
              <p className="mt-5 text-sm leading-relaxed text-ink/60 max-w-sm">
                Marcas e projetos desenvolvidos ao longo da minha trajetória profissional,
                conectando estratégia, criatividade, comportamento e construção de presença.
              </p>
            </div>

            <div className="brand-orbit" aria-label="Marcas atendidas">
              <div className="brand-track brand-track-a">
                {[...brandPartners, ...brandPartners].map((brand, index) => (
                  <BrandLogo key={`${brand.name}-a-${index}`} brand={brand} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </Reveal>

      {/* FILTERS */}
      <Reveal as="section" className="mx-auto max-w-[1400px] px-6 md:px-10 py-16">
        <div className="flex items-end justify-between flex-wrap gap-4 mb-8">
          <div>
            <p className="eyebrow text-editorial">
              03 &middot; Projetos &amp; Dire&ccedil;&otilde;es
            </p>
            <h2 className="font-display text-4xl md:text-5xl mt-2">Filtrar por criação</h2>
          </div>
        </div>
        <div className="flex flex-wrap gap-2">
          {FILTERS.map((f) => (
            <button
              key={f}
              className="pill"
              data-active={filter === f}
              onClick={() => setFilter(f)}
            >
              {f}
            </button>
          ))}
        </div>
        {filter !== "Todos" && (
          <p className="mt-4 max-w-xl text-sm font-light leading-relaxed text-ink/50">
            {FILTER_DESCRIPTIONS[filter as (typeof FILTERS)[number]]}
          </p>
        )}

        {/* Projects grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {visible.map((p) => (
            <ProjectCard key={p.id} p={p} />
          ))}
        </div>
      </Reveal>

      {/* DOR */}
      <Reveal as="section" className="bg-paper/50">
        <div className="mx-auto max-w-[1400px] px-6 md:px-10 py-24 grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7">
            <p className="eyebrow text-editorial mb-6">03 · Diagnóstico</p>
            <h2 className="font-display text-4xl md:text-6xl leading-[1] max-w-2xl">
              Sua marca pode ser boa. Mas ela comunica aquilo que a torna{" "}
              <span className="lime-underline italic">única</span>?
            </h2>
            <div className="mt-10 max-w-xl text-ink/75 space-y-4 text-base leading-relaxed">
              <p className="font-semibold">Marcas também têm personalidade.</p>
              <p>
                Elas são percebidas pelas{" "}
                <strong className="font-semibold text-ink">referências</strong> que escolhem, pela
                forma como se apresentam, pelos{" "}
                <strong className="font-semibold text-ink">espaços</strong> que ocupam e pelas
                conversas que decidem participar.
              </p>
              <p>
                Antes de criar qualquer direção, eu observo esses códigos. Entendo o{" "}
                <strong className="font-semibold text-ink">contexto</strong>, o{" "}
                <strong className="font-semibold text-ink">mercado</strong>, o{" "}
                <strong className="font-semibold text-ink">comportamento</strong> das pessoas e a{" "}
                <strong className="font-semibold text-ink">imagem</strong> que está sendo
                construída hoje.
              </p>
              <p>
                Porque <strong className="font-semibold text-ink">direção criativa</strong> não é
                apenas uma questão estética, mas sim, a forma como uma marca se{" "}
                <strong className="font-semibold text-ink">posiciona</strong>, gera{" "}
                <strong className="font-semibold text-ink">identificação</strong> e constrói{" "}
                <strong className="font-semibold text-ink">relevância</strong>.
              </p>
            </div>
            <div className="mt-10 inline-block">
              <p className="font-display text-2xl md:text-3xl italic">
                Marca não é só aparência. É <span className="lime-underline">valor percebido</span>.
              </p>
            </div>
          </div>
          <div className="lg:col-span-5 relative">
            <div className="edito-card aspect-[4/5]">
              <LazyVideo
                src={marcaValorPercebidoVideo}
                aria-label="Processo criativo em movimento"
                className="w-full h-full object-cover"
              />
            </div>
            <span className="absolute -top-3 left-6 bg-background border border-ink/20 rounded-full px-3 py-1 eyebrow text-[10px]">
              visual code
            </span>
            <span className="absolute -bottom-3 right-6 bg-editorial text-background rounded-full px-3 py-1 eyebrow text-[10px]">
              brand feeling
            </span>
          </div>
        </div>
      </Reveal>

      {/* POSICIONAMENTO */}
      <Reveal as="section" className="mx-auto max-w-[1400px] px-6 md:px-10 py-24">
        <p className="eyebrow text-editorial">04 · Posicionamento</p>
        <h2 className="font-display text-4xl md:text-6xl mt-3 max-w-3xl leading-[1]">
          Transformo estratégia em{" "}
          <span className="lime-underline italic">valor percebido</span>.
        </h2>
        <p className="mt-8 max-w-2xl text-ink/75 leading-relaxed">
          Meu trabalho é entender o que torna uma marca única e transformar isso em uma linguagem
          capaz de gerar reconhecimento, desejo e relevância.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-14">
          {[
            {
              n: "I ✦",
              t: "Identidade",
              d: (
                <>
                  Construir uma <strong className="font-semibold">linguagem própria</strong> para
                  cada marca.
                </>
              ),
            },
            {
              n: "II ✦",
              t: "Cultura",
              d: (
                <>
                  Conectar <strong className="font-semibold">comportamento</strong>,{" "}
                  <strong className="font-semibold">repertório</strong> e{" "}
                  <strong className="font-semibold">contexto</strong> de{" "}
                  <strong className="font-semibold">mercado</strong>.
                </>
              ),
            },
            {
              n: "III ✦",
              t: "Desejo",
              d: (
                <>
                  Criar narrativas que aumentem{" "}
                  <strong className="font-semibold">valor percebido</strong> e{" "}
                  <strong className="font-semibold">identificação</strong>.
                </>
              ),
            },
            {
              n: "IV ✦",
              t: "Presença",
              d: (
                <>
                  Desenvolver marcas capazes de ocupar um{" "}
                  <strong className="font-semibold">lugar próprio</strong> na{" "}
                  <strong className="font-semibold">memória</strong> e no{" "}
                  <strong className="font-semibold">mercado</strong>.
                </>
              ),
            },
          ].map((c) => (
            <div
              key={c.t}
              className="edito-card border-ink/20 bg-lime/55 p-7 shadow-[0_18px_45px_rgba(17,16,14,0.08)] group hover:bg-ink hover:text-background transition-colors duration-500"
            >
              <h3 className="font-display text-2xl leading-none md:text-[1.65rem]">
                <span className="text-editorial group-hover:text-lime">{c.n}</span> {c.t}
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-ink/70 group-hover:text-background/80">
                {c.d}
              </p>
            </div>
          ))}
        </div>
      </Reveal>

      {/* NUMEROS */}
      <Reveal>
        <section ref={statsRef} className="bg-ink text-background">
          <div className="mx-auto max-w-[1400px] px-6 md:px-10 py-24">
            <p className="eyebrow text-lime">05 · Repertório aplicado</p>
            <h2 className="font-display text-4xl md:text-6xl mt-3 max-w-3xl leading-[1]">
              Experiência aplicada em marca, público e comunicação.
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-background/10 mt-14 rounded-3xl overflow-visible">
              {[
                {
                  n: "7+",
                  countTo: 7,
                  suffix: "+",
                  l: "anos",
                  d: "atuando entre comunicação, campanhas, conteúdo, direção visual e estratégia.",
                  href: "/olhar",
                  cta: "Sobre mim →",
                },
                {
                  n: "3×",
                  countTo: 3,
                  suffix: "×",
                  l: "mais carteira atendida",
                  d: "em experiência comercial com relacionamento, capacitação e adaptação de linguagem.",
                  href: "/projetos?project=produto-imaginario",
                  cta: "Ver case Ambev →",
                },
                {
                  n: "400+",
                  countTo: 400,
                  suffix: "+",
                  l: "pessoas",
                  d: "em experiência criada e produzida com ingressos esgotados.",
                  href: "/projetos?project=truvarao",
                  cta: "Ver evento →",
                },
                {
                  n: "03",
                  countTo: 3,
                  pad: 2,
                  l: "reconhecimentos",
                  d: "por pesquisa, inovação e projetos de impacto.",
                  recognitions: [
                    {
                      n: "01",
                      t: "Projeto de Iniciação Científica (PIBIC) | UnB",
                      d: "Pesquisa sobre liderança feminina e gestão do bem-estar nas organizações, desenvolvida no Programa Institucional de Bolsas de Iniciação Científica.",
                    },
                    {
                      n: "02",
                      t: "Finalista Nacional | Expocom",
                      d: "Reconhecimento no Congresso Brasileiro de Ciências da Comunicação pelo projeto sobre prevenção ao recrutamento virtual para exploração sexual.",
                    },
                    {
                      n: "03",
                      t: "Projeto de Extensão | SOS Imprensa",
                      d: "Atuação voluntária em projeto da Faculdade de Comunicação da UnB voltado à educação midiática, cidadania e fortalecimento da relação entre comunicação e sociedade.",
                    },
                  ],
                },
                {
                  n: "08",
                  countTo: 8,
                  pad: 2,
                  l: "setores",
                  d: "moda, lifestyle, previdência, setor público, comercial, institucional, social e marcas com propósito.",
                  href: "/projetos",
                  cta: "Ver todos os projetos →",
                },
                {
                  n: "∞",
                  l: "leituras",
                  d: "atravessar mercados diferentes me ensinou a ler pessoas antes de criar para marcas.",
                  href: "/processo",
                  cta: "Conhecer meu processo →",
                },
              ].map((s, i) => {
                const hasRecognitions = "recognitions" in s;
                return (
                  <div
                    key={i}
                    className={`group relative bg-ink p-8 md:p-10 ${hasRecognitions ? "overflow-hidden outline-none transition-colors duration-500 hover:bg-[#15120f] focus-visible:ring-2 focus-visible:ring-lime focus-visible:ring-inset" : ""} ${"href" in s ? "cursor-pointer outline-none transition-colors duration-500 hover:bg-[#15120f] focus-within:bg-[#15120f] focus-within:ring-2 focus-within:ring-lime focus-within:ring-inset" : ""}`}
                    {...(hasRecognitions ? { tabIndex: 0 } : {})}
                  >
                    {"href" in s && (
                      <a
                        href={s.href}
                        aria-label={s.cta}
                        className="absolute inset-0 z-10"
                      />
                    )}
                    <AnimatedStatNumber stat={s} active={statsActive} />
                    <div className="eyebrow mt-3 text-background/60">{s.l}</div>
                    <p className="mt-4 text-sm text-background/80 leading-relaxed">{s.d}</p>
                    {"cta" in s && (
                      <span className="relative z-20 mt-5 inline-flex items-center gap-2 rounded-full border border-lime/35 px-3 py-2 eyebrow text-[10px] text-lime transition-colors group-hover:bg-lime group-hover:text-ink group-focus-within:bg-lime group-focus-within:text-ink">
                        {s.cta}
                      </span>
                    )}
                    {hasRecognitions && (
                      <span className="mt-4 inline-flex items-center gap-1.5 rounded-full border border-lime/35 px-3 py-2 eyebrow text-[10px] text-lime transition-colors group-hover:bg-lime group-hover:text-ink group-focus-within:bg-lime group-focus-within:text-ink">
                        Ver reconhecimentos
                        <span
                          aria-hidden
                          className="transition-transform group-hover:translate-y-0.5 group-focus-within:translate-y-0.5"
                        >
                          ↓
                        </span>
                      </span>
                    )}
                    {"recognitions" in s && (
                      <div className="grid max-h-0 gap-3 overflow-hidden opacity-0 transition-all duration-500 ease-out group-hover:mt-6 group-hover:max-h-[820px] group-hover:opacity-100 group-focus-within:mt-6 group-focus-within:max-h-[820px] group-focus-within:opacity-100">
                        {s.recognitions.map((item) => (
                          <div
                            key={item.n}
                            className="rounded-[0.65rem] border border-lime/25 bg-background/[0.07] p-4 text-background shadow-[0_14px_40px_rgba(0,0,0,0.16)] backdrop-blur"
                          >
                            <p className="eyebrow text-lime">{item.n}</p>
                            <h3 className="mt-2 font-display text-base leading-tight">{item.t}</h3>
                            <p className="mt-2 text-xs leading-relaxed text-background/70">
                              {item.d}
                            </p>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </Reveal>

      {/* MANIFESTO */}
      <Reveal as="section" className="bg-mist/40">
        <div className="mx-auto max-w-4xl px-6 md:px-10 py-32 text-center">
          <p className="eyebrow text-editorial">06 · Tese</p>
          <h2 className="font-display text-3xl md:text-5xl mt-6 leading-[1.08]">
            Toda decisão{" "}
            <span className="lime-underline" style={{ paddingLeft: 0 }}>
              comunica
            </span>
            .
          </h2>
          <div className="mt-12 text-lg md:text-xl leading-[1.7] text-ink/80 space-y-5 font-display italic">
            <p>
              Identidade visual, linguagem, campanhas e experiências não funcionam isoladamente. Elas
              constroem a forma como uma marca é{" "}
              <strong className="font-semibold text-ink">reconhecida, lembrada e valorizada</strong>.
            </p>
            <p>
              Por isso, cada projeto começa pela{" "}
              <strong className="font-semibold text-ink">investigação do contexto</strong> e pela
              definição de uma direção certa antes de qualquer decisão visual.
            </p>
          </div>
          <p className="mt-14 font-display text-2xl md:text-3xl">
            A estratégia organiza decisões que se transformam em{" "}
            <span className="lime-underline">identidade</span>,{" "}
            <span className="lime-underline">comunicação</span> e{" "}
            <span className="lime-underline">experiência</span>.
          </p>
          <div className="mt-10">
            <Link to="/metodo" className="btn-ink">
              Conheça minha metodologia
            </Link>
          </div>
        </div>
      </Reveal>

      {/* THOUGHT STARTERS */}
      <Reveal as="section" className="mx-auto max-w-[1400px] px-6 md:px-10 py-24">
        <div className="overflow-hidden rounded-[5px] border border-ink/15 bg-mist/45">
          <div className="grid lg:grid-cols-[0.78fr_1fr]">
            <div className="relative min-h-[460px] overflow-hidden border-b border-ink/15 lg:border-b-0 lg:border-r">
              <video
                src={homeThoughtStartersVideo}
                autoPlay
                muted
                loop
                playsInline
                aria-hidden="true"
                className="absolute inset-0 h-full w-full object-cover grayscale"
              />
              <div className="absolute inset-0 bg-ink/50" />
              <div className="pointer-events-none absolute inset-0 overflow-hidden opacity-80 mix-blend-screen">
                <div className="absolute -left-20 top-14 h-28 w-[58%] rotate-[-16deg] bg-gradient-to-r from-transparent via-lime/45 to-transparent blur-2xl" />
                <div className="absolute left-[28%] top-0 h-full w-20 rotate-[18deg] bg-gradient-to-b from-background/45 via-mist/35 to-transparent blur-xl" />
                <div className="absolute right-10 top-20 h-36 w-36 rounded-full border border-background/40 bg-lime/15 blur-lg" />
              </div>
              <div className="relative flex h-full min-h-[460px] flex-col justify-between p-8 md:p-10">
                <p className="eyebrow text-lime">07 · Thought starters</p>
                <h2 className="max-w-sm font-display text-2xl leading-[1] text-background drop-shadow-[0_1px_0_rgba(17,16,14,0.55)] md:text-4xl">
                  Perguntas que direcionam cada <span className="italic text-lime">projeto.</span>
                </h2>
                <Link
                  to="/contato"
                  className="w-fit rounded-full border border-lime bg-lime px-5 py-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-ink backdrop-blur transition hover:border-ink hover:bg-ink hover:text-lime"
                >
                  Falar sobre projeto →
                </Link>
              </div>
            </div>

            <div className="p-6 md:p-8">
              <div className="grid gap-5 sm:grid-cols-2">
                {[
                  {
                    t: "Desafio",
                    q: (
                      <>
                        Qual desafio essa marca <strong className="font-semibold">precisa resolver</strong>?
                      </>
                    ),
                  },
                  {
                    t: "Espaço",
                    q: (
                      <>
                        Que espaço ela <strong className="font-semibold">pode ocupar</strong>?
                      </>
                    ),
                  },
                  {
                    t: "Decisões",
                    q: (
                      <>
                        Quais decisões sustentam esse{" "}
                        <strong className="font-semibold">posicionamento</strong>?
                      </>
                    ),
                  },
                  {
                    t: "Experiência",
                    q: (
                      <>
                        Como transformar essa estratégia em uma{" "}
                        <strong className="font-semibold">experiência de marca</strong>?
                      </>
                    ),
                  },
                ].map((item, i) => (
                  <div
                    key={item.t}
                    className="min-h-[190px] rounded-[7px] border border-ink/20 bg-lime/70 p-6 transition-colors hover:bg-background"
                  >
                    <p className="eyebrow text-editorial">0{i + 1}</p>
                    <h3 className="mt-5 font-display text-3xl italic leading-none text-ink">
                      {item.t}
                    </h3>
                    <p className="mt-5 text-base leading-relaxed text-ink/75 md:text-lg">
                      {item.q}
                    </p>
                  </div>
                ))}
              </div>
              <Link
                to="/metodo"
                className="mt-6 inline-flex w-fit rounded-full border border-ink bg-ink px-5 py-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-lime transition hover:border-lime hover:bg-lime hover:text-ink"
              >
                Conheça minha metodologia →
              </Link>
            </div>
          </div>

          <div className="border-t border-ink/15 bg-lime/80 py-3">
            <div className="flex min-w-max gap-5 whitespace-nowrap text-[11px] uppercase tracking-[0.16em] text-ink/75">
              {Array.from({ length: 8 }).map((_, i) => (
                <span key={i}>
                  Brand Strategy · Creative Direction · Consumer Insights · Brand Experience
                </span>
              ))}
            </div>
          </div>
        </div>
      </Reveal>

      {/* CTA */}
      <Reveal as="section" className="mx-auto max-w-[1400px] px-6 md:px-10 pb-24">
        <div className="edito-card relative overflow-hidden bg-ink text-background p-12 md:p-20">
          <div className="absolute inset-0 opacity-40">
            <img
              src={homeFechamentoEditorial}
              alt=""
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
          <div className="relative max-w-3xl">
            <p className="eyebrow text-lime">Brand Strategy</p>
            <h2 className="font-display text-4xl md:text-6xl mt-4 leading-[1]">
              A <span className="italic text-lime">estratégia</span> define o lugar que uma marca
              conquista.
            </h2>
            <p className="mt-8 text-background/80 max-w-xl">
              Cada projeto começa entendendo onde a marca quer chegar e o que precisa acontecer para
              que ela seja <strong className="font-semibold text-background">escolhida</strong>.
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <Link to="/contato" className="btn-ink bg-lime text-ink hover:bg-background">
                Iniciar conversa
              </Link>
              <Link
                to="/projetos"
                className="btn-ghost border-background text-background hover:bg-background hover:text-ink"
              >
                Conheça meu trabalho
              </Link>
            </div>
          </div>
        </div>
      </Reveal>
    </div>
  );
}

function AnimatedStatNumber({
  stat,
  active,
}: {
  stat: { n: string; countTo?: number; suffix?: string; pad?: number };
  active: boolean;
}) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (typeof stat.countTo !== "number") return;

    if (!active) {
      setValue(0);
      return;
    }

    let frame = 0;
    const start = performance.now();
    const duration = 850;

    const tick = (time: number) => {
      const progress = Math.min((time - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);

      setValue(Math.round(stat.countTo! * eased));

      if (progress < 1) {
        frame = requestAnimationFrame(tick);
      }
    };

    frame = requestAnimationFrame(tick);

    return () => cancelAnimationFrame(frame);
  }, [active, stat.countTo]);

  const displayed =
    typeof stat.countTo === "number"
      ? `${String(value).padStart(stat.pad ?? 0, "0")}${stat.suffix ?? ""}`
      : stat.n;

  return (
    <div
      className={`font-display text-6xl md:text-7xl text-lime leading-none ${
        active ? "stat-number-active" : ""
      }`}
    >
      {displayed}
    </div>
  );
}

function BrandLogo({
  brand,
  tabIndex,
}: {
  brand: (typeof brandPartners)[number];
  tabIndex?: number;
}) {
  return (
    <a
      href={brand.href}
      target="_blank"
      rel="noreferrer"
      tabIndex={tabIndex}
      className="brand-token"
      aria-label={`Abrir ${brand.name}`}
    >
      <span className="brand-token-image">
        <img src={brand.logo} alt="" loading="lazy" />
      </span>
      <span className="brand-token-name">{brand.name}</span>
    </a>
  );
}

function ProjectCard({ p }: { p: ProjectSummary }) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const leadRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  const stopRaf = () => {
    if (rafRef.current) {
      cancelAnimationFrame(rafRef.current);
      rafRef.current = null;
    }
  };

  // Posiciona o início do texto no meio do card (espaçador = metade da altura visível).
  const centerLead = () => {
    const el = scrollRef.current;
    const lead = leadRef.current;
    if (!el || !lead) return;
    lead.style.height = `${Math.round(el.clientHeight / 2)}px`;
  };

  // Ao passar o mouse/focar: o texto começa no meio do card e, se não couber,
  // desce com um scroll suave (após uma breve pausa) até revelar tudo.
  const startAutoScroll = () => {
    const el = scrollRef.current;
    if (!el) return;
    stopRaf();
    centerLead();

    const prefersReduced =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) return;

    const overflow = el.scrollHeight - el.clientHeight;
    if (overflow <= 4) return;

    const holdTop = 750; // pausa inicial mostrando o início do texto centralizado
    const duration = Math.min(9000, Math.max(2200, overflow * 17)); // ~59 px/s, deslize suave
    const startTime = performance.now();

    const step = (now: number) => {
      const elapsed = now - startTime - holdTop;
      if (elapsed <= 0) {
        rafRef.current = requestAnimationFrame(step);
        return;
      }
      const t = Math.min(elapsed / duration, 1);
      const eased = t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2; // easeInOut
      el.scrollTop = overflow * eased;
      if (t < 1) rafRef.current = requestAnimationFrame(step);
    };

    rafRef.current = requestAnimationFrame(step);
  };

  const resetAutoScroll = () => {
    stopRaf();
    const el = scrollRef.current;
    if (!el) return;
    centerLead();
    if (el.scrollTop === 0) return;

    const start = el.scrollTop;
    const startTime = performance.now();
    const duration = 300;

    const step = (now: number) => {
      const t = Math.min((now - startTime) / duration, 1);
      el.scrollTop = start * (1 - t);
      if (t < 1) rafRef.current = requestAnimationFrame(step);
    };

    rafRef.current = requestAnimationFrame(step);
  };

  return (
    <a
      href={`/projetos?project=${p.id}`}
      className="edito-card group block relative overflow-hidden hover:-translate-y-1 transition-transform duration-500"
      onMouseEnter={startAutoScroll}
      onMouseLeave={resetAutoScroll}
      onFocus={startAutoScroll}
      onBlur={resetAutoScroll}
    >
      <div className="aspect-[4/5] overflow-hidden relative">
        {isVideoMedia(p.image) ? (
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
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          />
        )}
        <div className="absolute inset-0 bg-ink/0 group-hover:bg-ink/60 transition-colors duration-500 flex flex-col justify-start p-6">
          <div
            ref={scrollRef}
            className="text-background opacity-0 group-hover:opacity-100 transition-opacity duration-500 max-h-full overflow-hidden [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            <div ref={leadRef} aria-hidden className="shrink-0" />
            <span className="eyebrow text-lime">{p.hover}</span>
            <p className="font-display text-2xl italic mt-2">{p.shift}</p>
          </div>
        </div>
        <span className="absolute top-4 left-4 bg-background/90 backdrop-blur rounded-full px-3 py-1 eyebrow text-[10px]">
          Nº {p.number}
        </span>
        <span className="absolute top-4 right-4 bg-lime rounded-full px-3 py-1 eyebrow text-[10px]">
          processo de criação
        </span>
      </div>
      <div className="p-6">
        <p className="eyebrow text-editorial mb-3">{p.context}</p>
        <h3 className="font-display text-2xl leading-tight">{p.title}</h3>
        <p className="mt-3 text-xs text-ink/55 uppercase tracking-wider">{p.category}</p>
      </div>
    </a>
  );
}
