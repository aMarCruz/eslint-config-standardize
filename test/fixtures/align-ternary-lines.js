/* eslint-disable no-unused-vars, indent: [2, 2, { flatTernaryExpressions: false }] */
/* eslint-env es6 */
const abababababab = ['', '', '', '']

const abcvar = abababababab[0] === 'foobarfoobarfoobarfoobar1'
  ? abababababab[0]
  : abababababab[1] === 'foobarfoobarfoobarfoobar1'
    ? abababababab[1]
      ? ''
      : 'no'
    : abababababab[2] === 'foobarfoobarfoobarfoobar1'
      ? abababababab[2]
      : abababababab[3] === null
        ? null
        : 'foo'

/* eslint-disable */

// Prettier with alignTernaryLines: false
const abcvar =
  abababababab[0] === 'foobarfoobarfoobarfoobar1'
    ? abababababab[0]
    : abababababab[1] === 'foobarfoobarfoobarfoobar1'
    ? abababababab[1]
      ? ''
      : 'no'
    : abababababab[2] === 'foobarfoobarfoobarfoobar1'
    ? abababababab[2]
    : abababababab[3] === null
    ? null
    : 'foo'
