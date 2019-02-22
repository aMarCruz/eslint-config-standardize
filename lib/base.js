/**
 * Loaded plugins.
 */
const plugins = ['import', 'node', 'promise', 'standard', 'unicorn']

/*
  When a preset of eslint-plugin-prettierx is in use, many of the rules defined
  by this config are deactivated. When there is not a loaded preset, they are
  activated to roughly match the plugin:prettierx/standardize style.

  Note: there will be some differences on the layout that ESLint can not match,
  and vice versa.
*/
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

  settings: {
    standardize: {
      version: require('../package.json').version,
      plugins,
    },
  },

  plugins,

  extends: ['standard'],

  rules: {
    /*
      Customized rules
     */
    // trailingComma: "es5"
    'comma-dangle': [
      2,
      {
        arrays: 'always-multiline',
        objects: 'always-multiline',
        imports: 'always-multiline',
        exports: 'always-multiline',
        functions: 'never',
      },
    ],
    'jsx-quotes': [2, 'prefer-double'],
    // Enhance StandardJS defaults
    'spaced-comment': [
      2,
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
    'wrap-iife': [2, 'inside'],

    'arrow-parens': [2, 'as-needed', { requireForBlockBody: true }],
    'default-case': [1, { commentPattern: '^no default$' }],
    'max-len': [
      2,
      {
        code: 92,
        ignoreUrls: true,
        ignoreStrings: true,
        ignoreTemplateLiterals: true,
        ignoreRegExpLiterals: true,
      },
    ],
    'no-alert': 2,
    'no-async-promise-executor': 2,
    'no-await-in-loop': 2,
    'no-catch-shadow': 2,
    'no-confusing-arrow': [2, { allowParens: false }],
    'no-div-regex': 2,
    'no-duplicate-imports': 2,
    'no-else-return': 2,
    'no-extra-label': 2,
    'no-extra-semi': 2,
    'no-implicit-globals': 2,
    'no-lonely-if': 2,
    'no-loop-func': 2,
    'no-native-reassign': 2,
    'no-process-exit': 2,
    'no-prototype-builtins': 2,
    'no-restricted-globals': ['error', 'title', 'status', 'self'],
    'no-restricted-syntax': [2, 'WithStatement'],
    'no-script-url': 2,
    'getter-return': 2,
    'no-shadow': 2,
    'no-spaced-func': 2,
    'no-unused-labels': 2,
    'no-useless-concat': 2,
    'one-var-declaration-per-line': 2,
    'padded-blocks': [2, 'never'],
    'prefer-const': [2, { destructuring: 'all' }],
    'prefer-numeric-literals': 2,
    radix: 2,
    'require-atomic-updates': 2,
    'require-await': 2,
    'require-yield': 2,
    'sort-imports': [
      2,
      {
        ignoreCase: true,
        ignoreDeclarationSort: true,
        ignoreMemberSort: false,
      },
    ],
    'switch-colon-spacing': [2, { after: true }],
    'linebreak-style': [2, 'unix'],

    /*
      Conflicting rules
    */
    'arrow-body-style': [2, 'as-needed'],
    'prefer-arrow-callback': 0,
    'quote-props': [2, 'as-needed'],
    'no-useless-constructor': 0,
    /*
      Promises
    */
    'promise/always-return': 2,
    'promise/catch-or-return': [2, { terminationMethod: ['catch', 'finally'] }],
    'promise/no-callback-in-promise': 2,
    'promise/no-nesting': 1,
    'promise/no-new-statics': 2,
    'promise/no-return-in-finally': 2,
    'promise/no-return-wrap': [2, { allowReject: true }],
    'promise/valid-params': 2,

    'import/default': 2,
    'import/named': 2,
    'import/namespace': 2,
    'import/no-absolute-path': 2,
    'import/no-cycle': [2, { maxDepth: 2 }],
    'import/no-deprecated': 1,
    'import/no-dynamic-require': 2,
    'import/no-mutable-exports': 2,
    'import/no-named-as-default-member': 2,
    'import/no-named-as-default': 2,
    'import/no-self-import': 2,
    'import/no-unresolved': 2,
    'import/no-useless-path-segments': 1,
    'import/order': [1, { groups: ['builtin', 'external'] }],

    'unicorn/custom-error-definition': 2,
    'unicorn/error-message': 2,
    'unicorn/escape-case': 2,
    'unicorn/new-for-builtins': 2,
    'unicorn/no-array-instanceof': 2,
    'unicorn/no-new-buffer': 2,
    'unicorn/no-process-exit': 2,
    'unicorn/no-unreadable-array-destructuring': 2,
    'unicorn/no-unused-properties': 2,
    'unicorn/number-literal-case': 2,
    'unicorn/prefer-add-event-listener': 2,
    'unicorn/prefer-spread': 2,
    'unicorn/prefer-type-error': 2,
    'unicorn/regex-shorthand': 2,

    'node/no-unpublished-bin': 2,
    'node/no-unsupported-features/node-builtins': 2,
  },

  overrides: [
    {
      files: ['*.jsx'],
      rules: {
        'import/named': 0,
        'no-use-before-define': 0,
      },
    },
  ],
}
