/**
 * 천재 수학자 성필: https://www.acmicpc.net/problem/15815
 */

let input = require('fs').readFileSync('/dev/stdin').toString().trim();

let stack = [];

// let result = 0; // 마지막을 저장해야되는거 아닐까

for (let i = 0; i < input.length; i++) {
  let x = input[i];
  if (x === '+') {
    stack.push(stack.pop() + stack.pop());
  } else if (x === '-') {
    let a = stack.pop();
    let b = stack.pop();
    stack.push(b - a);
  } else if (x === '*') {
    stack.push(stack.pop() * stack.pop());
  } else if (x === '/') {
    let a = stack.pop();
    let b = stack.pop();
    stack.push(b / a);
  } else {
    stack.push(+x);
  }
}

console.log(stack[0]);
