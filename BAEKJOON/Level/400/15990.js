/**
 * 1, 2, 3 더하기 5
 * 모든 수를 1, 2, 3의 합으로 나타내되, 같은 수를 두 번 이상 쓰면 안된다는 규칙.
 * 점화식 구하는 방법
 * 마지막 더하는 수가 1이면 그전에 2, 3으로 끝나는 경우를 합하면 된다.
 * ... + 2
 * ... + 3
 * 2일 경우에는 1, 3, 3일 경우에는 1, 2이다.
 * 그래서 각 수의 마지막이 1, 2, 3인 경우를 모두 구해줘야한다.
 */

let fs = require('fs');
let inputs = fs
  .readFileSync('/dev/stdin')
  .toString()
  .split('\n')
  .map((v) => Number(v))
  .filter((v) => v != 0);
let cases = Number(inputs[0]);
inputs.shift();
let max = Math.max(...inputs);
let arr = [
  [0, 0, 0],
  [1, 0, 0],
  [0, 1, 0],
  [1, 1, 1],
];
for (let i = 4; i <= max; i++) {
  arr[i] = [
    (arr[i - 1][1] + arr[i - 1][2]) % 1000000009,
    (arr[i - 2][0] + arr[i - 2][2]) % 1000000009,
    (arr[i - 3][0] + arr[i - 3][1]) % 1000000009,
  ];
}
for (let k = 0; k < cases; k++) {
  console.log(arr[inputs[k]].reduce((a, v) => a + v, 0) % 1000000009);
}
