// const searchInsert = function (nums, target) {
//   let answer = 0;
//   let left = 0;
//   let right = nums.length - 1;
//   while (left <= right) {
//     let mid = Math.floor((left + right) / 2);
//     if (nums[mid] === target) {
//       return mid;
//     } else if (nums[mid] > target) {
//       right = mid - 1;
//     } else {
//       left = mid + 1;
//     }
//   }
//   answer = left;
//   return answer;
// };

/**
 * 양 옆의 값을 구해야 함 .
 * x target y 라 하면
 * x < target < y
 * 가장 작은 값이나 가장 큰 값.
 */

const searchInsert = function (nums, target) {
  let left = 0;
  let right = nums.length - 1;
  let middle;

  while (left <= right) {
    middle = Math.floor((left + right) / 2);
    if (nums[middle] === target) return middle;
    else if (nums[middle] < target) {
      left = middle + 1;
    } else {
      right = middle - 1;
    }
  }

  return left;
};

console.log(searchInsert([1, 3, 5, 6], 0));
