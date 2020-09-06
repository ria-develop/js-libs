module.exports = (packages) => ({
  lodash: {
    commonjs: 'lodash',
    commonjs2: 'lodash',
    amd: 'lodash',
    root: '_'
  },
  'lodash/get': {
    commonjs: 'lodash/get',
    commonjs2: 'lodash/get',
    amd: 'lodash/get',
    root: ['_', 'get']
  },
  ...packages.reduce((reduced, currentValue) => {
    const {name, private: exclude} = currentValue;
    return {
      ...reduced,
      ...(!exclude && {
        [name]: {
          commonjs: name,
          commonjs2: name,
          amd: name,
          root: name.split('/')
        }
      })
    };
  }, {})
});
