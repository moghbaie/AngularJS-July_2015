var myApp = angular.module('Lesson02', ['ServicesModule']);

myApp.controller('MyController', function($scope, CarDTO, MY_FOLDERS, SECRET_API_KEY) {
  var self = this;

  self.myCar = new CarDTO('Honda', 'Accord');
  self.myCar2 = new CarDTO('Ford', 'Escort');

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
