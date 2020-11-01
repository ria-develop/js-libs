const {TsconfigPathsPlugin, ForkTsCheckerPlugin, MiniCssExtractPlugin} = require('./plugins');
const path = require('path');
const entry = require('./lerna').getEntries();
const context = process.cwd();
const nameToken = '[name]';

module.exports = ({
  libraryTarget = 'umd',
  mode,
  tsconfigPath = 'tsconfig.json',
  plugins = [],
  externals = [],
  libraryScope,
  babelLoaderOptions,
  tsLoaderOptions
}) => {
  const library = libraryScope ? [libraryScope, nameToken] : nameToken;
  const destination = libraryTarget === 'commonjs' ? 'cjs' : 'dist';
  const min = (mode === 'production' && '.min') || '';
  const sourceMap = mode === 'production';
  const cssLoader = {
    loader: 'css-loader',
    options: {
      sourceMap
    }
  };
  const lessLoader = {
    loader: 'less-loader',
    options: {
      sourceMap
    }
  };
  const styleLoader = {loader: 'style-loader'};
  const babelLoader = {
    loader: 'babel-loader',
    options: babelLoaderOptions
  };
  const tsLoader = {
    loader: 'ts-loader',
    options: tsLoaderOptions
  };
  const extractLoader = {
    loader: MiniCssExtractPlugin.loader
  };
  return {
    entry,
    cache: true,
    output: {
      libraryTarget,
      library,
      umdNamedDefine: true,
      filename: `./packages/[name]/${destination}/[name]${min}.js`,
      path: path.resolve(context)
    },
    name: `${mode}:${libraryTarget}`,
    context,
    mode,
    devtool: sourceMap ? 'none' : 'inline-source-map',
    externals,
    devServer: {
      hot: true
    },
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          exclude: /node_modules/,
          use: [babelLoader, tsLoader]
        },
        {
          test: /\.less$/,
          use: [styleLoader, extractLoader, cssLoader, lessLoader]
        },
        {
          test: /\.css$/,
          use: [styleLoader, extractLoader, cssLoader]
        }
      ]
    },
    resolve: {
      extensions: ['.tsx', '.ts', '.js', '.jsx', '.css', '.less'],
      plugins: [
        new TsconfigPathsPlugin({
          configFile: path.resolve(context, tsconfigPath)
        })
      ]
    },
    plugins: [
      new ForkTsCheckerPlugin({
        eslint: {
          enabled: true,
          files: './packages/**/src/*.{ts,tsx,js,jsx}',
          options: {
            fix: true
          }
        }
      }),
      new MiniCssExtractPlugin({
        filename: `./packages/[name]/${destination}/[name]${min}.css`
      }),
      ...plugins
    ],
    optimization: {
      runtimeChunk: 'single',
      splitChunks: {
        cacheGroups: {
          vendors: {
            chunks: 'all',
            test: /[\\/]node_modules[\\/]/,
            name(module) {
              return module.context.match(/[\\/]node_modules[\\/]@?(.*?)([\\/]|$)/)[1];
            },
            filename: `./packages/vendors/[name]/${destination}/[name]${min}.js`,
            enforce: true,
            priority: 1
          }
        }
      }
    }
  };
};
