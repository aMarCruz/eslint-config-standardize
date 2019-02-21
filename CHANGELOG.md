# Changes for eslint-config-standardize

## \[0.2.0] - 2019-02-21

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
