/**
 * 2841 외계인의 기타 연주: https://www.acmicpc.net/problem/2841
 * 보통 기타는 1번 줄부터 6번 줄까지 총 6개의 줄이 있고, 각 줄은 P개의 프렛으로 나누어져 있다. 프렛의 번호도 1번부터 P번까지 나누어져 있다.
 * 만약, 어떤 줄의 프렛을 여러 개 누르고 있다면, 가장 높은 프렛의 음이 발생한다.
 * 다음 프랫이 이전 프랫보다 높지 않으면 그냥 누르면 됨.
 * 낮은 프랫이면 원래 있던 손가락 다 떼기.
 *
 * 처음엔 무슨 문젠가 했는데 다른 사람들 풀이 방법만 읽어보니 이해가 갔다.
 * 풀이 만들고 런타임 에러 나서 뭔가 했더니 10 12 10 같은 경우의 처리를 제대로 해주지 않았다.
 * 낮은 숫자가 있으면 빼주고 봐야한다.
 */

const fs = require('fs');
let [[N, M], ...input] = fs
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n')
  .map((el) => el.split(' ').map((el2) => +el2));

// let input = [
//   [2, 8],
//   [2, 10],
//   [2, 12],
//   [2, 10],
//   [2, 5],
// ];

let stack = [[], [], [], [], [], []];

let answer = 0;

for (let i = 0; i < input.length; i++) {
  let [line, flat] = input[i];
  let currentStack = stack[line - 1];
  // 아무것도 누르고 있지 않은 경우

  if (currentStack.length === 0) {
    currentStack.push(flat);
    answer++;
  } else {
    while (currentStack.length !== 0 && flat < currentStack[currentStack.length - 1]) {
      currentStack.pop();
      answer++;
    }

    if (flat !== currentStack[currentStack.length - 1]) {
      // 음이 높은 경우
      currentStack.push(flat);
      answer++;
    }
  }
}

console.log(answer);

{
  // 코드를 줄일 수 있도록 도와준 풀이
  const fs = require('fs');
  let [[N, M], ...arr] = fs
    .readFileSync('/dev/stdin')
    .toString()
    .trim()
    .split('\n')
    .map((el) => el.split(' ').map((el2) => +el2));

  let answer = 0;
  let obj = {};

  for (let i = 0; i < arr.length; i++) {
    let [l, p] = arr[i];
    if (obj[l] === undefined) {
      obj[l] = [p];
      answer++;
    } else {
      while (obj[l][obj[l].length - 1] > p) {
        obj[l].pop();
        answer++;
      }
      if (obj[l][obj[l].length - 1] !== p) {
        obj[l].push(p);
        answer++;
      }
    }
  }
  console.log(answer);
}
