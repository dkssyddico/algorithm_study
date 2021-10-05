var sortedSquares = function (nums) {
  nums = nums
    .map((num) => {
      return Math.pow(num, 2);
    })
    .sort((a, b) => a - b);
  return nums;
};
