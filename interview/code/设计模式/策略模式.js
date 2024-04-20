const S = function(salary) {
  return salary * 4;
};

const A = function(salary) {
  return salary * 3;
};

const B = function(salary) {
  return salary * 2;
};

const getMoney = (func, salary)=>{
  return func(salary)
}

console.log(getMoney(S, 100))