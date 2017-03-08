(function(angular, _) {
    angular
        .module('causeConnect.events')
        .service('eventService', eventService);
    function eventService() {
        var self = this;
        self.events = [
            {
                id: 1,
                name: 'Feed the starving',
                date: '01-13-17',
                organizer: 'Krypton',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
                heroUrl: 'https://static.pexels.com/photos/36487/above-adventure-aerial-air.jpg',
                address: '40 Shuman Blvd, Naperville IL',
                website: 'http://www.egen.solutions',
                category: 'Education',
                eventGoal: '$5000'
            },
            {
                id: 2,
                name: 'Care and Feed Stray Dogs',
                date: '01-13-17',
                organizer: 'Krypton',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
                heroUrl: 'http://www.planwallpaper.com/static/images/Mario-mario-wallpaper-hd-games-1920x1080.jpg',
                address: '40 Shuman Blvd, Naperville IL',
                website: 'http://www.egen.solutions',
                category: 'Environment',
                eventGoal: '$5000000'
            },
            {
                id: 3,
                name: 'Keep Your Desks Clean',
                date: '01-13-17',
                organizer: 'Nitika',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
                heroUrl: 'http://www.planwallpaper.com/static/images/3D-Beach-Wallpaper-HD-Download.jpg',
                address: '40 Shuman Blvd, Naperville IL',
                website: 'http://www.egen.solutions',
                category: 'Animal Care',
                eventGoal: '$5000000'
            },
            {
                id: 4,
                name: 'Free Food Fridays',
                date: '01-13-17',
                organizer: 'Mohit',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
                heroUrl: 'http://www.planwallpaper.com/static/images/canada-winter-moraine-lake-alberta-hd-high-511002.jpg',
                address: 'Nike Commercial, Naperville IL',
                website: 'http://www.egen.solutions',
                category: 'Human Rights',
                eventGoal: '$15000'
            },
            {
                id: 5,
                name: 'Buy a Burger',
                date: '01-13-17',
                organizer: 'Krypton',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
                heroUrl: 'http://www.planwallpaper.com/static/images/high-definition-wallpaper-3-798x350.jpg',
                address: 'Nike Commercial, Naperville IL',
                website: 'http://www.egen.solutions',
                category: 'Poverty',
                eventGoal: '$15000'
            }
        ];
        self.addEvent = addEvent;
        self.getAllEvents = getAllEvents;
        self.findEventByName = findEventByName;
        self.findEventById = findEventById;
        self.getCategorizedEvents = getCategorizedEvents;
        self.editEventById = editEventById;
        // Event Model

        function addEvent(event) {
            var ids = _.map(self.events, 'id');
            var nextId = ids.length === 0 ? 1 : _.max(ids) + 1;
            event.id = nextId;

            self.events.push(event);

            return Promise.resolve(self.events);
        }

        function getAllEvents() {

            return Promise.resolve(self.events);
        }

        function findEventByName(eventName) {
            _.filter(self.events, function(event) {
                return event.name == eventName;
            });
        }

        function findEventById(id) {
            return Promise.resolve(_.find(self.events, { 'id': id }));
        }

        function getCategorizedEvents() {
            var categorizedData = [];
            var categories = _.uniq(_.map(self.events, 'category'));
            var groupedEvents = _.groupBy(self.events, 'category');

            _.forEach(categories, function(category) {
                categorizedData.push({
                    category: category,
                    eventCount: _.get(groupedEvents, category).length
                });
            });
            return Promise.resolve(categorizedData);
        }

        function editEventById(id, newEvent) {
            var event = _.find(self.events, { 'id': id });
            var index = _.indexOf(self.events, event);
            if(!_.isUndefined(index)) {
                self.events[index] = newEvent;
                return self.events[index]
            }

        }
    }
})(angular, _);
