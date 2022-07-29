/**
 * 크게만들기: https://www.acmicpc.net/problem/2812
 * 가장 큰 수가 나올 때까지 스택에 넣었다 뺐다를 반복한다.
 * 대신 K번을 다했는지 확인해줘야 한다.
 */

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const [N, K] = input[0].split(' ').map(Number);
const nums = input[1];

function solution(n, k, num) {
  let answer;
  let stack = [];

  for (let i = 0; i < n; i++) {
    while (stack.length && stack[stack.length - 1] - num[i] < 0 && k) {
      stack.pop();
      k--;
    }
    stack.push(num[i]);
  }

  // 남은 거 있으면 빼주는 작업
  answer = stack.join('').substring(0, stack.length - k);
  return answer;
}

console.log(solution(N, K, nums));
