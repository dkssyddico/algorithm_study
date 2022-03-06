/**
 * 합분해
 *  N과 K를 가지고 표를 그려보면
 *  dp[i][j] = dp[i - 1][j] + dp[i][j - 1]이라는 결과가 나온다.
 * 직접 경우의 수를 K가 4일 때까지 그려봤을 때 뭔가 규칙이 있다는 감이 오긴 왔는데
 * 다른 분의 블로그를 보고 확실한 패턴을 찾았다.
 * https://amunre21.github.io/boj/3-2225/
 */

// const n = 20;
// const k = 2;

let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split(' ');
let n = +input[0];
let k = +input[1];

let dp = [];
for (let i = 0; i <= k; i++) {
  dp[i] = new Array(n + 1);
}
for (let i = 0; i <= n; i++) {
  dp[1][i] = 1;
}
for (let i = 2; i <= k; i++) {
  for (let j = 0; j <= n; j++) {
    if (j === 0) {
      dp[i][j] = 1;
    } else {
      dp[i][j] = (dp[i][j - 1] + dp[i - 1][j]) % 1000000000;
    }
  }
}
console.log(dp[k][n]);
