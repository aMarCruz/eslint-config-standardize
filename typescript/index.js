/* eslint max-len:[2,{code:150}] */
const standardConf = require('eslint-config-standard')

const OFF = 0
const ON = 2
const WARN = 1

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
  overrides: [
    {
      files: ['**/*.ts', '**/*.tsx'],
      rules: {
        'brace-style': OFF,
        'camelcase': OFF,
        'func-call-spacing': OFF,
        'import/export': OFF,
        'import/named': OFF,
        'import/no-named-as-default': OFF,
        'indent': OFF,
        'no-array-constructor': OFF,
        'no-dupe-class-members': OFF, // to allow Ctor overloads
        'no-redeclare': OFF, // avoid conflicts when exporting function+namespace
        'no-undef': OFF, // handled by TS
        'no-unused-vars': OFF, // handled by TS `noUnusedLocals`
        'no-use-before-define': OFF,

        '@typescript-eslint/adjacent-overload-signatures': ON,
        '@typescript-eslint/array-type': [ON, { default: 'array' }],
        '@typescript-eslint/await-thenable': WARN,
        '@typescript-eslint/ban-types': ON,
        '@typescript-eslint/brace-style': standardConf.rules['brace-style'],
        '@typescript-eslint/camelcase': standardConf.rules.camelcase,
        '@typescript-eslint/class-name-casing': ON,
        '@typescript-eslint/consistent-type-assertions': [ON, { assertionStyle: 'as', objectLiteralTypeAssertions: 'allow-as-parameter' }],
        '@typescript-eslint/func-call-spacing': standardConf.rules['func-call-spacing'],
        '@typescript-eslint/indent': standardConf.rules.indent,
        '@typescript-eslint/member-delimiter-style': [ON, { multiline: { delimiter: 'none' }, singleline: { delimiter: 'comma' } }],
        '@typescript-eslint/member-naming': [ON, { private: '^_' }],
        '@typescript-eslint/no-array-constructor': ON,
        '@typescript-eslint/no-for-in-array': ON,
        '@typescript-eslint/no-inferrable-types': ON,
        '@typescript-eslint/no-misused-new': ON,
        '@typescript-eslint/no-parameter-properties': ON,
        '@typescript-eslint/no-use-before-define': OFF, // [ON, { functions: false, typedefs: false }],
        '@typescript-eslint/no-var-requires': ON,
        '@typescript-eslint/prefer-namespace-keyword': ON,
        '@typescript-eslint/type-annotation-spacing': ON,
      },
    },
  ],
}
