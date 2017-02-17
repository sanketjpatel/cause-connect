(function(angular) {
    'use strict';

    angular
        .module('causeConnect.eventDetails')
        .controller('EventDetailsController', eventDetailsController);

    function eventDetailsController($scope) {
        var eventDetailsControllerVm = this;

        eventDetailsControllerVm.event = {
            id : "123",
            name : "Chicago 5K",
            address : "40 Shuman Blvd",
            date : "03/20/2017",
            eventGoal : 50000,
            eventDescription : "5K run organized to raise money for Children's hospital."

        }
    }
})(angular);