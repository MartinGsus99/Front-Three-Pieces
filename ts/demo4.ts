//函数声明法
function addNumber(x:number,y:number):number{
    return x+y;
}

console.log(addNumber(1,3));

//函数表达式法
var addFunction=function(a:number,b:number){
    return a+b;
}
console.log(addFunction(1,3));

//箭头函数，TS完全支持ES6；
var addFuntionArrow=(x:number,y:number)=>{
    return x+y;
}

console.log(addFuntionArrow(3,3));