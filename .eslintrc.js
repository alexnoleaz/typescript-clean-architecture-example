const RulesStatus = {
  OFF: 'off',
  ERROR: 'error',
  WARN: 'warn',
};

module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: 'tsconfig.json',
    tsconfigRootDir: __dirname,
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint/eslint-plugin'],
  extends: ['plugin:@typescript-eslint/recommended', 'plugin:prettier/recommended'],
  root: true,
  env: {
    node: true,
  },
  ignorePatterns: ['.eslintrc.js', './src/infrastructure/shared/config'],
  rules: {
    '@typescript-eslint/interface-name-prefix': RulesStatus.OFF,
    '@typescript-eslint/explicit-function-return-type': RulesStatus.OFF,
    '@typescript-eslint/explicit-module-boundary-types': RulesStatus.OFF,
    '@typescript-eslint/no-explicit-any': RulesStatus.OFF,
    '@typescript-eslint/no-unused-vars': RulesStatus.WARN,
  },
};
