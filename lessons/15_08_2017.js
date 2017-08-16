'use strict';

function MainCtrl() {
    var _this = this;
    _this.animals = [
        {name: "Шарик", age: 1},
        {name: "Бобик", age: 2},
        {name: "Тузик", age: 5}
    ];

    _this.addDog = function (dogName) {
        var dog = {name: dogName, age: 0};
        _this.animals.push(dog);
        _this.dogName = '';
    };
    _this.changeName = function (animal) {
        animal.name = prompt('Введите новое имя:');
    };
    _this.deleteDog = function (index) {
        _this.animals.splice(index, 1);
    }
}

angular
    .module('app', [])
    .controller('MainCtrl', MainCtrl);
