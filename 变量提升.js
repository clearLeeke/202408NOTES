//函数表达式，由于使用var来创建sum，变量提升阶段只会声明变量，不会赋值，所以此时函数在前面执行，函数是没有值的，不能执行（真实项目中这种方式最常用，因为它操作严谨）
/* console.log(sum); //undefined
sum(10, 20); // TypeError: sum is not a function
var sum = function (n, m) {
    return n + m;
} */

/**
 * 全局作用域（栈内存）
 *  1.变量提升
 *      var a
 *  2.代码执行
 */
/* console.log(a); //=>undefined
var a = 12;
a = 13;
console.log(a);//=>13 */

/**
 * 全局作用域（栈内存）
 *  1.变量提升
 *  2.代码执行
 */
/* console.log(a); //=> Uncaught ReferenceError: Cannot access 'a' before initialization 在js中上一行代码报错，下面的代码都不会再去执行了
let a = 12;
a = 13;
console.log(a); */

/**
 * 全局作用域（栈内存）
 *  1.变量提升
 *  2.代码执行
 */
console.log(a); //=> Uncaught ReferenceError: a is not defined
a = 13; //=>window.a=13
console.log(a);