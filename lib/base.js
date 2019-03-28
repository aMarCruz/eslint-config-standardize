/*
  When a preset of eslint-plugin-prettierx is in use, many of the rules defined
  by this config are deactivated. When there is not a loaded preset, they are
  activated to roughly match the plugin:prettierx/standardize style.

  Note: there will be some differences on the layout that ESLint can not match,
  and vice versa.
*/
const OFF = 0
const ON = 2
const WARN = 1

module.exports = {
  parserOptions: {
    ecmaVersion: 2018,
    ecmaFeatures: {
      jsx: true,
    },
    sourceType: 'module',
  },

  env: {
    es6: true,
    node: true,
  },

  settings: {},

  plugins: ['import', 'node', 'promise', 'standard', 'unicorn'],

  extends: ['standard'],

  rules: {
    /*
      Customized rules
     */
    'callback-return': ON,
    // trailingComma: "es5"
    'comma-dangle': [
      ON,
      {
        arrays: 'always-multiline',
        objects: 'always-multiline',
        imports: 'always-multiline',
        exports: 'always-multiline',
        functions: 'never',
      },
    ],
    complexity: [WARN, { max: 8 }],
    'jsx-quotes': [ON, 'prefer-double'],
    'max-depth': WARN,
    'no-case-declarations': WARN,
    'no-buffer-constructor': ON,
    'no-misleading-character-class': ON,
    // Enhance StandardJS defaults
    'spaced-comment': [
      ON,
      'always',
      {
        block: {
          exceptions: ['*'],
          markers: ['*package', '!', ',', ':', '::', 'flow-include'],
          balanced: true,
        },
        line: {
          exceptions: ['-', '='],
          markers: ['*package', '!', '/', ',', '=', '#region', '#endregion', '#'],
        },
      },
    ],
    'wrap-iife': [ON, 'inside'],

    'arrow-parens': [ON, 'as-needed', { requireForBlockBody: true }],
    'default-case': [WARN, { commentPattern: '^no default$' }],
    'max-len': [
      ON,
      {
        code: 92,
        ignoreUrls: true,
        ignoreStrings: true,
        ignoreTemplateLiterals: true,
        ignoreRegExpLiterals: true,
      },
    ],
    'no-alert': ON,
    'no-async-promise-executor': ON,
    'no-await-in-loop': ON,
    'no-catch-shadow': ON,
    'no-confusing-arrow': [ON, { allowParens: false }],
    'no-div-regex': ON,
    'no-duplicate-imports': ON,
    'no-else-return': ON,
    'no-extra-label': ON,
    'no-extra-semi': ON,
    'no-implicit-globals': ON,
    'no-lonely-if': ON,
    'no-loop-func': ON,
    'no-native-reassign': ON,
    'no-process-exit': ON,
    'no-prototype-builtins': ON,
    'no-restricted-globals': ['error', 'title', 'status', 'self'],
    'no-restricted-syntax': [ON, 'WithStatement'],
    'no-script-url': ON,
    'getter-return': ON,
    'no-shadow': ON,
    'no-spaced-func': ON,
    'no-unused-labels': ON,
    'no-useless-concat': ON,
    'one-var-declaration-per-line': ON,
    'padded-blocks': [ON, 'never'],
    'prefer-const': [ON, { destructuring: 'all' }],
    'prefer-numeric-literals': ON,
    radix: ON,
    'require-atomic-updates': ON,
    'require-await': ON,
    'require-yield': ON,
    'sort-imports': [
      WARN,
      {
        ignoreCase: true,
        ignoreDeclarationSort: true,
        ignoreMemberSort: false,
      },
    ],
    'switch-colon-spacing': [ON, { after: true }],
    'linebreak-style': [ON, 'unix'],

    /*
      Conflicting rules
    */
    'arrow-body-style': [ON, 'as-needed'],
    'prefer-arrow-callback': OFF,
    'quote-props': [ON, 'as-needed'],
    'no-useless-constructor': OFF,
    /*
      Promises
    */
    'promise/catch-or-return': [ON, { allowThen: true, terminationMethod: ['catch', 'finally'] }],
    'promise/no-callback-in-promise': ON,
    'promise/no-nesting': WARN,
    'promise/no-new-statics': ON,
    'promise/no-return-in-finally': ON,
    'promise/no-return-wrap': [ON, { allowReject: true }],
    'promise/valid-params': ON,

    'import/default': ON,
    'import/export': ON,
    'import/first': ON,
    'import/named': ON,
    'import/namespace': ON,
    'import/no-absolute-path': ON,
    'import/no-cycle': [ON, { maxDepth: 2 }],
    'import/no-deprecated': WARN,
    'import/no-dynamic-require': ON,
    'import/no-mutable-exports': ON,
    'import/no-named-as-default-member': ON,
    'import/no-named-as-default': ON,
    'import/no-named-default': ON,
    'import/no-self-import': ON,
    'import/no-unresolved': [ON, { commonjs: true }],
    'import/no-useless-path-segments': WARN,
    'import/no-webpack-loader-syntax': ON,
    'import/order': [WARN, { groups: ['builtin', 'external'] }],

    'unicorn/custom-error-definition': ON,
    'unicorn/error-message': ON,
    'unicorn/new-for-builtins': ON,
    'unicorn/no-array-instanceof': ON,
    'unicorn/no-new-buffer': ON,
    'unicorn/no-process-exit': ON,
    'unicorn/no-unreadable-array-destructuring': ON,
    'unicorn/no-unused-properties': ON,
    'unicorn/prefer-add-event-listener': ON,
    'unicorn/prefer-includes': ON,
    'unicorn/prefer-spread': ON,
    'unicorn/prefer-type-error': ON,
    'unicorn/regex-shorthand': ON,

    'node/no-unpublished-bin': ON,
    'node/no-unsupported-features/node-builtins': ON,
  },

  overrides: [
    {
      files: ['*.jsx'],
      rules: {
        'import/named': OFF,
        'no-use-before-define': OFF,
      },
    },
  ],
}
