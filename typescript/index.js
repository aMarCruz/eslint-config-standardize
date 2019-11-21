/* eslint max-len:[2,{code:120}] */
const standardConf = require('eslint-config-standard')

const OFF = 0
const ON = 2
// const WARN = 1

const allExtensions = ['.js', '.jsx', '.mjs', '.android.js', '.ios.js', '.web.js', '.ts', '.tsx', '.d.ts']

module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    warnOnUnsupportedTypeScriptVersion: false,
  },

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

  /*
    project://node_modules/@typescript-eslint/eslint-plugin/lib/configs/recommended.json
  */
  rules: {
    'camelcase': OFF,
    'indent': OFF,
    '@typescript-eslint/adjacent-overload-signatures': ON,
    '@typescript-eslint/array-type': [ON, { default: 'array' }],
    '@typescript-eslint/ban-types': ON,
    '@typescript-eslint/camelcase': standardConf.rules.camelcase,
    '@typescript-eslint/class-name-casing': ON,
    '@typescript-eslint/consistent-type-assertions': [
      ON,
      { assertionStyle: 'as', objectLiteralTypeAssertions: 'allow-as-parameter' },
    ],
    '@typescript-eslint/indent': standardConf.rules.indent,
    '@typescript-eslint/member-delimiter-style': [
      ON,
      { multiline: { delimiter: 'none' }, singleline: { delimiter: 'comma' } },
    ],
    '@typescript-eslint/member-naming': [ON, { private: '^_' }],
    '@typescript-eslint/no-for-in-array': ON,
    '@typescript-eslint/no-inferrable-types': ON,
    '@typescript-eslint/no-misused-new': ON,
    '@typescript-eslint/no-parameter-properties': ON,
    '@typescript-eslint/prefer-namespace-keyword': ON,
    '@typescript-eslint/type-annotation-spacing': ON,
  },

  overrides: [
    {
      files: ['**/*.ts', '**/*.tsx'],
      rules: {
        'brace-style': OFF,
        'func-call-spacing': OFF,
        'no-redeclare': OFF, // avoid conflicts when exporting function+namespace
        'import/named': OFF,
        'import/export': OFF,
        'import/no-named-as-default': OFF,
        'no-array-constructor': OFF,
        'no-dupe-class-members': OFF, // to allow Ctor overloads
        'no-undef': OFF, // handled by TS
        'no-unused-vars': OFF, // handled by TS `noUnusedLocals`
        'no-use-before-define': OFF,
        '@typescript-eslint/brace-style': standardConf.rules['brace-style'],
        '@typescript-eslint/func-call-spacing': standardConf.rules['func-call-spacing'],
        '@typescript-eslint/no-array-constructor': ON,
        '@typescript-eslint/no-use-before-define': OFF, // [ON, { functions: false, typedefs: false }],
        '@typescript-eslint/no-var-requires': ON,
      },
    },
  ],
}
