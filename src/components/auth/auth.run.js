(function (angular, _) {
    'use strict';

    angular
        .module('app.auth')
        .run(run);

    // @ngInject
    function run($rootScope, $state, $firebaseAuth) {
        $rootScope.$on('$stateChangeStart', function onStateChange(event, toState) {
            // By default, every state requires authentication.
            // State must explicitly set authenticate to `false` to disable
            var requiresAuthentication = _.get(toState, ['data', 'authenticate']) !== false;
            if (requiresAuthentication && !$firebaseAuth().$getAuth()) {
                event.preventDefault();
                $state.go('causeConnect.login');
            }
        });
    }
}(angular, _));
