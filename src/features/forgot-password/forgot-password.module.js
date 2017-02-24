(function(angular) {
    'use strict';
    angular
        .module('causeConnect.forgotPassword', [])
        .config(forgotPasswordConfig);

    // @ngInject
    function forgotPasswordConfig($stateProvider) {
        $stateProvider
            .state('causeConnect.forgotPassword', {
                url: '/signup',
                templateUrl: 'features/forgot-password/forgot-password.html',
                controller: 'ForgotPasswordController',
                controllerAs: 'forgotVm',
                data: {
                    authenticate: false
                }
            });
    }
}(angular));
