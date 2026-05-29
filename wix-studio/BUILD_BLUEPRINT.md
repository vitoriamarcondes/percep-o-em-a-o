# Blueprint de Construção Nativa no Wix Studio

## Setup Inicial

1. Criar site novo no Wix Studio.
2. Criar os estilos globais em `DESIGN_SYSTEM.md`.
3. Criar header e footer globais.
4. Criar coleção CMS `Projects`.
5. Importar `cms/projects.csv`.
6. Subir imagens de `assets`.
7. Criar componentes reutilizáveis:
   - Editorial Card
   - Pill / Filter Button
   - Primary CTA
   - Secondary CTA
   - Project Card
   - Quote Card
   - Stat Tile
   - Contact Row

## Estrutura de Páginas

| Página | Slug | Origem atual |
| --- | --- | --- |
| Início | `/` | `src/routes/index.tsx` |
| Olhar | `/olhar` | `src/routes/olhar.tsx` |
| Método | `/metodo` | `src/routes/metodo.tsx` |
| Projetos | `/projetos` | `src/routes/projetos.tsx` |
| Processo | `/processo` | `src/routes/processo.tsx` |
| Contato | `/contato` | `src/routes/contato.tsx` |

## Header Global

Elementos:

- Logo texto: `Vitória Marcondes`
- Subtexto desktop: `Brand · Direction`
- Menu: Início, Olhar, Método, Projetos, Processo, Contato
- CTA: `Trabalhar juntos` apontando para `/contato`
- Mobile: menu aberto em coluna, com links grandes

Estilo:

- Background `Lime`
- Sticky top
- Borda inferior `Ink` 10%
- Altura aproximada `64px`

## Footer Global

Bloco escuro com:

- Eyebrow `Manifesto contínuo`
- Título `Transformo percepção em presença.`
- Descrição `Brand Strategy · Creative Direction · Visual Storytelling. Para marcas que querem ser lembradas pelo que significam.`
- Links de navegação
- Links de contato
- Copyright dinâmico ou manual
- Assinatura `From insight to atmosphere`

## Página Início

### 01 Hero

Layout desktop:

- Grid duas colunas.
- Coluna esquerda maior com título gigante.
- Coluna direita com imagem `hero-editorial.jpg` em card vertical.

Conteúdo:

- Eyebrow: `Direção Criativa & Brand Intelligence`
- Selo direito desktop: `Creative Brand Intelligence`
- H1:
  - `Faça sua marca`
  - `ganhar voz,`
  - `desejo e presença.`
- Parágrafo: `Direção criativa e inteligência de mercado que transforma estratégia em narrativa, imagem, desejo e expressão.`
- Quote: `"Não crio apenas o que uma marca mostra. Construo o que ela passa a significar."`
- CTAs:
  - `Explorar projetos →` para `/projetos`
  - `Conhecer meu processo` para `/processo`
- Assinatura inferior: `Vitória Marcondes — Brand · Direction · Storytelling`

Detalhes visuais:

- Selo sobre imagem: `Cover · 2026`, `Nº 01`, `in motion`, `brand feeling`
- Pílulas flutuantes:
  - `from insight to atmosphere`
  - `perception shift`

### 02 Project Marquee

Faixa com fundo `Paper` 40%, bordas horizontais e nomes dos projetos em Fraunces Italic.

Sem código: criar faixa estática com títulos repetidos.

Com animação opcional: usar Velo ou animação do Wix para deslocamento horizontal.

### 03 Filtros + Grid de Projetos

Usar CMS `Projects` + Repeater.

- Eyebrow: `02 · Index editorial`
- H2: `Filtrar por território`
- Texto lateral: `Cada projeto é apresentado pelo que transformou — não pela marca, mas pela percepção.`
- Pílulas de filtro conforme `projects-schema.md`.
- Grid desktop 3 colunas; mobile 1 coluna.

### 04 Diagnóstico

Fundo `Paper` 50%.

- Eyebrow: `03 · Diagnóstico`
- H2: `Sua marca pode ser boa. Mas ela está sendo percebida do jeito certo?`
- Três parágrafos de diagnóstico.
- Quote: `Marca não é só aparência. É valor percebido.`
- Imagem: `moodboard-1.jpg`.
- Selos: `visual code`, `brand feeling`.

### 05 Posicionamento

- Eyebrow: `04 · Posicionamento`
- H2: `Não vendo estética. Construo valor percebido.`
- Parágrafo explicativo.
- Grid 4 cards:
  - Clareza
  - Desejo
  - Consistência
  - Presença

### 06 Números

Fundo `Ink`.

- Eyebrow: `05 · Repertório aplicado`
- H2: `Experiência aplicada em marca, público e comunicação.`
- Grid 6 tiles:
  - `7+` anos
  - `3×` mais carteira atendida
  - `400+` pessoas
  - `03` reconhecimentos
  - `08` setores
  - `∞` leituras

