# javascript
https://doocs.github.io/leetcode/lc/1/
1. `try...catch`只能捕捉到同步代码块的错误。
```javascript
try {
  setTimeout(() => {
    throw new Error('fail');
  });
} catch (e) {
  console.log(e);  // setTimeout 是异步代码，其错误无法被捕获
}
```
以上错误代码可以改造成promise或者async代码
```javascript
new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error('fail'));
  }, 1000);
}).then(() => {})
  .catch((e) => {
    console.log('报错了', e);
  });
```
```javascript
const getError = () => new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error('fail'));
  }, 1000);
});

const handleError = async () => {
  try {
    await getError();
  } catch (e) {
    console.log('报错了', e);
  }
};

handleError();
```

2. 手写简易版promise，promise有三种状态，FULFILLED、REJECTED、PENDING，且状态只能变一次  
```javascript
const p = new Promise((resolve, reject)=>{
  resolve(111);
});
p.then((res)=>{
  console.log('执行then结果啊', res); // 此时应该是111
})
```
由用法可知，promise是一个类，接受一个 执行器作为输入
::: code-group

<<< @/interview/code/promise.js[完整代码]

<<< @/interview/code/promise.js{11-12,19,27,42-45}[异步代码高亮代码]

::: tip 用法升级 异步代码

此时应该在执行then的时候当状态是pending时，把回调放到一个callbacks的数组中，调用resolve的时候都拿出来执行一遍， 上述代码高亮部分是异步代码的实现
:::

2. 节流和防抖
- 节流：在一定时间间隔内，只允许事件触发一次，限制事件触发的频率
  - 常用于处理输入框输入事件、滚动，确保用户停止输入或者停止滚动后在执行操作，避免频繁触发
- 防抖：触发事件后，等待一定时间间隔，如果这个事件间隔内没有再次触发则执行，否则重新计时。
  - 常用语页面滚动、resize、连续点击按钮等场景。确保一定时间内只执行一次，防止过于频繁的触发

- 两者区别是，节流就是限制频率的不会减少执行次数，而防抖是在小于delay时间内一直不运行，直到时间超过delay

```javascript
const log = (e) => {
  console.log('哈哈哈哈哈哈', e)
}

// 防抖，保证在这个时间段内只发生一次，事件触发后等待一定时间，若没有再次发生才执行fn
const debounce = (fn, delay) => {
  let timer = null;
  return (...arguments) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn.apply(this, arguments)
    }, delay)
  }
}

const debouncedScroll = debounce(log, 500);
document.addEventListener('scroll', (e) => debouncedScroll('ss'))
```
这段代码是对滚动时间做了防抖，表现是如果我滚动的间隔一直小于500ms的话，就一直不运行【哈哈哈哈哈哈】，直到停顿时间大于500ms
```javascript
// 节流，保证一段时间内只允许触发一次，事件先执行，等一段时间，规定时间内不再次触发即可
const throttle = (fn, delay) => {
  let throttled = false;
  return (...arguments) => {
    if (!throttled) {
      throttled = true;
      fn.apply(this, arguments);
      setTimeout(() => {
        throttled = false
      }, delay)
    }
  }
}
const throttledScroll = throttle(log, 500);
window.addEventListener('click', () => throttledScroll('sss'));
```
这段代码是对点击做了节流，表现是，如果我快速点击文档，会按照每500ms的频率输入【哈哈哈哈哈】，而不是最后一次才运行
- 使用场景
  - 防抖需要等待一段时间，确保事件不会被再次触发执行，可以用于搜索输入框；节流是一段时间内执行一次，可以用于滚动事件
  - 防抖适用于对实时性要求不高的场景，节流适合实时性要求更高的场景

::: danger 举例说明
不停的滚动页面，设置的500ms执行。
防抖只有当滚动间隔大于500ms的时候才会执行。节流则是每隔500ms执行一次，只是限制了执行的频率。
那么，如果持续滚动2s，`防抖`只执行了`1`次（最后一次），`节流`执行了`4`次（每500ms）。
:::