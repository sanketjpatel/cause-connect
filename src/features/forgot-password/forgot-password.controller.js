(function(angular) {
    'use strict';

    angular
        .module('causeConnect.signup')
        .controller('ForgotPasswordController', forgotPasswordController);

    // @ngInject
    function forgotPasswordController($state) {
        var forgotVm = this;

        forgotVm.submit = submit;

        function submit() {
            firebase.auth().sendPasswordResetEmail(forgotVm.email)
                .then(function () {
                    $state.go('causeConnect.login');
                }).catch(function(error) {
                    alert(error.message);
                });
        }
    }
})(angular);
