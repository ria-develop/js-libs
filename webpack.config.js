const config = require('@ria-develop/webpack-config');
const HtmlWebpackExternalsPlugin = require('html-webpack-externals-plugin');

const vendors = new HtmlWebpackExternalsPlugin({
  externals: [
    {
      module: 'lodash',
      global: '_',
      entry: 'https://cdn.jsdelivr.net/npm/lodash@4.17.20/lodash.min.js'
    }
  ]
});

module.exports = [
  {
    mode: 'production',
    plugins: [vendors]
  },
  {
    mode: 'development',
    plugins: [vendors]
  }
].map(config);
