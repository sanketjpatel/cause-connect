(function(angular) {
    'use strict';

    angular
        .module('causeConnect.eventDetails')
        .controller('EventDetailsController', eventDetailsController);

    function eventDetailsController($scope) {
        var eventDetailsControllerVm = this;

        eventDetailsControllerVm.event = {
            id : "123",
            name : "Chicago Golf Tournament",
            address : "40 Shuman Blvd",
            date : "03/20/2017",
            eventGoal : 50000,
            eventDescription : "The Cause Connect golf tournament is one of Chicago City's premier charity golf events and is held at the spectacular National Golf Club of Chicago. Sponsors and players enjoy a wonderful day on the course and have the opportunity to meet a few amazing Cause Connect recipient children and their families."

        }
    }
})(angular);