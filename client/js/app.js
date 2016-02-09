var app = angular.module('app', ['ngRoute', 'angularMoment']);

app.config(function ($routeProvider, $locationProvider) {
	$routeProvider
	.when('/dashboard', {
		controller: 'MainController',
		controllerAs: 'main_ctrl',
		templateUrl: '/partials/dashboard.html'
	})
	.when('/products', {
		controller: 'ProductsController',
		controllerAs: 'products_ctrl',
		templateUrl: '/partials/products.html'
	})
	.when('/orders', {
		controller: 'OrdersController',
		controllerAs: 'orders_ctrl',
		templateUrl: '/partials/orders.html'
	})
	.when('/customers', {
		controller: 'CustomersController',
		controllerAs: 'customers_ctrl',
		templateUrl: '/partials/customers.html'
	})
	.otherwise('/dashboard');
})