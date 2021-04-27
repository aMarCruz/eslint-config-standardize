const { rules: avoidRules } = require('eslint-config-prettier')

const excludeRules = new Set(Object.keys(avoidRules))

/* These rules, as defined in rules-base.js, can be safely used with prettierx */

excludeRules.delete('curly')
excludeRules.delete('no-tabs')

excludeRules.add('react/jsx-curly-brace-presence')
excludeRules.add('react/jsx-fragments')
excludeRules.add('react/jsx-handler-names')

module.exports = excludeRules
