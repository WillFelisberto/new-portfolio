# AGENTS.md — Contexto e Diretrizes do Projeto

Este arquivo centraliza a arquitetura, design system, decisões técnicas e orientações operacionais para agentes e desenvolvedores que atuam neste repositório. Mantenha este documento sempre atualizado ao realizar mudanças estruturais ou de convenção.

---

## 1. Visão Geral do Projeto

- **Nome:** Portfólio de Willian de Souza Felisberto
- **Propósito:** Apresentar trajetória sênior, competências técnicas e projetos em destaque para recrutadores, tech leads e clientes.
- **Origem de Dados:** Headless Payload CMS v3 (MongoDB) com rotas estáticas geradas via SSG (`generateStaticParams`) e páginas server-rendered.
- **Idioma da UI:** Inglês (EN).

---

## 2. Stack Tecnológico e Ambiente

| Camada | Tecnologia / Versão | Observações |
|---|---|---|
| **Runtime** | Node.js `^22.23.4 \|\| >=24.22.1` (atual: `v26.13.1 LTS`) | Exigido pelos engines do Payload 3.93 |
| **Framework Web** | Next.js `16.4.6` (App Router, Turbopack) | Configurado com `turbopack: { root: process.cwd() }` |
| **Biblioteca UI** | React `19.1.10` / React DOM `19.1.10` | Compatível com Server Components |
| **Estilização** | Tailwind CSS `3.4.1` + PostCSS | Configurado com tema personalizado Acid Dark |
| **Animações** | Framer Motion `11.13.5` | Transições táteis e easing `cubic-bezier(0.16, 1, 0.3, 1)` |
| **Headless CMS** | Payload CMS `3.93.0` (todos os pacotes) | `@payloadcms/next`, `@payloadcms/richtext-lexical`, `@payloadcms/db-mongodb`, etc. |
| **Testes Unitários** | Jest `29.7.0` + React Testing Library `16.1.0` | 18 test suites, 59 testes automatizados com snapshots |
| **Component Workshop** | Storybook `8.4.7` | Ponte `.babelrc` para suporte a compilação com Next 16 |
| **Linter & Formatter** | ESLint `9.16.0` (Flat Config) + Prettier | Regras em `eslint.config.mjs` |
| **Git Hooks & Commits** | Husky `^9.1.7` + Commitlint `^19.8.1` | Hooks em `.husky/` e config em `commitlint.config.cjs` |

---

## 3. Design System: S.C.R.A.P.S. ("The Acid Workbench")

Inspirado no visual *Acid Dark Mode*, neo-brutalista polido e tátil do **Sentry S.C.R.A.P.S.**:

### 3.1. Paleta de Cores

```yaml
# Superfícies e Linhas
night:           "#150F23"  # Fundo principal (roxo-berinjela profundo)
surface:         "#1F1633"  # Fundo de cards, seções elevadas, inputs
raised:          "#2B1D38"  # Superfície hover, botões secundários, badges
line:            "#3E2C59"  # Bordas de 1px, divisores tracejados
well:            "#0B0716"  # Base física para hard shadows, rodapé escuro

# Destaques e Acentos
violet:          "#6C5FC7"  # Estrutura secundária, scrollbar thumb
violet-electric: "#7553FF"  # Bordas de hover em cards, blocos decorativos
lime:            "#C2EF4E"  # Acento de ação: botão primário, chips em títulos, seleção, foco
coral:           "#FA7FAA"  # Stickers, tags de caminho de seção (.../subtitle)
coral-hot:       "#FF6B6B"  # Ícones de erro, coração do footer

# Tipografia e Contraste
ink:             "#F6F6F8"  # Texto principal e títulos (off-white)
muted:           "#BDB4D1"  # Texto secundário e corpo (>= 9:1 contraste em night)
dim:             "#9A8FB5"  # Metadados, datas, tags discretas
```

### 3.2. Tipografia

- **Display / Títulos:** `Bricolage Grotesque` (`--font-display`) — expressiva, geométrica e com peso marcante nos títulos (`font-extrabold`).
- **Corpo / UI:** `Rubik` (`--font-body`) — legível e equilibrada.
- **Labels / Badges / Navegação:** `JetBrains Mono` (`--font-mono`) — uppercase com tracking aberto (`tracking-label` = `0.14em`), conferindo estilo técnico/terminal.

### 3.3. Estilo Tátil e Sombras em Camadas

