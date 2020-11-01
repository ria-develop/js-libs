const babelLoaderOptions = {
  presets: ['@babel/preset-env', '@babel/preset-react', '@babel/preset-typescript']
};
const tsLoaderOptions = {transpileOnly: true};

module.exports = {
  babelLoaderOptions,
  tsLoaderOptions
};
