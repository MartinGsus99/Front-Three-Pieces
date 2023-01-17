# HTML

## 1.HTML

```html
<input type='range'>

<input type='radio' name='name'> //单选

<input list='countries'>
<datalist id='countries'>
	<option>Greece</option>
    <option>UK</option>
</datalist>

<pre>
	<code>
		const add={a,b}=>a+b;
	</code>
</pre>
```

## 2.CSS

```html
//外链
<link rel='stylesheet' href='./style.css'>

//嵌入
<style>
</style>

//内联
<p style='margin:lem 0'>
    
</p>
```

![](https://s3.bmp.ovh/imgs/2023/01/16/4bd8562619534b3e.jpg)

#### CSS选择器

- 标签名、类名、id；

- 属性；

- DOM树的位置；

- 通配选择器

  ```css
  *{
  color:red;
  }
  ```

- 属性选择器

  ```css
  [disabled]{
      background:#eee;
      color:#999;
  }
  
  input[type='password']{
      border-color:red;
      color:red;
  }
  
  a[href^='#']{
      color:red;
  }
  a[href$=".jpg"]{
      color:deepskyblue;
  }
  ```

- 伪类选择器

```css
a:link{
	color:black;
}
a:visited{
    color:blue;
}
a:active{
    color:red;
}

:focus{
    outline:2px solid orange;
}

li:first0child{
    color:coral;
}

li:last-child{
    border-bottom:none;
}

input.error{
    border-color:red;
}
```

- 组合

```css
直接组合AB   input:focue
后代组合A B  nav a
亲子组合A>B  section > p
兄弟选择A~B  h2 ~ P
相邻选择A+B  h2+p
```

- 选择器组

```css
body,h1,h2{
    margin:0;
    padding:0;
}

[type='checkbox'],[type='radio']{
    color:red;
}
```

#### 颜色HSL

- Hue：色相0-360；
- Saturation：鲜艳程度0-100%；
- Lightness：透明度0-100%

#### alpha透明度

```css
#ff0000+ff
rgba(255,0,0,1)    1 完全不透明   0 完全透明
hsla(0,100%,50%,1)
```

#### 字体

```css
.{
    font-size:20px
    font-size:2em        //2*父级元素大小   40px
    font-size:80%		//父级元素80% 	   16px
}

.w1{
    font-weight:100    //100-900;  normal:400  bold:700
}

.w2{
    //行高：两行文字的基准线距离
    line-height:1.6；      //1.6自身字体大小的1.6倍；
}

.w3{
    white-sapce:mormal
}
```

#### CSS选择器优先级

|                      | #    | .    | E    |
| -------------------- | ---- | ---- | ---- |
| #nav .list li a:link | 1    | 2    | 2    |
| .hd ul.links a       | 0    | 2    | 2    |

某些属性会自动继承其父元素的计算值，除非显式指定一个值；、

```css
//显式继承

*{
    box-sizing:inherit;
}

html{
    box-sizing:border-box;
}

.some-widget{
    box-sizing:content-box;
}
```

#### CSS求值过程

![](https://s3.bmp.ovh/imgs/2023/01/16/fb3472020fda8096.jpg)

![](https://s3.bmp.ovh/imgs/2023/01/16/c1478a4da8353b37.jpg)

![](https://s3.bmp.ovh/imgs/2023/01/16/18f0683243ead4c3.jpg)



## 3.布局Layout

- 常规流
  - 行级
  - 块级
  - 表格布局
  - FlexBox
  - Grid布局
- 浮动
- 绝对定位

#### 盒子模型

![](https://s3.bmp.ovh/imgs/2023/01/16/42d45693c2884f17.jpg)

height：指定content box的高度，取值为长度、百分数（相对于容器content box高度，容器有指定的高度才会生效）、auto（由内容计算而来）

padding：上 右 下 左；

border：三种属性、四个方向；设置长宽为00，绘制三角形；

margin：auto（水平居中）margin collapse（边界合并，取上下的最大值）

![](https://s3.bmp.ovh/imgs/2023/01/16/344ed442e108b85e.jpg)

```
box-sizing:border-box;
```

```
display:
block
inline
inline-block:作为一个整体不会被拆散成多行 
none
```

#### 块级 vs 行级

行级元素width、height不适用；

#### 常规流

行级排版上下文Inline Formatting Context IFC

只包含行级盒子的容器会创建一个 IFC；

- 一行内水平摆放；
- 放不下换行；
- text-align决定水平对齐
- vertical-align决定垂直对齐；
- 避开float元素；

块级排版上线文 BFC

某些容器创建一个BFC

- 从上到下拜访
- 垂直margin合并
- BFC内盒子的margin不会与外面的合并
- BFC不会和浮动元素重叠

```html
<span>
123
<div>
   456 
    </div>
789
</span>

//浏览器会创建两个匿名的盒子来包裹文字123 789
```

#### Flex Box

- 控制子级盒子，摆放方向上下左右
- 摆放顺序
- 盒子的宽高
- 水平和垂直的对齐
- 是否允许折行

```html
<div class='container'>
    <div class='a'>
        A
    </div>
    <div class='b'>
        B
    </div>
    <div class='c'>
        C
    </div>
</div>

<style>
    .container{
        display:flex;
    }
    .a .b .c{
        text-align:center;
    }
</style>
```

- justify-content

- align-items
- flex-grow（有剩余空间时）、flex-shrink（容器空间不足时）、flex-bases（没有伸展或收缩）

```
flex:2 0 100px      //flex-grow  flex-shrink flrx-basis
flex:auto 			// 1 1 auto
```



#### Grid Box

二维布局

![](https://s3.bmp.ovh/imgs/2023/01/16/15323b6877861fff.jpg)

画格子->放元素

```html
grid-template-columns:100px 100px 200px;
grid-template-rows:100px 100px;
```

![](https://s3.bmp.ovh/imgs/2023/01/16/5f0d97991cfde60c.jpg)

```
grid-template-columns:30% 30% auto;
grid-template-rows:100px auto;
```

![](https://s3.bmp.ovh/imgs/2023/01/16/586f2e362b5b4b54.jpg)

```
grid-template-columns:100px 1fr 1fr;
grid-template-rows:100px 1fr;
```

##### grid line网格线

```css
.a{
    grid-row-start：1；
    grid-column-start:1;
    grid-row-end:3;
     grid-column-end:3;
}
```

```css
.a{
grid-ared:1/1/3/3;
}
```

![](https://s3.bmp.ovh/imgs/2023/01/17/8b8cda3fd5dfe496.jpg)

![](https://s3.bmp.ovh/imgs/2023/01/17/6ae71202c7d7590e.jpg)

#### Float 浮动

实现文字环绕的效果

#### 绝对定位

```
position：
static   默认值，非定位元素
relative 相对自身原本位置偏移，不脱离文档流
absolute 绝对定位，相对非static祖先元素定位
fixed 	相对于视口绝对定位
```

- relative

![](https://s3.bmp.ovh/imgs/2023/01/17/03e0b105ebcaaa55.jpg)

- absolute:相对于父级

![](https://s3.bmp.ovh/imgs/2023/01/17/4e1dcc7ba1bc7f28.jpg)

- fixed：相对于窗口定位







