- **Botões:**
  - `shadow-tactile`: Inset superior sutil (`rgba(255,255,255,0.28)`) + piso duro `4px` (`#0B0716`) + difusão suave.
  - Hover: Levanta com deslocamento físico `-translate-y-0.5` e sombra estendida `shadow-tactile-lift` (`6px`).
  - Active (clique): Pressiona fisicamente `translate-y-[3px]` com sombra reduzida `shadow-tactile-pressed` (`1px`).
- **Cards:**
  - Classe utilitária `.card-tactile` com borda de `1px` em `line` e sombra `.shadow-card`.
  - `.card-tactile-interactive` reage no hover levantando com borda `violet-electric`.
- **Chips em Títulos:**
  - Classe `.chip-hl` aplicada na palavra-chave destacada dos títulos (`bg-lime text-night shadow-chip rounded-md`).
- **Textura de Fundo:**
  - Grid técnico sutil (`bg-grid-tech`) de 56x56px com máscara radial degradê no `body::before`.
  - Granulação de filme (`bg-grain`) via SVG procedural com opacidade 7% em mix-blend overlay no `body::after`.

---

## 4. Diretrizes para Ilustrações

As ilustrações devem seguir estritamente o manual em `docs/ILLUSTRATION_PROMPTS.md`:
- **Estilo:** Isometric 30°, editorial indie-comic, contorno espesso uniforme de 3px (`#0B0716`), cantos levemente arredondados, preenchimentos flat limitados rigorosamente à paleta oficial (`#150F23`, `#1F1633`, `#2B1D38`, `#7553FF`, `#C2EF4E`, `#FA7FAA`, `#F6F6F8`).
- **Uso do Lime:** Deve atuar como único ponto focal ácido (ex: cursor, lâmpada, líquido em tubo, tela ativa).
- **Formatos:** SVGs vetoriais limpos e responsivos salvos em `public/images/illustrations/` ou PNGs transparentes de alta resolução.
- **Geração:** Utilizar o subagente `image-generator` ou geradores vetoriais com a Bíblia de Estilo anexada.

---

## 5. Estrutura de Diretórios e Componentes Principais

```
src/
├── app/
│   ├── (payload)/               # Painel administrativo e coleções do Payload CMS
│   └── (portfolio)/             # Aplicação pública do portfólio (Next.js App Router)
│       ├── layout.tsx           # Layout raiz com fontes Bricolage, Rubik e JetBrains Mono
│       ├── globals.css          # Tokens base, textura de grid, grain e scrollbar
│       ├── page.tsx             # Home: Hero, KnownTechs, Education, Highlights, WorkExperience
│       └── projects/
│           ├── page.tsx         # Listagem geral de projetos
│           └── [slug]/page.tsx  # Detalhes, links e seções do projeto
├── components/
│   ├── Button/                  # Botão com variantes primary (lime) e secondary (raised), suporte a clique tátil
│   ├── CardItem/                # Item da timeline para experiências e formação acadêmica
│   ├── ContactForm/             # Formulário de contato com validação Zod e inputs táteis
│   ├── EmptyState/              # Estado vazio ilustrado isometricamente com call-to-action
│   ├── Header/ & Footer/        # Navegação com mono labels, hashtag verde e footer escuro
│   ├── KnownTech/               # Cards táteis interativos com ícones e hover lime
│   ├── ProjectCard/             # Card de projeto com thumbnail tátil, tags e link animado
│   ├── SectionTitle/            # Título de seção com chip lime automático e path tag coral (-1deg)
│   ├── TechBadge/               # Badge técnica com JetBrains Mono uppercase e borda interativa
│   └── Toaster/                 # Notificações Toast com estilo tátil nos acentos lime e coral
└── lib/
    ├── utils.ts                 # Utilitários (cn, formatação de datas)
    └── animations.ts            # Configurações de transição do Framer Motion
```

---

## 6. Comandos e Validações Frequentes

| Comando | Descrição |
|---|---|
| `yarn dev` | Inicia o servidor de desenvolvimento com Next.js e Payload |
| `yarn test` | Executa a suíte de testes do Jest (modo CI: `yarn test:ci`) |
| `yarn test -u` | Atualiza os snapshots dos testes unitários |
| `yarn lint` | Executa o ESLint 9 (Flat Config) |
| `yarn build` | Executa o build de produção do Next.js (Turbopack) |
| `yarn storybook` | Inicia o Storybook na porta 6006 |
| `yarn build-storybook` | Gera a compilação estática do Storybook |
| `npx commitlint --from=HEAD~1` | Valida mensagens de commit localmente |
| `.agent/skills/impeccable/scripts/impeccable detect --json src/components 'src/app/(portfolio)'` | Valida conformidade do design system |

