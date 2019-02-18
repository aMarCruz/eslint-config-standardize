/* eslint-disable no-unused-vars, comma-spacing,
   standard/array-bracket-even-spacing, node/no-unsupported-features/es-syntax */
/* eslint-env es6 */
const abababababab = ['', '', '', '']

const abcvar = abababababab.filter((item) => item === 'foobarfoobarfoobarfoobar1')
  .map((item) => item + 'foobarfoobarfoobarfoobar1')
  .forEach((item) => { item += 'foobarfoobarfoobarfoobar1' })
  .sort()
