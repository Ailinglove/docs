# ajax XMLHttprequest httpXML 常见面试题

## ajax

1. 什么是ajax？
ajax 是一种用于创建快速动态网页的技术，通过在后台与服务器进行少量数据交换，ajax可以实现网页的异步更新。
2. 为什么要用ajax？

ajax最大的特点：局部刷新
3. ajax的实际应用是什么？


## XMLHttpRequest
1. 是什么？
XMLHttpRequest对象用于和服务器交互，可以在不刷新页面的情况下请求数据，在ajax编程中被大量使用。
2. 常用方法和属性
- 构造函数 new XMLHttpRequest(); 在调用任何一个XMLHttpRequest的方法前，都必须实例化一个XMLHttpRequest对象
- open(method, url); 创建一个链接
- send(data); 发送一个请求
- onreadstatechange 监听请求状态 readState 的变化
  - 0 创建了一个XMLHttpRequest实例，没调用open
  - 1 调用open 没调用send
  - 2 调用send 
  - 3 响应数据加载中
  - 4 数据传输完成
- status 请求的响应状态
  - 200 代表请求成功
## HTTP
1. 常见状态码
- 信息响应 100-199
- 成功响应 200-299
- 重定向消息 300-399
  - 3xx 重定向
  - 304 子上次请求后
- 客户端错误响应 400-499
  - 400 服务器不理解请求的语法
  - 403 拒绝请求
  - 404 找不到网页
- 服务端错误响应 500-599

2. http协议 请求头和响应头都有什么？
3. 什么事XML？
