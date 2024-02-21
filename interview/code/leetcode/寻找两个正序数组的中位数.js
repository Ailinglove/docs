/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
  const nums = [];
  let i=0, j=0;
  while(i<nums1.length && j<nums2.length){
    if(nums1[i]<=nums2[j]){
      nums.push(nums1[i]);
      i++
    }else{
      nums.push(nums2[j]);
      j++
    }
  }
  console.log(nums)
  const arr = nums.concat(nums1.slice(i).length>0 ? nums1.slice(i) : nums2.slice(j));

  const length = arr.length;
  const left = Math.floor(length/2)
  const right = left-1;
  console.log(arr,left, right)

  if(length===1 || length%2 ){
    return arr[left];
  }else{
    return (arr[left]+arr[right])/2
  }
};

console.log(
  '===',
  findMedianSortedArrays(
    [
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12,
      13,
      14,
      15,
      16,
      17,
      18,
      19,
      20,
      21,
      22,
    ],
    [0,6]
  )
);

/**
 * 动态规划
 * 1. 状态容器
 * 2. 初始化
 * 3. 状态转移方程：当前的状态是由上一步或前几步决定的
 * 4. 结果
 * 
 * max 计算过程中的副产品，返回max
 */
