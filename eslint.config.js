const js = require('@eslint/js');
const globals = require('globals');

module.exports = [
  js.configs.recommended,
  {
    files: ['**/*.js'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'commonjs',
      globals: globals.node,
    },
    rules: {
      semi: ['error', 'always'],
      quotes: ['error', 'single'],
      indent: ['error', 2],
      // Проверка пробелов
      'no-multi-spaces': 'error',
      'no-trailing-spaces': 'error',
      'no-tabs': 'error',
      'keyword-spacing': 'error',
      'no-multiple-empty-lines': ['error', { max: 1 }],

      'no-unused-vars': 'warn',
      'no-debugger': 'off',
    },
  },
];
