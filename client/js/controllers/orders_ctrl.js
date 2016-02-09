app.controller('OrdersController', function(OrderFactory, CustomerFactory, ProductFactory, $scope){
	console.log("OrdersController Loaded");

	CustomerFactory.getCustomers(function(data) {
		$scope.customers = data;
	});

	ProductFactory.getProducts(function(data) {
		$scope.products = data;
	});

	OrderFactory.getOrders(function(data) {
		$scope.orders = data;
	});

	$scope.addOrder = function() {
		console.log("new_order", $scope.new_order);
		OrderFactory.addOrder($scope.new_order, function() {
			$scope.orders = OrderFactory.getOrders(function(data) {
				$scope.orders = data;
			});
		});
	}

	$scope.removeOrder = function(id) {
		OrderFactory.removeOrder(id, function(data) {
			console.log("here in client order ctrl", data);
			$scope.orders = OrderFactory.getOrders(function(data) {
				$scope.orders = data;
			});
		})
	}
});