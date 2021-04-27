/**
 * @param {string} e
 * @param {number} ix
 * @param {string[]} arr
 */
const unique = (e, ix, arr) => arr.indexOf(e) === ix

/**
 * Adds the array `src` to `dest`, discarding duplicated items.
 *
 * @param {string[]} dest Target array
 * @param {string[]|null|undefined} src Array to merge in dest
 */
module.exports = function arrayAddUnique (dest, src) {
  const result = Array.isArray(src) ? [...dest, ...src] : [...dest]

  return result.filter(unique)
}
