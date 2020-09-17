const config = require('@ria-develop/webpack-config');
const HtmlWebpackExternalsPlugin = require('html-webpack-externals-plugin');
const externalized = require('@ria-develop/webpack-config/lerna').getExternals();

const vendors = new HtmlWebpackExternalsPlugin({
  externals: [
    {
      module: 'lodash',
      global: '_',
      entry: 'https://cdn.jsdelivr.net/npm/lodash@4.17.20/lodash.min.js'
    }
  ]
});

const externals = {
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
  ...externalized
};

module.exports = [
  {
    mode: 'production',
    plugins: [vendors],
    externals
  },
  {
    mode: 'development',
    plugins: [vendors],
    externals
  }
].map(config);
