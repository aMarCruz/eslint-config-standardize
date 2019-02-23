# Changes for eslint-config-standardize

## \[0.2.2] - 2019-02-23

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
