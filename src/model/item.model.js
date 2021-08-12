/*
 * For database operations
 */

'use strict';

var con = require('./../../config/db');

// Item Object

var Item = function(item){
  this.plan_id = item.plan_id;
  this.plan_name = item.plan_name;
  this.general = item.general;
  this.specialist = item.specialist;
  this.physiotherapy = item.physiotherapy;
  this.SYMPTOM_n = item.SYMPTOM_n;
  this.plan_desc = item.plan_desc;
  this.plan_month_price = item.plan_month_price;
};

// Define CRUD Operations Functions

Item.findById = function (id, result) {
	let sql = 'SELECT * FROM plan_info WHERE plan_id = ?';
	
	// query to mysql server with (1) `sql` query statements (2) `id` or `data`
	// `(err, row, fields)`: what we want to get / what we want the query function returns
	con.query(sql, id, (err, row, fields) => {
		console.log("error: ", err);
		if (err) result(err, null);
		
		console.log("> inserted row ID: ", row);
		result(null, row);
	});
};

Item.findByName = function (name, result) {
	let sql = 'SELECT * FROM plan_info WHERE plan_name = ?';
	
	con.query(sql, name, (err, rows, fields) => {
		console.log("error: ", err);
		if (err) result(err, null);
		
		console.log('rows: ', rows);
		result(null, rows);
	});
};

Item.findAll = function (result) {
	let sql = 'SELECT * FROM plan_info';
	
	con.query(sql, (err, rows, fields) => {
		console.log("error: ", err);
		if (err) result(err, null);
		
		console.log(rows);
		result(null, rows);
	});
};

Item.create = function (newItem, result) {	
	let data = [newItem.plan_name, newItem.general, newItem.specialist, newItem.physiotherapy, newItem.SYMPTOM_n, newItem.plan_desc, newItem.plan_month_price];
	
	let sql = 'INSERT INTO plan_info(plan_name, general, specialist, physiotherapy, SYMPTOM_n, plan_desc, plan_month_price) VALUES(?, ?, ?, ?, ?, ?, ?)';
	
	con.query(sql, data, (err, row, fields) => {
		console.log("model/create> error: ", err);
		if (err) result(err, null);
		
		console.log("model/create> inserted row ID: ", row.insertId);
		result(null, row.insertId);
	});
};

Item.update = function(item, result){
	let data = [item.plan_name, item.plan_desc, item.plan_month_price, item.plan_id];
	
	let sql = 'UPDATE plan_info SET plan_name = ?, plan_desc = ?, plan_month_price = ? WHERE plan_id = ?';
	
	con.query(sql, data, (err, row, fields) => {
		console.log("model/update> error: ", err);
		if (err) result(err, null);
		
		console.log("model/update> updated row ID: ", row.affectedRows);
		result(null, row.affectedRows);
	});
};

Item.delete = function(id, result){
	let sql = 'DELETE FROM plan_info WHERE plan_id = ?';
	
	con.query(sql, id, (err, row, fields) => {
		console.log("model/delete> error: ", err);
		if (err) result(err, null);
		
		console.log("model/delete> deleted row ID: ", row.affectedRows);
		result(null, row.affectedRows);
	});
};

module.exports= Item;