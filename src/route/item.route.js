/*
 * handling routes 
 */

const express = require('express')

const router = express.Router()

const controller =   require('../controller/item.controller');

// Retrieve a single item with id
router.get('/:id', controller.findById);

// Retrieve a single item with id
// Why use POST to do Read operation?
// Ans: GET HTTP method is suggested NOT TO handle entity-body (i.e. JSON body) in a request. So, we use POST request instead.
// ref: (1) https://stackoverflow.com/questions/978061/http-get-with-request-body
//      (2) https://datatracker.ietf.org/doc/html/rfc2616#page-53
router.post('/name', controller.findByName);

// Retrieve all items
router.get('/', controller.findAll);

// Create a new item
router.post('/', controller.create);

// Update an item
router.put('/', controller.update);

// Delete an item with id
router.delete('/:id', controller.delete);

module.exports = router