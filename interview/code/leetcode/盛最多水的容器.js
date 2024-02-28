/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
  const getAreaofTixing = (short, long, height)=>{
    const a = short<long? short: long;
    return a*height;
  }

  let max = 0;
  let i=0, j= height.length-1;
  while(i<j){
    const left = height[i];
    const right = height[j];
    const area = getAreaofTixing(left, right, j-i);
    max = Math.max(max, area);
    left>right? j--: i++;
  }
  return max;
};
// const height = [1, 8, 6, 2, 5, 4, 8, 3, 7];
const height = [1]
console.log(maxArea(height))
