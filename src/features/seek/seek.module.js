(function (angular) {
    'use strict';
    angular
        .module('causeConnect.seek', [])
        .config(seekConfig);

    // @ngInject
    function seekConfig($stateProvider) {
        $stateProvider
            .state('causeConnect.seek', {
                url: '/seek',
                templateUrl: 'features/seek/seek.html',
                controller: 'SeekController',
                controllerAs: 'seekVm'
            });
    }
}(angular));
