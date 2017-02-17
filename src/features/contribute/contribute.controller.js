(function(angular){
    'use strict';

    angular.module('causeConnect.contribute')
        .controller('ContributeController', contributeController);
    function contributeController(eventService, AuthTokenService) {
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
            AuthTokenService.removeToken();
        }
    }
})(angular);
