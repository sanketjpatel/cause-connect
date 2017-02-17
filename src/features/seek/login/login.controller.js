(function(angular) {
    'use strict';

    angular
        .module('causeConnect.login')
        .controller('LoginController', loginController);

    function loginController($state, AuthTokenService) {
        var loginVm = this;

        loginVm.submit = submit;

        function submit() {
            AuthTokenService.setToken('someToken');
            $state.go('causeConnect.seek');
        }
    }
})(angular);
