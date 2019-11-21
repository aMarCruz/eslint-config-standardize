/* eslint max-len:[2,{code:120}] */

const ON = 2

module.exports = {
  settings: {
    react: {
      version: '16.12',
      pragma: 'h',
    },
  },
  rules: {
    'react/no-unknown-property': [ON, { ignore: ['class', 'for'] }],
  },
}
