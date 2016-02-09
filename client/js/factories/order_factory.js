app.factory('OrderFactory', function($http) {
	var factory = {};

	factory.getOrders = function(callback){
		$http.get('/orders').success(function(output){
			// console.log(output);
			orders = output;
			callback(orders);
		})
	}
	factory.addOrder = function(info, callback){
		$http.post('/orders', info).success(function(output){
			callback();
		// console.log(output);
		})
	}
	factory.removeOrder = function(id, callback){
		$http.get('/orders/'+ id+'/destroy').success(function(output){
			callback();
		console.log(output);
		})
	}

	return factory;
});