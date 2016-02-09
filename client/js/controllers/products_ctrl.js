app.controller('ProductsController', function(ProductFactory, $scope){
	console.log("ProductsController Loaded");

	ProductFactory.getProducts(function(data) {
		$scope.products = data;
	});

	$scope.addProduct = function() {
		console.log("new_product", $scope.new_product);
		ProductFactory.addProduct($scope.new_product, function() {
			$scope.products = ProductFactory.getProducts(function(data) {
				$scope.products = data;
			});
		});
	}

	$scope.removeProduct = function(id) {
		ProductFactory.removeProduct(id, function(data) {
			console.log("here in client product ctrl", data);
			$scope.products = ProductFactory.getProducts(function(data) {
				$scope.products = data;
			});
		})
	}
});