---

## 7. Git Hooks e Padrão de Commits (Husky + Commitlint)

O repositório utiliza o **Husky v9** com Conventional Commits:
- **`commitlint.config.cjs`**: Extende `@commitlint/config-conventional`. Usa extensão `.cjs` para total compatibilidade com o `"type": "module"` do `package.json`.
- **`.husky/pre-commit`**: Executa `lint-staged` antes de cada commit para formatação automática.
- **`.husky/commit-msg`**: Intercepta a mensagem com `npx --no-install commitlint --edit "$1"`.
- **Padrão de mensagens aceito:** `feat: ...`, `fix: ...`, `docs: ...`, `style: ...`, `refactor: ...`, `perf: ...`, `test: ...`, `chore: ...`.

---

## 8. Fluxo Git e Política de Branches Obrigatória (Regra Fundamental)

> [!IMPORTANT]
> **REQUISITO MANDATÓRIO PARA AGENTES E DESENVOLVEDORES:**
> Para QUALQUER nova funcionalidade, alteração visual, atualização de dados ou correção, é **estritamente obrigatório separar por branch dedicada**. Nunca desenvolva ou commite diretamente na branch `main`.

### 8.1. Ciclo de Vida de uma Tarefa:
1. **Criação da Branch:**
   ```bash
   git checkout main
   git pull origin main
   git checkout -b <tipo>/<nome-curto-da-tarefa>
   ```
   *Exemplos:* `feat/academic-publications-collection`, `fix/header-contrast`, `chore/deps-update`.

2. **Desenvolvimento e Validações Locais:**
   Antes de abrir PR ou dar push, certifique-se de validar a tríade:
   ```bash
   npx eslint .          # 0 erros
   npx jest              # 100% dos testes passando
   npx next build        # Compilação estática (SSG) limpa
   ```

3. **Commit com Conventional Commits:**
   O hook do Husky interceptará e validará via Commitlint (`feat(...)`, `fix(...)`, `chore(...)`).

4. **Abertura e Validação de Pull Request no GitHub:**
   - O branch `main` possui uma Ruleset com **Branch Protection** ativa exigindo o status check `"ci github"` para permitir merge.
   - Suba a branch com `git push origin <branch>`.
   - Crie a PR: `gh pr create --head <branch> --base main --title "..." --body "..."`.
   - Monitore a conclusão do GitHub Actions: `gh pr checks <PR_NUMBER>`.
   - Assim que o check `ci github` passar, efetue o merge pelo GitHub:
     ```bash
     gh pr merge <PR_NUMBER> --merge
     ```
   - Sincronize localmente:
     ```bash
     git checkout main
     git pull origin main
     ```

5. **Proteção de Segredos e Repositório Público:**
   - Este repositório é público. O arquivo `.env` deve permanecer sempre no `.gitignore`.
   - Nunca insira strings de conexão, senhas ou chaves em arquivos de código, scripts ou documentações.

---

## 9. Registro de Decisões e Histórico Recente

