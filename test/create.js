/* eslint-disable import/no-nodejs-modules */
const fs = require('fs')
const conf = require('..')

fs.writeFileSync(`${__dirname}/eslint.json`, JSON.stringify(conf, null, 2))

console.dir(conf, { colors: true, depth: 6 })
console.log()
