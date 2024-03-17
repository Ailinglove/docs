/**
 * @param {number} n
 * @return {string[]}
 * 输入：n = 3
 * 输出：["((()))","(()())","(())()","()(())","()()()"]
 */
// 可以生出左边枝叶的条件是：左括号剩余数量>0
// 可以生出右边枝叶的条件是：左边剩余小于右边剩余
var generateParenthesis = function(n) {
  const leftBrackets = n, rightBracket = n;
  const leftStr = '(', rightStr = ')';
  const res = [];
  let tmp = [];
  const dfs = (leftNum, rightNum)=>{
    if(leftNum===0 && rightNum===0){
      console.log(leftNum, rightNum,tmp.join(''));
      //tmp=[];
      res.push(tmp.join(''));
      return;
    }
    if(leftNum>0){
      // 左边节点
      tmp.push(leftStr);
      dfs(leftNum - 1, rightNum);
      tmp.pop();
    }
    if(rightNum>0 && leftNum<rightNum){
      // 右边节点
      tmp.push(rightStr);
      dfs(leftNum, rightNum - 1);
      tmp.pop();
    }     
  }

  dfs(n,n);
  return res;
};

console.log(generateParenthesis(3))
