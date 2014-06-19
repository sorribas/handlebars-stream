var through = require('through2');
var handlebars = require('handlebars');

module.exports = function(templ) {
  var template = handlebars.compile(templ);

  var transform = function(chunk, enc, callback) {
    this.push(template(chunk));
    callback();
  };

  return through({objectMode: true}, transform);
};
