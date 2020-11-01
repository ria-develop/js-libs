const extensions = ['.js', '.jsx'];

module.exports = {
  root: true,
  env: {
    browser: true,
    commonjs: true,
    es6: true,
    jest: true,
    node: true
  },
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
    allowImportExportEverywhere: true,
    ecmaFeatures: {
      jsx: true
    }
  },
  settings: {
    react: {
      version: 'detect',
      createClass: 'createReactClass',
      pragma: 'React',
      jsx: true
      // fragment: 'React.Fragment'
    },
    propWrapperFunctions: ['forbidExtraProps', {property: 'freeze', object: 'Object'}, {property: 'myFavoriteWrapper'}],
    linkComponents: ['Hyperlink', {name: 'Link', linkAttribute: 'to'}],
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
        moduleDirectory: ['node_modules', 'src/', 'node_modules/@types'],
      },
    },
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:prettier/recommended'
  ],
  rules: {
    'prettier/prettier': ['error', {singleQuote: true, printWidth: 120, trailingComma: 'none', bracketSpacing: false}],
    'no-console': 'off',
    quotes: ['error', 'single'],
    'linebreak-style': ['error', 'unix'],
    'comma-dangle': ['error', 'never']
  },
  overrides: [
    {
      files: ['**/*.ts?(x)'],
      parser: '@typescript-eslint/parser',
      settings: {
        'import/parsers': {
          '@typescript-eslint/parser': ['.ts', '.tsx']
        },
        'import/resolver': {
          typescript: {
            project: './tsconfig.json'
          }
        }
      },
      parserOptions: {
        ecmaVersion: 2018,
        sourceType: 'module',
        ecmaFeatures: {
          jsx: true
        },
        warnOnUnsupportedTypeScriptVersion: true
      },
      extends: ['plugin:@typescript-eslint/recommended', 'plugin:import/typescript'],
      rules: {
        '@typescript-eslint/consistent-type-assertions': 'warn',
        '@typescript-eslint/no-array-constructor': 'warn'
      }
    }
  ]
};
