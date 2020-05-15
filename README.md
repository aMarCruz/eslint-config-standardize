# eslint-config-standardize

[![License][license-badge]][license-url]
[![npm Version][npm-badge]][npm-url]

For use with ESLint v6.8.0 and above, for previous versions use eslint-config-standardize 0.5.x or bellow.

Minimum NodeJS version supported: 10.13, 12.0, or above (ESLint 6.8 compatible).

## Note

If you are using the [(fake) Prettier](#prettier) package, please update it.

## Setup

Install from npm (omit eslint if it's already installed or you are using CRA).

```sh
npm i eslint@6.8.x eslint-config-standardize -D
# or
yarn add eslint@6.8.x eslint-config-standardize -D
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

If you are using TypeScript add "standardize/typescript" in "extends".

```bash
yarn add @typescript-eslint/parser @typescript-eslint/eslint-plugin -D
```

In your eslint config

```js
// .eslintrc.js
module.exports = {
  root: true, // optional, avoids searching upwards
  extends: ['standardize', 'standardize/typescript'],
}
```

### With Preact

In your eslint config

```js
// .eslintrc.js
module.exports = {
  root: true, // optional, avoids searching upwards
  extends: ['standardize', 'standardize/preact'],
}
```

#### Note

You can mix the "standardize/preact" with "standardize/typescript" configs.

## Included Plugins

- [import](https://www.npmjs.com/package/eslint-plugin-import)
- [node](https://www.npmjs.com/package/eslint-plugin-node)
- [promise](https://www.npmjs.com/package/eslint-plugin-promise)
- [react](https://www.npmjs.com/package/eslint-plugin-react)
- [react-hooks](https://www.npmjs.com/package/eslint-plugin-react-hooks)
- [standard](https://www.npmjs.com/package/eslint-plugin-standard)
- [unicorn](https://www.npmjs.com/package/eslint-plugin-unicorn)

## Differences vs StandardJS

Standardize uses a more strict and opinionated configuration than Standard, so almost all the code passes with no problems through the StandardJS linter, but has some differences with the default settings of StandardJS/Prettier.

### Multiline Ternary

Both Prettier and ESLint have some bugs and this is a mess, altough the result seems to be inlined to StandardJS rules. See [Known Issues](#known-issues).

### Trailing Commas

Altough StandardJS avoids trailing commas in all, this is a common practice as it helps to clarify commits.

Standardize leaves everything to 'always', except for the function parameters (Prettier's `trailingComma: 'es5'` option).

ESLint rule: [`comma-dangle`](https://eslint.org/docs/rules/comma-dangle)
Prettier: [`trailingComma`](https://prettier.io/docs/en/options.html#trailing-commas)

### JSX quotes

The React style favors double quotes in properties, and I agree.

ESLint rule: [`jsx-quotes`](https://eslint.org/docs/rules/jsx-quotes)
Prettier: [`jsxSingleQuote`](https://prettier.io/docs/en/options.html#jsx-quotes)

### Spaced comment

Adds `#`, `#region`, `#endregion` (VS Code directives) to the line markers.
Adds `#__PURE__` (uglify/terser directive) to the block markers.

ESLint rule: [`spaced-comment`](https://eslint.org/docs/rules/spaced-comment)
Prettier: N/A

### Quote Props

Both Prettier and StandardJS enclose the properties in quotes "as needed", this looks ugly with syntax highlighting on large JS objects (such as those used in configurations) and is inconsistent at object level. I prefer `"consistent"`.

ESLint rule: [`quote-props`](https://eslint.org/docs/rules/quote-props)
Prettier: [`quoteProps`](https://prettier.io/docs/en/options.html#quote-props)

## Prettier

If you like PrettierX but you are using some tool that requires Prettier, use [aMarCruz/prettier](https://github.com/aMarCruz/prettier).

```sh
yarn add aMarCruz/prettier -D
# or
npm i aMarCruz/prettier -D
```

with a version number:

```sh
yarn add aMarCruz/prettier#1.19.2 -D
# or
npm i aMarCruz/prettier#1.19.2 -D
```

### eslint-plugin-prettierx

| WARNING                                                                 |
| ----------------------------------------------------------------------- |
| From v0.3.2 you must set the 'standardize' config in "extends" manually |

The [eslint-plugin-prettierx](https://github.com/aMarCruz/eslint-plugin-prettierx) can be used to format JS code. It have a preset for the standardize bundle.

This example is using standardize with the prettierx plugin:

```bash
# install requirements
yarn add eslint eslint-plugin-prettierx eslint-install-standardize
```

Configure eslint:

```js
// .eslintrc.js
module.exports = {
  plugins: [
    'prettierx'
  ]
  extends: [
    'standardize',
    'plugin:prettierx/standardize-bundle',
  ],
}
```

Done.

This plugin is a excellent alternative to the VS Code 'Prettier - Code formatter' extension. See [here](https://github.com/aMarCruz/eslint-plugin-prettierx#vs-code-eslint) to know how to configure it.

## Support my Work

I'm a full-stack developer with more than 20 year of experience and I try to share most of my work for free and help others, but this takes a significant amount of time and effort so, if you like my work, please consider...

[<img src="https://amarcruz.github.io/images/kofi_blue.png" height="36" title="Support Me on Ko-fi" />][kofi-url]

Of course, feedback, PRs, and stars are also welcome 🙃

Thanks for your support!

## License

The [MIT](LICENSE) License &copy; 2019 Alberto Martínez

[license-badge]: https://img.shields.io/badge/license-MIT-blue.svg?style=flat
[license-url]: https://github.com/aMarCruz/eslint-config-standardize/blob/master/LICENSE
[npm-badge]: https://img.shields.io/npm/v/eslint-config-standardize.svg
[npm-url]: https://www.npmjs.com/package/eslint-config-standardize
[kofi-url]: https://ko-fi.com/C0C7LF7I
