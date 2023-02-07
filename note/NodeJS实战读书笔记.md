# NoDe JS 实战

## 一、Welcome to node

### 1.NodeJS基础

- 显著特征：异步、事件驱动机制
- Node和JS的优势之一是单线程编程。为了实现同步，引入事件机制，点击按钮，触发事件，规避资源死锁和竞态条件
- 非阻塞I/O

> 程序可以在做其他事情的时候发起一个请求来获取网络资源，然后网络操作完成之后，运行一个回调函数来处理操作的结果

- Node与V8

> Node的动力源自V8引擎。V8的特性之一是会将JS代码直接编译为机器码。

- 特性组

  > Node包含了v8提供的ES6特性，分为shipping、staged、in progress三组；
  >
  > 其中shipping是默认开启的，staged和in progress需要命令行参数开启

  ```shell
  node --harmony
  node --v8-options | grep "in progress"
  ```

- npm

  >  npm要求Node项目目录下有一个package.json文件；

  ```shell
  npm init -y    //初始化package.json
  ```

- 核心模块

> fs，path，net，http/s，dns，assert，os

```js

//调取文件流
const fs=require('fs');
const zlib=require('zlib');
const gzip=zlib.createGzip();
const outStream=fs.createWriteStream('output.js.gz');

fs.createReadStream('./fs.js').pipe(gzip).pipe(outStream);
```

```js
//网络模块
const http=require('http');
const port=8080;

const server=http.createServer((req,res)=>{
    res.end("HEllo,node js!");
});

server.listen(port,()=>{
    console.log("Server listening on:http://localhost:%s",port);
});
```

```shell
//调试器
node debug server.js
```

- 主流Node程序：Web、命令行工具、桌面程序 

> Node可以将TS转换为JS；

## 二、Node编程基础

- 如何组织代码？
- 如何实现异步编程？

### 1.Node功能的组织及重用

![](https://s3.bmp.ovh/imgs/2023/02/05/b3bf8ebded4c5d97.jpg)

> 上面的做法会出现一个问题，就是两个文件声明了相同的变量名，导致重复声明；
>
> PHP和Ruby等语言使用命名空间来解决问题；
>
> Node选择不给程序员污染全局命名空间的机会；
>
> Node模块允许从被引入文件中选择要暴露给程序的函数和变量，如果模块返回的函数或者变量不止一个，那么可以通过设定exports对象的属性来指明他们。

![](https://s3.bmp.ovh/imgs/2023/02/05/40f820b01ac722a9.jpg)

### 2.创建一个Node项目

```shell
mkdir myApp
cd myApp
npm init -y   //全部使用默认值的package
```

> require是Node中少数几个同步I/O操作之一；
>
> I/O密集的地方尽量不要使用require，所有的同步调用都会阻塞Node；

### 3. node_modules重用模块

> 要求模块在文件系统中使用相对路径存放，对于组织程序特定的代码很有帮助。但是对于想要在程序见共享或者跟他人共享代码却用处不大。
>
> Node有一个独特的模块引入机制，即node_modules,其模块检索规则如下：

![](https://s3.bmp.ovh/imgs/2023/02/07/4accd465166d6500.jpg)

##### 注意事项：

- 如果模块是目录，在模块目录中定义模块的文件必须命名为index.js。除非在这个目录下一个叫package.json的文件特别执行。要执行一个取代index.js的文件，必须使用JSON数据定义的对象；

```json
{
    "main":"currency.js"
}
```

![](https://s3.bmp.ovh/imgs/2023/02/07/eb62dc14f1e8a0e5.jpg)

- Node能把模块作为对象缓存起来。如果两个文件引入了相同的模块，第一个require会把模块返回的数据存到内存中。第二个引入会从内存中加载。

![](https://s3.bmp.ovh/imgs/2023/02/07/3baf64653ff8e710.jpg)

##### ！！！！！！不能实现

### 4.异步编程

Node世界的两种响应逻辑方式：

- 回调：通常用来定义一次性响应的逻辑。比如数据库查询；
- 事件监听：本质上也是一个回调，不同的是和一个概念实体有关（事件）；

```js
//下面的例子中，用EventEmitter.Prototype.on方法在服务器上绑定了一个监听器，当有request事件发出，服务器调用handleRequest函数

server.on('request',handleRequest);
```

Node Http服务器实例是一个事件发射器，一个可以类（Event Emitter）；

Node的很多核心功能都继承自EventEmitter；

##### 用回调处理一次性事件

> 回调是一个函数，被当作参数传递给异步函数，用来描述异步操作完成之后要做什么。

实例如下：

- 异步获取存放在json文件中的文章标题
- 异步获取简单的HTML模板
- 将标题组装到HTML页面里
- 将HTML发送给客户

```js
const http=require('http');
const fs=require('fs');

http.createServer((req,res)=>{
    getTitles(res);
}).listen(8000,'127.0.0.1');

//将回调嵌套的功能代码提取出来
function getTitles(res){
    fs.readFile('./data/title.json',(err,data)=>{
        if(err) return hadError(err,res);
        getTemplate(JSON.parse(data.toString()),res);
    });
}

function getTemplate(titles,res){
    fs.readFile('./index.html',(err,data)=>{
        if(err) return hadError(err,res);
        formatHtml(titles,data.toString(),res);
    })
}

function formatHtml(titles,templ,res){
    const html=templ.replace('%',titles.join('</li><li>'));
    res.writeHead(200,{'Content-Type':'text/html'});
    res.end(html);
}

function hadError(err,res){
    console.log(err);
    res.end("Server Error");
}
```

##### 用事件发射器处理重复性事件

> 事件发射器会触发事件，并且在那些事件被触发时能处理他们；
>
> 重要的Node API组件，比如HTTP服务器、TCP服务器和流都被做成了事件发射器；

```js
socket.on('data',handleData)
```

echo服务器的例子：

```js
const net=require('net');
const server=net.createServer(socket=>{
    socket.on('data',data=>{
        socket.write("Your message is: "+data+".\n");
    });
});

server.listen(8000,'127.0.0.1');
```













