// The maximum sum subarray problem consists in finding the maximum sum of a contiguous subsequence in an array or list of integers:

// maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4])
// // should be 6: [4, -1, 2, 1]
// Easy case is when the list is made up of only positive numbers and the maximum sum is the sum of the whole array. If the list is made up of only negative numbers, return 0 instead.

// Empty list is considered to have zero greatest sum. Note that the empty list or array is also a valid sublist/subarray.

let arr = [-2, 1, -3, 4, -1, 2, 1, -5, 4];

function solution(arr) {
  let answer;
  const isNegative = (num) => num < 0;

  if (!arr.every(isNegative)) {
    let positiveNums = arr.filter((num) => num > 0).reduce((a, b) => a + b);
    let negativeNums = arr.filter((num) => num < 0).sort((a, b) => b - a)[0];
    answer = positiveNums + negativeNums;
  } else {
    answer = 0;
  }
  return answer;
}

console.log(solution(arr));
