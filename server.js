var express = require('express');

var app = express();
var appPort = process.argv[2] || 8888;

// start the app
app.listen(appPort, function () {
    console.log('Simple server is up on ' + appPort + '!');
});

// handle static files
app.use(express.static('public'));
    
