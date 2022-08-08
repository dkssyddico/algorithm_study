/**
 * 1120 문자열: https://www.acmicpc.net/problem/1120
 */

let fs = require('fs');
let [a, b] = fs.readFileSync('/dev/stdin').toString().split(' ');
// let [a, b] = ['adaabc', 'aababbc'];
a = a.split('');
b = b.split('');
let gap = [];

for (let i = 0; i <= b.length - a.length; i++) {
  let diff = a.filter((el, idx) => el !== b[idx + i]).length;
  gap.push(diff);
}

console.log(Math.min(...gap));
