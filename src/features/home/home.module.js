(function(angular) {
    'use strict';
    angular.module('causeConnect.home', [])
        .config(homeConfig);

    function homeConfig($stateProvider) {
        $stateProvider
            .state('causeConnect.home', {
                url: '/home',
                views: {
                    'homeView' : {
                        templateUrl: 'features/home/home.html',
                        controller: 'HomeController'
                    }
                },
                data: {
                    authenticate: false
                }
            })
    }
})(angular);
