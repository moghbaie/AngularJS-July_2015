(function() {
  'use strict';

  angular.module('template')
  
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