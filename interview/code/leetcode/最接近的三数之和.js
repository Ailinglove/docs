/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 * 
 */
var threeSumClosest = function(nums, target) {
  const sortedNums = nums.sort((a,b)=>a-b);
  let res = Infinity;
  let gap = Infinity;
  for (let i = 0; i < sortedNums.length; i++) {
    const element = sortedNums[i];
    let j=i+1, k=sortedNums.length-1;
    while(j<k){
      const sum = element+sortedNums[j]+sortedNums[k];
      if (sum === target) {
        return sum;
      }
      const curGap = Math.abs(sum - target)
      if (curGap  <= gap) {
        gap = curGap;
        res = sum;
      }

      if (sum < target) {
        j++;
      } else {
        k--;
      }  
    }

  }
  return res

};

console.log(threeSumClosest([4, 0, 5, -5, 3, 3, 0, -4, -5], -2));
