if (process.env.NODE_ENV === 'production') {
  module.exports = require('./dist/js-expressions-example.min.js');
} else {
  module.exports = require('./dist/js-expressions-example.js');
}