var myApp = angular.module('Lesson02', []);

myApp.controller('MyController', function() {
  var self = this;
  
  self.headerTitle = 'Sandbox';

  self.simpleArray = ['Item 1', 'Item 2', 'Item 3'];

  self.objectArray = [{name: 'Bill'}, {name: 'Tom'}, {name: 'Henry'}];

  self.stateObject = {
    kCalifornia: {
      abbr: 'CA'
    },
    kFlorida: {
      abbr: 'FL'
    },
    kNewYork: {
      abbr: 'NY'
    }
  };

  self.username= {
    firstName: "George"
  };

  // self.displayUsername = function() { 
  //   alert(self.username.firstName);
  // }
});