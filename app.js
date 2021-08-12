/*
 * for creating server and server configuration
 */

var mysql = require('mysql');
var express = require('express');
var bodyParser = require('body-parser'); //handle content types json and application/x-www-form-urlencoded

// Initialize express server
var app = express();

// allows Nodejs to transfer data over the HTTP
var server = require('http').Server(app);

var port = process.env.PORT || 4000;

// to support JSON-encoded bodies
app.use(bodyParser.json())

// to support URL-encoded bodies
app.use(bodyParser.urlencoded({ extended: true }))

// Require item routes
const routes = require('./src/route/item.route')

// using as middleware
app.use('/item', routes)

// root path
app.get("/", (req, res, next) => {
	res.json("What's up?");
});

// arrow funciton
server.listen(port, () => {
	console.log(`App listening on port ${port}.`);
	console.log(`Visit http://localhost:${port}/`);
	console.log('Press Ctrl+C to quit.');
});