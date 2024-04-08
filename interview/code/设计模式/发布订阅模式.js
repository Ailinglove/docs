class PubSub{// 发布订阅中心
    constructor(){
        this.message = {};
        this.listener = {};
    }
    subscribe(type, callback){
        this.listener[type] = this.listener[type] || [];
        this.listener[type].push(callback)
    }
    publish(type, message){
        this.message[type] = this.message[type] || [];
        this.message[type].push(message)
    }

    notify(type){
        const messages = this.message[type];

        const listener = this.listener[type];
        listener.forEach(cb => {
            cb(messages)
        });
    }
}

class Publisher{ // 发布者
    constructor(name, pubsub){
        this.name = name;
        this.pubsub = pubsub;
    }
    publish(type, message){
        this.pubsub.publish(type, message)
    }   
}

class Subscriber{ // 订阅者
    constructor(name, pubsub){
        this.name = name;
        this.pubsub = pubsub;
    }
    subscribe(type, callback){
        this.pubsub.subscribe(type, callback)
    }
}

const TYPE_A = 'typeA'
const TYPE_B = 'typeB'
const TYPE_C = 'typeC'

const pubsub = new PubSub();
const pub1 = new Publisher('pub1', pubsub);
pub1.publish(TYPE_A,'这是pub1发布的一条typeA的消息')


const pub2 = new Publisher('pub2', pubsub);
pub2.publish(TYPE_B,'这是pub2发布的一条typeA的消息')

const sub1 = new Subscriber('sub1', pubsub);
sub1.subscribe(TYPE_A, (message)=>{
    console.log('sub1收到消息',message)
})
const sub2 = new Subscriber('sub2', pubsub);
sub2.subscribe(TYPE_B, (message)=>{
    console.log('sub2收到消息',message)
})

pubsub.notify(TYPE_A);

pubsub.notify(TYPE_B);