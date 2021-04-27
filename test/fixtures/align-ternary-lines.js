/* eslint-disable no-unused-vars, @typescript-eslint/naming-convention */
const abababababab = ['', '', '', '']

/* eslint prettierx/options:[1,{offsetTernaryExpressions:true}] */
const abcvar1 =
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

// Prettier with alignTernaryLines: false
// prettier-ignore
const abcvar2 =
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
