(function(angular) {
    'use strict';

    angular.module('app')
        .run(runConfig);

    // @ngInject
    function runConfig($ionicAnalytics, $ionicPlatform,
                       $timeout, $cordovaStatusbar, $window, $rootScope, $stateParams,
                       ionicMaterialInk, CONFIG, $cordovaPushV5, $state, $cordovaDevice, $ionicHistory) {
        $ionicPlatform.ready(function () {
            // register for analytics
            if(!CONFIG.devMode) $ionicAnalytics.register();

            // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
            // for form inputs)
            if ($window.navigator.splashscreen) $window.navigator.splashscreen.hide();


            if ($window.StatusBar) {
                // org.apache.cordova.statusbar required
                $cordovaStatusbar.style(1);
            }

            if ($window.cordova && $window.cordova.logger) {
                $window.cordova.logger.__onDeviceReady();
            }

            $rootScope.$on('cloud:push:notification', function(event, data) {
                var msg = data.message;
                alert(msg.title + ': ' + msg.text);
            });

        });

        initializeFirebase();

        $window.addEventListener('native.keyboardshow', function(){
            $window.document.body.classList.add('keyboard-open');
        });


        function initializeFirebase() {
            // Initialize Firebase
            var config = {
                apiKey: "AIzaSyBL8zTJ9rLHv--v83oyeNvE2j0_9vR8iEY",
                authDomain: "cause-connect.firebaseapp.com",
                databaseURL: "https://cause-connect.firebaseio.com",
                storageBucket: "cause-connect.appspot.com",
                messagingSenderId: "786118996913"
            };
            console.log('initializing firebase');
            firebase.initializeApp(config);
            console.log('initialized firebase');
        }
    }
}(angular));
