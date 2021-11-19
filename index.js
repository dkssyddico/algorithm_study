// let cases = [
//   [3, 10],
//   [5, 20],
//   [1, 10],
//   [1, 20],
//   [2, 15],
//   [4, 40],
//   [2, 200],
// ];

let cases = [
  [1, 1],
  [1, 2],
  [1, 3],
  [1, 4],
  [1, 5],
  [1, 6],
  [1, 7],
  [1, 8],
  [1, 9],
  [1, 10],
];

let days = cases.length;
let dp = new Array(cases.length + 1).fill(0);
// dp[i]는 i일에 얻을 수 있는 최댓값

for (let i = 0; i < cases.length; i++) {
  let startDate = i + 1; // 상담 시작날짜
  dp[startDate] = cases[i][1];
  let endDate = i + 1 + cases[i][0]; // i번째 날에 상담을 했을 때 끝나는 날짜
  if (endDate > days) {
    continue;
  }
  dp[endDate] = Math.max(dp[endDate], dp[startDate] + dp[endDate]);
  console.log(dp);
}
