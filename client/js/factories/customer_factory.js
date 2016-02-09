app.factory('CustomerFactory', function($http) {
	var factory = {};

	factory.getCustomers = function(callback){
		$http.get('/customers').success(function(output){
			// console.log(output);
			customers = output;
			callback(customers);
		})
	}
	factory.addCustomer = function(info, callback){
		$http.post('/customers', info).success(function(output){
			callback();
		// console.log(output);
		})
	}
	factory.removeCustomer = function(id, callback){
		$http.get('/customers/'+id+'/destroy').success(function(output){
			callback();
		})
	}

	return factory;
});