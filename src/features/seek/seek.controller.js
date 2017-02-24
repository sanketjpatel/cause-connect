(function(angular){
    'use strict';

    angular.module('causeConnect.seek')
        .controller('SeekController', seekController);

    // @ngInject
    function seekController($state, eventService, $firebaseAuth) {
        var vm = this;

        vm.$onInit = $onInit;
        vm.event = {};
        vm.addEvent = addEvent;

        vm.$onInit();

        function $onInit () {
            if ($firebaseAuth().$getAuth()) {
                $state.go('causeConnect.login');
            }
        }
        
        function addEvent(event) {
            eventService.addEvent(event);
        }
    }
})(angular);
