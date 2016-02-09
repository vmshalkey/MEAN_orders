app.factory('ProductFactory', function($http) {
	var factory = {};

	factory.getProducts = function(callback){
		$http.get('/products').success(function(output){
			// console.log(output);
			products = output;
			callback(products);
		})
	}
	factory.addProduct = function(info, callback){
		$http.post('/products', info).success(function(output){
			callback();
		// console.log(output);
		})
	}
	factory.removeProduct = function(id, callback){
		$http.get('/products/'+ id+'/destroy').success(function(output){
			callback();
		console.log(output);
		})
	}

	return factory;
});