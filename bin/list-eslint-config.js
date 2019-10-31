#!/usr/bin/env node
/* eslint-disable import/no-nodejs-modules */

const path = require('path')
const eslint = require('eslint')

const DEFAULT_EXTENSIONS = ['.js', '.jsx', '.mjs', '.ts', '.tsx']

/**
 * Get the ESLint configuration.
 * @param {string} filename
 */
function getConfig (filename) {
  const filepath = path.resolve(filename)

  try {
    const cliEngine = new eslint.CLIEngine({
      extensions: DEFAULT_EXTENSIONS,
    })

    return cliEngine.getConfigForFile(filepath)
  } catch (error) {
    // is this noisy? Try setting options.disableLog to false
    console.error(`Cannot get config for "${filepath}"\n${error.message}`)
    process.exitCode = 1
  }

  return {}
}

const args = process.argv.slice(2)

const popOption = opt => {
  const idx = opt.indexOf(opt)
  return ~~idx ? args.splice(idx, 1)[0] : false
}

if (!args.length || args.includes('-h') || args.includes('--help')) {
  console.log(`
  Usage: ${path.relative('.', __filename)} [options] js-filename

  List the ESLint settings used with 'js-filename'.

  Note: 'js-filename' can be absolute or relative to the current folder.

  options:
    -J, --json   Ourput as .json (forces '-no-color', default is 'console.dir')
    --no-color   Output with no colors
  `)
} else {
  const nocolor = popOption('--no-color')
  const asJson = popOption('-J') || popOption('--json')
  const config = getConfig(args[0])

  if (asJson) {
    console.log(JSON.stringify(config, null, 2))
  } else {
    console.dir(config, { colors: !nocolor, depth: 8 })
  }
}
