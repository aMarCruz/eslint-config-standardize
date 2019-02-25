const deepClone = require('@jsbits/deep-clone')
const restrictedGlobals = require('confusing-browser-globals')
const arrayAddUnique = require('./array-add-unique')
const base = require('./base')
const configureReact = require('./configure-react')

const getReactVersion = (config) => {
  try {
    const version = require('react').version || '999.999.999'
    console.log('Got react version ' + version)
    return version
  } catch (e) {
    if (e.code === 'MODULE_NOT_FOUND') {
      console.info('React is not detected, skipping react plugin installation.')
    } else {
      console.error(e.message)
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
  baseRules['no-restricted-globals'] = arrayAddUnique(
    baseRules['no-restricted-globals'],
    restrictedGlobals
  )

  /*
    React
  */
  const reactVersion = getReactVersion(config)
  if (reactVersion) {
    configureReact(config, reactVersion)
  }

  return config
}

module.exports = mergeConf()
