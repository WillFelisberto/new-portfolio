---
name: Willian Felisberto Portfolio
description: Acid Dark Mode, tactile and neo-brutalist-polished, with editorial isometric illustration. Inspired by Sentry's S.C.R.A.P.S.
colors:
  night: "#150F23"
  surface: "#1F1633"
  raised: "#2B1D38"
  line: "#3E2C59"
  well: "#0B0716"
  violet: "#6C5FC7"
  violet-electric: "#7553FF"
  lime: "#C2EF4E"
  coral: "#FA7FAA"
  coral-hot: "#FF6B6B"
  ink: "#F6F6F8"
  muted: "#BDB4D1"
  dim: "#9A8FB5"
typography:
  display:
    fontFamily: "Bricolage Grotesque, system-ui, sans-serif"
    fontSize: "3.75rem"
    fontWeight: 800
    lineHeight: 1.05
    letterSpacing: "-0.025em"
  headline:
    fontFamily: "Bricolage Grotesque, system-ui, sans-serif"
    fontSize: "3rem"
    fontWeight: 800
    lineHeight: 1.1
    letterSpacing: "-0.025em"
  title:
    fontFamily: "Bricolage Grotesque, system-ui, sans-serif"
    fontSize: "1.5rem"
    fontWeight: 700
    lineHeight: 1.2
  body:
    fontFamily: "Rubik, system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.6
  label:
    fontFamily: "JetBrains Mono, ui-monospace, monospace"
    fontSize: "0.75rem"
    fontWeight: 500
    letterSpacing: "0.14em"
rounded:
  sm: "6px"
  md: "8px"
  lg: "12px"
  full: "9999px"
spacing:
  sm: "8px"
  md: "16px"
  lg: "24px"
  xl: "64px"
components:
  button-primary:
    backgroundColor: "{colors.lime}"
    textColor: "{colors.night}"
    rounded: "{rounded.md}"
    padding: "12px 20px"
    typography: "{typography.label}"
  button-secondary:
    backgroundColor: "{colors.raised}"
    textColor: "{colors.ink}"
    rounded: "{rounded.md}"
    padding: "12px 20px"
    typography: "{typography.label}"
  card:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    rounded: "{rounded.lg}"
    padding: "24px"
  tech-badge:
    backgroundColor: "{colors.raised}"
    textColor: "{colors.ink}"
    rounded: "{rounded.md}"
    padding: "4px 12px"
    typography: "{typography.label}"
  title-chip:
    backgroundColor: "{colors.lime}"
    textColor: "{colors.night}"
    rounded: "{rounded.sm}"
---

# Design System: Willian Felisberto Portfolio

## Overview

**Creative North Star: "The Acid Workbench"**

A dark aubergine workshop where every control is a physical object. Surfaces sit on a hard "floor" shadow, buttons press down when clicked, and a single acid-lime highlighter marks the one word that matters. Illustrations are editorial, indie-comic and isometric, with the same thick dark outline and flat palette as the UI.

The mode is Experience: the work (projects, photo, illustration) leads and the interface frames it. The look is tactile and playful but disciplined. Violet builds structure, lime marks action and emphasis, coral brings personality. Texture (a faded technical grid and film grain) keeps the dark from going flat.

**Key Characteristics:**
- Deep purple-black ground, never pure black or grey.
- 1px solid borders on everything raised, plus layered tactile shadows.
- Lime "chip" on one keyword per title.
- Mono, uppercase, wide-tracked labels for all UI chrome.
- Motion is physical (lift on hover, press on active), not decorative.

## Colors

Aubergine ground, violet structure, lime and coral as highlighter inks.

### Primary
- **Electric Violet** (`violet-electric`): focus-adjacent accents, hover borders on cards, offset blocks behind the hero photo.
- **Dusty Violet** (`violet`): scrollbar, input hover borders, secondary structure.

### Secondary
- **Acid Lime** (`lime`): the action colour. Primary button, title chips, active links, focus ring, text selection, caret.

### Tertiary
- **Bubblegum Coral** (`coral`): stickers and section path tags. **Hot Coral** (`coral-hot`): errors and the footer heart.

### Neutral
- **Deep Aubergine** (`night`): page background. **Plum Surface** (`surface`): cards and fields. **Raised Plum** (`raised`): raised or hovered surfaces, badges, secondary button. **Grape Line** (`line`): 1px borders and dividers. **Well** (`well`): the hard-shadow floor, footer.
- **Off-White Ink** (`ink`): headings and primary text. **Lilac Mist** (`muted`): body text. **Dim Lilac** (`dim`): dates and meta.

### Named Rules
**The Highlighter Rule.** Lime covers at most 10% of any screen: one primary button, one title chip, active states. If two lime things compete, one becomes secondary.

