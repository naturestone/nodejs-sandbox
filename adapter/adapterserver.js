/**
 * 
 * Install:
 * - npm install express --save
 * 
 * See also:
 * - https://expressjs.com/de/
 * 
 * Weitere Themen:
 * - https://www.toptal.com/nodejs/secure-rest-api-in-nodejs
 */

// Load module
var express = require("express");
var fs = require('fs'); 

// Settings
var host = 'localhost';
var port = 3000;

// Initialization
var app = express();

// Start server
app.listen(port, host, () => {
 console.log(`Server running. Try: http://${host}:${port}`);
});

var cnt = 0;

app.use("/", (req, res, next) => {
    cnt++;
    console.log(cnt + " --- " + req.url);
    next();
})

app.get("/users", (req, res, next) => {
    const exec = require("child_process").exec
    exec("cat /etc/passwd", (error, stdout, stderr) => {
        res.send('<pre><code>' + stdout + '</code></pre>');
    })
});

app.get("/groups", (req, res, next) => {
    const exec = require("child_process").exec
    exec("cat /etc/group", (error, stdout, stderr) => {
        res.send('<pre><code>' + stdout + '</code></pre>');
    })
});

app.get("/net", (req, res, next) => {
    const exec = require("child_process").exec
    exec("ifconfig -a", (error, stdout, stderr) => {
        res.send('<pre><code>' + stdout + '</code></pre>');
    })
});

app.get("/info", (req, res, next) => {
    const exec = require("child_process").exec
    exec("uname -a && hostname && hostname -i", (error, stdout, stderr) => {
        res.send('<pre><code>' + stdout + `Dirname: ${__dirname}` + '</code></pre>');
    })
});

// Statische Dateien bereitstellen (html, css, js, ...)
app.use(express.static('www'));
app.use('/www', express.static(__dirname + '/www'));

app.get("/demo", (req, res, next) => {
    console.log(`Demo: ${req.url}`);
    fs.readFile('www/index.html', function(err, data) {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        res.end();
    })
});


function requestTimeStamp() {
    return Date.now();
};

app.get("/time", (req, res, next) => {
    res.send('<pre><code>TimeStamp: ' + `${requestTimeStamp()}` + '</code></pre>');
    next();
});

  