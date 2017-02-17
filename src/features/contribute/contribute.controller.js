(function(angular){
    'use strict';

    angular.module('causeConnect.contribute')
        .controller('ContributeController', contributeController);
    function contributeController($state) {
        var vm = this;

        vm.showEventDetails = showEventDetails;


        function showEventDetails(eventId) {
            $state.go('causeConnect.eventDetails')
        }
    }
})(angular);
