function sortedSquares(nums) {
  nums = nums.map((n) => n * n);
  let result = new Array(nums.length);
  let k = result.length - 1;
  // 투포인터
  let l = 0;
  let r = nums.length - 1;
  while (l <= r && k >= 0) {
    if (nums[l] > nums[r]) {
      result[k] = nums[l];
      l++;
    } else {
      result[k] = nums[r];
      r--;
    }
    k--;
  }
  return result;
}

console.log(sortedSquares([-4, -1, 0, 3, 10]));
