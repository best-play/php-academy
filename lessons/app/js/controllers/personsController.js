app.controller('personsController', function (dataService) {
    var _this = this;

    var personsPromise = dataService.getPersons();
    personsPromise.then(function (data) {
        _this.persons = data;
    });
});