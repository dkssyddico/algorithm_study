/**
 * 지능형 기차: https://www.acmicpc.net/problem/2455
 */

// const input = [
//   [0, 32],
//   [3, 13],
//   [28, 25],
//   [39, 0],
// ];

let fs = require('fs');
let input = fs
  .readFileSync('/dev/stdin')
  .toString()
  .split('\n')
  .map((i) => i.split(' ').map(Number));

let max = 0;

let current = input[0][1];

for (let i = 1; i < input.length; i++) {
  current = current - input[i][0] + input[i][1];
  max = current > max ? current : max;
}

console.log(max);
