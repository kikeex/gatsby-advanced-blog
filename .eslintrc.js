const off = 0;
const warn = 1;
const error = 2;

module.exports = {
  extends: ['airbnb', 'plugin:import/errors', 'plugin:import/warnings'],
  plugins: ['import', 'lodash-fp'],
  env: {
    es6: true,
    node: true,
    browser: true,
  },
  rules: {
    'comma-dangle': [
      error,
      {
        arrays: 'always-multiline',
        objects: 'always-multiline',
        imports: 'always-multiline',
        exports: 'always-multiline',
        functions: 'only-multiline',
      },
    ],
    'function-paren-newline': [error, 'consistent'],
    'global-require': off,
    'implicit-arrow-linebreak': off,
    'import/extensions': off,
    'import/no-deprecated': warn,
    'import/no-dynamic-require': off,
    'import/no-unresolved': off,
    'import/no-webpack-loader-syntax': off,
    'import/prefer-default-export': off,
    indent: off,
    'jsx-a11y/anchor-is-valid': off,
    'jsx-a11y/click-events-have-key-events': error,
    'jsx-a11y/heading-has-content': off,
    'jsx-a11y/href-no-hash': off,
    'jsx-a11y/label-has-for': off,
    'jsx-a11y/mouse-events-have-key-events': off,
    'jsx-a11y/no-autofocus': off,
    'lodash-fp/consistent-compose': error,
    'lodash-fp/consistent-name': [error, 'fp'],
    'lodash-fp/no-argumentless-calls': error,
    'lodash-fp/no-chain': error,
    'lodash-fp/no-extraneous-args': error,
    'lodash-fp/no-extraneous-function-wrapping': error,
    'lodash-fp/no-extraneous-iteratee-args': error,
    'lodash-fp/no-for-each': off,
    'lodash-fp/no-partial-of-curried': error,
    'lodash-fp/no-single-composition': error,
    'lodash-fp/no-submodule-destructuring': error,
    'lodash-fp/no-unused-result': error,
    'lodash-fp/prefer-compact': error,
    'lodash-fp/prefer-composition-grouping': error,
    'lodash-fp/prefer-constant': [error, { arrowFunctions: false }],
    'lodash-fp/prefer-flat-map': error,
    'lodash-fp/prefer-get': error,
    'lodash-fp/prefer-identity': [error, { arrowFunctions: false }],
    'lodash-fp/preferred-alias': off,
    'lodash-fp/use-fp': error,
    'max-len': [error, 150, { ignoreComments: true, ignoreStrings: true, ignoreTemplateLiterals: true }],
    'no-console': error,
    'no-multiple-empty-lines': [error, { max: error, maxEOF: error }],
    'no-implicit-coercion': error,
    'no-shadow': off,
    'no-underscore-dangle': off,
    'no-unused-vars': [error, { args: 'after-used', ignoreRestSiblings: false }],
    'object-curly-newline': [error, { consistent: true }],
    'prefer-spread': off,
    'react/jsx-filename-extension': [error, { extensions: ['.js', '.jsx'] }],
    'react/jsx-no-target-blank': error,
    'react/no-typos': error,
    'react/no-unescaped-entities': off,
  },
  parser: 'babel-eslint',
  overrides: [
    {
      files: ['src/components/HigherOrderLayout/index.jsx'],
      rules: {
        'react/prefer-stateless-function': off,
      },
    },
    {
      files: ['src/components/Resume/index.jsx', 'src/components/Portfolio/index.jsx', 'src/components/Post/index.jsx', 'src/templates/*.jsx'],
      rules: {
        'react/no-danger': off,
      },
    },
    {
      files: ['src/html.jsx'],
      rules: {
        'react/prefer-stateless-function': off,
        'react/prop-types': off,
        'react/no-danger': off,
      },
    },
    {
      files: ['src/store/**/sagas.js'],
      rules: {
        'react/button-has-type': off,
        'no-alert': off,
      },
    },
    {
      files: ['src/**/*.test.js'],
      rules: {
        'max-len': off,
        'no-undef': off,
      },
    },
  ],
};
