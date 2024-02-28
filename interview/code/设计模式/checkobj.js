const checkobject = function() {
  this.checkName = function() {
    // 验证姓名
  };

  this.checkEmail = function() {
    // 验证邮箱
  };

  this.checkPassword = function() {
    // 验证密码
  };
};

// 每次都返回一个this有点浪费，因为每次new一个新对象都要将this的方法都复制一遍，所以改成写到对象的prototype原型上 这样，每次new方法，实例们访问的对象就是同一个了，都要通过原型依次寻找，而找到的方法是同一个

const checkObj2 = function(){};
checkObj2.prototype.checkName = function(){};
checkObj2.prototype.checkEmail = function() {};
checkObj2.prototype.checkPassword = function() {};

// 等价于checkObj2
const checkObj3 = function() {};
checkObj3.prototype = {
  checkName: function(){},
  checkEmail: function(){},
  checkPassword: function(){}
}

Function.prototype.sayHello = function(){
  console.log('hello')
}

const check1 = new checkobject();
console.log(check1.checkName())
check1.checkName.sayHello()