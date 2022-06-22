/**
 * 5부제: https://www.acmicpc.net/problem/10797
 */

let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
let standard = +input.shift();

let result = input[0]
  .split(' ')
  .map(Number)
  .filter((a) => a === standard).length;

console.log(result);
