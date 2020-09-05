const {TsconfigPathsPlugin} = require('tsconfig-paths-webpack-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const path = require('path');
const externalizer = require('./externals');

const context = process.cwd();
const nameToken = '[name]';

const {getPackagesSync} = require('@lerna/project');
const {toposort} = require('@lerna/query-graph');

const packages = toposort(getPackagesSync()).reduce((previous, current) => {
  const publishConfig = current.get('publishConfig');
  if (publishConfig && publishConfig.target === 'web') {
    return previous.concat([current]);
  }
  return previous;
}, []);

const babelOptions = {
  'presets': [
    '@babel/preset-env',
    '@babel/preset-typescript'
  ]
};

module.exports = ({libraryTarget = 'umd', mode, tsconfigPath = 'tsconfig.json', plugins = []}) => {
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
  const min = mode === 'production' && '.min' || '';
  const externals = externalizer(packages);
  return {
    entry,
    output: {
      libraryTarget,
      library,
      umdNamedDefine: true,
      filename: `./[name]/${destination}/[name]${min}.js`,
      path: path.resolve(context, 'packages')
    },
    name: `${mode}:${libraryTarget}`,
    context,
    mode,
    devtool: mode === 'production' ? 'none' : 'inline-source-map',
    externals,
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          include: [
            //TODO: get it from effective tsconfig.json like: tsc --printConfig
            path.resolve(context, 'packages/js-expressions-client/__mocks__/test-data.ts')
          ].concat(packages.map((pkg) => path.resolve(pkg.location, 'src'))),
          use: [
            {
              loader: 'babel-loader',
              options: babelOptions
            },
            {
              loader: 'ts-loader',
              options: {
                transpileOnly: true
              }
            }]
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
      new ForkTsCheckerWebpackPlugin(),
      ...plugins
    ],
    optimization: {
      chunkIds: 'named',
      splitChunks: {
        cacheGroups: {
          commons: {
            chunks: 'initial',
            minChunks: 2,
            maxInitialRequests: 5, // The default limit is too small to showcase the effect
            minSize: 0, // This is example is too small to create commons chunks
            filename: `./js-expressions-common/dist/js-expressions-common${min}.js`
          },
          vendor: {
            test: /node_modules/,
            chunks: 'initial',
            name: 'vendor',
            priority: 10,
            enforce: true,
            filename: `./js-expressions-vendor/dist/js-expressions-vendor${min}.js`
          }
        }
      }
    }
  };
};
