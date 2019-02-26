# eslint-config-standardize

[![License][license-badge]][license-url]
[![npm Version][npm-badge]][npm-url]

This is **WIP**

For use with ESLint 5.12 or above

See the [Changelog](CHANGELOG.md) for more info.

## Setup

Install from npm (omit eslint if it's already installed or you are using CRA).

```sh
npm i eslint eslint-config-standardize -D
# or
yarn add eslint eslint-config-standardize -D
```

In your ESLint config file:

```js
// .eslintrc.js
module.exports = {
  root: true,    // optional, avoids searching upwards
  plugins: [
    'standardize',
  ],
  extends: [
    'standardize',
  ],
}
```

If you are using TypeScript add "standardize/typescript" in "extends".

```bash
yarn add @typescript-eslint/eslint-plugin -D
```

Configure eslint

```js
// .eslintrc.js
module.exports = {
  root: true,    // optional, avoids searching upwards
  plugins: [
    'standardize',
  ],
  extends: [
    'standardize',
    'standardize/typescript'
  ],
}
```

## Included Plugins

- [import](https://www.npmjs.com/package/eslint-plugin-import)
- [node](https://www.npmjs.com/package/eslint-plugin-node)
- [promise](https://www.npmjs.com/package/eslint-plugin-promise)
- [react](https://www.npmjs.com/package/eslint-plugin-react)
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

ESLint rule: [`spaced-comment`](https://eslint.org/docs/rules/spaced-comment)

### Quote Props

Both Prettier and StandardJS enclose the properties in quotes "as needed", this looks ugly with syntax highlighting on large JS objects (such as those used in configurations) and is inconsistent at object level.

Standardize uses `quote-props: consistent-as-needed`.

ESLint rule: [`quote-props`](https://eslint.org/docs/rules/quote-props)

## Prettier

If you like PrettierX but you are using some tool that requires Prettier, in the ./node_modules/eslint-config-standardize/prettier you will find a package that will redirect `require`s for Prettier to PrietterX. You can copy this folder to the root of your App or install from there.

Install prettierx then the fake prettier:

```sh
mkdir prettier
cp ./node_modules/eslint-config-standardize/prettier/* prettier/
yarn add prettierx -D && yarn add ./prettier
```

### eslint-plugin-prettierx

| WARNING |
| --- |
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

## Known Issues

### Ternary

StandardJS define `flatTernaryExpressions: false` and that's ok, but Prettier formats these in a way that ESLint will not reformat.

Good news: the prettierx `flatTernaryExpressions` rule will [solve this issue](https://github.com/brodybits/prettierx/pull/46) int its next version.

### Comments

Currently, the [prettier-eslint](https://www.npmjs.com/package/prettier-eslint) tool does not work with fragment shorthands. In addition, the setup of this tool includes a lot of (unnecessary) packages that make it heavy in extensions like [Prettier - Code formatter](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) of VS Code.

This is the bug:

```jsx
export default <><div>foo</div></>
```

after prettier-eslint:

```jsx
export default (
  <>
    ' '<div>foo</div>' '
  </>
)
```

If you are usar 'Prettier - Code formatter', don't set the `prettier.eslintIntegration` option on React projects, [eslint-plugin-prettierx](https://www.npmjs.com/package/eslint-plugin-prettierx) is WIP and will solve this and other issues.

## License

The [MIT](LICENSE) License &copy; 2019 Alberto Martínez

[license-badge]:  https://img.shields.io/badge/license-MIT-blue.svg?style=flat
[license-url]:    https://github.com/aMarCruz/eslint-config-standardize/blob/master/LICENSE
[npm-badge]:      https://img.shields.io/npm/v/eslint-config-standardize.svg
[npm-url]:        https://www.npmjs.com/package/eslint-config-standardize
