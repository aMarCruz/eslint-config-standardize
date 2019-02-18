const restrictedGlobals = require('confusing-browser-globals')
const standardRules = require('eslint-config-standard/eslintrc.json').rules

const mergeArray = (arr1, arr2) => {
  if (!arr1) {
    return arr2 || []
  }
  if (Array.isArray(arr2)) {
    arr2.forEach((s) => {
      if (arr1.indexOf(s) < 0) {
        arr1.push(s)
      }
    })
  }
  return arr1
}

module.exports = function mergeConf (base, conf) {
  const baseRules = base.rules
  const stdCmtOpts = standardRules['spaced-comment'][2]
  const ownCmtOpts = baseRules['spaced-comment'][2]

  if (typeof stdCmtOpts !== 'object') {
    throw new TypeError('StarndardJS `spaced-comment` is not an object.')
  }

  ownCmtOpts.block.exceptions = mergeArray(
    ownCmtOpts.block.exceptions,
    stdCmtOpts.block.exceptions
  )
  ownCmtOpts.block.markers = mergeArray(ownCmtOpts.block.markers, stdCmtOpts.block.markers)

  ownCmtOpts.line.exceptions = mergeArray(
    ownCmtOpts.line.exceptions,
    stdCmtOpts.line.exceptions
  )
  ownCmtOpts.line.markers = mergeArray(ownCmtOpts.line.markers, stdCmtOpts.line.markers)

  /**
   * Restricted global names.
   */
  baseRules['no-restricted-globals'] = mergeArray(
    baseRules['no-restricted-globals'],
    restrictedGlobals
  )

  /*
    React
  */
  const sortComp = conf.sortComp
  if (sortComp) {
    const reactSortComp = baseRules['react/sort-comp'] || [2]
    reactSortComp[1] = sortComp
  }

  return base
}
