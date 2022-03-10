/**
 * RGB거리 2
 * RGB거리에는 집이 N개 있다. 거리는 선분으로 나타낼 수 있고, 1번 집부터 N번 집이 순서대로 있다.
 * 집은 빨강, 초록, 파랑 중 하나의 색으로 칠해야 한다. 각각의 집을 빨강, 초록, 파랑으로 칠하는 비용이 주어졌을 때, 아래 규칙을 만족하면서 모든 집을 칠하는 비용의 최솟값을 구해보자.
 * 1번 집의 색은 2번, N번 집의 색과 같지 않아야 한다.
 * N번 집의 색은 N-1번, 1번 집의 색과 같지 않아야 한다.
 * i(2 ≤ i ≤ N-1)번 집의 색은 i-1, i+1번 집의 색과 같지 않아야 한다.
 * 첫째 줄에 집의 수 N(2 ≤ N ≤ 1,000)이 주어진다. 둘째 줄부터 N개의 줄에는 각 집을 빨강, 초록, 파랑으로 칠하는 비용이 1번 집부터 한 줄에 하나씩 주어진다. 집을 칠하는 비용은 1,000보다 작거나 같은 자연수이다.
 * 저번과 다른 조건은 첫번째 집과 마지막 집의 색이 같으면 안된다는 것.
 * 첫번째 집과 색이 같은지를 알아야 함.
 * 마지막 집은 houses[N][2]이다.
 * 1번집이 최소가 될 수도 있고 마지막 집이 최소가 될 수도 있음.
 * 모든 경우가 다 나와야 한다고 생각.
 * 1번집이 빨간색으로 시작했을 때
 * 다른 사람 풀이를 봐도 첫번째 집을 고정시키는게 핵심인듯.
 * 영 생각이 안나서 백준에서 풀이를 보고 내가 가장 이해하기 쉬운 풀이를 들고옴..
 */

// 110 40 57 13
let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
let input = '3\n26 40 83\n49 60 57\n13 89 99'.split('\n');
let cases = +input.shift();
input = input.map((x) => x.split(' ').map((j) => +j));
let dp = Array.from(Array(cases), () => new Array(3));
console.log(dp);
let tmp = [];
for (let i = 0; i < 3; i++) {
  dp[0].fill(1001);
  dp[0][i] = input[0][i]; // 첫번째 집 색깔 고정.
  for (let j = 1; j < cases; j++) {
    if (j === cases - 1) {
      dp[j][0] = input[j][0] + Math.min(dp[j - 1][1], dp[j - 1][2]);
      dp[j][1] = input[j][1] + Math.min(dp[j - 1][0], dp[j - 1][2]);
      dp[j][2] = input[j][2] + Math.min(dp[j - 1][0], dp[j - 1][1]);
      dp[j][i] = 1000001; // 1번 집과 마지막 집이 같은 색이 되면 안되니까 해주는 포인트!
    } else {
      dp[j][0] = input[j][0] + Math.min(dp[j - 1][1], dp[j - 1][2]);
      dp[j][1] = input[j][1] + Math.min(dp[j - 1][0], dp[j - 1][2]);
      dp[j][2] = input[j][2] + Math.min(dp[j - 1][0], dp[j - 1][1]);
    }
  }
  tmp.push(Math.min(...dp[cases - 1]));
}
console.log(Math.min(...tmp));
