(function(angular){
    'use strict';

    angular.module('causeConnect.seek')
        .controller('SeekController', seekController);
    function seekController($state, eventService, AuthService) {
        var vm = this;

        vm.$onInit = $onInit;
        vm.event = {};
        vm.addEvent = addEvent;

        vm.$onInit();

        function $onInit () {
            if (!AuthService.isAuthenticated()) {
                console.log('Navigating to the login screen');
                $state.go('causeConnect.login');
            }
        }
        
        function addEvent(event) {
            eventService.addEvent(event);
        }
    }
})(angular);
