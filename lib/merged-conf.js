const deepClone = require('@jsbits/deep-clone')
const restrictedGlobals = require('confusing-browser-globals')
const arrayAddUnique = require('./array-add-unique')
const base = require('./base')
const configureReact = require('./configure-react')

const getReactVersion = () => {
  try {
    // eslint-disable-next-line import/no-unresolved
    return require('react').version || ''
  } catch (e) {
    if (e.code !== 'MODULE_NOT_FOUND') {
      console.error(e.message)
    }
  }
  return ''
}

/**
 * Autodetection of React Version.
 */
const getPreactVersion = () => {
  try {
    // eslint-disable-next-line import/no-unresolved
    return require('preact/compat/dist/compat').version || ''
  } catch (e) {
    if (e.code !== 'MODULE_NOT_FOUND') {
      console.error(e.message)
    }
  }
  return ''
}

const addPrectConf = config => {
  Object.assign(config.settings.react, {
    pragma: 'h',
    fragment: 'Fragment',
  })
  Object.assign(config.rules, {
    'react/no-unknown-property': [2, { ignore: ['class', 'for'] }],
  })
}

function mergeConf () {
  const config = deepClone(base)
  const baseRules = config.rules

  /*
    Restricted global names.
   */
  baseRules['no-restricted-globals'] = arrayAddUnique(baseRules['no-restricted-globals'], restrictedGlobals)

  /*
    React
  */
  const reactVersion = getReactVersion()
  if (reactVersion) {
    configureReact(config, reactVersion)
  } else {
    const preactVersion = getPreactVersion()
    configureReact(config, preactVersion)
    addPrectConf(config)
  }

  return config
}

module.exports = mergeConf()
