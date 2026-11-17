# Illustration Prompt Guide

Art direction for the portfolio's "Acid Workbench" look. Use with Recraft (vector), Midjourney, or the `image-generator` subagent. All assets live in `public/images/illustrations/`.

## 1. Style bible (prepend to every prompt)

> **STYLE:** editorial indie-comic isometric illustration, flat vector shapes, uniform 3px near-black outline (#0B0716), subtle halftone dot shading, slightly wonky hand-drawn proportions, chunky friendly objects, small cast of quirky characters with simple dot eyes. No gradients, no photorealism, no text unless stated.
> **PALETTE (only these):** deep aubergine #150F23 background, plum #1F1633 / #2B1D38 mid-tones, grape lines #3E2C59, electric violet #7553FF and #6C5FC7 as main fills, acid lime #C2EF4E as the single hot accent, bubblegum coral #FA7FAA and #FF6B6B for small details, off-white #F6F6F8 highlights.
> **COMPOSITION:** isometric 30° angle, one hero object centred, 60% empty aubergine space for UI overlay, soft contact shadow flat under the object, small lime sparks / dashes around the focal point.

**Negative prompt (all tools):** photo, 3D render, gradient, glow, neon blur, text, watermark, white background, realistic skin, extra colours, thin lines.

**Midjourney suffix:** `--ar 4:3 --style raw --stylize 150 --no gradient, text, photo` (use `--ar 1:1` for icons, `--ar 16:9` for banners).
**Recraft:** model "Vector illustration", style "Flat / Isometric", set the 8 palette hex values as brand colours.
**Output rules:** transparent or #150F23 background, export SVG when possible, PNG at 2x (min 1600px wide), keep file under 200KB for web.

## 2. Prompts by surface

### 1. Home / Hero (`hero.svg`, 4:3)

Replaces the plain photo backdrop; sits behind or beside the tilted photo.

> [STYLE+PALETTE] A cosy isometric developer desk floating on an aubergine tile: chunky laptop showing a lime cursor block, a mug with a coral heart, a stack of three plum books, a tiny violet robot waving. Cables snake off the edge like friendly vines. Lime sparks above the laptop.

### 2. Knowledge / Skills (`skills.svg`, 16:9)

Metaphor: the toolbox of a tinkerer.

> [STYLE+PALETTE] An isometric open toolbox overflowing with oversized tech tools: a wrench shaped like a curly brace, a screwdriver with a hexagon tip, a paintbrush dipped in lime, a plug, a magnifying glass. Violet drawers labelled with blank plates. A coral bandage on one tool for humour.

### 3. Education (`education.svg`, 4:3)

Metaphor: a levelling-up staircase.

> [STYLE+PALETTE] An isometric staircase of stacked books climbing to a small tower, a tiny character in a graduation cap carrying a lime lightbulb up the steps, a coral flag at the top, floating paper planes made of violet pages.

### 4. Featured Projects (`projects.svg`, 16:9)

Metaphor: the workshop display shelf.

> [STYLE+PALETTE] An isometric shop window / display shelf with three small framed "screens", each showing an abstract UI (a grid, a chart, a cart) in violet and lime. A spotlight cone drawn as flat lime triangle. Tiny price-tag-style stickers in coral. A character polishing one screen with a cloth.

### 5. Work Experience (`experience.svg`, 3:4 tall)

Metaphor: a career pipeline / factory conveyor.

> [STYLE+PALETTE] An isometric conveyor belt carrying glowing-lime cubes (features) from a small violet building to a launch rocket. A few quirky coworkers: one with a clipboard, one holding a coffee, one debugging a cube with a tiny bug net. A bug (coral beetle) escapes in the corner.

### 6. Contact (`contact.svg`, 4:3)

Metaphor: sending a message in a bottle / carrier pigeon.

> [STYLE+PALETTE] An isometric mailbox on a floating island with a lime envelope sailing out, a paper plane trail made of dashed lines, a coral pigeon carrying a tiny violet letter. A small "open" flag raised on the mailbox.

### 7. Projects page hero (`projects-hero.svg`, 16:9)

> [STYLE+PALETTE] A sprawling isometric city-block of mini workshops, each with a different tiny machine (a printer making cards, a robot arm stacking cubes, a lab bench with bubbling lime flask). Wide, low horizon, lots of empty aubergine sky for a centred title.

### 8. Empty state: no projects (`empty-projects.svg`, 1:1)

Same concept as the inline SVG in `EmptyState`, upgraded.

> [STYLE+PALETTE] A single open empty isometric cardboard box with a lime question mark floating above it, a coral spider-web in one corner, a tiny confused character peeking over the edge. Minimal, centred, lots of space.

### 9. Error / 404 (`not-found.svg`, 1:1)

> [STYLE+PALETTE] An isometric robot lying on the ground with its panel open, a lime wire unplugged, coral "!" sparks, a tiny repair character holding a screwdriver. Dashed route line leading off the edge.

### 10. Form sent: success toast (`sent.svg`, 1:1)

> [STYLE+PALETTE] A small lime envelope with a violet wax-seal smile, three confetti dashes in coral and lime, thumbs-up from a tiny character. Compact.

### 11. Project illustration slots (project detail, 16:9)

Use when a project has no strong screenshot. Pick the metaphor that fits the stack and keep the style bible:

| Project type              | Metaphor to use                                                        |
| ------------------------- | ---------------------------------------------------------------------- |
| E-commerce / B2C          | Isometric shopping cart conveyor with parcels and a tiny cashier robot |
| B2B / dashboard           | A control-room table with floating chart cubes and a lime gauge        |
| CMS / Payload             | A library cabinet with sliding drawers of content blocks               |
| Design system / Storybook | A shelf of tactile UI blocks (buttons, chips) being stacked like Lego  |
| Open-source / tool        | A workbench with a half-built gadget and a lime wrench                 |
| API / backend             | Pipes and valves connecting violet tanks, lime liquid flowing          |

Prompt template:

> [STYLE+PALETTE] A <metaphor from table> labelled with the project's name as a blank plate (no text). Hero object centred, tiny character interacting with it, lime accent on the part that represents the project's core feature.

## 3. Consistency checklist

- Outline: always 3px, always `#0B0716`, round joins.
- Lime appears in one place only per illustration (the focal point).
- Light source top-left; shadow is a flat darker plum ellipse.
- Characters: dot eyes, no mouths or a single line, no skin tones other than violet / coral / off-white.
- Keep 60% negative space on hero illustrations so UI overlays stay legible.
- When compositing on the page, add the `p-1.5` frame and `shadow-card` from the design system if the illustration is a rectangle.
