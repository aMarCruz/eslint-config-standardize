const ON = 2
const OFF = 0
const WARN = 1

module.exports = {
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },
  rules: {
    'jsx-quotes': [ON, 'prefer-double'],
    'react/button-has-type': ON,
    'react/forbid-foreign-prop-types': [2, { allowInPropTypes: true }],
    'react/jsx-boolean-value': ON,
    'react/jsx-curly-spacing': [ON, 'never'],
    'react/jsx-equals-spacing': [ON, 'never'],
    'react/jsx-indent-props': [ON, 2],
    'react/jsx-indent': [ON, 2],
    'react/jsx-key': ON,
    'react/jsx-max-depth': [ON, { max: 5 }],
    'react/jsx-no-comment-textnodes': ON,
    'react/jsx-no-duplicate-props': ON,
    'react/jsx-no-script-url': ON,
    'react/jsx-no-undef': ON,
    'react/jsx-pascal-case': [WARN, { allowAllCaps: true, ignore: [] }],
    'react/jsx-tag-spacing': [ON, { beforeSelfClosing: 'always' }],
    'react/jsx-uses-react': ON,
    'react/jsx-uses-vars': ON,
    'react/no-access-state-in-setstate': ON,
    'react/no-deprecated': WARN,
    'react/no-did-mount-set-state': WARN,
    'react/no-did-update-set-state': ON,
    'react/no-direct-mutation-state': ON,
    'react/no-is-mounted': WARN,
    'react/no-multi-comp': [ON, { ignoreStateless: true }],
    'react/no-redundant-should-component-update': ON,
    'react/no-string-refs': ON,
    'react/no-typos': ON,
    'react/no-unescaped-entities': ON,
    'react/no-unknown-property': ON,
    'react/no-will-update-set-state': ON,
    'react/react-in-jsx-scope': ON,
    'react/require-render-return': ON,
    'react/self-closing-comp': ON,
    'react/style-prop-object': ON,
    'react/void-dom-elements-no-children': ON,
    'react-hooks/rules-of-hooks': ON,
    'react-hooks/exhaustive-deps': WARN,
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
