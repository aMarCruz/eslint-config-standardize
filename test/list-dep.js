const allRules = require('eslint/lib/rules')
const depRules = []

allRules.forEach((r, k) => {
  if (r.meta.deprecated) {
    depRules.push(k)
  }
})

depRules.forEach(r => console.log(r))
