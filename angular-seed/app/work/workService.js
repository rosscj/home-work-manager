angular.module('myApp.work')
.factory('workDataService', function() {
	var svc = {};
	
	svc.testValue = 'Bob';
	
	return svc;
});
