/**
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/configuration
 */

import type { Config } from 'jest';

const config: Config = {
  clearMocks: true,
  setupFilesAfterEnv: ['<rootDir>/.jest/setup.ts'],
  collectCoverage: true,
  collectCoverageFrom: [
    'src/**/*.ts(x)?',
    '!src/app/**', // should be tested in e2e
    '!src/lib/registry.tsx',
    '!src/lib/**', // Ignora todos os arquivos na pasta src/lib
    '!src/types/**',
    '!src/**/*.stories.tsx',
    '!src/styles/**',
  ],
  modulePaths: ['<rootDir>/src/', '<rootDir>/.jest'],
  transformIgnorePatterns: [
    '/node_modules/(?!(.*@payloadcms/richtext-lexical.*)/)',
  ],
  extensionsToTreatAsEsm: ['.ts', '.tsx', '.jsx'],
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': ['babel-jest', { presets: ['next/babel'] }],
  },
  testPathIgnorePatterns: [
    '<rootDir>/src/lib/', // Ignora completamente os testes para src/lib
  ],
  coverageDirectory: 'coverage',

  testEnvironment: 'jsdom',
  moduleNameMapper: {
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
    // Mapeamento para path aliases
    '^@/(.*)$': '<rootDir>/src/$1',
  },
};

export default config;
