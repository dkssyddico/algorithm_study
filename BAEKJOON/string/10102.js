/**
 * 개표 10102: https://www.acmicpc.net/problem/10102
 */

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

let a = 0;
let b = 0;

const score = input[1].split('');

for (i = 0; i < Number(input[0]); i++) {
  if (score[i] === 'A') a++;
  else b++;
}

console.log(a === b ? 'Tie' : a > b ? 'A' : 'B');
