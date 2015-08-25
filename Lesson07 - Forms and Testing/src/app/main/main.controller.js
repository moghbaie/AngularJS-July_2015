(function() {
  'use strict';

  angular.module('template')

  .factory('Person', function() {
  	 function Person(first, last) {
  	 	this.firstName = 'George';
  	 	this.lastName = 'Dagher';

  	 	this.firstName = first || this.firstName;
  	 	this.lastName = last || this.lastName;
  	 }

  	 return Person;
  })

  .service('SumService', function() {
  	var self = this;

  	self.getSum = function(a, b) {
  		return a + b;
  	};
  })
  
  .controller('MainController', function () {
    var self = this;

    self.state = 'FL';

    self.stateOptions = [{
    	name: 'Florida',
    	abbr: 'FL'
    }, {
    	name: 'California',
    	abbr: 'CA'
    }, {
    	name: 'New York',
    	abbr: 'NY'
    }];

    self.onSubmit = function() {
    	if (self.myForm.$valid) {
    		//Submit the form
    		console.log('Submitted!')
    	} else {
    		console.log('Invalid Form')
    	}
    };

  });

})();
