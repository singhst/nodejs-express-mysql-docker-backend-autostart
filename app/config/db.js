/* 
 * for database configurations
 */

'use strict';

const mysql = require('mysql');

var con = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: '00000000',
	database: 'plan',
	// port: 3300
});

con.connect(function(err) {
	if (err) throw err;
	console.log("Connected to MySQL!");
});

module.exports = con;