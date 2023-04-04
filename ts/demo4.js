//函数声明法
function addNumber(x, y) {
    return x + y;
}
console.log(addNumber(1, 3));
//函数表达式法
var addFunction = function (a, b) {
    return a + b;
};
console.log(addFunction(1, 3));
//箭头函数，TS完全支持ES6；
var addFuntionArrow = function (x, y) {
    return x + y;
};
console.log(addFuntionArrow(3, 3));
