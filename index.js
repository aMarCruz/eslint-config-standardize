/*
  ESLint config for TypeScript

  StandardJS configs:
  project://node_modules/eslint-config-standard/eslintrc.json
  project://node_modules/eslint-config-standard-jsx/eslintrc.json

  Plugins:
  project://node_modules/eslint-plugin-import/lib/index.js
  project://node_modules/eslint-plugin-node/lib/index.js &
  project://node_modules/eslint-plugin-node/lib/configs/recommended.json
  project://node_modules/eslint-plugin-promise/index.js
  project://node_modules/eslint-plugin-react/index.js
  project://node_modules/eslint-plugin-unicorn/index.js

  DO NOT USE plugin-prettier with this config.
*/
module.exports = require('./lib/get-conf')
