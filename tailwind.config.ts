import type { Config } from 'tailwindcss';

export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-image': "url('/images/hero-bg.png')",
      },
      fontFamily: {
        nunito: ['Nunito', 'sans-serif'],
      },
      colors: {
        primary: '#FFD427',
        secondary: '#00CAE3',
        background: '#F2F2F2',
        text: '#333333',
        danger: '#E63946',
      },
      boxShadow: {
        button: '0px 0px 68px 7px rgb(39, 90, 169, 0.4)',
      },
    },
  },
  plugins: [],
} satisfies Config;
