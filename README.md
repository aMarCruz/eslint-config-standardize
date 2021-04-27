# eslint-config-standardize

[![License][license-badge]][license-url]
[![npm Version][npm-badge]][npm-url]

## IMPORTANT

eslint-config-standardize was my first attempt to integrate ESLint with TypeScript and React. Currently, the package that my team and I use is [@quitsmx/eslint-config](https://github.com/quitsmx/eslint-config). With TypeScript and PrettierX integrated, this one is more modern and easier to use. I would recommend you give it a try, eslint-config-standardize will be discontinued soon.

---

Customizable ESLint config backed by [StandardJS](https://www.npmjs.com/package/eslint-config-standard) rules and [PrettierX](https://www.npmjs.com/package/prettierx) formatting.

For use with ESLint v7.0 and above, for previous versions use eslint-config-standardize 0.7.x or bellow.

Minimum Node.js version: 10.13, 12.0, or above.

**NOTE:**

From v0.9.0, [eslint-plugin-prettierx](https://www.npmjs.com/package/eslint-plugin-prettierx) is included and enabled in this package. You don't need to include the "eslint-plugin-prettierx/standardize-bundle" config.

## Setup

Install from npm (omit eslint if it's already installed or you are using CRA).

```sh
npm install -D eslint eslint-config-standardize
# or
yarn add -D eslint eslint-config-standardize
```

In your ESLint config file:

```js
// .eslintrc.js
module.exports = {
  root: true, // optional, avoids searching upwards
  extends: ['standardize'],
}
```

### With TypeScript

If you are using TypeScript, install the parser and the eslint plugin

```bash
yarn add @typescript-eslint/parser @typescript-eslint/eslint-plugin -D
```

then add "standardize/typescript" to your eslint config

```js
// .eslintrc.js
module.exports = {
  root: true, // optional, avoids searching upwards
  extends: ['standardize', 'standardize/typescript'],
}
```

### With React or Preact

You don't need to do anything else, the config automatically detects React and Preact.

"standardize/preact" is no longer needed and has been removed.

## Included Plugins

- [import](https://www.npmjs.com/package/eslint-plugin-import)
- [node](https://www.npmjs.com/package/eslint-plugin-node)
- [prettierx](https://www.npmjs.com/package/eslint-plugin-prettierx)
- [promise](https://www.npmjs.com/package/eslint-plugin-promise)
- [react](https://www.npmjs.com/package/eslint-plugin-react)
- [react-hooks](https://www.npmjs.com/package/eslint-plugin-react-hooks)
- [unicorn](https://www.npmjs.com/package/eslint-plugin-unicorn)

## Differences vs StandardJS

Standardize uses a more strict and opinionated configuration than _StandardJS_ and include the react-hooks and unicorn plugins.

Almost all the code passes with no problems through the StandardJS linter, but has some differences with the default settings of StandardJS/PrettierX. This is the most important:

### Multiline Ternary

The formatting of multiline ternary is a mess, although the result seems to be inline with the StandardJS rules. See [Known Issues](#known-issues).

### Trailing Commas

Although _StandardJS_ avoids trailing commas in all, this is a common practice as it helps to clarify commits.

Standardize leaves everything to 'always', except for the function parameters (Prettier's `trailingComma: 'es5'` option).

ESLint rule: [`comma-dangle`](https://eslint.org/docs/rules/comma-dangle)
Prettier: [`trailingComma`](https://prettier.io/docs/en/options.html#trailing-commas)

### JSX quotes

The React style favors double quotes in properties, and I agree.

ESLint rule: [`jsx-quotes`](https://eslint.org/docs/rules/jsx-quotes)
Prettier: [`jsxSingleQuote`](https://prettier.io/docs/en/options.html#jsx-quotes)

### Quote Props

Both Prettier and StandardJS enclose the properties in quotes "as needed", this looks ugly with syntax highlighting on large JS objects (such as those used in configurations) and is inconsistent at object level. I prefer `"consistent"`.

ESLint rule: [`quote-props`](https://eslint.org/docs/rules/quote-props)
Prettier: [`quoteProps`](https://prettier.io/docs/en/options.html#quote-props)

### eslint-plugin-prettierx

The [eslint-plugin-prettierx](https://github.com/aMarCruz/eslint-plugin-prettierx) **is used** to format the JS code. You don't need install PrettierX.

This plugin is a excellent alternative to the VS Code 'Prettier - Code formatter' extension.

See [here](https://github.com/aMarCruz/eslint-plugin-prettierx#vs-code-eslint) to know how to configure it.

## Support my Work

I'm a full-stack developer with more than 20 year of experience and I try to share most of my work for free and help others, but this takes a significant amount of time and effort so, if you like my work, please consider...

[<img src="https://amarcruz.github.io/images/kofi_blue.png" height="36" title="Support Me on Ko-fi" />][kofi-url]

Of course, feedback, PRs, and stars are also welcome 🙃

Thanks for your support!

## License

The [MIT](LICENSE) License &copy; 2019-2021 Alberto Martínez

[license-badge]: https://img.shields.io/badge/license-MIT-blue.svg?style=flat
[license-url]: https://github.com/aMarCruz/eslint-config-standardize/blob/master/LICENSE
[npm-badge]: https://img.shields.io/npm/v/eslint-config-standardize.svg
[npm-url]: https://www.npmjs.com/package/eslint-config-standardize
[kofi-url]: https://ko-fi.com/C0C7LF7I