### 07 Manifesto

Fundo `Mist` 40%, conteúdo centralizado.

- Eyebrow: `06 · Manifesto`
- H2: `Percepção antes da estética.`
- Texto em parágrafos curtos.
- Fechamento: `O bonito chama atenção. O coerente permanece.`
- CTA: `Ver método completo`

### 08 Thought Starters

- Eyebrow: `07 · Thought starters`
- H2: `Perguntas que organizam meu raciocínio.`
- Grid 2 colunas com quatro perguntas.

### 09 CTA Final

Card escuro com imagem `moodboard-2.jpg` em fundo com overlay escuro.

- Eyebrow: `Fechamento editorial`
- H2: `Se a sua marca precisa de mais do que aparência, talvez ela precise de direção.`
- Texto: `Vamos construir uma presença mais clara, sensível e estrategicamente desejável.`
- CTAs:
  - `Iniciar conversa`
  - `Ver universos construídos`

## Página Olhar

Layout desktop 7/5:

- Coluna esquerda com tese e texto.
- Coluna direita sticky com retrato, card de repertório e moodboard.

Seções:

- Hero textual
- Tags de repertório em pills
- Cards visuais
- CTA final para Método e Projetos

Imagens:

- `vitoria-portrait.jpg`
- `moodboard-1.jpg`

## Página Método

### Hero

- Eyebrow: `Método · 4 pilares de marca`
- H1: `Estratégia de marca em quatro pilares.`
- Parágrafo introdutório.

### Accordion

Usar Accordion nativo ou caixas com estados.

Itens:

1. Estratégia de negócio
2. Essência de marca
3. Expressão visual e verbal
4. Estratégia de comunicação

Estado aberto:

- Fundo `Ink`
- Número em `Lime`
- Texto `Background`
- Tags uppercase
- Quote em Fraunces Italic

### O Que Eu Construo

Fundo `Paper` 50%.

Grid de cards:

- Estratégia de marca
- Direção criativa
- Branding emocional
- Comunicação estratégica
- Moodboards estratégicos

### CTA Final

Quote central e botões para Projetos e Contato.

## Página Projetos

### Intro Escura

- Fundo `Ink`
- Eyebrow: `Transição editorial · 10`
- H1: `Os projetos aparecem pelo que transformaram.`
- Texto + pergunta em destaque.

### Grid CMS

Usar Repeater conectado a `Projects`.

Layout:

- Filtros no topo.
- Grid 2 colunas.
- A cada terceiro item, usar card destacado horizontal se possível. Se o Wix não permitir essa variação no repeater sem código, usar layout uniforme 2 colunas para manter edição simples.

Detalhe:

- CTA `Abrir processo →`
- Preferir dynamic page `/projetos/{slug}` ou lightbox.

### Vestígios

Fundo `Paper` 40%.

Grid com cinco quotes de feedback.

CTA para Contato.

## Página Processo

### Hero

- Eyebrow: `13 · Processo vivo`
- H1: `Como eu penso antes de criar.`
- Texto em coluna esquerda.
- Imagem `moodboard-2.jpg` em card vertical.

### Grid de Processo

Oito cards:

- Pesquisa
- Moodboard
- Narrativa
- Direção visual
- Tom de voz
- Campanha
- Experiência
- Métrica

### Propósito

Fundo `Mist` 40%, conteúdo centralizado.

- Eyebrow: `14 · Marcas com propósito`
- H2: `Propósito não é discurso. É comportamento traduzido em linguagem.`
- Texto de apoio.
- CTA `Trabalhar comigo →`

## Página Contato

### Hero

- Eyebrow: `16 · Contato · Fechamento editorial`
- H1: `Se a sua marca precisa de mais do que aparência, talvez ela precise de direção.`
- Texto: `Vamos construir uma presença mais clara, sensível e estrategicamente desejável.`

### Formulário

Usar Wix Forms nativo com campos:

- Nome
- Marca / Projeto
- E-mail
- O que precisa ser percebido?

Botão: `Enviar mensagem →`

Configurar envio para `ola@vitoriamarcondes.com`.

### Coluna Lateral

- Card assinatura escuro
- Rows de contato:
  - E-mail
  - LinkedIn
  - Instagram
  - Currículo
- Card final: `Transformo percepção em presença.`

## SEO

Configurar títulos e descrições conforme `COPYDECK.md`.

Também ajustar:

- Idioma do site: Português Brasil.
- Imagem social padrão: usar `hero-editorial.jpg` ou `vitoria-portrait.jpg`.
- URLs limpas iguais às rotas atuais.
- Alt text conforme `ASSETS.md`.

