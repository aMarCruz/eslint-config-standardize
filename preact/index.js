/* eslint max-len:[2,{code:120}] */

const ON = 2

module.exports = {
  settings: {
    react: {
      version: '16.10',
      pragma: 'h',
    },
  },

  /*
    project://node_modules/@typescript-eslint/eslint-plugin/lib/configs/recommended.json
  */
  rules: {
    'react/no-unknown-property': [ON, { ignore: ['class', 'for'] }],
  },
}
