/**
 * 홀수: https://www.acmicpc.net/problem/2576
 */

let fs = require('fs');
let nums = fs.readFileSync('/dev/stdin').toString().trim().split('\n').map(Number);

const odds = nums.filter((num) => num % 2 === 1);

let sum = odds.reduce((a, b) => a + b, 0);

let min = Math.min(...odds);

console.log(odds.length > 0 ? `${sum}\n${min}` : -1);
