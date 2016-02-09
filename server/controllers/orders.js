var mongoose = require('mongoose');
var Order = mongoose.model("Order");
var Customer = mongoose.model("Customer");

module.exports = (function(){
	return {
		show: function(req, res){
			Order.find({}, function(err, results){

				if(err) {
					console.log(err);
				} else {
					res.json(results);
				}
			})
			.populate('customer')
			.populate('product')
			.exec(function(err, order) {
				res.json({order: order})
			})

		},
		add: function(req, res){
			console.log('S | CTRL | Add Orders' , req.body);
			var order = new Order({
				customer: req.body.customer,
				product: req.body.product,
				quantity: req.body.quantity,
				created_at: new Date()
			})
			order.save(function(err) {
				if(err){
					console.log(err);
					res.json({});
				}
				res.json({});
			})
			var id = order.customer;
			console.log(id);
			Customer.findOne({_id: id}, function(err, customer){
				console.log(customer);
				customer._order.push(order._id);
				customer.save(function(err) {
					if(err){
						console.log(err);
						res.json({});
					}
					res.json({});
				})
			})
		},
		destroy: function(req, res){
			console.log('S | CTRL | Destroy Orders', req.params.id);
			var id = req.params.id;
			Order.findOne({_id: id}, function(err, order){
				var id = order.customer;
				Customer.findOne({_id: id}, function(err, customer){
					customer._order.splice(customer._order.indexOf(req.params.id), 1)
					customer.save(function(err) {
						if(err){
							console.log(err);
						} else {
							Order.remove({_id: req.params.id}, function(err){
								if(err){
									console.log(err);
								}
							})
						}
						res.json({});
					})
				})
			})
		}
	}
})()