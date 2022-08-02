/**
 * 6051 시간여행: https://www.acmicpc.net/problem/6051
 * 아무도 푼 사람이 없다..
 * 여기서 풀면 답이 나오는데 실제로 테스트해보면 자꾸 타입에러가 뜬다.
 * note에 저장하는 방식이 아니라 다르게 풀어야할 거 같은데..
 */

// const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const input = ['12', 'a 5', 'a 3', 'a 7', 's', 't 2', 'a 2', 't 4', 'a 4', 's', 't 7', 's', 's'];

let N = +input[0];
let stack = [];
let note = Array(N + 1);

for (let i = 1; i <= N; i++) {
  let query = input[i].split(' ');
  if (query[0] === 'a') {
    stack.push(+query[1]);
  } else if (query[0] === 's') {
    stack.pop();
  } else {
    stack = note[+query[1] - 2];
  }
  note[i - 1] = [...stack];

  console.log(stack.length ? `${stack[stack.length - 1]}` : `-1`);
}
