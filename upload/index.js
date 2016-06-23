const FtpDeploy = require('ftp-deploy');
const ftpDeploy = new FtpDeploy();

console.log('Usage: npm start [host] [username] [password]');

const config = {
  host: process.argv[2],
  username: process.argv[3],
	password: process.argv[4],
	port: 21,
	localRoot: __dirname + "/../dist",
	remoteRoot: "/blog"
}

ftpDeploy.deploy(config, function(err) {
	if (err) {
    console.log(err);
  } else {
    console.log('Completed');
  }
});
