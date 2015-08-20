(function() {
  'use strict';

  angular.module('StoreModule', [])
  
  .controller('StoreController', function (STATE_VALS) {
  	var self = this;

  	self.stateVals = STATE_VALS;

  });

})();
