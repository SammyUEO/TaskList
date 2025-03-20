import globals from 'globals';
import pluginJs from '@eslint/js';
import pluginVue from 'eslint-plugin-vue';
import pluginPrettier from 'eslint-config-prettier';

/** @type {import('eslint').Linter.FlatConfig[]} */
export default [
  { files: ['**/*.{js,mjs,cjs,vue}'] },
  {
    languageOptions: { globals: globals.browser },
    rules: {
      'no-alert': 'error',
      quotes: ['error', 'single'],
      'max-len': ['error', { code: 80 }],
      'no-trailing-spaces': 'error',
      'no-var': 'error',
      'eol-last': ['error', 'always'],
    },
  },
  pluginJs.configs.recommended,
  ...pluginVue.configs['flat/recommended'],
  pluginPrettier,
];
