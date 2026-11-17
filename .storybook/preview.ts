import type { Preview } from '@storybook/react';
import React from 'react';
import { Bricolage_Grotesque, Rubik, JetBrains_Mono } from 'next/font/google';
import '../src/app/(portfolio)/globals.css';

const display = Bricolage_Grotesque({
  variable: '--font-display',
  subsets: ['latin'],
});
const body = Rubik({ variable: '--font-body', subsets: ['latin'] });
const mono = JetBrains_Mono({ variable: '--font-mono', subsets: ['latin'] });

const preview: Preview = {
  parameters: {
    backgrounds: {
      default: 'night',
      values: [
        { name: 'night', value: '#150F23' },
        { name: 'surface', value: '#1F1633' },
      ],
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    (Story) =>
      React.createElement(
        'div',
        {
          className: `${display.variable} ${body.variable} ${mono.variable} font-sans text-ink p-6`,
        },
        React.createElement(Story),
      ),
  ],
};

export default preview;