- **Integração das PRs Recentes no GitHub:**
  - **PR #17 (Merge commit `3014f6d`):** Atualização de stack de produção para Node 26 LTS, Next.js 16.4.6, Payload CMS 3.93.0, Husky v9, Commitlint e atualização do workflow do GitHub Actions (`ci.yml`) para Node 22 com resolução multiplataforma de binários do Sharp.
  - **PR #18 (Merge commit `facbe27`):** Implementação completa do Design System S.C.R.A.P.S. Acid Dark Mode, tokens táteis, componentes táteis, EmptyState, fontes Bricolage/Rubik/JetBrains Mono, thumbnails dinâmicos de projetos, ilustrações isométricas e documentações técnicas.
  - **PR #19 (Merge commit `2792839`):** Inclusão formal da política de branches obrigatórias e ciclo de vida de PRs no `AGENTS.md`.
  - **PR #20 (Merge commit `2d6c115`):** Resolução multiplataforma do Sharp e libvips para Linux x64 na Vercel e CI (`serverExternalPackages: ['sharp']`).
  - **PR #21 (Merge commit `6ce927c`):** Unificação da timeline vertical da seção Education com `sort: '-startDate'` (Mestrado em Edge AI no topo), ajuste de semântica `<h1>` e inclusão de badges táteis na foto do Hero (`SENIOR DEV // EDGE AI` e `7+ YRS • AVAILABLE`).
  - **PR #22 (Merge commit `0eaf878`):** Atualização da foto de perfil em alta resolução (800x800) e logos oficiais das empresas (`public/images/companies/`) extraídos do LinkedIn, sincronizando dados no MongoDB Atlas.
  - **PR #23 (Merge commit `da35660`):** Otimização de performance de build e CI: remoção do `.babelrc` raiz em favor de configuração local no `.storybook/main.ts` (reabilitando o compilador nativo SWC em Rust), eliminação de chamadas duplicadas de instalação e adição de cache do Next.js no GitHub Actions.
  - **PR #24 (Merge commit `edb1cda`):** Atualização do registro de decisões e histórico recente no `AGENTS.md`.
  - **PR #25 (Merge commit `6a7b0e6`):** Criação das coleções `publications` e `certifications` no Payload CMS v3, componentes táteis S.C.R.A.P.S. na Home, persistência do cache no CI (`push: branches: [main]`) e otimização do `postinstall` (reduzindo tempo do CI para 2m48s e build na Vercel para 58s).
  - **PR #26 (Merge commit `c6fb6a6`):** Atualização do registro de decisões e histórico recente no `AGENTS.md`.
  - **PR #27 (Merge commit `bac337d`):** Solução definitiva do CI/CD: remoção do gargalo de upload de 280MB do `.next/cache` (economizando ~38s), migração para `optionalDependencies` nativas no `package.json` para os binários do Sharp Linux x64 eliminando chamadas de processos secundários do `npm`, adição de controle de concorrência com cancelamento automático de execuções obsoletas (`concurrency: cancel-in-progress: true`), uso estrito de `--frozen-lockfile` e resolução do aviso de `metadataBase` no Next.js.
  - **PR #28 (Merge commit `b1e3ad3`):** Atualização do registro de decisões e histórico recente no `AGENTS.md`.
  - **PR #29 (Merge commit `c7776b3`):** Implementação de toolbar de filtros táteis por categoria (`All Projects`, `Edge AI // TinyML`, `Fullstack & Web`, `Technical Challenges`), busca em tempo real com debounce/clear e transições animadas com Framer Motion (`layout`, `AnimatePresence`) na página `/projects`, com nova suíte de testes unitários automatizados (19 suites, 64 testes).
  - **PR #30 (Merge commit `0405531`):** Atualização do registro de decisões e histórico recente no `AGENTS.md`.
  - **PR #31 (Merge commit `d28a27d`):** Implementação completa de Technical SEO e conformidade de Design System: geração automatizada de `robots.txt` (`src/app/robots.ts`) e `sitemap.xml` dinâmico (`src/app/sitemap.ts`) alimentado pelo Payload CMS, Structured Data JSON-LD (`Person` schema com publicações, certificações, cargos e redes), URLs canônicas universais, OpenGraph/Twitter cards dinâmicos por projeto e ajuste fino da rampa tipográfica S.C.R.A.P.S. (100% de conformidade no script `impeccable detect`).
  - **PR #32 (Merge commit `a93936a`):** Atualização do registro de decisões e histórico recente no `AGENTS.md` para PR #30 e PR #31.
  - **PR #33 (Merge commit `9015c08`):** Otimização máxima de SEO e Generative Engine Optimization (GEO): criação de rota oficial `/llms.txt` (`src/app/llms.txt/route.ts`), regras explícitas para crawlers de IA no `robots.ts` (`GPTBot`, `PerplexityBot`, `ClaudeBot`, `Google-Extended`, `Applebot`), inclusão de `/llms.txt` no `sitemap.ts`, Knowledge Graph aprofundado (`WebSite`, `ProfilePage`, `Person`, `EducationalOccupationalCredential`, `ScholarlyArticle`), Schemas ricos de `CollectionPage`, `SoftwareApplication` e `BreadcrumbList`, tag `<main id="main-content">` e `themeColor: #150F23`.
  - **PR #34 (Merge commit `2e16314`):** Atualização do registro de decisões e histórico recente no `AGENTS.md` para PR #32 e PR #33.
  - **PR #35 (Merge commit `7e1a6bd`):** Implementação completa da suíte de ilustrações táteis interativas e micro-gadgets em SVG puro inspirados no Sentry S.C.R.A.P.S. ("The Acid Workbench"): `WorkbenchTape` (fitas adesivas neo-brutalistas com bordas serradas nos cantos da foto e no formulário de contato), `TactileWire` (cabo de sinal elétrico com terminal de fixação, clamp e LED pulsante verde limão), `TinyMLOscilloscope` (osciloscópio de bancada retrô em SVG/CSS com CRT grid, controle por toque de forma de onda senoidal/pulso e métricas INT8/14FPS da pesquisa de Edge AI) e `EmptyStateProbeRobot` (robô inspetor em 30° isométrico com lupa e centelhas ácidas no `EmptyState` da busca de projetos), 100% responsivos para mobile e com cobertura de testes (20 suites, 71 testes automatizados).
  - **PR #36 (Merge commit `025e058`):** Atualização do registro de decisões e histórico recente no `AGENTS.md` para PR #34 e PR #35.
  - **PR #37 (Merge commit `1e799cd`):** Correção completa e fidedigna dos dados do currículo oficial em `/llms.txt` e JSON-LD Knowledge Graph: restauração da graduação em Tecnologias da Informação e Comunicação na UFSC (Fev/2013 - Fev/2018), remoção de referências incorretas à UNESC, sincronização das datas e escopos de experiência profissional (Compass.UOL desde Fev/2021 com OCC e KnockoutJS, Smart Sistemas Fev/2020 - Fev/2021, Agrosys Jul/2019 - Fev/2020 e Zaib Jul/2018 - Jul/2019), conferência das 3 certificações oficiais Oracle e dados de contato (Araranguá, SC).
  - **PR #38 (Merge commit `f805cb4`):** Atualização do registro de decisões e histórico recente no `AGENTS.md` para PR #36 e PR #37.
  - **PR #39 (Merge commit `57122f6`):** Refinamento completo da comunicação tátil com o HTML no estilo Sentry S.C.R.A.P.S.: (1) `TactileWire` reconfigurado para brotar do parafuso da badge `SENIOR DEV // EDGE AI`, abraçar a borda vertical do card no mobile/desktop e morder o container no `TEST POINT #01` com LED verde limão piscante; (2) `TinyMLOscilloscope` acoplado fisicamente apoiado sobre o canto inferior do card de apresentação; (3) `WorkbenchTape` adicionado às thumbnails dos cards em destaque (`ProjectCard`), foto do Hero e formulário de contato; (4) `EmptyStateProbeRobot` debruçado sobre a caixa de busca vazia com `// NO SIGNALS DETECTED [RETRY PROBE]` e empoleirado como sentinela no formulário de contato inspecionando mensagens. Cobertura de 20 test suites, 72 testes Jest passando e 0 apontamentos no `impeccable detect`.
  - **PR #40 (Merge commit `57cfab4`):** Atualização do registro de decisões e histórico recente no `AGENTS.md` para PR #38 e PR #39.
  - **PR #41 (Merge commit `3d358d5`):** Solução definitiva e responsiva da sobreposição visual de ilustrações táteis: (1) no `HeroSection`, o osciloscópio de bancada `TinyMLOscilloscope` foi retirado de cima da foto e reposicionado em fluxo normal diretamente repousado na prateleira da bancada (`mt-7 flex w-full justify-center lg:justify-end`) abaixo do card de apresentação, eliminando qualquer colisão com a foto ou com a badge `7+ YRS • AVAILABLE`; (2) no `ContactForm`, o título `SectionTitle` ("Contact Us") foi 100% desobstruído com o `EmptyStateProbeRobot` reposicionado em fluxo normal centralizado entre o título e o formulário, enquanto o formulário foi envolto em card tátil (`.card-tactile`) com a fita adesiva `WorkbenchTape` fixada na borda superior direita do card sem encostar no texto; (3) no `TactileWire`, a etiqueta técnica `TEST POINT #01` foi centralizada sobre o clamp (`translate(-6, 114)`) evitando corte na borda em telas mobile estreitas. Validação completa em 1280x800 e 390x844 via subagente de browser (0 sobreposições, 0 overflow horizontal, 20 test suites, 72 testes passando).
  - **PR #42 (Merge commit `51fdd6e`):** Atualização do registro de decisões e histórico recente no `AGENTS.md` para PR #40 e PR #41.
  - **PR #43 (Merge commit `4f92d6d`):** Transformação das linhas verticais das timelines de Education e Professional Experience em cabos jumper de hardware táteis (`TactileJumperWire`) e conectores terminais DuPont em SVG puro (`TactileNodeConnector`): (1) conectores DuPont header instalados às 12h (entrada) e 6h (saída) nos nós circulares de logo; (2) cabo jumper acid lime (`#C2EF4E`) conectando o Mestrado ao Bacharelado na UFSC com etiqueta técnica compacta `// B.SC. TIC`; (3) cabos jumper electric violet (`#7553FF`) interligando todos os 4 nós de experiência (Compass.UOL -> Smart Sistemas -> Agrosys -> Zaib) com barramento tátil `// BUS.01`, `// BUS.02`, `// BUS.03`; (4) terminação física limpa de circuito em terminal de aterramento `GND // ⏚` no último nó de ambas as timelines; (5) continuidade matemática de 0 gap entre nós através de extensão de flex-stretch e encaixe das luvas de alívio de tensão diretamente nas cavidades dos conectores (`-mt-2`/`-mb-2.5`); (6) 0 overflow horizontal e alinhamento milimétrico em mobile (390x844) e desktop (1440x900) com 20 test suites e 76 testes Jest passando.
  - **PR #44 (Merge commit `a27c797`):** Atualização do registro de decisões e histórico recente no `AGENTS.md` para PR #42 e PR #43.
  - **PR #45 (Merge commit `2d9e469`):** Auditoria profunda e otimização integral de performance: (1) remoção de `unoptimized` nos cards de projetos (`ProjectCard` e `ProjectsList/projectCard`), ativação do compressor Sharp com suporte nativo WebP/AVIF e adição de `sizes` responsivos (redução de 93% na transferência de `gatil-cms` de 384 KB para 26.1 KB e thumbnails dinâmicos do GitHub de ~100 KB para ~9.5 KB); (2) inserção de regra de cache imutável de 1 ano (`Cache-Control: public, max-age=31536000, immutable`) em `next.config.ts` para assets estáticos em `/images/*`; (3) guarda condicional no `GoogleAnalytics` eliminando chamadas inválidas para `gtag/js?id=undefined`; (4) eliminação de `loading="lazy"` acima da dobra no logo da navbar com `priority` e definição de `sizes` na foto de perfil do Hero; validação completa sem regressões e com 100% de testes unitários passando (20 suites, 76 testes).
  - **PR #46 (Merge commit `3a42dc1`):** Atualização do registro de decisões e histórico recente no `AGENTS.md` para PR #44 e PR #45.
  - **PR #47 (Merge commit `3fc739f`):** Refinamento completo da seção Education e transformação da seção Knowledge: (1) substituição da imagem de baixa resolução (64x75 JPEG) pelo Brasão oficial da UFSC em vetor nítido (`public/images/ufsc.webp` e `ufsc-brasao.svg`), com remoção do fundo branco cru (`bg-ink`) em prol de superfície tátil (`bg-surface`), preenchimento `p-2` e `object-contain` eliminando qualquer corte no listel "UFSC" ou ramos de louro; (2) diferenciação tátil de nós acadêmicos: Mestrado em Edge AI com borda verde limão brilhante (`border-lime/90`), badge micro-tactile `MSc` e cabo jumper `// EDGE AI`, e Bacharelado com badge `BSc` e aterramento `GND // ⏚`; (3) transformação dos cards da seção Knowledge em SMD / IC Component Chips ("The IC Chip Rack") com cabeçalho técnico (`// U01 :: CORE ARCH`, `// U03 :: RESEARCH`, etc.), LEDs pulsantes em verde limão para competências centrais, soquete rebaixado em `bg-well` para ícones do CMS, tipografia mono e badges de rodapé com aplicações reais em escala empresarial e pesquisa em Edge AI; (4) adição de descrição de contexto na seção Knowledge e ajuste fino do jumper wire para 0 overlap em mobile (390x844); validação completa com 20 test suites, 76 testes Jest passando e 0 apontamentos no ESLint.
  - **PR #48 (Merge commit `20d8975`):** Atualização do registro de decisões e histórico recente no `AGENTS.md` para PR #46 e PR #47.
  - **PR #49 (Merge commit `95e5273`):** Refinamento da seção Knowledge para formato discreto e minimalista neo-brutalista S.C.R.A.P.S.: (1) restauração do layout horizontal de linha única (`single-row`) compacto e sem excesso de texto descritivo; (2) adição de detalhe sutil de bancada de hardware através de micro-LED pulsante em verde limão (`bg-lime animate-pulse` com anel de ping) como ponto de teste elétrico ao lado do nome da tecnologia; (3) soquete tátil rebaixado para os ícones do CMS (`bg-well border border-line rounded p-1.5`); (4) uniformização milimétrica da altura de todos os 10 cards em exatamente 77.6px com `truncate` e tipografia `text-xs sm:text-sm`, eliminando quebra de linha em "Edge AI / TinyML"; validação com 20 test suites, 76 testes Jest passando e 0 apontamentos no ESLint.
  - **PR #50 (Merge commit `28a99c4`):** Atualização do registro de decisões e histórico recente no `AGENTS.md` para PR #48 e PR #49.
  - **PR #51 (Merge commit `b05bc53`):** Aplicação de fundo branco nítido (`bg-white`) nos nós de formação da timeline da UFSC (`CardItem`), mantendo o enquadramento sem cortes com `p-1.5`, realçando o contraste cromático natural do brasão com o anel neon do Mestrado (`border-lime/90`) e a borda sutil do Bacharelado (`border-line`); validação com 20 test suites e 76 testes Jest passando.
  - **PR #52 (Merge commit `89c381e`):** Atualização do registro de decisões e histórico recente no `AGENTS.md` para PR #50 e PR #51.
  - **PR #53 (Merge commit `5f9003d`):** Otimizações profundas pós-auditoria Google Lighthouse 13.5.0: (1) **LCP desacoplado do Framer Motion**: remoção de `opacity: 0` inicial no container da foto do Hero (`initial={{ opacity: 1, y: 24, rotate: 3 }}`), garantindo renderização visual imediata assim que a imagem é baixada (~1.8s - 2.0s) em vez de aguardar a hidratação do JS (que atrasava o LCP para 7.2s em mobile 4G throttled); (2) **Acessibilidade W3C e Axe-core**: adição de `role="img"` no `CMSIcon` eliminando a violação `aria-prohibited-attr`, ajuste de semântica no `SectionTitle` de `<motion.h3>` para `<motion.h2>` restaurando a ordem hierárquica contígua dos cabeçalhos (`<h1>` -> `<h2>`) e inclusão de `aria-label` descritivos nos links sociais do Hero; (3) **Suíte completa de Favicons Táteis S.C.R.A.P.S.**: geração vetorial procedural e estática de ícones seguindo `docs/ILLUSTRATION_PROMPTS.md` (chip SMD com borda preta de 2.5px, pinos de solda DuPont em violeta elétrico, entalhe coral, ponto de teste LED verde limão e monograma 'W' em off-white) nos formatos `public/icon.svg`, `public/favicon.ico` (multi-tamanho 16/32/48), `public/apple-touch-icon.png` (180x180), `icon-192`, `icon-512`, além de `src/app/manifest.ts` e cópia raiz `src/app/favicon.ico` eliminando 100% dos erros 404 no console; 20 test suites e 76 testes Jest passando.
