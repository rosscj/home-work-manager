'use strict';

describe('myApp.work module', function() {

  beforeEach(module('myApp.work'));

  describe('work controller', function(){

    it('should load controller', inject(function($controller) {
      //spec body
      var workCtrl = $controller('WorkCtrl');
      expect(workCtrl).toBeDefined();
    }));

	it('should fail', function() {
		expect(true).toBe(false);
	});
  });
});