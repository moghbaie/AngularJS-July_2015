(function() {
  'use strict';

  angular.module('ContactModule', [])
  
  .controller('ContactController', function (STATE_VALS) {
  	var self = this;

  	self.stateVals = STATE_VALS;

  });

})();
