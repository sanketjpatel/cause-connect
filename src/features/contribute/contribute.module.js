(function(angular) {
    'use strict';
    angular.module('causeConnect.contribute', [])
        .config(contributeConfig);

    function contributeConfig($stateProvider) {
        $stateProvider
            .state('causeConnect.contribute', {
                url: '/contribute',
                views: {
                    'contributeView': {
                        templateUrl: 'features/contribute/contribute.html',
                        controller: 'ContributeController'
                    }
                },
                data: {
                    authenticate: false
                }
            })
    }
})(angular);
