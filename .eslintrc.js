module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
    'jest/globals': true,
  },
  extends: 'airbnb',
  parserOptions: {
    ecmaVersion: 'latest',
  },
  rules: {
    'max-len': ['error', { code: 120 }],
    'linebreak-style': 0,
    semi: [2, 'always'],
    indent: ['error', 4, { SwitchCase: 1 }],
    'no-unused-expressions': [2, { allowTernary: true }],
    'prefer-promise-reject-errors': 'off',
},
plugins: [
    'jest',
],
};