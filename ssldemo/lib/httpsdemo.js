/**
 * Simple HTTPS Demo.
 */

const https = require('https');
const fs = require('fs');

const options = {
  key: fs.readFileSync('ssl/key.pem'),
  cert: fs.readFileSync('ssl/cert.pem')
};

console.log("  Server is running: https://localhost:8443\n");

https.createServer(options, function (req, res) {
  res.writeHead(200);
  res.write("---\n");
  res.write("title: NodeJS HTTPS Demonstration\n");
  res.write("---\n\n");
  res.write("Using curl: curl -k https://localhost:8443\n\n");
  res.end("Service URL: https://localhost:8443\n");
}).listen(8443);

