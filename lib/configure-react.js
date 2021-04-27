// @ts-check
/* eslint-disable unicorn/prefer-spread, import/no-unresolved, import/no-dynamic-require */

const reactConf = require('./eslintrc-react.json')

/**
 * @param {string} e
 * @param {number} ix
 * @param {string[]} arr
 */
const unique = (e, ix, arr) => arr.indexOf(e) === ix

/**
 * @param {string} path
 */
const getReactVersion = path => {
  try {
    return require(path).version || ''
  } catch (e) {
    if (e.code !== 'MODULE_NOT_FOUND') console.error(e.message)
  }
  return ''
}

/**
 * @param {string} version
 * @param {*} preact
 */
const reactBlock = (version, preact) =>
  preact
    ? {
      pragma: 'h',
      fragment: 'Fragment',
      version,
    }
    : {
      version,
    }

/**
 * Will merge 'plugins', 'settings', and 'rules'
 * @param {typeof import('./eslintrc.json')} conf
 */
const configureReact = conf => {
  conf = conf || {}

  // First, try preact
  const preactVersion = getReactVersion('preact/compat/dist/compat')
  const version = preactVersion || getReactVersion('react')

  if (version) {
    const plugins = conf.plugins.concat(reactConf.plugins).filter(unique)

    const settings = {
      ...conf.settings,
      ...reactConf.settings,
      react: reactBlock(version, preactVersion),
    }

    const rules = {
      ...conf.rules,
      ...reactConf.rules,
    }

    if (preactVersion) {
      rules['react/no-unknown-property'] = [
        'error',
        { ignore: ['class', 'for', 'onDblClick'] },
      ]
    }

    conf = { ...conf, plugins, settings, rules }
  }

  return conf
}

module.exports = configureReact
