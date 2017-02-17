(function(angular) {
    'use strict';
    angular
        .module('causeConnect.login', [])
        .config(tabsConfig);

    // @ngInject
    function tabsConfig($stateProvider) {
        $stateProvider
            .state('causeConnect.login', {
                url: '/login',
                templateUrl: 'features/seek/login/login.html',
                controller: 'LoginController',
                controllerAs: 'loginVm',
                data: {
                    authenticate: false
                }
            });
    }
}(angular));
