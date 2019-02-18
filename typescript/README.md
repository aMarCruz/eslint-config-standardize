# Rules

Why the changes?

Ref: TypeScript [Compiler Options](https://www.typescriptlang.org/docs/handbook/compiler-options.html).

## import

### "overrides" for tsx

There's a lot of issues with `no-undef`, `no-unused-vars`, and `no-use-before-define`... see [typescript-eslint/#233](https://github.com/typescript-eslint/typescript-eslint/pull/233) and [typescript-eslint/249](https://github.com/typescript-eslint/typescript-eslint/issues/249). Until this issues are solved, I will keep the rules 'off'.

- Disables `import/named` ?

- Disables `no-use-before-define` for both ESLint and the TS plugin, to allow the reference hoisting types with `typeof` (waiting for tsp#249 fix).

- Disables `no-undef` and `no-unused-vars`. There's no reason to keep `no-unused-vars`, use the TS `noUnusedLocals` option instead.

- Disables `no-redeclare` to avoid conflicts, for example, when exporting functions and namespaces with the same name.
