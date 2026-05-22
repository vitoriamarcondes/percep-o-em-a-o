# Ajustes: paleta base + 4 pilares estratégicos

## 1. Fundo "branco gelo"

Em `src/styles.css`, trocar o token `--background` (hoje off-white editorial) por um branco gelo mais claro e levemente frio:

- `--background: oklch(0.985 0.004 240)` — quase branco puro com leve azulado/gelo
- Ajustar `--paper` (usado em seções secundárias como `bg-paper/50`) para um gelo ligeiramente mais saturado, mantendo contraste sutil entre seções
- Revalidar contraste de `--ink`, `--muted-foreground` e bordas (`border-ink/10`) sobre o novo fundo — manter a hierarquia editorial

Sem mudanças nos acentos (lime, editorial blue, mist pink) nem nas tipografias.

## 2. Reescrever os 4 pilares no Método

Em `src/routes/metodo.tsx`, substituir o array `steps` (atualmente Território → Essência → Linguagem → Presença) pelos 4 pilares de estratégia de marca da Vitória. Manter o mesmo componente acordeão (clique abre, número grande, tags, citação), apenas trocando conteúdo:

**01 · Estratégia de negócio** — criativo + estratégico
- Tags: posicionamento · mantras da marca · análise de mercado · cliente ideal · oferta · nichos e subnichos
- Citação: algo como *"Antes de comunicar, é preciso decidir onde a marca compete e o que ela promete."*

**02 · Essência de marca**
- Tags: DNA · personalidade · valores · arquétipo · história de criação · manifesto · lifestyle · moodboard
- Citação: *"A essência é o que sustenta a marca quando ninguém está olhando."*

**03 · Expressão visual e verbal**
- Tags: cor · tipografia · logo · identidade fotográfica · símbolos · ícones · tom de voz · trilha sonora
- Citação: *"Estética é estratégia tornada visível."*

**04 · Estratégia de comunicação**
- Tags: produção de conteúdo · formatos · linha editorial · ferramentas · processo · estrutura
- Citação: *"Conteúdo é o desdobramento da estratégia no cotidiano das pessoas."*

## 3. Atualizar título e subtítulo do Método

Reposicionar a página para o novo enquadramento "4 pilares = jornada da marca + vínculo com pessoas":

- Eyebrow: `Método · 4 pilares de marca`
- H1: algo como *"Estratégia de marca em **quatro pilares**."*
- Lead atualizado: explicar que nos projetos da Vitória esses 4 pilares constroem a **jornada da marca** e a **interação com os clientes**, criando vínculo estratégico entre marca e pessoas.
- Ajustar a frase final ("Propósito não é discurso...") para reforçar vínculo marca↔pessoas, ou manter — confirmar abaixo.

## 4. Coerência no resto do site

Revisar referências às 4 etapas antigas (Território/Essência/Linguagem/Presença) nas outras páginas:

- `src/routes/index.tsx`, `src/routes/olhar.tsx`, `src/routes/processo.tsx`, `src/components/site-footer.tsx`
- Onde aparecerem, substituir pelos novos rótulos dos 4 pilares para manter consistência narrativa
- Atualizar meta `description` do Método para os novos pilares

## Detalhes técnicos

- Apenas edição de conteúdo e tokens CSS — sem mudança estrutural de rotas, sem novas dependências
- Os utilitários `.edito-card`, `.lime-underline`, `.btn-ink` continuam válidos
- Verificar no preview se o fundo gelo não "lava" os cards (`edito-card`) — se sim, reforçar levemente a borda ou shadow

## Confirmações rápidas

- Mantenho a seção "O que eu construo" (5 cards: Estratégia de marca, Direção criativa, Branding emocional, Comunicação estratégica, Moodboards) ou removo, já que os 4 pilares passam a cobrir esse território?
- A citação de fechamento do Método deve ser reescrita para falar de **vínculo marca↔pessoas**, ou prefere manter a atual sobre propósito?
