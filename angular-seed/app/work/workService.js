angular.module('myApp.work')
.factory('workDataService', function($http) {
	var svc = {};
	
	svc.getWorkItems = function(successCallback, failCallback) {
		$http.get('http://localhost:3000/api/user/bundles').
			success(function(data, status, headers, config) {
				successCallback(data, status, headers, config);
			}).
			error(function(data, status, headers, config) {
				failCallback(data, status, headers, config);
			});
	}
	
	svc.testValue = 'Bob';
	
	return svc;
});
