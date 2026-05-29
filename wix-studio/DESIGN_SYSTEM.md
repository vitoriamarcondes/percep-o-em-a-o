# Design System para Wix Studio

## Direção Visual

Site editorial, sofisticado e sensível. A identidade deve parecer uma revista de marca: muito respiro, tipografia expressiva, imagens verticais, contraste forte entre off-white e ink black, acentos em lime, azul editorial e rosa mist.

Evitar aparência de template corporativo. O visual depende de assimetria controlada, cards editoriais, textos grandes e micro-rótulos em caixa alta.

## Cores

Criar estes estilos globais no Wix Studio:

| Nome | Hex | Uso |
| --- | --- | --- |
| Background | `#f8fbfd` | fundo principal |
| Ink | `#13110f` | texto principal, footer, blocos escuros |
| Paper | `#ebf1f5` | faixas claras e áreas secundárias |
| Lime | `#d5e43f` | acento principal, header, botões hover, detalhes |
| Editorial Blue | `#0f4064` | eyebrows e rótulos editoriais |
| Mist | `#edc7c1` | blocos sensíveis, manifesto, callouts |
| Muted | `#eef2f5` | fundos suaves |
| Border | `#d9dfe3` | linhas e bordas leves |

Opacidades frequentes:

- Ink 75% para parágrafos.
- Ink 55% para descrições pequenas.
- Ink 15% para linhas divisórias.
- Background 70% no footer.

## Fontes

Usar Google Fonts:

- Display: `Fraunces`, pesos 300, 400, 500, 600, 700.
- Sans: `Inter`, pesos 300, 400, 500, 600, 700.

Estilos sugeridos:

| Estilo | Fonte | Tamanho desktop | Tamanho mobile | Observações |
| --- | --- | ---: | ---: | --- |
| H1 Editorial | Fraunces | 88-108px | 52px | line-height 0.9-0.98 |
| H2 Editorial | Fraunces | 56-72px | 40px | line-height 1 |
| H3 Card | Fraunces | 28-40px | 24-30px | line-height 1.05 |
| Quote | Fraunces Italic | 28-48px | 24-32px | usar itálico |
| Body Large | Inter | 18-20px | 16-18px | line-height 1.6 |
| Body | Inter | 16px | 16px | line-height 1.6-1.75 |
| Small | Inter | 13-14px | 13px | line-height 1.5 |
| Eyebrow | Inter Medium | 11-12px | 10-11px | uppercase, letter spacing alto |

No Wix, evitar letter spacing negativo. Para títulos, manter espaçamento padrão ou levemente ajustado se necessário.

## Layout

- Largura máxima do conteúdo: `1400px`.
- Margem lateral desktop: `40px`.
- Margem lateral mobile: `24px`.
- Espaçamento vertical entre seções: `96px` a `128px`.
- Header fixo/sticky com altura aproximada de `64px`.
- Cards com raio visual aproximado de `28px`.
- Imagens principais em proporção `4:5`.
- Imagens de projeto em `4:5` nos cards e `4:3` nos destaques horizontais.
- Hero desktop em duas colunas: texto grande à esquerda e imagem vertical à direita.

## Componentes Nativos

### Header

- Seção sticky no topo.
- Fundo `Lime`.
- Altura `64px`.
- Conteúdo max `1400px`.
- Logo texto: `Vitória Marcondes`, Fraunces 20px.
- Subtítulo desktop: `Brand · Direction`, Inter uppercase pequeno.
- Menu desktop: Início, Olhar, Método, Projetos, Processo, Contato.
- CTA desktop: `Trabalhar juntos`, botão Ink.
- Mobile: menu colapsado com links grandes em Fraunces.

### Footer

- Fundo `Ink`, texto `Background`.
- Grid desktop 7/5.
- Título grande: `Transformo percepção em presença.`
- Coluna de navegação e coluna de contato.
- Linha final com copyright e assinatura editorial.

### Editorial Card

Usar container com:

- Fundo `Background`.
- Borda 1px `Ink` com 10% de opacidade.
- Raio `28px`.
- Sombra suave: baixa opacidade, deslocamento vertical grande.
- Overflow hidden para imagens.

### Pill

Botões de filtro e tags:

- Borda 1px `Ink`.
- Raio circular.
- Texto uppercase Inter 11-12px.
- Padding horizontal generoso.
- Estado ativo: fundo `Ink`, texto `Background`.
- Hover: fundo `Lime`, borda `Lime`, texto `Ink`.

### Botões

Botão primário:

- Fundo `Ink`, texto `Background`.
- Hover `Lime` com texto `Ink`.
- Uppercase Inter, letter spacing alto.
- Raio circular.

Botão secundário:

- Fundo transparente.
- Borda `Ink`.
- Texto `Ink`.
- Hover fundo `Ink`, texto `Background`.

### Underline Lime

Para palavras destacadas, usar uma faixa lime atrás da base da palavra. No Wix, pode ser recriado com:

- Texto separado em span/elemento isolado quando possível.
- Uma shape/box `Lime` atrás da palavra, alinhada no terço inferior.
- Ou sublinhado visual manual em páginas onde o editor permitir.

### Marquee

O marquee da home pode ser recriado de duas formas:

- Nativo sem código: uma faixa horizontal com os nomes dos projetos repetidos, estática.
- Wix/Velo opcional: animação horizontal contínua. Manter conteúdo editável usando texto/repeater.

### Projetos

Usar CMS + Repeater para cards. Cada card deve puxar:

- imagem
- número
- contexto
- título
- categoria
- virada

Para detalhe, preferir uma página dinâmica de projeto ou lightbox conectado ao item. Lightbox preserva a sensação de modal atual; página dinâmica é melhor para SEO.

