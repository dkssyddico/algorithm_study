/**
 * 타일 채우기
 * 3×N 크기의 벽을 2×1, 1×2 크기의 타일로 채우는 경우의 수를 구해보자
 * 그림으로 그려보니 홀수의 경우는 만들 수 있는 경우가 아예 없다.
 * 짝수로 하다보면 이전 짝수의 경우에서 3을 곱해주고 중간에 다르게 만들 수 있는 경우들을 더해주면 된다.
 * 왠지 집중력이 떨어져서 다른 분들의 풀이를 참고헀다..
 * https://kscodebase.tistory.com/360
 * https://amunre21.github.io/boj/5-2133/
 */

let fs = require('fs');
let input = Number(fs.readFileSync('/dev/stdin').toString());

let dp = new Array(input + 1).fill(0);

dp[2] = 3;

for (let i = 4; i <= input; i += 2) {
  dp[i] = dp[i - 2] * dp[2] + 2;
  for (let j = 4; j < i; j += 2) {
    dp[i] += dp[i - j] * 2;
  }
}

console.log(dp[input]);
