const rotate = function (nums, k) {
  const spliced = nums.splice(nums.length - k, nums.length);
  nums.unshift(...spliced);
  return nums;
};

/**
 * 하나씩 오른쪽으로 이동하는 구조
 * 가장 오른쪽에 있는 건 왼쪽으로 이동한다.
 */

var rotate = function (nums, k) {
  let [l, r, numLength] = [0, nums.length - 1, nums.length];
  let newArray = [];
  for (i = numLength - 1; i >= 0; i--) {
    if (l > r) break;
    newArray[(l + k) % numLength] = nums[l];
    l += 1;
    newArray[(r + k) % numLength] = nums[r];
    r -= 1;
  }
  nums = newArray.slice();
  console.log(nums);
  return;
};

console.log(rotate([1, 2, 3, 4, 5, 6, 7], 3));
