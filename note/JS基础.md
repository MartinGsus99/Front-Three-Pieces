# JS高级程序设计

## 一、基础基础基础

### 1.基础语法

- for-in

```js
//for-in语法是一种精准的迭代语句，可以用来枚举对象的属性；
for(property in expression){
    statement;
}

for(var propName in window){
    document.write(propName);
}
```

- with

```js
//将代码的作用域设置到一个特定的对象中
with(expression) statement;
```

### 2.变量、作用域、内存

- ##### 基本类型和引用类型的值

基本数据类型（可以直接操作保存在变量中的实际的值）：Undefined、NULL、Boolean、Number、String；

引用类型的值是保存在内存中的对象；

与其他语言不同，JS不允许直接访问内存中的位置；在操作对象时，实际操作的是对象的引用；

- ##### 复制变量值

从一个变量向另一个变量复制基本类型和引用类型时存在不同；

复制基本类型会创建基本类型的副本：

![](https://s3.bmp.ovh/imgs/2023/03/03/7a78a945b6267d99.jpg)

当一个变量赋值引用类型的值，同样也会将存储的值复制一份放到新变量分配的空间中国，不同的是，这个值的副本其实是一个指针，而这个指针指向存储在堆中的一个对象；

复制结束后，两个变量实际上引用同一个对象；因此改变其中一个变量会改变另一个；

![](https://s3.bmp.ovh/imgs/2023/03/03/18376e88b0eb8200.jpg)

- ##### 传递参数

ES中所有的参数都是按值传递的；

```js
function add(num){
    num+=10;
    return num;
}

var count=20;
var result=add(count);

//result=30,count=20不变
//这是因为addTen()中的参数num是count的值传递，而不是引用传递两者是相互无关的。
```

- 检测类型

要检测一个变量是不是基本类型？（typeof)

检测基本数据类型时，typeof很好用，但是检测引用类型用处不大，需要使用instanceof;

```js
tpyeof s;
variable instanceof constructor
```

- 作用域

Web浏览器中，全局执行环境被认为是window对象；

每个函数都有自己的执行环境，当执行流进入一个函数时，函数的环境会被推入一个环境栈中；

代码在一个环境中执行时，会创建变量对象的一个作用域链（scope chanin）：其作用是为了保证对执行环境有权访问的所有变量和函数有序的访问；

- 延长作用域链

有些语句可以在作用域链的前端临时增加一个变量对象，该变量对象在代码执行后被移除；

```
try-catch语句的catch
with语句
```

### 3.垃圾收集

JS具有自动垃圾收集机制，执行环境会负责管理代码执行过程中使用的内存。

原理：找出不再使用的变量，释放内存；垃圾收集器按照固定时间间隔周期性执行；

- 标记清除

当变量进入环境，标记为进入环境，方法可能是设置标志位；

- 引用计数

记录每个值被引用的次数，当声明了一个变量并且将一个引用类型赋给该变量，则这个值的引用次数就是1；

一个值赋给一个变量，引用次数+1；相反对这个值引用的变量右取得了另一个值，则引用次数-1；

问题：

```js
function problem(){
    var objA=new Object();
    var objB=new object();
    
    objectA.someOtherObject=objectB;
    objectA.anotherObject=objectA;
}
```

ObjectA和B通过各自的属性相互引用，两个对象的引用次数都是2；

这会导致函数执行后继续存在，引用次数永远不会为0；

```js
//解决方法
objA.someOther..=null;
objB.ano..=null;
```

- 性能问题
- 引用解除

```js
function createPerson(name){ 
 var localPerson = new Object(); 
 localPerson.name = name; 
 return localPerson; 
} 
var globalPerson = createPerson("Nicholas"); 
// 手工解除 globalPerson 的引用
globalPerson = null; 

```

### 4.引用类型

- 使用对象
- 创建、操作数组
- 理解基本的JS类型
- 使用基本类型和基本包装类型

> 引用类型的值（对象）是引用类型的一个实例；

- ##### Object类型

```js
//创建Object实例
//1.new操作符后跟Object构造函数
var person=new Object();
person.name="Martin";
person.age=29;

//2.对象字面量表示法
var person={
    name:"Martin",
    age:29,
    "address":"江苏省东南大学"			//属性名可以使用字符串，最后一个属性后不加逗号，会在早的版本导致错误
}


```

- ##### Array类型

```js
//ES的数组每一项可以保存不同类型的数据；大小动态调整；

//创建方式
//1.Array构造函数；
var colors=new Array(20);
var colors=new Array("red","blue","yellow");
//也可以省略new
var colors=Array(3);

//2.数组字面量表示法 
var colors=["red","blue","yellow"];

var nums=[1,2,]		//不要这样！！！
var options=[，，，] //不要这样；

//添加元素
color[color.length]="black";

//检测数组instanceof 问题在于如果存在两个不同的Array构造函数，会出错；
if(value instanceof Array){
    ...
}
    
//更好的方法
if(Array.isArray(value)){
    ...
}
```

```js
//转换方法
var colors = ["red", "blue", "green"]; // 创建一个包含 3 个字符串的数组
alert(colors.toString()); // red,blue,green 
alert(colors.valueOf()); // red,blue,green 
alert(colors); // red,blue,green。由于 alert()要接收字符串参数，所以它会在后台调用 toString()方法，由此会得到与直接调用 toString()方法相同的结果

//栈方法
array.push();		//尾部压入
array.pop();		//尾部弹出

//队列方法
array.push();		//尾部入队
array.shift();		//首部出队
array.unshift();	//首部入队

//重排序方法
array.sort();		//升序排列，方法会调用每个数组项的 toString()转型方法，然后比较得到的字符串
array.reverse();	//反转数组

//sort方法可以接受一个比较函数
function compare(value1, value2) { 
 if (value1 < value2) { 
 return 1; 
 } else if (value1 > value2) { 
 return -1; 
 } else { 
 return 0; 
 } 
} 
var values = [0, 1, 5, 10, 15]; 
values.sort(compare); 
alert(values); // 15,10,5,1,0

```

```js
//操作方法
//concat（）方法基于当前数组项创建一个新的数组；
var colors=["red","yellow"];
var colors2=colors.concat("green",["blue","grey"]);

//slice（）方法接受一或者两个参数，为岂止位置；
//slice方法不会影响原始数组；
var colors = ["red", "green", "blue", "yellow", "purple"]; 
var colors2 = colors.slice(1); 
var colors3 = colors.slice(1,4); 

//splice()方法
splice(0,2);  //删除前两项
splice(2,0,"red","green")  //从位置2开始插入red,green;
splice(2,1,"red")			//替换第二项为red；
```

```js
//位置方法
indexOf()			//从头开始查找
lastIndexOf()		//从尾部开始查找


```

### 5.迭代方法

- every():对数组中的每一项运行给定函数，如果该函数对每一项都返回 true，则返回 true。
- some()：对数组中的每一项运行给定函数，如果该函数对任一项返回 true，则返回 true。
- filter():对数组中的每一项运行给定函数，返回该函数会返回 true 的项组成的数组.
- foreach():：对数组中的每一项运行给定函数。这个方法没有返回值。
- map()：对数组中的每一项运行给定函数，返回每次函数调用的结果组成的数组。

### 6.归并方法

```js
//reduce():从第一项开始遍历；
//reduceRight():从最后一项开始遍历；
//接受的参数：prev,next，索引，数组对象
var values=[1,2,3,4,5];
//第一次调用，pre=1.cur=2;第二次：pre=3(1+2的结果)，cur=3
var sum=values.reduce(function(prev,cur,index,array)=>{
                      return prev+cur;
                      });
alert(sum);				//15

```

### 7.正则表达式

























