(function(angular) {
    'use strict';
    angular
        .module('causeConnect.seek', [])
        .config(tabsConfig);

    // @ngInject
    function tabsConfig($stateProvider) {
        $stateProvider
            .state('causeConnect.seek', {
                url: '/seek',
                views: {
                    'seekView': {
                        templateUrl: 'features/seek/seek.html',
                        controller: 'SeekController',
                        controllerAs: 'SeekVm'
                    }
                },
                data: {
                    authenticate: false
                }
            });
    }
}(angular));
