(function() {
  'use strict';

  angular.module('template')

  .service('MainControllerService', function(GoogleREST) {
    var self = this;

    self.getAddressesForCtrl = function(address, callback) {
        GoogleREST.getAddresses(address, function(response) {
            var formattedAddresses = [];
            for (var i = 0; i < response.results.length; i++) {
                formattedAddress.push({
                    address: response.results[i].formatted_address,
                    long: response.results[i].geometry.location.lng,
                    lat: response.results[i].geometry.location.lat
                });
            };
            callback(formattedAddresses);
        })
    };
  })
  
  .controller('MainController', function (UserResource, MainControllerService, FriendsResource) {
    var self = this;

    self.updateAddress = function(address) {
        MainControllerService.getAddressesForCtrl(self.address, function(addresses) {
            self.addresses = addresses;
        });
    };

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



