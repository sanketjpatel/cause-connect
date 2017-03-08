(function (angular) {
    'use strict';
    angular.module('causeConnect.eventDetail', [])
        .config(contributeConfig);

    function contributeConfig($stateProvider) {
        $stateProvider
            .state('causeConnect.eventDetail', {
                url: '/contribute/{id}/event-detail',
                templateUrl: 'features/event-detail/event-detail.html',
                controller: 'EventDetailController',
                controllerAs: 'edVm',
                data: {
                    authenticate: false
                }
            })
    }
})(angular);
