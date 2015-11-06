var split = angular.module('split', ['ngRoute', 'ngCookies']);

split.config(function($routeProvider){

	$routeProvider
		.when('/', {
			templateUrl: 'partials/one.html',
		})
		.when('/one', {
			templateUrl: 'partials/one.html',
		})
		.when('/two', {
			templateUrl: 'partials/two.html',
		})
		.when('/three', {
			templateUrl: 'partials/three.html',
		})
		.when('/four', {
			templateUrl: 'partials/four.html',
		})
		.otherwise({
			redirectTo: '/',
		})


})