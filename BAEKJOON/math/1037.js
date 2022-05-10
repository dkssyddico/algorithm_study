/**
 * 약수
 */

let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');
const N = +input[0];
const dividers = input[1].split(' ').map(Number);
function solution(dividers) {
  return Math.min(...dividers) * Math.max(...dividers);
}

console.log(solution(dividers));
