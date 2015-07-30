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

myApp.factory('CarDTO', function() {

	function CarDTO(make, model) {
		this.make = make;
		this.model = model;
	}

	CarDTO.prototype.setYear = function(year) {
		this.year = year;
		var age = 2015 - year;
		if (year > 999) {
			this.age = 2015 - year;
		} else {
			this.age = undefined;
		}
	};

	return CarDTO;
});