**The Text-On-Lime Rule.** Anything sitting on lime or coral uses `night` text. White on `violet-electric` is 4.4:1, below AA for small text, so the violet fill is not used behind small labels.

## Typography

**Display Font:** Bricolage Grotesque (system-ui fallback)
**Body Font:** Rubik (system-ui fallback)
**Label/Mono Font:** JetBrains Mono

**Character:** Bricolage is expressive and slightly quirky at heavy weights; Rubik is rounded and friendly for reading; JetBrains Mono gives the UI chrome a terminal flavour.

### Hierarchy
- **Display** (800, 3.75rem / 1.05): hero name only.
- **Headline** (800, 2.25-3rem / 1.1): section titles, with one lime chip.
- **Title** (700, 1.25-1.5rem): card titles, project and experience names.
- **Body** (400, 1rem / 1.6, max 65ch): descriptions.
- **Label** (500, 0.7-0.75rem, +0.14em, uppercase): buttons, tech badges, nav, dates, section path tags.

### Named Rules
**The Mono Is Chrome Rule.** Mono uppercase is for controls and metadata. Never set paragraphs in it.

## Layout

Single column container, 1200px max, 24px side padding. Sections breathe on a 64px (`py-16`) rhythm; inside a card use 24px. Hero is a two-column split on large screens (copy left, tilted photo right) and stacks with the photo first-in-order below it on mobile. Project cards alternate image and copy on desktop; the projects page uses an auto-fit grid (min 350px). A faint 56px technical grid sits behind everything, faded toward the edges.

## Elevation & Depth

Hybrid: tonal layering for ground and surfaces, plus a tactile hard shadow for interactive objects. Every raised element has a top inset highlight, a hard offset "floor" in `well`, and a soft ambient blur beneath.

### Shadow Vocabulary
- **Tactile** (`inset 0 1px 0 rgba(255,255,255,.28), 0 4px 0 0 #0B0716, 0 8px 16px -4px rgba(0,0,0,.5)`): buttons at rest.
- **Tactile Lift** (floor 6px): hover, with `translateY(-2px)`.
- **Tactile Pressed** (floor 1px): `:active`, with `translateY(3px)`.
- **Card** and **Card Lift**: same recipe on 12px-radius surfaces; lift adds a violet-electric border.
- **Chip** (`inset 0 1px 0 rgba(255,255,255,.4), 0 2px 0 0 #0B0716`): title chips and stickers.

### Named Rules
**The Physical Press Rule.** Hover lifts, active presses. Shadow and translate always change together.

## Shapes

8px radius for controls, 12px for cards and images, 6px for chips. Everything raised carries a 1px solid border. Stickers (path tags, "Hello, my name is") rotate 1-6 degrees; nothing else rotates. Photos are framed with a solid violet offset block behind them.

## Components

### Buttons
- **Shape:** 8px radius, 1px border, mono uppercase label (0.14em tracking).
- **Primary:** lime fill, `night` text, `well` border.
- **Secondary:** `raised` fill, `ink` text, `line` border, violet-electric border on hover.
- **Hover / Active:** lift 2px then press 3px, per the Physical Press Rule. Disabled drops shadow and 50% opacity. Focus is a 2px lime outline offset 4px.

### Chips
- **Title chip:** lime, `night` text, 6px radius, wraps lines with cloned decoration.
- **Tech badge:** `raised`, 1px `line` border, mono label; hover turns the border and text lime.

### Cards / Containers
- 12px radius, `surface` fill, 1px `line` border, Card shadow; interactive cards lift and gain a violet-electric border. Padding 20-24px. Never nest a card inside a card.

### Inputs / Fields
- `surface` fill, `line` border, inset top shadow (pressed-in look), placeholder in `dim`. Hover: violet border. Focus: lime border plus 40% lime ring. Caret is lime.

### Navigation
- Mono uppercase links with a lime `#`. Active item sits on a `surface` tile with a `line` border. Header floats over the page, no fill.

### Section Title
- Heading with one lime chip (defaults to the last word, override via `highlight`), followed by a coral path tag (`../subtitle`) rotated -1 degree.

### Empty State
- Card with an isometric "empty box" illustration, a title, one sentence, one link.

## Do's and Don'ts

### Do:
- **Do** use `night` text on every lime or coral fill.
- **Do** pair every hover lift with a shadow change.
- **Do** keep body copy in Rubik at 65ch or less.
- **Do** draw illustrations with a 3px `well` outline and the palette above.

### Don't:
- **Don't** use pure black, pure white, or grey; tint toward aubergine.
- **Don't** add gradient text, glows, or blurred colour halos.
- **Don't** put more than one lime chip in a heading.
- **Don't** use mono for paragraphs, or emoji in place of icons.
- **Don't** rotate anything except stickers.
