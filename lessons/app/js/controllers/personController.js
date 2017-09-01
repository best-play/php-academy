app.controller('personController', function (dataService, $routeParams) {
    var _this = this;

    var personsPromise = dataService.getPersons();
    personsPromise.then(function (data) {
        var id = parseInt($routeParams.id);
        if (id === NaN) return;

        for(var i = 0; i < data.length; i++) {
            if (data[i].id === id) {
                _this.name = data[i].name;
                _this.age = data[i].age;
                _this.position = data[i].position;
                return;
            }
        }
    });
});