- **Sincronização com Dados Reais do CV (PDF) e LinkedIn:** Conectado ao MongoDB de produção e atualizado perfil para 7+ anos de experiência, métricas de e-commerce (120% de faturamento, 106% transações), adição do Mestrado em TIC com foco em Edge AI na UFSC, inclusão da publicação no IEEE Xplore (*Embedded TinyML for Driver Drowsiness Detection*), 3 certificações Oracle, e enriquecimento das 4 experiências profissionais (Compass.UOL, Smart Sistemas, Agrosys, Zaib).
- **Projetos GitHub e Resolução Dinâmica de Thumbnails:** Adicionados projetos reais como `fadigAI` e `shelfkeep`. Criado helper `getProjectThumbnail` com hierarquia de fallback dinâmico (OpenGraph do GitHub, screenshots locais e media do CMS).
- **Tratamento do Projeto Gatil:** O domínio oficial (`https://gatildosresgatados.com/`) foi preservado, enquanto a captura de tela foi atualizada para a prévia ativa em `https://gatil-cms.vercel.app/` (`public/images/projects/gatil-cms.png`).
- **Husky & Commitlint Operacionais:** Configurado `.husky/commit-msg` e renomeado `commitlint.config.cjs` resolvendo o erro de escopo de ES Module.
