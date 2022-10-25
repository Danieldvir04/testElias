var singleNumber = function (nums) {
  let map = new Map();

  for (let i = 0; i < nums.length; i++) {
    if (map.has(nums[i])) {
      map.delete(nums[i]);
    } else {
      map.set(nums[i], 1);
    }
  }

  for (const x of map.keys()) {
    return x;
  }
};
