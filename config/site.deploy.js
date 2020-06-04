const path = require('path');
const Client = require('ssh2-sftp-client');

const config = require('./site.config');
const sftpConfig = JSON.parse(
  fs.readFileSync(path.join(config.root, config.paths.config, 'sftp.json'), { encoding: 'utf-8' })
)

const client = new Client();

client.on('upload', info => {
  console.log(`Uploaded ${info.source}`);
});

client.connect(sftpConfig)
.then(() => {
  return client.rmdir(sftpConfig.remoteRoot, true);
})
.then(() => {
  return client.uploadDir(path.join(config.root, config.paths.dist), sftpConfig.remoteRoot);
})
.then(() => {
  return client.end();
})
.catch(err => {
  console.error(err.message);
});
