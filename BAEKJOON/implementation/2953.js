/**
 * 2953
 */

// const input = [
//   [5, 4, 4, 5],
//   [5, 4, 4, 4],
//   [5, 5, 4, 4],
//   [5, 5, 5, 4],
//   [4, 4, 4, 5],
// ];

let fs = require('fs');
let input = fs
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n')
  .map((i) => i.split(' ').map(Number));

const result = [];

input.forEach((i) => result.push(i.reduce((a, b) => a + b, 0)));

let max = Math.max(...result);
let win = result.indexOf(max);

console.log(`${win + 1} ${max}`);
