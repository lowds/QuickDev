angular.module('QuickDev.services', [])
    .factory('dataService', function ($http) {
        var getPerson = function (id) {
            //this would do something much more complicated
            return {
                id: id,
                firstName: 'Bob',
                lastName: 'Smith'
            };
        };

        var savePerson = function (person) {
            $http.post('/api/Person', person);
            alert(person.firstName); //this also would be more complex (and definitely not alerting)
        };

        return {
            getPerson: getPerson,
            savePerson: savePerson
        };
    });