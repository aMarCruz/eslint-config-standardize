/* eslint-disable no-unused-vars */
const abababababab = ['', '', '', '']

const abcvar = abababababab
  .filter(item => item === 'foobarfoobarfoobarfoobar1')
  .map(item => item + 'foobarfoobarfoobarfoobar1')
  .forEach((item, ix) => {
    item += `foobarfoobarfoobarfoobar${ix}`
  })
  .sort()
