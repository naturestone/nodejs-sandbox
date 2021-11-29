/**
 * Simple HTTPS Demo using express.
 *
 * Install:
 * - npm install express --save
 */

const express = require('express');
const https = require('https');
const fs = require('fs');

const host = 'localhost'
const port = 8443

const options = {
  key: fs.readFileSync('ssl/key.pem'),
  cert: fs.readFileSync('ssl/cert.pem')
};

var app = express();

var server = https.createServer(options, app).listen(port, function(){
  console.log(`  Server is running: https://${host}:${port}\n`);
});

app.get('/', function (req, res) {
  res.writeHead(200);
  res.write("---\n");
  res.write("title: NodeJS Express/HTTPS Server Demonstration\n");
  res.write("---\n\n");
  res.write("Using curl: curl -k https://localhost:8443\n\n");
  res.end("API running: https://localhost:8443/api\n");
});

app.get('/api/*', function(req, res){
  switch (req.path) {
    case '/api/help': 
        const exec = require("child_process").exec
        exec("uname -a", (error, stdout, stderr) => {
            res.write(`<pre><code>${stdout}</code></pre>`);
            res.end("\n");
        })
      break;
    default:
      res.writeHead(200);
      res.write("---\n");
      res.write("title: API\n");
      res.write("---\n\n");
      res.write(`API Method Call: ${req.path}\n\n`);
      res.write("Access denied.");
      res.end("\n");
      return;
  }
}); 

app.get("/html", (req, res, next) => {
  console.log(`HTML Out: ${req.url}`);
  fs.readFile('www/index.html', function(err, data) {
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write(data);
      res.end();
  })
});


