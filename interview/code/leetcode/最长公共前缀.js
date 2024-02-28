/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
  const len = strs.reduce((r, s) => Math.min(r, s.length), Infinity);
  let firstStr = strs[0];
  let maxPrefix = '';
  // for (let index = 0; index < firstStrArr.length; index++) {
  //   const element = firstStrArr[index];
  //    const sets = new Set();
  //    sets.add(element)
  //    for (let j = 1; j < strs.length; j++) {
  //       if (strs[j][index] === element) {
  //         sets.add(strs[j][index]);
  //       } else {
  //         return maxPrefix;
  //       }
  //    }
  //    if(sets.size===1){
  //     maxPrefix+=element;
  //   }
  // }
  for(let i = len; i>0; i--){
    let target = firstStr.slice(0, i);
    if(strs.every(s=>s.slice(0,i)===target)){
      return target;
    }
  }
  return maxPrefix
   
  
};

console.log(longestCommonPrefix(['flower', 'flow', 'flight']));
