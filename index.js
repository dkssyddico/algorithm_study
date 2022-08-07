/**
 * 대소문자 바꾸기: https://www.acmicpc.net/problem/2744
 */

let input = require('fs').readFileSync('/dev/stdin').toString().trim();
let answer = '';

for (let i = 0; i < input.length; i++) {
  let x = input[i].charCodeAt();
  if (x >= 65 && x <= 90) {
    answer += input[i].toLowerCase();
  } else {
    answer += input[i].toUpperCase();
  }
}

console.log(answer);
