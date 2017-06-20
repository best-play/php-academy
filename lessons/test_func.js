/**
 * Created by Dima S on 17.06.2017.
 */
'use strict';

QUnit.module("Group with ok()");
QUnit.test( "sum() with ok", function( assert ) {
    assert.ok( sum(1,2) === 3, "Сумма 1 + 2 равно 3!" );
    assert.ok( sum(3,2) === 5, "Сумма 3 + 2 равно 5!" );
    assert.ok( sum(5,'2') === 7, "Сумма 5 + 2 равно 7!" );
    assert.ok( sum('5','2') === 7, "Сумма 5 + 2 равно 7!" );
});

QUnit.module("Group with equal()");
QUnit.test( "sum() with equal", function( assert ) {
    assert.equal( sum(1,2), 3, "Сумма 1 + 2 равно 3!" );
    assert.equal( isNaN(sum('a',2)), true, "Сумма 'a' + 2 равно NaN!" );
    assert.strictEqual( sum(1,2), 3, "Сумма 1 + 2 строго равно 3!" );
    assert.notEqual( sum(1,2), 4, "Сумма 1 + 2 не равно 4");
});

QUnit.module("Group with setTimeout()");
QUnit.test("sum() with Timeout", function ( assert ) {
    assert.expect(3);
    var done1 = assert.async();
    var done2 = assert.async();
    var done3 = assert.async();

    setTimeout(function () {
        assert.equal(printText(), "Hello world!", "1) Hello world выведет");
        done1();
    }, 5000);
    setTimeout(function () {
        assert.equal(printText(), "Hello world!", "2) Hello world выведет");
        done2();
    }, 500);
    setTimeout(function () {
        assert.equal(printText(), "Hello world!", "3) Hello world выведет");
        done3();
    }, 2000);
});

QUnit.module("Group with reverse()");
QUnit.test( "reverse()", function( assert ) {
    assert.equal( reverse("Hello"), "olleH", "Вернул olleH!" );
});