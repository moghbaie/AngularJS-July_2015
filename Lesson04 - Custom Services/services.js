var myApp = angular.module('ServicesModule', []);

myApp.value('MY_FOLDERS', {
  kPersonal: [{
    item: 'Item 1'
  }],
  kBusiness: [{
    item: 'Business Item'
  }],
  kSports: [{
    item: 'Sports Item'
  }]
});

myApp.value('SECRET_API_KEY', '123489234');

myApp.service('AgeCalculateService', function() {
	var self = this;

	self.calculateAge = function(year) {
		var age = 2015 - year;
		return age;
	};

});

myApp.factory('CarDTO', function(AgeCalculateService) {

	function CarDTO(make, model) {
		this.make = make;
		this.model = model;
	}

	CarDTO.prototype.setYear = function(year) {
		this.year = year;
		this.age = AgeCalculateService.calculateAge(year);
	};

	CarDTO.buildFromPrexisting = function(preexistingCar) {
		return new CarDTO(preexistingCar.make preexistingCar.model);
	};

	return CarDTO;
});




