/* console.log(a, b);
var a = 12,
    b = 12;

function fn() {
    console.log(a, b);
    var a = b = 13;
    console.log(a, b);
}
fn();
console.log(a.b); */

/* console.log(a, b, c);
var a = 12,
    b = 13
c = 14;

function fn(a) {
    console.log(a, b, c);
    a = 100;
    c = 200;
    console.log(a, b, c);
}
b = fn(10);
console.log(a, b, c); */

/* var ary = [12, 13];
function fn(ary) {
    console.log(ary);
    ary[0] = 100;
    ary = [100];
    ary[0] = 0;
    console.log(ary);
}
fn(ary);
console.log(ary); */

/* var n = 1;

function fn() {
    var n = 2;

    function f() {
        n--;
        console.log(n);
    }
    f();
    return f;
}
var x = fn();
x();
console.log(n); */

/* var i = 5;

function fn(i) {
    return function (n) {
        console.log(n + (++i));
    }
}

var f = fn(1);
f(2);
fn(3)(4);
fn(5)(6);
f(7);
console.log(i);  */

/* var i = 20;

function fn() {
    i -= 2;
    return function (n) {
        console.log((++i) - n);
    }
}
var f = fn();
f(1);
f(2);
fn()(3);
fn()(4);
f(5);
console.log(i); */