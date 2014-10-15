var config = {
  servers: ['127.0.0.1:11211'],
  scheme: {
  }
};

var MCManager = new require('./mcmanager')(config);
var db = MCManager.memcached;

function callback(err, result, id) {
  if (err) {
    console.log('[!] ' + err);
    return;
  }
}

console.log('[+] Running...');
for (var i = 1; i <= 100000; i++) {

  var key = '_node-test-' + i;
  var doc = { a: 1, b: 2, c: 3 };

  db.set(key, doc, 10, function(err, result) {
    if (err) {
      return callback(err);
    }

    callback(null, result, key);
  });
}