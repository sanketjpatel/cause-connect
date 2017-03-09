(function(angular) {
    'use strict';
    angular
        .module('causeConnect.signup', [])
        .config(signupConfig);

    // @ngInject
    function signupConfig($stateProvider) {
        $stateProvider
            .state('causeConnect.signup', {
                url: '/signup',
                templateUrl: 'features/signup/signup.html',
                controller: 'SignupController',
                controllerAs: 'signupVm',
                data: {
                    authenticate: false
                }
            });
    }
}(angular));
