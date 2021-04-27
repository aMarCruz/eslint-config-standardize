/* eslint-disable */
const globals = require('confusing-browser-globals')
const allowed = ['self']
const arrayAddUnique = require('./array-add-unique')

const restrictedGlobals = arrayAddUnique(globals, ['title'])

allowed.forEach(s => {
  const idx = restrictedGlobals.indexOf(s)
  ~idx && restrictedGlobals.splice(idx, 1)
})

module.exports = restrictedGlobals
