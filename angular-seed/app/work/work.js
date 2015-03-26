'use strict';

angular.module('myApp.work', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/work', {
    templateUrl: 'work/work.html',
    controller: 'WorkCtrl'
  });
}])

.controller('WorkCtrl', ['$scope', 'workDataService', function($scope, workDataService) {
	
	$scope.message = "hi there " + workDataService.testValue;
	
	workDataService.getWorkItems(
		function(data, status, headers, config) {
			$scope.apiResp = status;
		},
		function(data, status, headers, config) {
			$scope.apiResp = status;
		}
	);
	
}]);