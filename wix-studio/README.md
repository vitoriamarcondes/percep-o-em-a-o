# Pacote de Migração para Wix Studio

Este pacote transforma o site atual em um roteiro de reconstrução nativa no Wix Studio, mantendo a direção visual e deixando conteúdo, imagens, projetos e páginas editáveis pelo editor.

## Arquivos

- `DESIGN_SYSTEM.md`: cores, fontes, grid, espaçamentos e componentes visuais.
- `BUILD_BLUEPRINT.md`: passo a passo de montagem no Wix Studio por página e seção.
- `COPYDECK.md`: textos organizados para colar no editor.
- `ASSETS.md`: manifesto de imagens e onde cada uma entra.
- `cms/projects.csv`: conteúdo dos projetos para importar em uma coleção CMS.
- `cms/projects-schema.md`: estrutura recomendada da coleção de projetos.

## Estratégia Recomendada

1. Criar um novo site no Wix Studio.
2. Configurar estilos globais: cores, fontes e tamanhos de texto.
3. Subir as imagens de `wix-studio/assets`.
4. Criar a coleção CMS `Projects` usando `cms/projects-schema.md`.
5. Importar `cms/projects.csv`.
6. Montar header, footer e componentes reutilizáveis.
7. Construir as páginas seguindo `BUILD_BLUEPRINT.md`.
8. Conectar repetidores de projetos ao CMS.
9. Ajustar responsividade nos breakpoints desktop, tablet e mobile.

## Regra de Ouro

Não usar iframe para carregar o site atual. Iframe preserva aparência, mas não transforma o site em Wix editável. A reconstrução precisa ser feita com elementos nativos do Wix Studio: seções, stacks, containers, textos, imagens, botões, formulários, lightbox, CMS e repeaters.

