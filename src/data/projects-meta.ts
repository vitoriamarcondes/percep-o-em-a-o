import type { Project } from "./projects";
import { projects } from "./projects";

export const FILTERS = [
  "Todos",
  "Estratégia de Marca",
  "Identidade Visual",
  "Mercado & Posicionamento",
  "Comunicação Comercial",
  "Campanhas",
  "Experiências",
  "Cultura & Comportamento",
] as const;

export const FILTER_DESCRIPTIONS: Record<(typeof FILTERS)[number], string> = {
  Todos: "Mostrar todos os projetos.",
  "Estratégia de Marca": "Posicionamento, narrativa, conceito e construção de marcas.",
  "Identidade Visual": "Sistemas visuais, identidade e códigos de reconhecimento.",
  "Mercado & Posicionamento": "Cultura, comportamento e estratégia aplicada ao mercado.",
  "Comunicação Comercial": "Comunicação orientada para crescimento, relacionamento e valor percebido.",
  Campanhas: "Conceito criativo, narrativa e campanhas de comunicação.",
  Experiências: "Jornadas, comunidades e experiências que fortalecem a marca.",
  "Cultura & Comportamento": "Pesquisa, repertório e comportamento transformados em estratégia criativa.",
};

export type ProjectSummary = Pick<
  Project,
  "id" | "title" | "image" | "filters" | "hover" | "shift" | "number" | "context" | "category"
>;

export const projectSummaries: ProjectSummary[] = projects.map((project) => ({
  id: project.id,
  title: project.title,
  image: project.image ?? "",
  filters: project.filters,
  hover: project.hover,
  shift: project.shift,
  number: project.number,
  context: project.context,
  category: project.category,
}));
