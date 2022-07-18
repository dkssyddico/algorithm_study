/**
 * 괄호 끼어넣기: https://www.acmicpc.net/problem/11899
 */

const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim();

let stack = [];

for (let x of input) {
  if (x === '(') {
    stack.push(x);
  } else {
    if (stack[stack.length - 1] === '(') {
      stack.pop();
    } else {
      stack.push(x);
    }
  }
}

console.log(stack.length);
