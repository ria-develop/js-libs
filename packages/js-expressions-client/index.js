if (process.env.NODE_ENV === 'production') {
  module.exports = require('./dist/js-expressions-client.min.js');
} else {
  module.exports = require('./dist/js-expressions-client.js');
}
