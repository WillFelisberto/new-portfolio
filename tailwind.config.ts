import type { Config } from 'tailwindcss';

/**
 * Design tokens: "Acid Dark Mode" (S.C.R.A.P.S.-inspired). See /DESIGN.md.
 * Rule of thumb: violet = structure, lime = action/emphasis, coral = alert/personality.
 */
export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Surfaces
        night: '#150F23', // page background (deep aubergine)
        surface: '#1F1633', // cards, form fields
        raised: '#2B1D38', // raised / hovered surfaces
        line: '#3E2C59', // 1px borders, dividers
        well: '#0B0716', // hard-shadow "floor" colour
        // Brand
        violet: {
          DEFAULT: '#6C5FC7',
          electric: '#7553FF',
        },
        lime: '#C2EF4E',
        coral: {
          DEFAULT: '#FA7FAA',
          hot: '#FF6B6B',
        },
        // Text
        ink: '#F6F6F8',
        muted: '#BDB4D1', // body secondary  (>= 9:1 on night)
        dim: '#9A8FB5', // meta / dates     (>= 5.5:1 on night)
      },
      fontFamily: {
        display: ['var(--font-display)', 'system-ui', 'sans-serif'],
        sans: ['var(--font-body)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-mono)', 'ui-monospace', 'monospace'],
      },
      letterSpacing: {
        label: '0.14em',
      },
      boxShadow: {
        // Tactile, layered: top highlight + hard "floor" + soft ambient blur.
        tactile:
          'inset 0 1px 0 rgba(255,255,255,0.28), 0 4px 0 0 #0B0716, 0 8px 16px -4px rgba(0,0,0,0.5)',
        'tactile-lift':
          'inset 0 1px 0 rgba(255,255,255,0.28), 0 6px 0 0 #0B0716, 0 14px 22px -6px rgba(0,0,0,0.55)',
        'tactile-pressed':
          'inset 0 1px 0 rgba(255,255,255,0.12), 0 1px 0 0 #0B0716, 0 2px 4px -1px rgba(0,0,0,0.5)',
        card: 'inset 0 1px 0 rgba(255,255,255,0.06), 0 4px 0 0 #0B0716, 0 14px 28px -10px rgba(0,0,0,0.6)',
        'card-lift':
          'inset 0 1px 0 rgba(255,255,255,0.1), 0 7px 0 0 #0B0716, 0 20px 32px -10px rgba(0,0,0,0.65)',
        chip: 'inset 0 1px 0 rgba(255,255,255,0.4), 0 2px 0 0 #0B0716',
      },
      backgroundImage: {
        'grid-tech':
          'linear-gradient(to right, rgba(62,44,89,0.45) 1px, transparent 1px), linear-gradient(to bottom, rgba(62,44,89,0.45) 1px, transparent 1px)',
        grain:
          "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='160' height='160'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='2' stitchTiles='stitch'/><feColorMatrix values='0 0 0 0 1  0 0 0 0 1  0 0 0 0 1  0 0 0 0.55 0'/></filter><rect width='100%' height='100%' filter='url(%23n)'/></svg>\")",
      },
      transitionTimingFunction: {
        'out-expo': 'cubic-bezier(0.16, 1, 0.3, 1)',
      },
    },
  },
  plugins: [],
} satisfies Config;
