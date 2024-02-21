/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function(s) {
  let i = 0;
  let len = s.length;
  let res = [];
  let isPositive = undefined;

  while(i<len){
    let ch = s[i]
    console.log(i,ch, res.length)
    if(ch===' ' && res.length===0){
      i++;
    }else if(['-','+'].includes(ch) && res.length===0 && isPositive===undefined){
      isPositive = ch==='-'?false: true;
      
      i++
    }else if(+ch<=9 && +ch >=0 && ch!==' '){
      console.log('sssss', ch)
      res.push(ch);
      i++
    }else{
      console.log('不是；', ch);

      break;

    }
  }
  let max = 2**31-1;
  let min = -(2 ** 31);
  let num = res.join('') || 0;
  console.log('--',num)
  let resnum = isPositive===false ? 0-num : num;
  if(num>max || num<min){
    return isPositive===false? min: max
  }
  console.log(isPositive, res)
  return resnum;
};

console.log(myAtoi('  +42 123'));
