/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function(nums) {
  const sortNums = nums.sort((a,b)=>a-b);
  const len = nums.length;
  console.log(sortNums);
  const res = []; // 存储所有的排列
  const tmp = [];
  let resPailie = null;
  const cur = nums.join('');
  const dfs = (n)=>{
    console.log(n, tmp)
    if(n===len){
      // console.
      const p = tmp.join();
      console.log(p);
      if(p>cur && !resPailie){
        resPailie = p;
      }
      return;
    }

    for(let i=n; i<len;i++){
      tmp.push(sortNums[i]);
      dfs(n+1);
      tmp.pop();
      console.log('======', tmp)

    }
    
  }
  dfs(0);
};

console.log(nextPermutation([1,2,3]))