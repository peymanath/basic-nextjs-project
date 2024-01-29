const config = {
  extends: ['next/core-web-vitals'],
  plugins: ['unused-imports'],
  rules: {
    'jsx-a11y/alt-text': 'off',
    '@next/next/no-img-element': 'off',
    'unused-imports/no-unused-imports': 'error',
    'unused-imports/no-unused-vars': [
      'error',
      {
        vars: 'all',
        varsIgnorePattern: '^_',
        args: 'none',
        argsIgnorePattern: '^_',
      },
    ],
  },
};

module.exports = config;
