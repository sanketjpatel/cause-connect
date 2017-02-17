(function (angular) {
    'use strict';
    angular
        .module('causeConnect.seek', [])
        .config(tabsConfig);

    // @ngInject
    function tabsConfig($stateProvider) {
        $stateProvider
            .state('causeConnect.seek', {
                url: '/seek',
                templateUrl: 'features/seek/seek.html',
                controller: 'SeekController',
                controllerAs: 'seekVm',
                data: {
                    authenticate: false
                }
            });
    }
}(angular));
