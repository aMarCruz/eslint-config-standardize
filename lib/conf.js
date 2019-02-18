module.exports = {
  // react/sortComp
  sortComp: {
    order: [
      'type-annotations',
      'static-methods',
      'types',
      'instance-variables',
      'getters',
      'setters',
      'lifecycle',
      'everything-else',
      'rendering',
    ],
    groups: {
      types: [
        'mixins',
        'displayName',
        'contextTypes',
        'childContextTypes',
        'propTypes',
        'defaultProps',
        'statics',
      ],
      getters: [],
      setters: [],
      lifecycle: [
        'state',
        'constructor',
        'componentDidCatch',
        'componentDidMount',
        'shouldComponentUpdate',
        'getSnapshotBeforeUpdate',
        'componentDidUpdate',
        'componentWillUnmount',
      ],
      rendering: ['/^render.+$/', 'render'],
    },
  },
}
