/**
 * 给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串 s ，判断字符串是否有效。

有效字符串需满足：

左括号必须用相同类型的右括号闭合。
左括号必须以正确的顺序闭合。
每个右括号都有一个对应的相同类型的左括号。
 

示例 1：

输入：s = "()"
输出：true
示例 2：

输入：s = "()[]{}"
输出：true
示例 3：

输入：s = "(]"
输出：false
 */


/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  const chObj = {
    ')':'(',
    ']':'[',
    '}':'{'
  }
  const leftQu = ['(','[','{'];
  const rightQu = [')',']','}']
  const strArr = s.split('');
  const res = [];

  for (let i = 0; i < strArr.length; i++) {
    const element = strArr[i];
    // 左括号则压入栈，有括号则比对当前最后一个是否匹配，匹配则弹出继续下一个，不匹配则返回false
    if (leftQu.includes(element)) {
      res.push(element);
    }else{
      console.log(element, chObj[element], res[res.length - 1]);
      if(chObj[element] ===  res[res.length-1]){
        res.pop();
      }else{
        return false;
      }
    }
  }
  console.log(res)
  return res.length===0;

};

console.log(isValid('(]'));