/**
 * 좋은 단어: https://www.acmicpc.net/problem/3986
 */

// let input = ['ABBABB'];

const fs = require('fs');
let [N, ...input] = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

let answer = 0;
function solution(string) {
  let stack = [];
  for (let x of string) {
    if (stack.length === 0) {
      stack.push(x);
    } else {
      if (stack[stack.length - 1] === x) {
        stack.pop();
      } else {
        stack.push(x);
      }
    }
  }
  return stack.length > 0 ? false : true;
}

for (let i = 0; i < input.length; i++) {
  let result = solution(input[i]);
  if (result) answer++;
}

console.log(answer);
