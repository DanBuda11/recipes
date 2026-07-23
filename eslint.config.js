import js from '@eslint/js';
import { defineConfig } from 'eslint/config';
import globals from 'globals';
import react from 'eslint-plugin-react';

export default defineConfig([
  {
    ignores: ['dist/', 'node_modules/', 'coverage/'],
  },
  {
    files: ['**/*.{js,jsx}'],
    ...js.configs.recommended,
  },

  {
    files: ['**/*.{js,jsx}'],
    ...react.configs.flat.recommended,
  },

  {
    files: ['**/*.{js,jsx}'],
    ...react.configs.flat['jsx-runtime'],
  },

  {
    files: ['**/*.{js,jsx}'],
    languageOptions: {
      globals: {
        ...globals.browser,
      },
    },

    settings: {
      react: {
        version: 'detect',
      },
    },
  },
]);
