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

## 8. Registro de Decisões e Histórico Recente

- **Sincronização com Dados Reais do CV (PDF):** Conectado ao MongoDB de produção e atualizado perfil para 7+ anos de experiência, métricas de e-commerce (120% de faturamento, 106% transações), adição do Mestrado em TIC com foco em Edge AI na UFSC, e enriquecimento das 4 experiências profissionais (Compass.UOL, Smart Sistemas, Agrosys, Zaib).
- **Projetos GitHub e Resolução Dinâmica de Thumbnails:** Adicionados projetos reais como `fadigAI` e `shelfkeep`. Criado helper `getProjectThumbnail` com hierarquia de fallback dinâmico (OpenGraph do GitHub, screenshots locais e media do CMS).
- **Tratamento do Projeto Gatil:** O domínio oficial (`https://gatildosresgatados.com/`) foi preservado, enquanto a captura de tela foi atualizada para a prévia ativa em `https://gatil-cms.vercel.app/` (`public/images/projects/gatil-cms.png`).
- **Husky & Commitlint Operacionais:** Configurado `.husky/commit-msg` e renomeado `commitlint.config.cjs` resolvendo o erro de escopo de ES Module.
- **Atualização de Segurança Next.js 16 + Payload 3.93:** Resolvidas vulnerabilidades críticas de RCE e DoS anteriores ao Next 15.5.
- **Node.js v26.13.1:** Adotado para atender à especificação de engines do ecossistema Payload v3.
- **Inclusão do EmptyState:** Adicionado suporte a estado vazio amigável na página de projetos.
- **Ponte Babelrc para Storybook:** `.babelrc` incluído para viabilizar compatibilidade entre o bundler Webpack do Storybook 8 e os loaders do Next 16.
