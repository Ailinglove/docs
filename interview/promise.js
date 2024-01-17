// 三种状态
const FULFILLED = 'FULFILLED' // 成功
const REJECTED = 'REJECTED' //  失败
const PENDING = 'PENDING' // 处理中

class MyPromise{
  constructor(executor){
    this.status = PENDING;
    this.reason = undefined;
    this.value = undefined;
    this.onResolvedCallbacks = [];
    this.onRejectedCallbacks = [];

    const resolve = (value)=>{
      if(this.status=== PENDING){
        // 只有pending状态才会执行
        this.status = FULFILLED;
        this.value = value;  
        this.onResolvedCallbacks.forEach((fn=>fn()))    
      }
    }
    const reject = (reason)=>{
      if(this.status=== PENDING){
        // 只有pending状态才会执行
        this.status = REJECTED;
        this.reason = reason;  
        this.onRejectedCallbacks.forEach((fn=>fn()))    
      }    
    }
    executor(resolve, reject)
  }
  then(onFulfilled, onRejected){
    console.log('当前的执行状态', this.status)
    if(this.status === FULFILLED){
      onFulfilled && onFulfilled(this.value)
    }
    if(this.status === REJECTED){
      onRejected && onRejected(this.value);
    }
    if(this.status === PENDING){
      onFulfilled && this.onResolvedCallbacks.push(() => onFulfilled(this.value));
      onRejected && this.onRejectedCallbacks.push(() => onRejected(this.reason));
    }
  }
}

const p1 = new MyPromise((resolve, reject) => {
  // 当里边是异步代码时，执行then的状态是pending，所以需要把这个时候的回调放到数组中
  setTimeout(()=>{
    resolve(111);
  }, 1000)
})

p1.then((res)=>{
  console.log('then的结果啊', res)
})

