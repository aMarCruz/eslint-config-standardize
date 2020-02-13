# Changes for eslint-config-standardize

## \[0.6.0] - 2019-11-27

### Added

- ['@typescript-eslint/await-thenable'](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/await-thenable.md) as warn.
- ['react/jsx-no-script-url'](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-script-url.md) using defaults as error.
- ['prefer-arrow-callback'](https://eslint.org/docs/rules/prefer-arrow-callback) using defaults as error.

### Changed

- Updated dependencies.
- Set ['no-useless-constructor'](https://eslint.org/docs/rules/no-useless-constructor) to error (the StandardJS seeting).

### Removed

- ['no-catch-shadow'](https://eslint.org/docs/rules/no-catch-shadow)
- ['require-await'](https://eslint.org/docs/rules/require-await)
- Dependency on _eslint-config-standard_.
- The fake Prettier package now lives in [aMarCruz/prettier](https://github.com/aMarCruz/prettier).

## \[0.5.0] - 2019-11-21

### Added

- [eslint-plugin-react-hooks](https://www.npmjs.com/package/eslint-plugin-react-hooks)
- [preact](https://www.npmjs.com/package/preact) config.

### Changed

- '@typescript-eslint/member-delimiter-style' singleline delimiter to 'comma'
- Update Prettierx to v0.10.0, based on Prettier 1.9.1
- Update fake Prettier package to report version 1.9.1
- Minimum ESLint 6.2.2
- Internal: rename lib/get-conf.js to lib/merged-conf.js

## \[0.4.2] - 2019-11-01

### Changed

- Fix an errors bin/list-eslint-config.js
- Minimum ESLint v6.0.1 in peerDependencies because there's bugs in 6.0.0
- Reformat code using Prettierx and the VS Code plugin.

## \[0.4.1] - 2019-10-30

This is to replace v0.4.0, which did not include the 'preact' configuration folder.

## \[0.4.0] - Unreleased

Major update of dependencies.

### Added

- 'standardize/preact' configuration for he ESLint `extends` array.
- `'#__PURE__'` (uglifyJS/terser directive) to `block` property in 'spaced-comment'
- `@typescript-eslint/consistent-type-assertions` replacing obsolete rules (see "Removed").
- `react/no-did-mount-set-state` as warn.
- `react/no-did-update-set-state` as error.
- `unicorn/no-console-spaces` as warn.
- `unicorn/prefer-dataset` as warn.
- `unicorn/prefer-event-key` as error.
- `unicorn/prefer-node-remove` as warn.
- `unicorn/prefer-starts-ends-with` as warn.
- `unicorn/prefer-text-content` as error.
- `unicorn/throw-new-error` as error.

### Changed

- Using Prettierx v0.8.0, based on Prettier 1.18.0
- Updated the './prettier' directory for sync dependencies.
- `@typescript/array-type` now is 'array', to allow the `readonly` keyword.
- `arrow-parens` now is 'as-needed' with `requireForBlockBody` false.
- `complexity` from 8 to 10.
- `default-case` now accept 'nodefault' or 'no default'.
- `quote-props` from 'as-needed' to 'consistent'.
- `unicorn/no-unused-properties` from error to warn.
- `unicorn/prefer-add-event-listener` from error to warn.

### Removed

- `@typescript-eslint/no-angle-bracket-type-assertion`
- `callback-return`, there's many _false negative/positive_ fails.

## \[0.3.7] - 2019-03-27

### Added

- 'unicorn/prefer-includes' rule.

### Changed

- Updated unicorn to v8.0
- Remove the message displayed when config React version.

### Fixed

- Error in Readme showing standardize in .eslintrc as a plugin.

## \[0.3.6] - 2019-03-20

### Added

- 'react/no-access-state-in-setstate'

### Changed

- Update dependencies

### Removed

- 'promise/always-return', the 'promise/catch-or-return' rule is enough.
- 'import/no-duplicates', eslint 'no-duplicate-imports' is already enabled.

## \[0.3.5] - 2019-02-27

### Added

- Error for 'callback-return', 'no-buffer-constructor', 'no-misleading-character-class'
- Warning for 'complexity' with level 8
- Warning for 'max-depth' and 'no-case-declarations'

### Changed

- Set the commonjs flag to `import/no-unresolved`
- Update devDependencies, including Prettierx v0.6

## \[0.3.4] - 2019-02-27

## Changed

- Revert '@typescript-eslint/no-use-before-define' because issues with `typeof`

## \[0.3.3] - 2019-02-27

### Changed

- Update Readme and package description.
- Enable '@typescript-eslint/no-use-before-define', the bug seems solved.

## \[0.3.2] - 2019-02-26

### Changed

- Update Readme to include note about change in the "standardize-bundle" preset of prettierx.

### Fixed

- typescript does not follows the StandardJS `camelcase` rule.
- typescript conflict with `import/export` and types.

## \[0.3.1] - 2019-02-25

### Changed

- Split the react rules to a separate file.
- Severity of "react/jsx-no-comment-textnodes" from "warn" to "error"
- Uses "@typescript-eslint/indent" if available.

### Added

- Instructions for use with eslint-plugin-prettierx

## \[0.3.0] - 2019-02-23

_**not pusblished in npm**_

### Changed

- Disable 'unicorn/escape-case', 'unicorn/number-literal-case' because conflicts w/prettier.
- Refactorization for better loading of the config.

### Removed

- Dependency on eslint-config-standard-jsx

## \[0.2.1] - 2019-02-22

### Changed

- Update Readme to include license link in the footer.

### Fixed

- Silly error in the typescript config.

## \[0.2.0] - 2019-02-22

Preparation for [eslint-plugin-prettierx](https://github.com/aMarCruz/eslint-plugin-prettierx)

### Added

- Markdown-lint config.
- Tool 'list-eslint-config' to the 'bin' directory (i.e. node_modules/.bin)

### Changed

- Now the base format is in JS, to allow comments.

### Removed

- Rules for style 'react/jsx-indent', 'react/jsx-indent-props', 'react/jsx-props-no-multi-spaces', '@typescript-eslint/indent', for easy integration with eslint-plugin-prettierx.

## \[0.1.6] - 2019-02-21

### Changed

- The React plugin is not installed if React is not detected.
- `arrow-parens` changed from "always" to "as-needed" with `requireForBlockBody`.
- More permissive ordination of `require` and module imports.

### Fixed

- Warnings about the react version, now it is auto-detected.
- Multiple initialization of the plugin.

### Removed

- Remove the order of methods and properties of react components.
- Ban of nodejs modules.
- Ban of "use strict"

## \[0.1.5] - 2019-02-15

First release.
