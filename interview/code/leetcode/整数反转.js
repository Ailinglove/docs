/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
  const isPositive = x>0;
  const numarr = String(x).split('')
  const newarr = isPositive? numarr.reverse(): numarr.slice(1).reverse();
  const num = newarr.join('');
  const res = isPositive? +num: 0-num;
  const mi = -(2 ** 31);
  const mx = 2 ** 31 - 1;
  if(res>mi && res<mx) return res;
  return 0;
};

console.log(reverse(1534236469));
console.log(reverse(0))
console.log(reverse(-120));

