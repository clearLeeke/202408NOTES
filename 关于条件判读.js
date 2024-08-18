/**
 * [property] in [object] 验证当前属性是否属于这个对象
 * 全局作用域
 *   1.变量提升
 *     不管条件是否成立都要进行变量提升
 *     var a;  //=> 创建一个全局变量a->window.a
 *   2.代码执行
 */
/* console.log(a); //=>undefined
if (!('a' in window)) {  //=>'a' in window =>true
    var a = 13;
}
console.log(a); //=>undefined */

/**
 * 全局作用域
 *   1.变量提升
 *      但是做函数的有特殊性：在老版本游览器中，确实不论条件是否成立，函数也是提前声明或者定义的，但是新版本游览器中，为了兼容ES6严谨的语法规范，条件中的函数在变量提升阶段只能提前声明，不能提前定义
 *      function fn;
 *   2.代码执行
 */

/* console.log(fn);//undefined
// fn();  //=>fn is not a function
if ('fn' in window) {  //=>true
    //条件成立：进来后的第一件事就是给FN赋值，然后再执行代码
    fn(); 
    function fn(){
        console.log("哈哈哈");
    }
}
fn();//=>undefined */

f = function () {   //=> window.f=
    return true;
}
g = function () {
    return false;
}
~ function () {
    /**
     * 函数执行会形成一个私有作用域
     *      1.变量提升  function g;
     *      2.代码执行
     */
    if (g() && [] == ![]) { //=>g is not a function
        f = function () {
            return false;
        }

        function g() {
            return true
        };
    }
}();
console.log(f());
console.log(g());

//=>自执行函数：前面加()或者!、-、~、+只有一个目的，让语法符合而已
/* (function(n){})(10);
~function(n){}(10); */