(function() {
  'use strict';

  angular.module('template')

  .service('GoogleREST', function(GoogleAPIResource) {
    var self = this;

    self.getAddresses = function(address, completionCallback) {
      GoogleAPIResource.getAddresses({address: address})
      .$promise
      .then(function(response) {
        completionCallback(response);
      });
    }
  })


  .factory('GoogleAPIResource', function($resource) {
    return $resource('http://maps.googleapis.com/maps/api/geocode/json', null, {
      getAddresses: {
        method: 'GET',
        isArray: false
      }
    })
  })
  
  .factory('UserResource', function ($resource) {
  	return $resource('/assets/sampleData.json', {
  		fname: 'Tom'
  	}, {
  		getUsers: {
  			method: 'GET',
  			isArray: true
  		}
  	});
  })

  .factory('FriendsResource', function($resource) {
  	return $resource('/assets/:id/profile.json', {
  		id: '@id'
  	}, {
  		getUserFriends: {
  			method: 'GET',
  			isArray: true
  		}
  	})
  });

})();