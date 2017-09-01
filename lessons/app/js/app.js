'use strict';
var app = angular.module('app', ['ngRoute'])
    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/', {
            controller: 'personsController as persons',
            templateUrl: 'views/persons.html'
        }).when('/person/:id', {
            controller: 'personController as person',
            templateUrl: 'views/person.html'
        }).otherwise({
            template: '<div>404 Page Not Find</div>'
        });
    }]);
console.log('loaded');