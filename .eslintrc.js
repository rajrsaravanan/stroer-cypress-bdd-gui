module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['standard', 'plugin:cypress/recommended'],
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: { quotes: ['error', 'single'], semi: ['error', 'always'], 'space-before-function-paren': ['error', 'always'], 'comma-dangle': ['error', 'never'] },
};
