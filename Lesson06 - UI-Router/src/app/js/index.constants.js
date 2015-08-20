/* global malarkey:false, toastr:false, moment:false */
(function() {
  'use strict';
  angular
    .module('template')

    .constant('STATE_VALS', {
    	kHomeState: {
    		stateName: 'home'
    	},
    	kContactState: {
    		stateName: 'contact'
    	},
    	kStoreState: {
    		stateName: 'store'
    	},
    	kPresidentState: {
    		stateName: 'contact.president'
    	}, 
    	kCEOState: {
    		stateName: 'contact.ceo'
    	},
    	kFounderState: {
    		stateName: 'contact.founder'
    	},
        kShoesState: {
            stateName: 'store.shoes'
        },
        kShirtsState: {
            stateName: 'store.shirts'
        }
    })
})();
