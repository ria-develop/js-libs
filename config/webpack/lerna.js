const {getPackagesSync} = require('@lerna/project');
const {toposort} = require('@lerna/query-graph');
const externalizer = require('./externalizer');
const path = require('path');
const fs = require('fs');

const getPackages = () =>
  toposort(getPackagesSync()).reduce((previous, current) => {
    const publishConfig = current.get('publishConfig');
    if (publishConfig && publishConfig.target === 'web') {
      return previous.concat([current]);
    }
    return previous;
  }, []);

const getExternals = () => externalizer(getPackages());

const getEntryFilename = (pkg) => {
  const esnext = pkg.get('esnext');
  const main = (esnext && esnext.main) || esnext || pkg.get('module');
  const absMain = path.resolve(pkg.location, main);
  if (fs.existsSync(absMain)) {
    return absMain;
  }
  return 'src';
};

const getEntries = () =>
  getPackages().reduce((previous, current) => {
    const [scope, name] = current.name.split('/');

    const entryName = name || scope;
    const next = {[entryName]: getEntryFilename(current)};
    return {...previous, ...next};
  }, {});

module.exports = {
  getPackages,
  getExternals,
  getEntries
};
