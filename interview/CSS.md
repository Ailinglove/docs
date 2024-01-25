# CSS
## 实现水平垂直居中
1. position定位
-  `top: 0; left: 0; right: 0; bottom: 0;` 将元素的四个边缘与其最近的具有定位属性的父元素或视口的对应边缘对齐。这样，元素将被拉伸以填充整个父容器或视口。`maegin: auto` 是上下左右居中的关键，用于计算并分配剩余空间，使元素在水平和垂直方向都居中
```css
.parent {
  width: 200px;
  height: 200px;
  margin: 20px;
  position: relative;
}
.son {
  width: 100px;
  height: 100px;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
}
```

- `top: 50%; left: 50%; transform: translate(-50%, -50%);` 将元素距离上、左50%后，元素会偏下和偏右，在用transform向左和上移动元素的50%
```css
/* .parent 同上  */
 .son1 {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
```

- `top: 50%; left: 50%; margin-left: -(元素宽度/2)px; marfub-top: -(元素高度/2)px;` 意思同上
```css
/* .parent 同上  */
 .son1 {
  position: absolute;
  top: 50%;
  left: 50%;
  margin-left: -50px;
  margin-top: -50px;
}
```

2. 不用position
- flex 布局
```css
.parent{
  display: flex;
  justify-content: center;
  align-items: center;
}
```
- 通过display: tabel-cell;让子容器的内容居中
```css
.wrapper{
  display: table;
}
.parent{
  display: table-cell;
  vertical-align: middle;
  text-align: center;
}
.son{
  height: 50px;
  width: 50px;
  margin: 0 auto;
}
```

## BFC
1. 定义 BFC：Block Formatting Context 块级格式化上下文，一个BFC包含创建该上下文元素的所有自元素，但不包括创建新的BFC的字元素的内部元素

2. 触发条件
- 设置float
- 设置absolute或者fixed
- 设置 inline-block
- 设置overflow：hidden，auto，scroll
- 设置 display：table-cell、flex

3. 可以解决的问题
- 解决margin垂直方向重叠问题
![Alt text](image.png)
右侧设置了父元素开启BFC，所以避免了垂直方向的重叠问题
- 解决父元素高度塌陷问题  当有盒子设置了float时，会导致父元素高度塌陷  
  * 为父元素开启BFC，例如设置 `overflow: hidden;`
  * 添加一个div，css样式 `clear: both;`
  * after伪类
  ```css
  .wrapper3::after {
      content: '';
      clear: both;
      /* 此时还不够: 因为::after元素是行内元素 */
      display: flex;
    }
  ```