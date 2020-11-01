const HTMLPlugin = require('html-webpack-plugin');
const HTMLExternalsPlugin = require('html-webpack-externals-plugin');
const {TsconfigPathsPlugin} = require('tsconfig-paths-webpack-plugin');
const ForkTsCheckerPlugin = require('fork-ts-checker-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const ContextReplacementPlugin = require('webpack').ContextReplacementPlugin;
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  HTMLPlugin,
  HTMLExternalsPlugin,
  TsconfigPathsPlugin,
  ForkTsCheckerPlugin,
  TerserPlugin,
  CopyPlugin,
  ContextReplacementPlugin,
  MiniCssExtractPlugin
};
