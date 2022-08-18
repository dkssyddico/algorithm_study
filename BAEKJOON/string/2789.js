/**
 * 2789 유학금지: https://www.acmicpc.net/problem/2789
 */

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('');

let gov = 'CAMBRIDGE';

let answer = '';

for (let i = 0; i < input.length; i++) {
  if (!gov.includes(input[i])) answer += input[i];
}

console.log(answer);
