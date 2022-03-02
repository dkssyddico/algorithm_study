/**
 * 카드 구매하기 2
 * 최소가격 구하기
 * 10원짜리 1장을 사는 것보다 5원짜리 5장을 사는게 이득일 수 있다는 것을 명심.
 * 카드 10장을 사려면 2개짜리를 5개, 5개짜리를 2개 사도 됨.
 * ------------ 또 너무 어렵게 생각했다.
 * 곱하기를 굳이 안해도 아래 dp 점화식에 의하면 2 = 1 + 1, 3 = 2 + 1 결국 3도 1 + 1 + 1 이 되어 곱하기를 한 결과가 나온다.
 * 카드 구매하기가 최대값을 구하는 문제였다면 이건 최소값을 구하는 거여서 Math.min으로만 바꿔주면 됐던 문제..
 */

// 카드팩 1개, 2개, 3개
// let target = 10;
// let price = [1, 1, 2, 3, 5, 8, 13, 21, 34, 55];

// let target = 4;
// let price = [1, 5, 6, 7];
// 카드 하나를 살 때. 곱하기로 카드수를 만들 수도 있고, 아니면 더하기로 만들 수도 있다. 카드수를 맞춰야함. i가 카드수이자 카드 i개의 값을 나타내는 인덱스임.
// dp[i] = (target / i) * dp[i];

const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
let target = +input[0];
let price = input[1].split(' ').map(Number);

// 카드 n개를 살 때 최소값을 넣어두는 배열
let dp = new Array(target + 1).fill(0);

for (let i = 1; i <= target; i++) {
  dp[i] = price[i - 1];
}

for (let i = 1; i <= target; i++) {
  for (let j = 1; j <= i; j++) {
    dp[i] = Math.min(dp[i], dp[i - j] + dp[j]);
  }
}

console.log(dp[target]);
