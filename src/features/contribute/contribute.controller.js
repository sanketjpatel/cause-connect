(function(angular){
    'use strict';

    angular.module('causeConnect.contribute')
        .controller('ContributeController', contributeController);
    function contributeController(eventService) {
        var vm = this;

        init();

        function init() {
            eventService.getCategorizedEvents()
                .then(function(data) {
                   vm.categorizedEvents = data;
                });
            eventService.getAllEvents()
                .then(function(data) {
                    vm.events = data;
                });
        }

        vm.logout = function () {

        }
    }
})(angular);
