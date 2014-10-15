var couchbase = require('couchbase');

var default_options = {
  cluster: 'couchbase://localhost',
  bucket: 'default'
}

function CBManager(options) {
  if (this instanceof CBManager) {
    this.options = options ? options : default_options;
    this.couchbase = couchbase;
    this.reconnect();
  } else {
    return (new CBManager(options));
  }
}

CBManager.prototype.reconnect = function() {
  this.cluster = new couchbase.Cluster(this.options.cluster);
  this.bucket = this.cluster.openBucket(this.options.bucket);

  if (this.bucket.connected === false) {
    console.log('[!] Connection failed (CBManager#reconnect)');
    return;
  }

  console.log('[+] Connected to ' + this.options.cluster);
  return this.bucket;
}

CBManager.prototype.bucket = function() {
  return this.bucket;
}

module.exports = CBManager;