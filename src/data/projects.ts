import p1 from "@/assets/project-1.jpg";
import p2 from "@/assets/project-2.jpg";
import p3 from "@/assets/project-3.jpg";
import p4 from "@/assets/project-4.jpg";
import p5 from "@/assets/project-5.jpg";
import p6 from "@/assets/project-6.jpg";

export type Project = {
  id: string;
  number: string;
  title: string;
  hover: string;
  category: string;
  context: string;
  resume: string;
  shift: string;
  synthesis: string;
  image: string;
  filters: string[];
};

export const FILTERS = [
  "Todos",
  "Estratégia de marca",
  "Direção criativa",
  "Campanhas",
  "Identidade visual",
  "Marcas com propósito",
  "Experiências",
  "Comunicação comercial",
] as const;

export const projects: Project[] = [
  {
    id: "futuro-proximo",
    number: "01",
    title: "Fazer o futuro parecer próximo.",
    hover: "Do insight à presença",
    category: "Manifesto · Reposicionamento · Marca com propósito",
    context: "Previdência institucional",
    resume:
      "O tema era técnico, distante e pouco desejável. A comunicação precisava sair da obrigação financeira e se aproximar da vida real.",
    shift: "De assunto frio para cuidado, autonomia e futuro possível.",
    synthesis:
      "Planejar não é deixar de viver. É criar condições para viver com mais liberdade.",
    image: p2,
    filters: ["Marcas com propósito", "Estratégia de marca"],
  },
  {
    id: "identidade-sensacao",
    number: "02",
    title: "Dar identidade a uma sensação.",
    hover: "Ver processo",
    category: "Identidade visual · Direção estética · Universo sensorial",
    context: "Marca autoral",
    resume:
      "A marca precisava deixar de ser uma soma de referências bonitas e passar a ter atmosfera própria.",
    shift: "De estética bonita para universo visual reconhecível.",
    synthesis: "Uma identidade forte não apenas aparece. Ela cria clima.",
    image: p1,
    filters: ["Identidade visual", "Direção criativa"],
  },
  {
    id: "estrutura-intuitivo",
    number: "03",
    title: "Dar estrutura ao que ainda estava intuitivo.",
    hover: "Do insight à presença",
    category: "Posicionamento · Narrativa · Arquitetura de marca",
    context: "Marcas autorais e especialistas",
    resume:
      "Algumas marcas têm boa ideia, bom produto e intenção real, mas comunicam de forma dispersa.",
    shift: "De ideias soltas para marca com direção.",
    synthesis:
      "Estruturar uma marca é fazer o valor aparecer sem precisar gritar.",
    image: p3,
    filters: ["Estratégia de marca"],
  },
  {
    id: "produto-imaginario",
    number: "04",
    title: "Transformar produto em imaginário.",
    hover: "Ver processo",
    category: "Campanha · Direção criativa · Moda/lifestyle",
    context: "Moda e comportamento",
    resume:
      "O produto precisava deixar de ser apenas mostrado e passar a ser desejado.",
    shift: "De produto isolado para universo de desejo.",
    synthesis: "Campanha é quando a marca encena o que quer representar.",
    image: p4,
    filters: ["Campanhas", "Direção criativa"],
  },
  {
    id: "publico-estrategia",
    number: "05",
    title: "Traduzir público em estratégia.",
    hover: "Do insight à presença",
    category: "Leitura de público · Relacionamento · Estratégia comercial",
    context: "Operação comercial B2B",
    resume:
      "O desafio era lidar com públicos diferentes, níveis distintos de maturidade e necessidades práticas de confiança.",
    shift:
      "De atendimento operacional para relacionamento como estratégia de valor.",
    synthesis:
      "A venda começa quando a comunicação entende a pessoa antes de apresentar a solução.",
    image: p5,
    filters: ["Comunicação comercial", "Estratégia de marca"],
  },
  {
    id: "presenca-permanece",
    number: "06",
    title: "Criar presença que permanece.",
    hover: "Ver processo",
    category: "Evento · Ativação · Direção de arte · Experiência",
    context: "Cultura jovem e experiência coletiva",
    resume:
      "O projeto precisava ser mais do que um evento. Precisava ter identidade, desejo, circulação e memória.",
    shift: "De evento pontual para experiência com memória.",
    synthesis: "Uma marca também vive nos vestígios que deixa.",
    image: p6,
    filters: ["Experiências", "Direção criativa"],
  },
];