/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
  const chs = ['abc', 'def', 'ghi', 'jkl', 'mno', 'pqrs', 'tuv', 'wxyz'];
  const tempArr = [];
  const strArr = [];
  const strRes = [];
  const dfs = (curIndex)=>{
    if(curIndex === digits.length){
      strRes.push(strArr.join(''))
      return;
    }
      const digit = digits[curIndex]

    for (let ch of chs[digit - 2]) {
      strArr.push(ch)
      dfs(curIndex+1);
      strArr.pop()
    }
  }
  if(!digits) return []
  dfs(0)
  return strRes;
};

console.log(letterCombinations('234'))