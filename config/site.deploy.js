const path = require('path');
const Client = require('ssh2-sftp-client');

const config = require('./site.config');

const client = new Client();

client.on('upload', info => {
  console.log(`Uploaded ${info.source}`);
});

client.connect(config.sftp)
.then(() => {
  return client.rmdir(config.sftp.remoteRoot, true);
})
.then(() => {
  return client.uploadDir(path.join(config.root, config.paths.dist), config.sftp.remoteRoot);
})
.then(() => {
  return client.end();
})
.catch(err => {
  console.error(err.message);
});
