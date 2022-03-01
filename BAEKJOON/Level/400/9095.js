/**
 * 1, 2, 3 더하기
 * 전부터 생각했지만 이런 더하기가 나오는 문제는 되려 뺄셈으로 접근을 해야한다.
 * 4의 경우를 구하는 것도 3에 1을 더한 것, 2에 2를 더하고, 1에 3을 더한 것이 된다.
 * 이렇게 X(n) = X(n-1) + X(n-2) + X(n-3) 이라는 점화식을 구할 수 있다.
 */

let [count, ...nums] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

nums = nums.map(Number);

let max = Math.max(...nums);
let answer = '';

let dp = new Array(max + 1).fill(0);

dp[1] = 1;
dp[2] = 2;
dp[3] = 4;

for (let i = 4; i <= max; i++) {
  dp[i] = dp[i - 1] + dp[i - 2] + dp[i - 3];
}

for (let i = 0; i < nums.length; i++) {
  answer += `${dp[nums[i]]}\n`;
}

console.log(answer);
