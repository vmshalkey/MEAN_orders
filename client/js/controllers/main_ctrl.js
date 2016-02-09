app.controller('MainController', function(CustomerFactory, ProductFactory, OrderFactory, $scope){
	console.log("MainController Loaded");

	CustomerFactory.getCustomers(function(data) {
		$scope.customers = data;
	});

	ProductFactory.getProducts(function(data) {
		$scope.products = data;
	});

	OrderFactory.getOrders(function(data) {
		$scope.orders = data;
	});
});