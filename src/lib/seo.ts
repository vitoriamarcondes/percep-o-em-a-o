export const SITE_URL = "https://www.vitoriamarcondes.com";
export const SITE_NAME = "Vitória Marcondes";
export const DEFAULT_OG_IMAGE = "/aura/1.png";

type SeoOptions = {
  title: string;
  description: string;
  path: string;
  ogTitle?: string;
  ogDescription?: string;
  image?: string;
  type?: "website" | "profile";
};

export function absoluteUrl(path: string) {
  if (/^https?:\/\//.test(path)) {
    return path;
  }

  const normalizedPath = path.startsWith("/") ? path : `/${path}`;

  return `${SITE_URL}${normalizedPath}`;
}

export function buildSeo({
  title,
  description,
  path,
  ogTitle = title,
  ogDescription = description,
  image = DEFAULT_OG_IMAGE,
  type = "website",
}: SeoOptions) {
  const canonicalUrl = absoluteUrl(path);
  const imageUrl = absoluteUrl(image);

  return {
    meta: [
      { title },
      { name: "description", content: description },
      { name: "robots", content: "index, follow" },
      { property: "og:title", content: ogTitle },
      { property: "og:description", content: ogDescription },
      { property: "og:type", content: type },
      { property: "og:url", content: canonicalUrl },
      { property: "og:site_name", content: SITE_NAME },
      { property: "og:locale", content: "pt_BR" },
      { property: "og:image", content: imageUrl },
      { property: "og:image:width", content: "1920" },
      { property: "og:image:height", content: "1080" },
      {
        property: "og:image:alt",
        content: "Direção criativa e estratégia de marca por Vitória Marcondes",
      },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: ogTitle },
      { name: "twitter:description", content: ogDescription },
      { name: "twitter:image", content: imageUrl },
    ],
    links: [{ rel: "canonical", href: canonicalUrl }],
  };
}

export const siteStructuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: SITE_NAME,
      inLanguage: "pt-BR",
      description:
        "Estratégia de marca, direção criativa e comunicação para marcas que precisam ser mais claras, desejáveis e memoráveis.",
      publisher: { "@id": `${SITE_URL}/#person` },
    },
    {
      "@type": "Person",
      "@id": `${SITE_URL}/#person`,
      name: SITE_NAME,
      url: SITE_URL,
      email: "ola@vitoriamarcondes.com",
      jobTitle: "Brand Strategist e Diretora Criativa",
      knowsAbout: [
        "Estratégia de marca",
        "Direção criativa",
        "Narrativa de marca",
        "Comunicação estratégica",
        "Branding emocional",
      ],
      sameAs: [
        "https://www.instagram.com/vitoriamarcondes/",
        "https://www.linkedin.com/in/vitoriamarcondes/",
      ],
    },
    {
      "@type": "ProfessionalService",
      "@id": `${SITE_URL}/#service`,
      name: "Vitória Marcondes - Estratégia de marca e direção criativa",
      url: SITE_URL,
      areaServed: "Brasil",
      founder: { "@id": `${SITE_URL}/#person` },
      serviceType: [
        "Estratégia de marca",
        "Direção criativa",
        "Identidade visual",
        "Comunicação estratégica",
        "Planejamento de conteúdo",
      ],
    },
  ],
};

export function jsonLd(data: unknown) {
  return {
    type: "application/ld+json",
    children: JSON.stringify(data).replace(/</g, "\\u003c"),
  };
}
