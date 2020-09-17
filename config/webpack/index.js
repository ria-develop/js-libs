const {TsconfigPathsPlugin} = require('tsconfig-paths-webpack-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const path = require('path');
const packages = require('./lerna').getPackages();

const context = process.cwd();
const nameToken = '[name]';

const babelOptions = {
  presets: ['@babel/preset-env', '@babel/preset-react', '@babel/preset-typescript']
};

module.exports = ({libraryTarget = 'umd', mode, tsconfigPath = 'tsconfig.json', plugins = [], externals = []}) => {
  let libraryScope;
  const entry = packages.reduce((previous, current) => {
    const [scope, name] = current.name.split('/');
    libraryScope = scope || libraryScope;
    const entryName = name || scope;
    const next = {[entryName]: path.resolve(current.location, 'src', `${entryName}.ts`)};
    return {...previous, ...next};
  }, {});

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
    options: babelOptions
  };
  const tsLoader = {
    loader: 'ts-loader',
    options: {transpileOnly: true}
  };
  return {
    entry,
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
          use: [styleLoader, cssLoader, lessLoader]
        },
        {
          test: /\.css$/,
          use: [styleLoader, cssLoader]
        }
      ]
    },
    resolve: {
      extensions: ['.tsx', '.ts', '.js', '.jsx'],
      plugins: [
        new TsconfigPathsPlugin({
          configFile: path.resolve(context, tsconfigPath)
        })
      ]
    },
    plugins: [
      new ForkTsCheckerWebpackPlugin({
        eslint: {
          enabled: true,
          files: './packages/**/src/*.{ts,tsx,js,jsx}',
          options: {
            fix: true
          }
        }
      }),
      ...plugins
    ],
    optimization: {
      runtimeChunk: 'single',
      splitChunks: {
        chunks: 'all',
        cacheGroups: {
          shared: {
            name: 'shared',
            chunks: 'initial',
            minChunks: 2,
            enforce: true
          },
          vendor: {
            test: /[\\/]node_modules|modules[\\/]/,
            name(module) {
              return (
                'vendor/' + module.context.match(/[\\/](node_modules|modules)[\\/](.*?)([\\/]|$)/)[2].replace('@', '')
              );
            },
            enforce: true
          }
        }
      }
    }
  };
};
