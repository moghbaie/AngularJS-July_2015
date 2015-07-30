var myApp = angular.module('Lesson02', []);

myApp.controller('MyController', function($scope, $timeout, $interval) {
  var self = this;

  self.username = 'George';
  self.friends = [];

  self.countdown = 10;

  $interval(function() {
    self.countdown -= 1;
  }, 1000, 10)

  $timeout(function() {
    self.username = "Tommy";
    console.log('changed username');
  }, 3000);

  self.addFriend = function(friendName) {
    var friendObject = {
      name: friendName
    }
    self.friends.push(friendObject);
  };

  self.refreshArray = function() {
    self.friends = [
      'friend1',
      'friend2',
      'friend3'
    ];
  };

  $scope.$watch('ctrl.username', function(newValue, oldValue) {
    self.oldUsername = oldValue;
  });

  $scope.$watchCollection('ctrl.friends', function(newFriendsArray, oldFriendsArray) {
    self.numFriends = newFriendsArray.length;
    console.log('watcher called');
  });

  // $scope.$watch('ctrl.friends', function(newFriendsArray, oldFriendsArray) {
  //   console.log('watcher called');
  // }, true)

});