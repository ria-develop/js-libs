if (process.env.NODE_ENV === 'production') {
  module.exports = require('./dist/js-expressions-core.min.js');
} else {
  module.exports = require('./dist/js-expressions-core.js');
}