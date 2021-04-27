const { resolve } = require('path')
const prettierConf = require('eslint-config-prettier')
const getRuleFinder = require('eslint-find-rules')

const { dependencies } = require('../package.json')
const ruleFinder = getRuleFinder(resolve('.eslintrc.json'))

/** @type {Set<string>} */
const rulesToSkip = new Set(Object.keys(prettierConf.rules))

// get all the current, plugin, available and unused rules
// without referring the extended files or documentation
const pluginPrefix = 'eslint-plugin-'
const knownPlugins = ['@typescript-eslint']

for (const k of Object.keys(dependencies).sort()) {
  k.startsWith(pluginPrefix) && knownPlugins.push(k.substr(pluginPrefix.length))
}

const ofPlugin = (name => {
  if (name) {
    if (/^@?typescript$/.test(name)) name = '@typescript-eslint'
    if (name.endsWith('/')) name = name.slice(0, -1)

    if (!knownPlugins.includes(name)) {
      console.error(
        `Unknown plugin "${name}".\nMust be one of:\n ${knownPlugins.join('\n ')}\n`
      )
    }
  }
  return name
})(process.argv[2] || '')

/** @type {string[]} */
const unusedRules = ruleFinder.getUnusedRules().filter(r => !rulesToSkip.has(r))

const result = ofPlugin
  ? unusedRules.filter(r => r.startsWith(ofPlugin))
  : unusedRules.filter(r => !/^[\d@a-z-]+\//.test(r))

console.warn(`${result.length} unused ${ofPlugin || 'core'} rules.`)
console.log(' ' + result.join('\n '))
