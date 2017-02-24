(function(angular) {
    'use strict';

    angular
        .module('causeConnect.login')
        .controller('LoginController', loginController);

    // @ngInject
    function loginController($state) {
        var loginVm = this;

        loginVm.login = login;
        //loginVm.firebaseObject = $firebaseObject(firebaseRootRef);


        function login() {
            firebase.auth().signInWithEmailAndPassword(loginVm.email, loginVm.password)
                .then(function () {
                    $state.go('causeConnect.seek');
                }).catch(function(error) {
                    alert(error.message);
                });
        }
    }
})(angular);
