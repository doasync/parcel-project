module.exports = {
  parser: 'babel-eslint',
  env: {
    es6: true,
    browser: true,
    node: true,
    jest: true,
  },
  extends: ['airbnb', 'plugin:flowtype/recommended'],
  plugins: ['react-hooks', 'flowtype', 'filenames'],
  settings: {
    'import/resolver': {
      'babel-module': {},
    },
    flowtype: {
      onlyFilesWithFlowAnnotation: true,
    },
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },
  rules: {
    'import/prefer-default-export': 'off',
    'import/no-default-export': 'error',
    'no-plusplus': ['off', { allowForLoopAfterthoughts: true }],
    'no-restricted-syntax': [
      'error',
      'ForInStatement',
      'LabeledStatement',
      'WithStatement',
      "BinaryExpression[operator='in']",
    ],
    'react-hooks/rules-of-hooks': 'error',
    'react/require-default-props': 'off', // optional props without defaults
    'react/forbid-prop-types': 'warn',
    'quote-props': ['warn', 'as-needed', { numbers: true }],
    'max-len': [
      'warn',
      {
        code: 80,
        tabWidth: 2,
        ignoreComments: true,
        ignoreUrls: true,
        ignoreStrings: true,
        ignoreTemplateLiterals: true,
        ignoreRegExpLiterals: true,
      },
    ],
    'filenames/match-exported': ['error', 'kebab'],
    'filenames/match-regex': [
      'error',
      '^[a-z]+(?:-[a-z]+)*(?:.[a-z]+)*$',
      false,
    ],
  },
};
