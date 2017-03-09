(function(angular){
    'use strict';

    angular.module('causeConnect.eventDetail')
        .controller('EventDetailController', eventDetailController);
    function eventDetailController(eventService, $stateParams) {
        var vm = this;

        init();

        function init() {
            eventService.findEventById($stateParams.id)
                .then(function(data) {
                    vm.event = data;
                });
        }
    }
})(angular);
