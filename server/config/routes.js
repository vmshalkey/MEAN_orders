var customers = require('../controllers/customers.js');
var orders = require('../controllers/orders.js');
var products = require('../controllers/products.js');

module.exports = function(app){
	app.get('/customers', function(req, res){
		customers.show(req, res);
	});
	app.post("/customers", function(req, res){
		customers.add(req, res);
	});

	app.get("/customers/:id/destroy", function(req, res){
		customers.destroy(req, res);
	});

	app.get('/orders', function(req, res){
		orders.show(req, res);
	});
	app.post("/orders", function(req, res){
		orders.add(req, res);
	});

	app.get("/orders/:id/destroy", function(req, res){
		orders.destroy(req, res);
	});

	app.get('/products', function(req, res){
		products.show(req, res);
	});
	app.post("/products", function(req, res){
		products.add(req, res);
	});

	app.get("/products/:id/destroy", function(req, res){
		products.destroy(req, res);
	})
};