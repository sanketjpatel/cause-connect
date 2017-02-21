(function(angular) {
    'use strict';

    angular
        .module('causeConnect.login')
        .controller('LoginController', loginController);

    // @ngInject
    function loginController($state) {
        var loginVm = this;
        var firebaseRootRef = firebase.database().ref();

        loginVm.login = login;
        //loginVm.firebaseObject = $firebaseObject(firebaseRootRef);


        function login() {
            firebase.auth().signInWithEmailAndPassword(loginVm.email, loginVm.password)
                .then(function () {
                    console.log('logged in');
                    $state.go('causeConnect.seek');
                }).catch(function(error) {
                    console.log('alert', error);
                    alert(error.message);
                });
        }
    }
})(angular);
