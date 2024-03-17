/**
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = function(s) {
  if(!s) return 0;
  const strs = s.split('');
  let max =0;
  let curValid = 0;
  let leftQu = [];
  strs.forEach(element => {
    // 当遇到左括号时加入栈中
    if(element==='('){
      leftQu.push(element);
    }else{
      // 有括号则判断当前是否有效
      if(leftQu.length>0){
        curValid++;
        leftQu.pop();
        max = Math.max(max, curValid)
      }else{
        curValid = 0;
      }
    }
  });
  return max*2;

};

console.log(longestValidParentheses('()(()'));