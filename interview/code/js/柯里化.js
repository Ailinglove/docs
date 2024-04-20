function cur(){
  const args = Array.prototype.slice.call(arguments);
  const _adder = function(){
     args.push(...arguments);
     return _adder;
  }

  _adder.toString = function(){
    return args.reduce((a,b)=>{
      return a+b;
    },0)
  }

  return _adder
}

const b = cur(1,2,3);
const c = cur(1)(2)(3)(4)(5);

// console.log('===>',b.toString(),c.toString())




for (var i = 1; i <= 5; i++) {
  ((i)=>{
    setTimeout(function timer() {
      console.log(i);
    }, i * 1000);
  })(i)
}
