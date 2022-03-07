/**
 * 1 2 3 더하기 3
 * 9095번 문제와 같고 큰 수로 나눈 나머지가 답이 되어야 한다는 점만 다르다.
 */

let [count, ...nums] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let condition = 1000000009;

nums = nums.map(Number);

let max = Math.max(...nums);
let answer = '';

let dp = new Array(max + 1).fill(0);

dp[1] = 1;
dp[2] = 2;
dp[3] = 4;

for (let i = 4; i <= max; i++) {
  dp[i] = (dp[i - 1] % condition) + (dp[i - 2] % condition) + (dp[i - 3] % condition);
}

for (let i = 0; i < nums.length; i++) {
  answer += `${dp[nums[i]] % condition}\n`;
}

console.log(answer);
