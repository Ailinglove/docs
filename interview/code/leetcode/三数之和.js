/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
  const sortNums = nums.sort((a,b)=>a-b);
  console.log(sortNums)
  const res = [];
  for (let index = 0; index < sortNums.length-2; index++) {
    const element = sortNums[index];
    let low = index+1, height = sortNums.length-1;
    if(element === sortNums[index-1]) continue;
    while(low<height){
      const sum = element+sortNums[low]+sortNums[height];
      if(sum<0){
        low++
      }else if(sum>0){
        height--;
      }else{
        // 找到了
              console.log('======', element, sortNums[low], sortNums[height]);

        res.push([element, sortNums[low], sortNums[height]]);
        low++;

        height--;
        while(low<height && element[low]===element[low+1]){
          low++;
        }
        while (low < height && element[height] === element[height - 1]) {
          height--;
        }
      }
    }
  }

  return res;
};

console.log(threeSum([-2, 0, 0, 2, 2]));
// console.log(threeSum([0,0,0,0]));

