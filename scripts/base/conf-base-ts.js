const baseRules = require('eslint-config-standard').rules
const { ON, OFF, WARN } = require('../constants')

const allExtensions = [
  '.js',
  '.jsx',
  '.mjs',
  '.android.js',
  '.ios.js',
  '.web.js',
  '.ts',
  '.tsx',
  '.d.ts',
]

const consistentTypeAssertionsOpts = {
  assertionStyle: 'as',
  objectLiteralTypeAssertions: 'allow-as-parameter',
}

const memberDelimiterStyleOpts = {
  multiline: {
    delimiter: 'none',
  },
  singleline: {
    delimiter: 'semi',
    requireLast: false,
  },
}

const noUseBeforeDefineOpts = {
  classes: true,
  enums: true,
  functions: false,
  typedefs: false,
  variables: false,
}

module.exports = {
  parser: '@typescript-eslint/parser',

  plugins: ['@typescript-eslint'],

  settings: {
    'import/extensions': allExtensions,
    'import/resolver': {
      node: {
        extensions: allExtensions,
      },
    },
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx', '.d.ts'],
    },
  },

  rules: {
    'camelcase': OFF,
    'no-use-before-define': OFF,

    '@typescript-eslint/naming-convention': [
      WARN,
      {
        selector: ['typeLike', 'enum'],
        format: ['PascalCase', 'UPPER_CASE'],
        leadingUnderscore: 'forbid',
        trailingUnderscore: 'allow',
      },
      {
        selector: ['function', 'method'],
        format: ['camelCase', 'PascalCase'],
        leadingUnderscore: 'allow',
        trailingUnderscore: 'allow',
      },
      {
        selector: ['accessor', 'classMethod', 'classProperty', 'parameterProperty'],
        format: ['camelCase'],
        modifiers: ['private'],
        leadingUnderscore: 'require',
        trailingUnderscore: 'allow',
      },
      {
        selector: 'classMethod',
        format: null,
        filter: { regex: '^UNSAFE_[a-z]', match: true },
      },
    ],

    /**
     * Workaround for a @typescript-eslint/parser bug with React
     * @see https://github.com/typescript-eslint/typescript-eslint/issues/2540
     */
    '@typescript-eslint/no-use-before-define': [ON, noUseBeforeDefineOpts],
  },

  /*
    project://node_modules/@typescript-eslint/eslint-plugin/lib/configs/recommended.json
  */
  overrides: [
    {
      files: ['**/*.ts', '**/*.tsx'],
      rules: {
        'default-param-last': OFF,
        'no-array-constructor': OFF,
        'no-dupe-class-members': OFF, // to allow Ctor overloads
        'no-duplicate-imports': OFF,
        'no-redeclare': OFF, // avoid conflicts when exporting function+namespace
        'no-undef': OFF, // handled by TS
        'no-unused-expressions': OFF,
        'no-unused-vars': OFF, // handled by TS `noUnusedLocals`

        'import/export': OFF,
        'import/named': OFF,
        'import/no-named-as-default': OFF,

        '@typescript-eslint/adjacent-overload-signatures': ON,
        '@typescript-eslint/ban-types': ON,
        '@typescript-eslint/consistent-type-assertions': [ON, consistentTypeAssertionsOpts],
        '@typescript-eslint/default-param-last': ON,
        '@typescript-eslint/member-delimiter-style': [ON, memberDelimiterStyleOpts],
        '@typescript-eslint/no-array-constructor': ON,
        '@typescript-eslint/no-dupe-class-members': ON,
        '@typescript-eslint/no-duplicate-imports': ON,
        '@typescript-eslint/no-for-in-array': ON,
        '@typescript-eslint/no-inferrable-types': ON,
        '@typescript-eslint/no-misused-new': ON,
        '@typescript-eslint/no-parameter-properties': ON,
        '@typescript-eslint/no-redeclare': ON,
        '@typescript-eslint/no-unused-expressions': baseRules['no-unused-expressions'],
        '@typescript-eslint/no-var-requires': ON,
        '@typescript-eslint/prefer-namespace-keyword': ON,
      },
    },
  ],
}
