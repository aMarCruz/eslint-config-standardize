/*
  The base config in ../.eslint.json defines an "overrides" for "*.tsx" files,
  with only one rule "semi" and the config in ../../typescript defines other
  "overrides" block containing "no-unused-vars:off".
  The linting of this file will succeed if both blocks are merged, but must
  exist a warnig from TS, hidden by the @ts-ignore
*/
import * as React from 'react';

type Props = { foo: typeof Foo }
type Dict = { [k: string]: React.Ref<any> }

class Test1 extends React.Component<Props> {
  render () {
    // no-unused-vars must be off. Comment next line to show the TS warning
    // @ts-ignore
    const React2 = require('react').createRef();
    const foo: Dict = {};
    foo.bar = React.createRef();

    return (
      <div className="none" data-url="#" ref={foo.bar}>
        {'foo'}
      </div>
    );
  }
}

const Foo = () => {};

export default Test1;
