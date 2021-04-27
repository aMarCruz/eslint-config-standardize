const { ON, WARN } = require('../constants')

const noUnescapedEntitiesOpts = {
  forbid: [
    { char: '"', alternatives: ['&quot;'] },
    { char: '>', alternatives: ['&gt;'] },
    { char: '}', alternatives: ['&#125;'] },
  ],
}

// @ts-check
module.exports = {
  plugins: ['react', 'react-hooks'],

  settings: {
    linkComponents: [{ name: 'Link', linkAttribute: 'to' }],
  },

  rules: {
    'react-hooks/exhaustive-deps': WARN,
    'react-hooks/rules-of-hooks': ON,
    'react/button-has-type': ON,
    'react/forbid-foreign-prop-types': ON,
    'react/no-access-state-in-setstate': ON,
    'react/no-did-mount-set-state': WARN,
    'react/no-did-update-set-state': ON,
    'react/no-multi-comp': [WARN, { ignoreStateless: true }],
    'react/no-redundant-should-component-update': ON,
    'react/no-this-in-sfc': ON,
    'react/no-typos': ON,
    'react/no-unescaped-entities': [ON, noUnescapedEntitiesOpts],
    'react/no-unknown-property': ON,
    'react/no-will-update-set-state': ON,
    'react/self-closing-comp': ON,
    'react/style-prop-object': ON,
    'react/void-dom-elements-no-children': ON,
    'react/jsx-max-depth': [ON, { max: 6 }],
    'react/jsx-no-bind': ON,
    'react/jsx-no-script-url': [ON, [{ name: 'Link', props: ['to'] }]],
    'react/jsx-no-useless-fragment': ON,
  },
}
