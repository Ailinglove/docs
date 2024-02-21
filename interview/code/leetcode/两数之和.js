function twoSum(nums, target) {
  const map = new Map();
  for (let index = 0; index < nums.length; index++) {
    const num1 = nums[index];
    const num2 = target - num1;
    if (map.has(num2)) {
      return [map.get(num2), index];
    }
    map.set(num1, index);
  }
}

const nums = [3, 2, 4],
  target = 6;

twoSum(nums, target);
// const map1 = new Map();
// map1.set('a','name');
// console.log(map1.has('as'))