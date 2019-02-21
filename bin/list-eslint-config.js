/* eslint-disable import/no-nodejs-modules */
const path = require('path')
const eslint = require('eslint')

const DEFAULT_EXTENSIONS = ['.js', '.jsx']

/**
 * Get the ESLint configuration
 */
function getConfig (fileName) {
  const filePath = path.resolve(fileName)

  try {
    const cliEngine = new eslint.CLIEngine({
      filePath,
      extensions: DEFAULT_EXTENSIONS,
    })

    return cliEngine.getConfigForFile(filePath)
  } catch (error) {
    // is this noisy? Try setting options.disableLog to false
    console.error(`Cannot get config for "${filePath}"\n${error.message}`)
    process.exitCode = 1
  }

  return {}
}

const args = process.argv.slice(2)

if (!args.length || args.includes('-h') || args.includes('--help')) {
  console.log(`
  Usage: ${path.relative('.', __filename)} js-file-path
  `)
} else {
  const config = getConfig(args[0])
  console.log(JSON.stringify(config, null, 2))
}
