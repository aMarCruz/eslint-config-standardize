/* eslint-disable no-unused-vars, comma-spacing,
   node/no-unsupported-features/es-syntax */
/* eslint-env es6 */

/* eslint generator-star-spacing: ["error", {"before": true, "after": true}] */

function * generator () {
  yield * 1
}

const anonymous = function * () {}

const shorthand = { * generator () {} }
