const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const N = Number(input[0]);
const towers = input[1].split(' ').map(Number);

let stack = [];
let answer = [];

for (let i = 0; i < N; i++) {
  let current = towers[i];
  // 현재 탑보다 작다면 제거해줌
  while (stack.length && towers[stack[stack.length - 1]] < current) {
    stack.pop();
  }
  // 현재 탑이 제일 크다는 것이므로 답에 0 넣기
  if (!stack.length) {
    answer.push(0);
  } else {
    answer.push(stack[stack.length - 1] + 1);
  }
  // 현재 탑을 스택에 넣어줌
  stack.push(i);
}

console.log(answer.join(' '));
