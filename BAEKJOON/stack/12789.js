/**
 * 도키도키 간식 드리미: https://www.acmicpc.net/problem/12789
 * 순서에 안맞으면 구석(stack), 맞으면 빼기
 * 스택에 남은 사람이 있으면 Sad 임
 * 두개 스택에서 왔다갔다할 수 있어야함..
 * 다음 번호를 찾을 때까지 while 문을 돌려주는 것이 관건.
 * slice나 여러방법을 시도했는데 계속 찾아주는게 중요한 문제라 통하지 않음.
 * 백준 다른 사람 풀이에서 가져왔음.
 */

// const fs = require('fs');
// let [total, ...input] = fs
//   .readFileSync('/dev/stdin')
//   .toString()
//   .trim()
//   .split('\n')
//   .map((el) => el.split(' ').map((el2) => +el2));

// total = +total;
let total = 5;
let people = [5, 4, 2, 3, 1];

function solution(num, people) {
  const stack = [];

  for (let i = 1; i <= num; i++) {
    while (true) {
      if (stack[stack.length - 1] === i) {
        stack.pop();
        break;
      }
      // 사이드 줄 검토했는데도 없고 원래 줄에서도 뺄게 없다면 함수가 끝남
      if (people.length === 0) {
        return console.log('Sad');
      }
      const person = people.shift();
      if (person === i) {
        break;
      }
      stack.push(person);
    }
  }
  console.log(stack.length > 0 ? 'Sad' : 'Nice');
}

solution(total, people);
