/* eslint max-len:[2,{code:120}] */

const ON = 2

/**
 * Autodetection of React Version.
 */
const reactVersion = (function () {
  let version
  try {
    // eslint-disable-next-line import/no-unresolved
    version = require('preact/compat/dist/compat').version
  } catch (_) {
    version = '16.8.0'
  }
  return version
})()

module.exports = {
  settings: {
    react: {
      version: reactVersion,
      pragma: 'h',
    },
  },
  rules: {
    'react/no-unknown-property': [ON, { ignore: ['class', 'for'] }],
  },
}
