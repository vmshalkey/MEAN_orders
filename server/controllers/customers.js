var mongoose = require('mongoose');
var Customer = mongoose.model("Customer");

module.exports = (function(){
	return {
		show: function(req, res){
			Customer.find({}, function(err, results){
				if(err) {
					console.log(err);
				} else {
					res.json(results);
				}
			})
		}	,
		add: function(req, res){
			console.log('S | CTRL | Add Customers' , req.body);
			var customer = new Customer({
				name: req.body.name,
				created_at: new Date()
			})
			customer.save(function (err) {
				if(err){
					console.log(err);
					res.json({});
				}
				res.json({});
			})
		}	,
		destroy: function(req, res){
			console.log('S | CTRL | Destroy Customers', req.params.id);
			Customer.remove({_id: req.params.id}, function(err){
				if(err){
					console.log(err);
				}
				res.json({});
			})
		}
	}
})()