/**
 * Adds the array `src` to `dest`, discarding duplicated items.
 *
 * @param {string[]} dest Target array
 * @param {string[]} src Array to merge in dest
 */
module.exports = function arrayAddUnique (dest, src) {
  if (!dest) {
    return src || []
  }
  if (Array.isArray(src)) {
    src.forEach((s) => {
      if (dest.indexOf(s) < 0) {
        dest.push(s)
      }
    })
  }
  return dest
}
