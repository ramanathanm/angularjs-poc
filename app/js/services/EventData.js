'use strict';

eventsApp.register.factory('eventData', function($resource) {
    var resource = $resource('/data/event/:id', {id: '@id'});

    return {
        getEvent: function(eventId) {
            return resource.get({id: eventId});
        },

        save: function(event) {
            event.id = 999;
            resource.save(event);
        },

        getAllEvents: function() {
            return resource.query();
        }
    };
});