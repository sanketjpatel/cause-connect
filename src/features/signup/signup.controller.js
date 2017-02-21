(function(angular) {
    'use strict';

    angular
        .module('causeConnect.signup')
        .controller('SignupController', signupController);

    // @ngInject
    function signupController($state) {
        var signupVm = this;
        var firebaseRootRef = firebase.database().ref();

        signupVm.submit = submit;
        //loginVm.firebaseObject = $firebaseObject(firebaseRootRef);


        function submit() {
            firebase.auth().createUserWithEmailAndPassword(signupVm.email, signupVm.password)
                .then(function () {
                    console.log('Signed up');
                    $state.go('causeConnect.login');
                }).catch(function(error) {
                    console.log('alert', error);
                    alert(error.message);
                });
        }
    }
})(angular);
