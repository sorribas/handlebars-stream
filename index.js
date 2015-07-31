var through = require('through2');
var handlebars = require('handlebars');

module.exports = function(templ, opts) {
  if (!opts) opts = {};

  var open = opts.open || '';
  var close = opts.close || '';

  var template = handlebars.compile(templ);

  var transform = function(chunk, enc, callback) {
    if (open) {
      this.push(open);
      open = '';
    }
    callback(null, template(chunk));
  };

  var flush = function(callback) {
    if (open) this.push(open);
    if (close) this.push(close);
    callback();
  };

  return through.obj(transform, flush);
};

module.exports.handlebars = handlebars
