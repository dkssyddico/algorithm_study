/**
 * 문자열 폭팔: https://www.acmicpc.net/problem/9935
 * 마지막 문자가 열쇠다.
 * 처음에 while문 사용해서 푸는 방법은 시간 초과
 * 백준 다른 분들 풀이 보니 다 splice, slice를 이용하심. 이게 정석인듯
 */

const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

let string = input[0];
let code = input[1];

let stack = [];

for (let i = 0; i < string.length; i++) {
  let current = string[i];
  stack.push(current);
  if (current === code[code.length - 1]) {
    let last = stack.slice(-code.length);
    if (last.join('') === code) stack.splice(-code.length);
  }
}

console.log(stack.length ? stack.join('') : 'FRULA');
