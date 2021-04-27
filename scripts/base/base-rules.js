const { ON, WARN } = require('../constants')

const spacedCommentsOpts = {
  block: {
    exceptions: ['*'],
    markers: [
      '*package',
      '!',
      ',',
      ':',
      '::',
      'flow-include',
      '#__PURE__',
      '#__INLINE__',
      '#__NOINLINE__',
    ],
    balanced: true,
  },
  line: {
    exceptions: ['-', '='],
    markers: ['*package', '!', '/', ',', '=', '#region', '#endregion', '#'],
  },
}

const sortInportsOpts = {
  ignoreCase: true,
  ignoreDeclarationSort: true,
  ignoreMemberSort: false,
}

const catchOrReturnOpts = {
  allowThen: true,
  terminationMethod: ['catch', 'finally'],
}

module.exports = {
  'complexity': [WARN, 12],
  'curly': [WARN, 'multi-line'],
  'default-case': [WARN, { commentPattern: '^no default$' }],
  'default-param-last': ON,
  'for-direction': ON,
  'getter-return': ON,
  'max-depth': WARN,
  'no-alert': ON,
  'no-await-in-loop': ON,
  'no-confusing-arrow': [ON, { allowParens: false }],
  'no-constructor-return': ON,
  'no-div-regex': ON,
  'no-dupe-else-if': ON,
  'no-duplicate-imports': ON,
  'no-else-return': ON,
  'no-extra-label': ON,
  'no-implicit-globals': ON,
  'no-lonely-if': ON,
  'no-loop-func': ON,
  'no-restricted-globals': ON,
  'no-return-await': WARN,
  'no-script-url': ON,
  'no-setter-return': ON,
  'no-shadow': ON,
  'no-tabs': ON,
  'no-unused-labels': ON,
  'no-useless-concat': ON,
  'prefer-numeric-literals': ON,
  'radix': ON,
  'require-atomic-updates': ON,
  'require-await': ON,
  'require-yield': ON,
  'sort-imports': [WARN, sortInportsOpts],
  'spaced-comment': [ON, 'always', spacedCommentsOpts],

  'import/default': ON,
  'import/namespace': ON,
  'import/no-cycle': [ON, { maxDepth: 3, ignoreExternal: true }],
  'import/no-deprecated': WARN,
  'import/no-dynamic-require': ON,
  'import/no-mutable-exports': ON,
  'import/no-named-as-default-member': ON,
  'import/no-named-as-default': ON,
  'import/no-self-import': ON,
  'import/no-unresolved': [ON, { commonjs: true }],
  'import/no-useless-path-segments': WARN,
  'import/order': [WARN, { groups: ['builtin', 'external'] }],

  'unicorn/better-regex': WARN,
  'unicorn/custom-error-definition': ON,
  'unicorn/error-message': ON,
  'unicorn/new-for-builtins': ON,
  'unicorn/no-array-push-push': WARN,
  'unicorn/no-console-spaces': WARN,
  'unicorn/no-instanceof-array': ON,
  'unicorn/no-new-buffer': ON,
  'unicorn/no-process-exit': ON,
  'unicorn/no-unreadable-array-destructuring': WARN,
  'unicorn/no-unused-properties': WARN,
  'unicorn/prefer-add-event-listener': WARN,
  'unicorn/prefer-array-index-of': WARN,
  'unicorn/prefer-date-now': WARN,
  'unicorn/prefer-dom-node-remove': WARN,
  'unicorn/prefer-dom-node-text-content': ON,
  'unicorn/prefer-includes': ON,
  'unicorn/prefer-keyboard-event-key': ON,
  'unicorn/prefer-modern-dom-apis': WARN,
  'unicorn/prefer-negative-index': ON,
  'unicorn/prefer-spread': ON,
  'unicorn/prefer-string-starts-ends-with': WARN,
  'unicorn/prefer-type-error': ON,
  'unicorn/throw-new-error': ON,

  'node/no-mixed-requires': ON,
  'node/no-process-exit': ON,
  'node/no-unpublished-bin': ON,
  'node/no-unpublished-require': ON,
  'node/no-unsupported-features/node-builtins': ON,
  'node/shebang': ON,

  'prettierx/options': WARN,

  'promise/catch-or-return': [ON, catchOrReturnOpts],
  'promise/no-callback-in-promise': ON,
  'promise/no-nesting': WARN,
  'promise/no-new-statics': ON,
  'promise/no-return-in-finally': ON,
  'promise/no-return-wrap': [ON, { allowReject: true }],
  'promise/valid-params': ON,
}
