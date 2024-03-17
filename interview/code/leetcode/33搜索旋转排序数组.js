/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
  let left = 0,
    right = nums.length - 1;

  if (target < nums[left] && target > nums[right] && nums.length > 1) return -1;
  while (left <= right) {
    while (left < right && target > nums[left]) {
      left++;
    }
    while (left < right && target < nums[right]) {
      right--;
    }

    console.log(left, right);

    if (target === nums[right]) return right;
    if (target === nums[left]) return left;
  }
  return -1;
};

console.log(search([4, 5, 6, 7, 0, 1, 2], 1));
