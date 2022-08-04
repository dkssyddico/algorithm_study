/**
 * 7567 그릇: https://www.acmicpc.net/problem/7567
 */

const input = require('fs').readFileSync('/dev/stdin').toString().trim();

let last = input[0];

let answer = 10;

for (let i = 1; i < input.length; i++) {
  let plate = input[i];
  if (plate === last) {
    answer += 5;
  } else {
    last = plate;
    answer += 10;
  }
}

console.log(answer);

{
  let str = require('fs').readFileSync('/dev/stdin').toString().trim();
  let p = '';
  let sum = 0;
  for (let c of str) {
    if (c === p) sum += 5;
    else sum += 10;
    p = c;
  }
  console.log(sum);
}
