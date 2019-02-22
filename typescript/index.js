// const standardConf = require('eslint-config-standard/eslintrc.json')

const OFF = 0
const ON = 2

module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    warnOnUnsupportedTypeScriptVersion: false,
  },

  setings: {
    standardize: {
      ts: true,
    },
  },

  plugins: ['@typescript-eslint'],

  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.d.ts'],
      },
    },
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.jsx', '.tsx', '.d.ts'],
    },
  },

  /*
    project://node_modules/@typescript-eslint/eslint-plugin/lib/configs/recommended.json
  */
  rules: {
    camelcase: OFF,
    // indent: 0,
    '@typescript-eslint/adjacent-overload-signatures': ON,
    '@typescript-eslint/array-type': [ON, 'array-simple'],
    '@typescript-eslint/ban-types': ON,
    '@typescript-eslint/camelcase': [ON, { properties: 'always' }],
    '@typescript-eslint/class-name-casing': ON,
    // '@typescript-eslint/indent': standardConf.rules.indent,
    '@typescript-eslint/member-delimiter-style': [ON, { multiline: { delimiter: 'none' } }],
    '@typescript-eslint/member-naming': [ON, { private: '^_' }],
    '@typescript-eslint/no-angle-bracket-type-assertion': ON,
    '@typescript-eslint/no-for-in-array': ON,
    '@typescript-eslint/no-inferrable-types': ON,
    '@typescript-eslint/no-misused-new': ON,
    '@typescript-eslint/no-object-literal-type-assertion': ON,
    '@typescript-eslint/no-parameter-properties': ON,
    '@typescript-eslint/prefer-namespace-keyword': ON,
    '@typescript-eslint/type-annotation-spacing': ON,
  },

  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      rules: {
        'no-redeclare': OFF, // avoid conflicts when exporting function+namespace
        'import/named': OFF,
        'import/no-named-as-default': OFF,
        'no-array-constructor': OFF,
        'no-dupe-class-members': OFF, // to allow Ctor overloads
        'no-undef': OFF, // handled by TS
        'no-unused-vars': OFF, // handled by TS `noUnusedLocals`
        'no-use-before-define': OFF,
        '@typescript-eslint/no-use-before-define': OFF, // [ON, { functions: false, typedefs: false }],
        '@typescript-eslint/no-array-constructor': ON,
        '@typescript-eslint/no-var-requires': ON,
      },
    },
  ],
}
