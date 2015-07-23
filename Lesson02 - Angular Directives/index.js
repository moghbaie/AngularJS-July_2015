var myApp = angular.module('Lesson02', []);


myApp.controller('MyController', function() {
  var self = this;

  self.headerTitle = "Welcome To George's Todo Page";

  self.todosArray = [];
  
  self.addTodo = function(todoObject) {
    self.todosArray.push(todoObject);
    self.todoObject = {};
  };

  self.lowPriority = {
    name: 'Low',
    isGreen: true
  };

  self.mediumPriority = {
    name: 'Medium',
    isOrange: true
  };

  self.highPriority = {
    name: 'High',
    isRed: true
  };


});