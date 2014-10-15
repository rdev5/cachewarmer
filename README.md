cachewarmer
===========

Pre-requisites:
- Node.js
- Couchbase 3.0.0 Server

Setup:
```
git clone https://github.com/rdev5/cachewarmer.git
cd cachewarmer
npm install
```

Run:
```
node .
```

Description:
This test project uses the `memcached` NPM module and will create and send 100k keys to your Couchbase Server 3.0.0 running on localhost with a 10s expiry.

Run this a few times and wait for items to expire on their own.
Have two tabs opened:
1) General Bucket Analysis Graph
2) Data Buckets

At any point (while the script is running or when it's finished), click on "Documents" in the Admin Console.

While Documents is "Loading..." flip back to the General Bucket Analysis Graph to see get ops spike to 15-20k.

This behavior is then persisted long after documents in cache have expired and removed from Bucket.
