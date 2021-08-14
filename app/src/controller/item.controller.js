/* 
 * Handling client request/response
 * 
 * ======================================================================
 * Two parameters of the `callback` function:
 * `req` is the request body and carries information about the request
 * `res` is the response body and is used to handle response functions
 */

'use strict';

const Item = require('../model/item.model');

exports.findById = function(req, res) {
	const id = req.params.id;
	console.log('\n> [GET]');
	
	if (!id) {
		// 400 = bad request
		return res.status(400).send('The required path variable id is missing')
	}
	
	Item.findById(id, function(err, item) {
		if (err) return res.status(500).send('Error occured during fetching item for id ' + id);
		console.log('item: ', item);
		
		return res.send(item);
	});
};

exports.findByName = function(req, res) {
	const name = req.body.name
	console.log('\n> [POST]');
	
	// 400 = bad request
	if (!name) {
		return res.status(400).send('The required field name is missing')
	}
	
	Item.findByName(name, function(err, items) {
		if (err) return res.status(500).send('Error occured during fetching item for name ' + name);
		
		console.log('items: ', items);
		
		return res.send(items);
	});
};

exports.findAll = function(req, res) {
	console.log('\n> [GET]');

	Item.findAll(function(err, items) {
		if (err) return res.status(500).send('Error occured during fetching items');
		console.log('items: ', items);
		
		return res.send(items);
	});
};

exports.create = function(req, res) {
	const newItem = new Item(req.body);
	console.log('\n> [POST]');
	
	// 400 = bad request
	if(req.body.constructor === Object && Object.keys(req.body).length === 0){
		return res.status(400).send('One or more required fields are missing');
	} if (!newItem.plan_name || !newItem.plan_desc || !newItem.plan_month_price) {		
		return res.status(400).send('One or more required fields are missing (2)')
	} else {		
		Item.create(newItem, function(err, plan_id) {
			console.log('controller/create> err: ', err);
			//if (err === Object) res.status(500).send('Item already exist with name ' + err.plan_name);
			
			if (err || plan_id <= 0) return res.status(500).send('Error occured during saving item');
			
			return res.sendStatus(200);
		});
	}
};

exports.update = function(req, res) {
	const item = new Item(req.body);
	console.log('\n> [PUT]');
	
	// 400 = bad request
	if(req.body.constructor === Object && Object.keys(req.body).length === 0) {
		return res.status(400).send('One or more required fields are missing');
	} if (!item.plan_id || !item.plan_name || !item.plan_desc || !item.plan_month_price) {
		return res.status(400).send('One or more required fields are missing');
	} else {
		Item.update(item, function(err, result) {
			if (err || result <= 0) return res.status(500).send('Error occured during updating item');
			
			return res.sendStatus(200);
		});
	}
};

exports.delete = function(req, res) {
	const id = req.params.id;
	console.log('\n> [DELETE]');
	
	if (!id) {
		// 400 = bad request
		return res.status(400).send('The required path variable id is missing');
	}
	
	Item.delete(id, function(err, employee) {
		if (err) return res.status(500).send('Error occured during deleting item');
		
		return res.sendStatus(200);
	});
};