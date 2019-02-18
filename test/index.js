/* eslint-disable import/no-nodejs-modules */
const fs = require('fs')
const conf = require('../')

fs.writeFileSync(`${__dirname}/eslint.json`, JSON.stringify(conf, null, 2))

console.dir(conf, { colors: true, depth: 5 })
console.log()
console.log('Done. Check this file with ESLint.')
console.log()
