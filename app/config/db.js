/* 
 * for database configurations
 */

'use strict';

const mysql = require('mysql');

var con = mysql.createConnection({
	//Why `db` can be ok to be the IP address to find the MySQL server?
	//Ans: 
	//=> Each container for a service joins the default network and is both reachable by other containers on that network, and discoverable by them at a hostname identical to the container name.
	//=> docker has a default DNS server, it takes the service/container name in "docker-compose.yaml" as the hostname (which can be mapped to container's IP address).
	//ref: https://docs.docker.com/compose/networking/ 
	// host: 'localhost',
	host: 'db',	
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