/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {
  const romans = ['M', 'CM', 'D', 'CD','C','XC','L','XL', 'X', 'IX', 'V', 'IV', 'I'];
  const values = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  let res = ''
  for (let index = 0; index < values.length; index++) {
    const value = values[index];
    while(num>=value){
      res += romans[index];
      num = num - value;
    }
  }
  return res
};

console.log(intToRoman(1994))
