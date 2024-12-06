import type { StorybookConfig } from '@storybook/nextjs';

const config: StorybookConfig = {
  stories: [
    '../src/**/*.mdx',
    '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)',
    '../src/components/**/stories.tsx',
  ],
  docs: {
    autodocs: true,
  },
  addons: [
    '@storybook/addon-onboarding',
    '@storybook/addon-essentials',
    '@chromatic-com/storybook',
    '@storybook/addon-interactions',
  ],
  framework: {
    name: '@storybook/nextjs',
    options: {},
  },
  staticDirs: ['..\\public'],
};
export default config;

// const config = {
//   staticDirs: ['../public'],
//   stories: ['../src/components/**/stories.tsx'],
//   addons: ['@storybook/addon-essentials'],
//   framework: {
//     name: '@storybook/nextjs',
//     options: {}
//   },
//   docs: {
//     autodocs: true
//   },
//   webpackFinal: (config) => {
//     config.resolve.modules.push(`${process.cwd()}/src`)
//     config.resolve.alias = {
//       ...config.resolve.alias,
//       '@': `${process.cwd()}/src` // Alias do `@` definido no tsconfig.json.
//     }

//     return config
//   }
// }
// export default config
