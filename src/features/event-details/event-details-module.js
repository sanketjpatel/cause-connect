(function(angular) {
    'use strict';
    angular.module('causeConnect.eventDetails', [])
        .config(eventDetailsConfig);

    function eventDetailsConfig($stateProvider) {
        $stateProvider
            .state('causeConnect.eventDetails', {
                url: '/contribute/event-details',
                views: {
                    'contributeView' : {
                        templateUrl: 'features/event-details/event-details.html',
                        controller: 'EventDetailsController',
                        controllerAs: 'edVm'
                    }
                },
                data: {
                    authenticate: false
                }
            })
    }
})(angular);
