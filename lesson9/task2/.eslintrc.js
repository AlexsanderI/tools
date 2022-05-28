module.exports = {
  extends: 'eslint-config-airbnb-base',

  rules: {
    'no-console': 2,
    'linebreak-style': 0,
    'import/prefer-default-export': 0,
  },

  env: {
    browser: true,
  },
};
