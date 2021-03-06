// makes HTTP requests simpler, think REST etc
var express = require('express');

var db = require('./db');

// Middleware
var morgan = require('morgan');

// takes an HTTP response and helps parse the "body"
var parser = require('body-parser');

// Router
var router = require('./routes.js');

// creates express application
var app = express();
module.exports.app = app;

// Set what we are listening on.
app.set('port', 3000);

// Logging and parsing
app.use(morgan('dev'));
app.use(parser.json());

// Set up our routes
app.use('/classes', router);

// Serve the client files
app.use(express.static(__dirname + '/../client'));
// app.use(express.static(__dirname + '/../client/client'));

// If we are being run directly, run the server.
if (!module.parent) {
  app.listen(app.get('port'));
  console.log('Listening on', app.get('port'));
}

