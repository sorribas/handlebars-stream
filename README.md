handlebars-stream
=================

[![build status](https://secure.travis-ci.org/sorribas/handlebars-stream.png)](http://travis-ci.org/sorribas/handlebars-stream)

Through stream that renders objects with handlebars templates.

Install
-------

```
npm install handlebars-stream
```

Examples
--------

Super simple example

```js
var handlebars = require('handlebars-stream');

var strm = handlebars('hello {{data}}');
strm.on('data', function(result) {
  console.log(result); // outputs 'hello world'
});

strm.write({data: 'world'});
```

of course the idea is that you pipe other readable object streams to it like this

```js
var handlebars = require('handlebars-stream');

db.customers.find()
  .pipe(handlebars('<tr><td>{{name}}</td><td>{{id}}</td></tr>'))
  .pipe(httpResponse);
```

and specify an opening/closing tag as well

```js
var handlebars = require('handlebars-stream');

db.customers.find()
  .pipe(handlebars('<tr><td>{{name}}</td><td>{{id}}</td></tr>', {
    open: '<table>',
    close: '</table>'
  }))
  .pipe(httpResponse);
```

Browser usage
-------------

You can use this in the browser with [browserify](http://browserify.org/).

License
-------

MIT License

Copyright 2014 Eduardo Sorribas
http://sorribas.org

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
"Software"), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
