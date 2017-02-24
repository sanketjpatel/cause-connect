(function(angular) {
    'use strict';

    angular
        .module('causeConnect.signup')
        .controller('SignupController', signupController);

    // @ngInject
    function signupController($state) {
        var signupVm = this;

        signupVm.submit = submit;

        function submit() {
            firebase.auth().createUserWithEmailAndPassword(signupVm.email, signupVm.password)
                .then(function () {
                    $state.go('causeConnect.login');
                }).catch(function(error) {
                    alert(error.message);
                });
        }
    }
})(angular);
