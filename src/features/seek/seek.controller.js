(function(angular){
    'use strict';

    angular.module('causeConnect.seek')
        .controller('SeekController', seekController);
    function seekController(eventService) {
        var vm = this;

        vm.event = {};

        vm.addEvent = addEvent;

        function addEvent(event) {
            eventService.addEvent(event);
        }
    }
})(angular);
