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

// Creates an express Application
var app = express();

// Start server
app.listen(port, host, () => {
 console.log(`Server running. Try: http://${host}:${port}`);
});

var cnt = 0;

// Statische Dateien bereitstellen (html, css, js, ...) 
// Einbinden einer speziellen Middleware Function express.static(root,[options])
app.use(express.static('www'));

// Middleware Function 
app.use('/www', express.static(__dirname + '/www'));

// Einbinden einer eigenen Middleware Function
app.use("/", (req, res, next) => {
    cnt++;
    console.log(cnt + " --- " + req.url);
    next();
})

// Routed HTTP GET Request /users zu einer spezifischen Funktion 
app.get("/users", (req, res, next) => {
    const exec = require("child_process").exec
    exec("cat /etc/passwd", (error, stdout, stderr) => {
        res.send('<pre><code>' + stdout + '</code></pre>');
    })
});

// Routed HTTP GET Request /groups zu einer spezifischen Funktion 
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

app.get("/demo", (req, res, next) => {
    console.log(`Demo: ${req.url}`);
    fs.readFile('www/index.html', function(err, data) {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        res.end();
    })
});

function requestTimeStamp() {
    let now = Date.now();
    let year = now.getFullYear();
    return `${year}`
};

app.get("/time", (req, res, next) => {
    res.send('<pre><code>TimeStamp: ' + `${requestTimeStamp()}` + '</code></pre>');
    next();
});

  