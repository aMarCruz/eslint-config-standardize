# Changes for eslint-config-standardize

## \[0.9.1] - 2001-04-28

### Changed

- Remove `warnOnUnsupportedTypeScriptVersion` to allow TypeScript version check.
- Include "PascalCase" format for functions and methods in `@typescript-eslint/naming-convention` to allow _Functional Components_ in react and preact.

## \[0.9.0] - 2021-04-27

### added

- `no-return-await` as "warn"
- `no-useless-constructor` as "error"
- `node/no-unpublished-require` as "error"
- `node/shebang` as "error"
- `unicorn/no-array-push-push` as "warn"
- `unicorn/prefer-array-index-of` as "warn"
- `unicorn/prefer-date-now` as "warn"
- `@typescript-eslint/default-param-last` as "error" (extends the ESlint rule)
- `@typescript-eslint/no-dupe-class-members` as "error" (extends the ESlint rule)
- `@typescript-eslint/no-duplicate-imports` as "error" (extends the ESlint rule)
- `@typescript-eslint/no-redeclare` as "error" (extends the ESlint rule)
- `react/no-children-prop` as "error"
- `react/no-danger-with-children` as "error"
- `react/no-find-dom-node` as "error"
- `react/no-render-return-value` as "error"
- `react/no-this-in-sfc` as "error"
- `react/void-dom-elements-no-children` as "error"
- `react/jsx-no-bind` as "error"
- `react/jsx-no-target-blank` as "error" with `enforceDynamicLinks:always`
- `react/jsx-no-useless-fragment` as "error"

### Removed

- `no-restricted-syntax` as "WithStatement" is replaced with `no-with`
- `prefer-arrow-callback` (was "off")
- `@typescript-eslint/array-type` as it's too opinionated
- `import/named` (was "error")

### Changed

- Add `document`, `navigator`, `window` to ESLint `globals`, as StandardJS does.
- Add `convertPath` option to `settings/node` for "./src/bin" to "./bin" translation.
- Add options to allow "amd" in `import/no-absolute-path`
- Add `"#__INLINE__"` and `"#__NOINLINE__"` to markers of block in `spaced-comment`
- Add `noTemplateLiterals` option to `react/no-string-refs`
- Change `complexity` from 10 to 12
- Change `curly` from "error" to "warn"
- Change `commentPattern` from "^no ?default$" to "^no default$" (require space) in `default-case`.
- Change `react/jsx-max-depth` from 5 to 6
- Change `unicorn/no-unreadable-array-destructuring` from "error" to "warn"
- Change `unicorn/better-regex` from "error" to "warn"
- Replaced `unicorn/no-array-instanceof` with `unicorn/no-instanceof-array`
- Replaced `unicorn/prefer-text-content` with `unicorn/prefer-dom-node-text-content`
- Replaced `unicorn/prefer-node-remove` with `unicorn/prefer-dom-node-remove`
- Replaced `unicorn/prefer-event-key` with `unicorn/prefer-keyboard-event-key`
- Replaced `unicorn/prefer-starts-ends-with` with `unicorn/prefer-string-starts-ends-with`
- Revert `@typescript-eslint/member-delimiter-style` singleline delimiter to 'semi'
- Remove `allowInPropTypes` option from `react/forbid-foreign-prop-types`
- Remove `allowAllCaps` option in `react/jsx-pascal-case`
- Now the rules are extracted and prepared from the prettierx, standard, and standard-jsx configurations at build time, so its packages are not required at runtime and have been moved to `devDependencies`.
- [eslint-plugin-prettierx](https://www.npmjs.com/package/eslint-plugin-prettierx) is included and enabled in this package. You don't need to include the "eslint-plugin-prettierx/standardize-bundle" configuration.
- Scripts have been added to package.json to list obsolete and unused rules. This through the [eslint-find-rules](https://www.npmjs.com/package/eslint-find-rules) package.
- The rule `@typescript-eslint/naming-convention` has been relaxed to allow edge cases.
- Workaround for typescript-eslint/typescript-eslint#2540 bug with `no-use-before-define`.
- Update dependencies.

## \[0.8.0] - 2021-02-07

### Changed

- Autodetect React and Preact installations.
- Updated prettierx to 0.17.0

### Removed

- Preact config, not longer needed.

## \[0.7.2] - 2021-01-19

### Changed

- Use the default StandardJS level (error) for `no-case-declarations`
- Use wide version range for typescript-eslint devDependencies.
- Set `parserOptions.ecmaVersion:2021` (12) and `env.es2021:true`
- Updated prettierx to 0.16.0, TS to 4.x and other dependencies.

### Removed

- eslint-plugin-standard - see [standard#1316](https://github.com/standard/standard/issues/1316)

## \[0.7.1] - 2020-08-10

### Changed

- Update internal `aMarCruz/prettier` to v2.0.5 (prettierx 0.14.0)

## \[0.7.0] - 2020-08-10

### Added

- `impliedStrict: true` to `parserOptions`
- `default-case-last` if running ESLint 7.0
- `default-param-last`
- `no-constructor-return`
- `no-useless-backreference` if running ESLint 7.0
- `for-direction` as error
- `no-dupe-else-if` as error
- `no-setter-return`
- `no-import-assign`
- `node/no-mixed-requires`
- `node/no-deprecated-api`
- `@typescript-eslint/naming-convention` to replace obsolete rules.

### Changed

- Use `es2017` instead `es6` in the `env` block.
- Use `@typescript-eslint/no-unused-expressions` to allow TS 3.7 "Optional Chaining".
- Replaced deprecated ESLint `no-native-reassign` with `no-global-assign`
- Replaced deprecated ESLint `no-process-exit` with `node/no-process-exit`
- Replaced deprecated ESLint `no-buffer-constructor`, this is included in `node/no-deprecated-api`
- Changed options for `import/no-cycle` to `{ maxDepth: 3, ignoreExternal: true }`

### Removed

- `@typescript-eslint/camelcase`
- `@typescript-eslint/class-name-casing`
- `@typescript-eslint/member-naming`
- `unicorn/no-process-exit`

## \[0.6.1] - 2020-05-14

### Changed

- Rename `unicorn/regex-shorthand` rule to `unicorn/better-regex`
- Minimum ESLint 6.8.0
- Update Prettierx to v0.12.0
- Updated dependencies.

### Removed

- ['@typescript-eslint/await-thenable'](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/await-thenable.md)

## \[0.6.0] - 2020-02-13

### Added

- ['@typescript-eslint/await-thenable'](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/await-thenable.md) as warn.
- ['react/jsx-no-script-url'](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-script-url.md) using defaults as error.
- ['prefer-arrow-callback'](https://eslint.org/docs/rules/prefer-arrow-callback) using defaults as error.

### Changed

- Rename `unicorn/regex-shorthand` rule to `unicorn/better-regex`
- Require NodeJS 10.13, 12.0, or above (compatible with ESLint 6.8)
- Updated dependencies.
- Set ['no-useless-constructor'](https://eslint.org/docs/rules/no-useless-constructor) to error (the StandardJS seeting).
- Updated dependencies
- Fixed tests

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
