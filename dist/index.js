'use strict';

var _test = require('./test');

var _test2 = _interopRequireDefault(_test);

var _http = require('http');

var _http2 = _interopRequireDefault(_http);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_http2.default.createServer(function (req, res) {
  return res.end('run');
}).listen(3000);

console.log((0, _test2.default)());
//# sourceMappingURL=index.js.map