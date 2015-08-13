(function() {
  'use strict';

  angular.module('template')
  
  .controller('MainController', function (UserResource, FriendsResource) {
    var self = this;

    var resourceObject = UserResource;

    self.name = "Hello World";

    var myUser = {
    	fname: 'George',
    	lname: 'Dagher'
    }
    self.getUsers = function() {
    	// resourceObject.getUsers(myUser, function (response, header) {
    	// 	self.users = response;
    	// }, function (errorResponse) {
    	// 	console.log(errorResponse);
    	// });

	  resourceObject.getUsers(myUser).$promise
	  .then(function (response) {
	  	self.users = response;
	  }).catch(function (errorResponse) {
	  	console.log(errorResponse);
	  });
    };

    self.getFriendsForUser = function(user) {
    	FriendsResource.getUserFriends({id: user._id}).$promise
    	.then(function(response){ 
    		user.friends = response;
    	});
    };

  });

})();



