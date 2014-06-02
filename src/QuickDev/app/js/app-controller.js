angular.module('QuickDev.controllers', ['QuickDev.services'])
    .controller('PersonCtrl', function ($scope, dataService) {
        //data
        $scope.person = dataService.getPerson(1); //person id hard-coded for now
        
        //functions
        $scope.save = function () {
            dataService.savePerson($scope.person);
        };
    });