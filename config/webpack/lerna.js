const {getPackagesSync} = require('@lerna/project');
const {toposort} = require('@lerna/query-graph');
const externalizer = require('./externalizer');

const getPackages = () =>
  toposort(getPackagesSync()).reduce((previous, current) => {
    const publishConfig = current.get('publishConfig');
    if (publishConfig && publishConfig.target === 'web') {
      return previous.concat([current]);
    }
    return previous;
  }, []);
const getExternals = () => externalizer(getPackages());

module.exports = {
  getPackages,
  getExternals
};
