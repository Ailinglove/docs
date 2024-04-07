// const EventEmitter = require('events');
// console.log(EventEmitter)

// const myEmitter = new EventEmitter();

// const callback = ()=>{
//     console.log('=====》1被触发')
// }
// const callback2 = ()=>{
//     console.log('=====》2被触发')
// }
// myEmitter.on('eventChange', callback);
// myEmitter.on('eventChange', callback2);

// myEmitter.emit('eventChange')
// myEmitter.emit('eventChange')
// myEmitter.emit('eventChange')
// myEmitter.emit('eventChange')

class MyEmitter{
    constructor(){
        this.events = {};
        // events = {
        //   'eventsName': [f1, f2]
        // }
    }

    on(eventName, callback){
        if(!this.events[eventName]){
            this.events[eventName] = []
        }
        this.events[eventName].push(callback)
    }

    emit(eventName, ...args){
        const callbacks = this.events[eventName];
        console.log('args', args, callbacks)
        callbacks.forEach(callback => {
            callback()
        });

    }

    removeEventLister(eventName, handler){
        if(!this.events[eventName]){
            return
        }
        this.events[eventName] = this.events[eventName].filter(callback=>callback!==handler)
    }

    addEventLister(eventName, handler){
        const callbacks = this.events[eventName] || [];
        callbacks.push(handler);
        this.events[eventName] = callbacks
    }
    off(eventName, handler){
        this.removeEventLister(eventName,handler)
    }
    once(eventName, handler){
        const fn = ()=>{
            handler();
            this.off(eventName, handler)
        }
        const callbacks = this.events[eventName] || [];

        console.log('sssss', callbacks)
        callbacks.push(fn)

        console.log('=s=s==s=s=s', callbacks)
        this.events[eventName]=callbacks
    }
}



const myEmitter = new MyEmitter();

const callback = ()=>{
    console.log('=====》1被触发')
}
const callback2 = ()=>{
    console.log('=====》2被触发')
}
myEmitter.on('eventChange', callback);
myEmitter.once('eventChange', callback2);
myEmitter.on('eventChange', ()=>{
    console.log('这是一个自己写的callback')
});
myEmitter.emit('eventChange', '参数啊', 'shhhhhh')

myEmitter.removeEventLister('eventChange', callback)
myEmitter.emit('eventChange')
myEmitter.emit('eventChange')
myEmitter.emit('eventChange')