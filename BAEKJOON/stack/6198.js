/**
 * 6198: 옥상 정원 꾸미기
 * 현재 건물보다 오른쪽 건물이 낮으면 확인할 수 있음
 * 맨 마지막은 확인 불가 무조건 0
 * for문으로 현재 건물을 차례로 확인하되, 현재 건물에서 몇개의 왼쪽 건물들이 이 현재 건물을 볼 수 있는지 확인하는 방법이다.
 * 2493 탑 문제랑 비슷하다.
 */

// const total = 6;
// const buildings = [10, 3, 7, 4, 12, 2];

const fs = require('fs');
let input = fs
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n')
  .map((e) => +e.trim());

let stack = [];
let answer = 0;

// 현재 빌딩을 볼 수 있는 애들만을 남겨놓고 자기 자신을 빼서 더해주는 방법.
// 현재 빌딩보다 스택에 담긴 애들이 커야 왼쪽 빌딩들이 현재 건물을 볼 수 있다는 뜻이다.
for (let i = 1; i <= input[0]; i++) {
  let current = input[i];
  // 현재 빌딩보다 스택의 마지막 빌딩이 작으면 스택에 있는 것을 제거
  while (stack.length && stack[stack.length - 1] <= current) {
    stack.pop();
  }
  answer += stack.length;
  // 자기 자신 빼기
  stack.push(current);
}

console.log(answer);
