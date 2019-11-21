/*
  ESLint config for TypeScript

  StandardJS configs:
  project://node_modules/eslint-config-standard/eslintrc.json

  Plugins:
  project://node_modules/eslint-plugin-import/lib/index.js
  project://node_modules/eslint-plugin-node/lib/index.js &
  project://node_modules/eslint-plugin-node/lib/configs/recommended.json
  project://node_modules/eslint-plugin-promise/index.js
  project://node_modules/eslint-plugin-react/index.js
  project://node_modules/eslint-plugin-unicorn/index.js

  You can use eslint-plugin-prettierx (note the 'x') with this config:

  extends: [
    'standardize',
    'standardize/typescript',
    'plugin:prettierx/standardize'
  ]
*/
module.exports = require('./lib/merged-conf')
