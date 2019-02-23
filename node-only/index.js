const OFF = 0
const ON = 2

module.exports = {
  /*
    project://node_modules/eslint-plugin-node/lib/index.js &
    project://node_modules/eslint-plugin-node/lib/configs/recommended.json
  */
  settings: {
    node: {
      convertPath: {
        'src/bin/**/*.js': ['^src/bin/(.+)$', 'bin/$1'],
      },
    },
  },
  rules: {
    'import/no-nodejs-modules': OFF,
    'node/no-deprecated-api': ON,
    'node/no-extraneous-import': ON,
    'node/no-extraneous-require': ON,
    'node/no-unpublished-bin': ON,
    'node/no-unpublished-require': ON,
    'node/no-unsupported-features/node-builtins': OFF,
    'node/shebang': ON,
  },
}
