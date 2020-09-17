module.exports = (packages) => ({
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
