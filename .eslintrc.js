const RulesStatus = {
  OFF: 'off',
  ERROR: 'error',
  WARN: 'warn',
};

module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint'],
  extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended', 'prettier'],
  env: {
    node: true,
  },
  rules: {
    '@typescript-eslint/explicit-function-return-type': RulesStatus.ERROR,
    '@typescript-eslint/no-unused-vars': RulesStatus.WARN,
  },
};
