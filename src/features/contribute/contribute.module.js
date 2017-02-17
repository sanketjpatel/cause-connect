(function (angular) {
    'use strict';
    angular.module('causeConnect.contribute', [])
        .config(contributeConfig);

    function contributeConfig($stateProvider) {
        $stateProvider
            .state('causeConnect.contribute', {
                url: '/contribute',
                templateUrl: 'features/contribute/contribute.html',
                controller: 'ContributeController',
                controllerAs: 'ctbVm',
                data: {
                    authenticate: false
                }
            })
    }
})(angular);
