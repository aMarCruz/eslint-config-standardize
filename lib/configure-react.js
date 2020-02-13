const merge = require('deepmerge')
const arrayAddUnique = require('./array-add-unique')
const reactConf = require('./react')

const extensions = ['.js', '.mjs', '.web.js', '.ios.js', '.android.js', '.jsx']

const globals = {
  __DEV__: 'readonly',
}

module.exports = function configureJsx (conf, version) {
  const settings = conf.settings
  const resolver = (settings['import/resolver'] = settings['import/resolver'] || {})
  const react = (settings.react = settings.react || {})

  settings['import/extensions'] = arrayAddUnique(settings['import/extensions'], extensions)
  resolver.node = resolver.node || {}
  resolver.node.extensions = arrayAddUnique(resolver.node.extensions, extensions)

  conf.plugins = arrayAddUnique(conf.plugins, ['react', 'react-hooks'])
  conf.globals = Object.assign(conf.globals || {}, globals)

  merge(conf, reactConf)

  if (!react.version || react.version === 'detect') {
    react.version = version
  }

  return conf
}
