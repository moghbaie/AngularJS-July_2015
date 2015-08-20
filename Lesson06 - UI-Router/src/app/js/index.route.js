(function() {
  'use strict';

  angular
    .module('template')

    .controller('NavigationCtrl', function(STATE_VALS) {
      var self = this;
      self.stateVals = STATE_VALS;
    })

    .config(function ($stateProvider, $urlRouterProvider, STATE_VALS) {
    
    $stateProvider

      // Parent Views
      .state(STATE_VALS.kHomeState.stateName, {
        url: '/home',
        templateUrl: 'app/partials/main/main.html',
        controller: 'MainController',
        controllerAs: 'ctrl'
      })
      .state(STATE_VALS.kContactState.stateName, {
        url: '/contact',
        templateUrl: 'app/partials/contact/contact.html',
        controller: 'ContactController',
        controllerAs: 'ctrl'
      })
      .state(STATE_VALS.kStoreState.stateName, {
        url: '/store',
        templateUrl: 'app/partials/store/store.html',
        controller: 'StoreController',
        controllerAs: 'ctrl'
      })

      // Nested UI Views
      .state(STATE_VALS.kPresidentState.stateName, {
        url: '/president',
        templateUrl: 'app/partials/contact/president.html'
      })
      .state(STATE_VALS.kCEOState.stateName, {
        url: '/ceo',
        templateUrl: 'app/partials/contact/ceo.html'
      })
      .state(STATE_VALS.kFounderState.stateName, {
        url: '/founder',
        templateUrl: 'app/partials/contact/founder.html'
      })

      // Nested and Sibling Views
      .state(STATE_VALS.kShoesState.stateName, {
        // url: '/shoes',
        views: {
          content: {
            templateUrl: 'app/partials/store/shoesContent.html'
          },
          sideContent: {
            templateUrl: 'app/partials/store/shoesSideContent.html'
          }
        }
        
      })
      .state(STATE_VALS.kShirtsState.stateName, {
        // url: '/shirts',
        views: {
          content: {
            templateUrl: 'app/partials/store/shirtsContent.html'
          },
          sideContent: {
            templateUrl: 'app/partials/store/shirtsSideContent.html'
          }
        }
      });

    // $urlRouterProvider.otherwise('/home');
  });  

})();
