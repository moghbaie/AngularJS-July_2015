var myApp = angular.module('Lesson03', []);


myApp.controller('MyController', function() {
  var self = this;
  self.isEditing = false;

  self.user = {
  	fname: 'George',
  	lname: 'Dagher'
  };

  self.setEdit = function() {
  	self.isEditing = true;
  };

  self.cancelEdit = function() {
  	self.isEditing = false;
  };
  
});