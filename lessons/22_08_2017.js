'use strict';

var items = [
    {
        id: 1,
        name: "Кросы 1",
        brand: "Nike",
        size: "36",
        sex: "female",
        price: 100,
        img: 'nike.jpg',
        qty: 2
    },
    {
        id: 2,
        name: "Кросы 2",
        brand: "Puma",
        size: "42",
        sex: "male",
        price: 150,
        img: 'puma.jpg',
        qty: 1
    },
    {
        id: 3,
        name: "Кросы 3",
        brand: "Nike",
        size: "40",
        sex: "male",
        price: 89,
        img: 'nike2.jpg',
        qty: 3
    }
];

function MainCtrl() {
    var _this = this;
    var cart = [];
    _this.goods = items;
    _this.cartCount = function () {
        return cart.length;
    };
    _this.addToCart = function (item) {
        item.qty -= 1;
        cart.push({
            id: item.id,
            qty: item.qty
        });
        console.log(cart)
    }
}
function addItemDirective() {
    return {
        scope: {
            price: '=itemPrice'
        },
        template: "<button>Оплатить {{ price }}</button>"
    }
}

angular
    .module('app', [])
    .controller('MainCtrl', MainCtrl)
    .directive('addItem', addItemDirective);
