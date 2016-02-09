app.controller('CustomersController', function(CustomerFactory, $scope){
	console.log("CustomersController Loaded");

	CustomerFactory.getCustomers(function(data) {
		$scope.customers = data;
	});

	$scope.addCustomer = function() {
		console.log("C | CTRL | addCustomer", $scope.new_customer);
		CustomerFactory.addCustomer($scope.new_customer, function() {
			$scope.customers = CustomerFactory.getCustomers(function(data) {
				$scope.customers = data;
			});
		});
	}

	$scope.removeCustomer = function(id) {
		CustomerFactory.removeCustomer(id, function() {
			console.log("C | CTRL | removeCustomer", id);
			$scope.customers = CustomerFactory.getCustomers(function(data) {
				$scope.customers = data;
			});
		});
	}
});