// @ts-check
const stdJsxConf = require('eslint-config-standard-jsx')
const excludeRules = require('./exclude-rules')
const customConf = require('./base/conf-base-react')
const writeJson = require('./lib/write-json')

const outFilename = 'eslintrc-react'

const sortProps = obj =>
  Object.keys(obj)
    .map(k => k.replace('react/jsx-', 'react/zzz-'))
    .sort()
    .map(k => k.replace('react/zzz-', 'react/jsx-'))
    .reduce((o, k) => {
      o[k] = obj[k]
      return o
    }, {})

const rules = sortProps({
  ...stdJsxConf.rules,
  ...customConf.rules,
})

excludeRules.forEach(name => {
  if (rules[name]) {
    delete rules[name]
  }
})

writeJson(outFilename, { ...customConf, rules })
