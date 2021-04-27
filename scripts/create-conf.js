// @ts-check
const stdTmpConf = require('eslint-config-standard')
const restrictedGlobals = require('./lib/restricted-globals')
const arrayAddUnique = require('./lib/array-add-unique')
const excludeRules = require('./exclude-rules')
const baseRules = require('./base/base-rules')
const writeJson = require('./lib/write-json')

const outFilename = 'eslintrc'

const sortProps = obj =>
  Object.keys(obj)
    .map(r => (r.includes('/') ? 'zzz' + r : r))
    .sort()
    .map(r => (r.startsWith('zzz') ? r.substr(3) : r))
    .reduce((o, k) => {
      o[k] = obj[k]
      return o
    }, {})

const rules = sortProps({
  ...stdTmpConf.rules,
  ...baseRules,
  'no-restricted-globals': ['error', ...restrictedGlobals],
})

excludeRules.forEach(name => {
  if (rules[name]) {
    delete rules[name]
  }
})

const outConf = { ...stdTmpConf }
delete outConf.rules

outConf.settings = {
  ...outConf.settings,
  node: {
    convertPath: {
      'src/bin/**/*.js': ['^src/bin/(.+)$', 'bin/$1'],
    },
  },
}
outConf.plugins = arrayAddUnique(stdTmpConf.plugins, ['prettierx', 'unicorn']).sort()
outConf.rules = rules

writeJson(outFilename, outConf)
