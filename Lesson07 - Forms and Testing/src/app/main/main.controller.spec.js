(function() {
  'use strict';

  beforeEach(function() {
  	module('template');
  });

  describe('Sum Service Test', function(){
  	var serviceToTest;

  	beforeEach(inject(function(_SumService_) {
  		serviceToTest = _SumService_;
  	}));

  	it('Calcuate the Sum For Integers Correctly', function() {
  		var result = serviceToTest.getSum(2, 2);
  		expect(result).toBe(4);
  	})

  	it('Calcuate the Sum For Decimals Correctly', function() {
  		var result = serviceToTest.getSum(2.2, 2.2);
  		expect(result).toBe(4.4);
  	})
  });

  describe('Person Factory Tests', function() { 
  	var toTest;

  	describe('Uninitalized', function() {
  		beforeEach(inject(function(_Person_) {
  			toTest = new _Person_();
  		}));

  		it('should initialize the properties correctly', function() {
  			expect(toTest.firstName).toBe('George');
  			expect(toTest.lastName).toBe('Dagher');
  		});
  	})

  	describe('Uninitalized', function() {
  		beforeEach(inject(function(_Person_) {
  			toTest = new _Person_('Tom', 'Brady');

  		}));

  		it('should initialize the properties correctly', function() {
			expect(toTest.firstName).toBe('Tom');
			expect(toTest.lastName).toBe('Brady');
  		});
  	})



  })

})();
