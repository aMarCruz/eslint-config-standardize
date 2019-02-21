const deepClone = require('@jsbits/deep-clone')
const restrictedGlobals = require('confusing-browser-globals')
const base = require('./base')
const conf = require('./conf')

const mergeArray = (arr1, arr2) => {
  if (!arr1) {
    return arr2 || []
  }
  if (Array.isArray(arr2)) {
    arr2.forEach((s) => {
      if (arr1.indexOf(s) < 0) {
        arr1.push(s)
      }
    })
  }
  return arr1
}

const getBranch = (obj, path) => {
  path.split('.').forEach((prop) => {
    obj[prop] = obj[prop] || (obj[prop] = {})
    obj = obj[prop]
  })
  return obj
}

const installReactPlugin = (config) => {
  try {
    const version = require('react').version || '999.999.999'
    const reactSettings = getBranch(config, 'settings.react')

    reactSettings.version = version
    if (!config.plugins.includes('react')) {
      config.plugins.push('react')
    }
    const idx = config.extends.indexOf('standard') + 1
    config.extends.splice(idx, 0, 'standard-jsx')

    console.info('Installed plugin for react v' + version)
    return version
  } catch (e) {
    if (e.code === 'MODULE_NOT_FOUND') {
      console.info('React is not detected, skipping react plugin installation.')
    }
  }
  return ''
}

function mergeConf () {
  const config = deepClone(base)
  const baseRules = config.rules

  /*
    Restricted global names.
   */
  baseRules['no-restricted-globals'] = mergeArray(
    baseRules['no-restricted-globals'],
    restrictedGlobals
  )

  /*
    React
  */
  if (installReactPlugin(config)) {
    const sortComp = conf.sortComp
    if (sortComp) {
      baseRules['react/sort-comp'] = [2, sortComp]
    }
    const reactRules = conf.react
    if (reactRules) {
      Object.assign(baseRules, reactRules)
    }
  }

  return config
}

module.exports = mergeConf()
