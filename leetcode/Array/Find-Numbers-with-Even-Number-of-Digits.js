let nums = [555, 901, 482, 1771];

function solution(nums) {
  let answer = 0;
  for (let i = 0; i < nums.length; i++) {
    let num = nums[i];
    if ((num > 9 && num <= 99) || (num > 999 && num <= 9999) || num === 100000) answer++;
  }
  return answer;
}

console.log(solution([12, 345, 2, 6, 7896]));

// 문자열 풀이
function solution2(nums) {
  let answer = 0;
  for (let i = 0; i < nums.length; i++) {
    let num = nums[i].toString().length;
    if (num % 2 === 0) answer++;
  }
  return answer;
}

// for (let i = 0; i < nums.length; i++) {
//   let num = nums[i];
//   let count = 0;
//   while (num >= 10) {
//     num = num / 10;
//     count++;
//   }
//   if (count % 2 === 1) {
//     answer++;
//   }
// }
