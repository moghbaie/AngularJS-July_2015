var myApp = angular.module('Lesson02', ['ServicesModule']);

myApp.controller('MyController', function($scope, CarDTO, MY_FOLDERS, SECRET_API_KEY) {
  var self = this;

  var prexistingCar = {
    make: 'Toyota',
    model: 'Corrolla'
  };

  self.enrichedCar = CarDTO.buildFromPrexisting(prexistingCar);

  self.myCar = new CarDTO('Honda', 'Accord');
  self.myCar2 = new CarDTO('Ford', 'Escort');

  self.myCar.setYear(1990);
  // CarDTO.setYear(1999);  Can't do this!!
  // self.myCar.buildFromPrexisting(someCar);  Can't do this!!! 

  self.addItem = function() { 
    self.myFolders.kPersonal.push({item: 'NewlyAdded Item'})
  };

  self.myFolders = angular.copy(MY_FOLDERS);
  self.key = SECRET_API_KEY;

})








myApp.controller('MyController2', function(MY_FOLDERS, SECRET_API_KEY) {
  var self = this;

  self.myFolders = angular.copy(MY_FOLDERS);
  self.key = SECRET_API_KEY;

});
