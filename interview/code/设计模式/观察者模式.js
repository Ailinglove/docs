/**
 * 观察者模式的对象：一个被观察者，多个观察者。观察者可以主动加入被观察列表，也可以被动加入
 */

class Subject{
    // 被观察者
    constructor(){
        this.observerList = []
    }

    addObserver(observer){
        this.observerList.push(observer)
    }

    removeObserver(observerName){
        const index = this.observerList.findIndex(item=>item.name === observerName)
        this.observerList.splice(index,1)
    }

    notify(message){
        const observerList = this.observerList;
        observerList.forEach(observer=>{
            observer.notified(message)
        })
    }
}

class Observer{
    constructor(name, subject){
        this.name = name;
        if(subject){
            subject.addObserver(this)
        }
    }
    notified(message){
        console.log( `====》观察者${this.name}收到了消息【${message}】`)
    }
}

const subject = new Subject();// 被观察者
const ob1= new Observer('ob1', subject);
const ob2= new Observer('ob2');

// ob2被动加入到被观察者列表中
subject.addObserver(ob2);

subject.notify('发布了一条消息，请接收')
