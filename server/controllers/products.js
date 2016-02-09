var mongoose = require('mongoose');
var Product = mongoose.model("Product");

module.exports = (function(){
	return {
		show: function(req, res){
			Product.find({}, function(err, results){
				if(err) {
					console.log(err);
				} else {
					res.json(results);
				}
			})
		}	,
		add: function(req, res){
			console.log('S | CTRL | Add Products' , req.body);
			var product = new Product({
				name: req.body.name,
				description: req.body.description,
				quantity: req.body.quantity,
				created_at: new Date()
			})
			product.save(function (err) {
				if(err){
					console.log(err);
					res.json({});
				}
				res.json({});
			})
		}	,
		destroy: function(req, res){
			console.log('S | CTRL | Destroy Products', req.params.id);
			Product.remove({_id: req.params.id}, function(err){
				if(err){
					console.log(err);
				}
				res.json({});
			})
		}
	}
})()