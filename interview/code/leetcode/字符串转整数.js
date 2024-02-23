/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function(s) {
  let i = 0;
  let len = s.length;
  let res = [];
  let isPositive = undefined;

  const isPrefix = (ch) => ['-', '+'].includes(ch);

  while(i<len){
    let ch = s[i]
    console.log(i,ch, res.length)
    if(ch===' '){
      if(res.length) break
      i++;
    }else if(isPrefix(ch) && res.length===0){
      res.push(ch)
      i++
    }else if ((+ch <= 9 && +ch >= 0)) {
      res.push(ch);
      i++;
    } else {
      break;
    }
  }
  let max = 2**31-1;
  let min = -(2 ** 31);
  let num = res.join('') || 0;
  console.log(res, res.join(''))

  if(num>max || num<min){
    return res[0]==='-'? min: max
  }

  return isNaN(num)? 0: num;
};

console.log(myAtoi('  +-123222'));
