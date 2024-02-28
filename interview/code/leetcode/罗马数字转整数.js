/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
  const d = {
    'I': 1,
    'V': 5,
    'X': 10,
    'L': 50,
    'C': 100,
    'D': 500,
    'M': 1000
  }
  // let sumNum = 0;
  // let i=0;
  // while(i<s.length){
  //   const left = s[i], right = s[i+1];
  //   if(map[right]<=map[left] || !map[right]){
  //     sumNum+=map[left];
  //     i++
  //   }else{
  //     sumNum += (map[right]-map[left]);
  //     i+=2;
  //   }
  // }
  // return sumNum
  let ans = d[s[s.length - 1]];
  for (let i = 0; i < s.length - 1; ++i) {
    const sign = d[s[i]] < d[s[i + 1]] ? -1 : 1;
    ans += sign * d[s[i]];
  }
  return ans
};
console.log(romanToInt('MCMXCIV'));
