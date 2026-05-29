# Coleção CMS: Projects

Criar uma coleção chamada `Projects`.

## Campos

| Campo | Tipo Wix CMS | Obrigatório | Observação |
| --- | --- | --- | --- |
| `title` | Title | Sim | Título do projeto/card |
| `slug` | Text ou Slug | Sim | Usar valores de `id` do CSV |
| `number` | Text | Sim | Ex.: `01` |
| `hover` | Text | Não | Microtexto no hover |
| `category` | Text | Sim | Lista editorial de entregas |
| `context` | Text | Sim | Contexto/segmento |
| `resume` | Rich Text ou Text | Sim | Texto "O que estava em jogo" |
| `shift` | Rich Text ou Text | Sim | Virada de percepção |
| `synthesis` | Rich Text ou Text | Sim | Síntese final |
| `filters` | Tags ou Text | Sim | Usar tags separadas por vírgula |
| `image` | Image | Sim | Fazer upload do arquivo correspondente |
| `sortOrder` | Number | Sim | Ordem manual |

## Filtros

Valores usados no site:

- Todos
- Estratégia de marca
- Direção criativa
- Campanhas
- Identidade visual
- Marcas com propósito
- Experiências
- Comunicação comercial

## Como Usar no Wix Studio

1. Criar a coleção `Projects`.
2. Importar `projects.csv`.
3. Fazer upload das imagens em `wix-studio/assets`.
4. Associar cada imagem ao campo `image`.
5. Criar um Repeater de cards na Home e na página Projetos.
6. Conectar os campos do card ao dataset.
7. Ordenar por `sortOrder` crescente.
8. Para filtros visuais, conectar botões de categoria ao dataset ou criar páginas/estados por categoria.

## Detalhe do Projeto

Opção recomendada:

- Criar uma página dinâmica `/projetos/{slug}` com o mesmo conteúdo do lightbox atual.

Opção mais fiel ao layout atual:

- Criar uma lightbox `Project Detail`.
- Ao clicar em `Abrir processo`, abrir a lightbox com dados do item selecionado.
- Se necessário, usar Velo apenas para passar o item selecionado. Isso ainda mantém o site nativo e editável no Wix, diferente de iframe.

