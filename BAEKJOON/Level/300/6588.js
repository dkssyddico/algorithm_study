/**
 * 골드바흐의 추측
 * 주어진 숫자 중 가장 큰 숫자를 최대값으로 해서 에라토스테네스의 체로 이용해 소수 배열을 만든다.
 * 3부터 시작해서 주어진 숫자를 빼주고 그 결과가 소수 홀수인지 찾고 아니면 하나씩 증가해준다
 * 예, 3, 5, 7.. 이렇게
 * 4 = 1 + x 라고 생각하는 것인데 4 - 1 = x 가 되는 것처럼 가끔 빼줌으로써 쉽게 답을 구할 수 있다.
 */

// let nums = [8, 20, 42, 0];
const nums = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(Number);

// 최대값 구하기
let max = Math.max(...nums);
let answer = '';

// 에라토스테네스의 체로 소수 배열 구하기
let primeNumArr = new Array(max + 1).fill(1);

for (let i = 2; i <= max; i++) {
  if (primeNumArr[i] === 1) {
    for (let j = i + i; j <= max; j += i) {
      primeNumArr[j] = 0;
    }
  }
}

for (let i = 0; i < nums.length; i++) {
  let num = nums[i];
  for (let j = 3; j < primeNumArr.length; j++) {
    // 소수이면
    if (primeNumArr[j] === 1) {
      let left = num - j;
      if (primeNumArr[left] === 1) {
        answer += `${num} = ${j} + ${left}\n`;
        break;
      }
    }
  }
}

console.log(answer);
