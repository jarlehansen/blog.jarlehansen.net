var FtpDeploy = require('ftp-deploy');
var ftpDeploy = new FtpDeploy();

var config = {
  username: "",
  host: "",
  port: 21,
  localRoot: __dirname + "/../dist",
  remoteRoot: "/blog/"
}

ftpDeploy.deploy(config, function(err) {
  if (err) console.log(err)
  else console.log('finished');
});
