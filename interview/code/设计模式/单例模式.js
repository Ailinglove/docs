class CreateUser{
  constructor(name){
    this.name = name;
  }
  getName(){
    console.log('====>',this.name)
  }
}

const proxyCreateUser = (()=>{
  let userInstanse = null;
  return function(name){
    if(!userInstanse){
      userInstanse = new CreateUser(name);
    }
    return userInstanse
  }
})()

const a = new proxyCreateUser('ll');
const b = new proxyCreateUser('bb');

a.getName();
b.getName();

console.log(a===b) // true