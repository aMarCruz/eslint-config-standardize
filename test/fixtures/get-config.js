const ESLint = require('eslint')

const cliEngine = new ESLint.CLIEngine({
  cwd: __dirname,
  extensions: ['.js', '.ts', '.tsx', '.jsx'],
})

const config = cliEngine.getConfigForFile(__filename)

console.dir(config, { colors: true, depth: 9 })
