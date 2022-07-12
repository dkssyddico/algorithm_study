/**
 * 17608 막대기: https://www.acmicpc.net/problem/17608
 * 반대로 찾아나가면 되는 쉬운 문제였다 ;ㅅ;
 */

// let input = [6, 7, 8, 6, 4, 6];

const fs = require('fs');
let input = fs
  .readFileSync('/dev/stdin')
  .toString()
  .split('\n')
  .map((e) => +e);

input.shift();

let result = 0;

let max = 0;
for (let i = input.length - 1; i >= 0; i--) {
  if (input[i] > max) {
    max = input[i];
    result++;
  }
}

console.log(result);
