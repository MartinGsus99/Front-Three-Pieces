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









