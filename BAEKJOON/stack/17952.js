/**
 * 과제는 끝나지 않아!: https://www.acmicpc.net/problem/17952
 */

{
  /**
   * 한 번에 맞췄지만 시간이 많이 걸리는 것을 확인
   */

  // const N = 3;

  // let input = ['1 100 3', '0', '0'];

  const fs = require('fs');
  let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

  const N = +input.shift();

  let stack = [];

  let result = 0;
  for (let i = 0; i < N; i++) {
    let [num, score, time] = input[i].split(' ').map(Number);
    if (num) {
      // 새로운 과제
      // 과제를 바로 끝낼 수 있으면 결과에 점수를 더함
      if (time - 1 === 0) {
        result += score;
      } else {
        // 아니면 스택에 넣는다.
        stack.push([score, time - 1]);
      }
    } else {
      // 현재 과제가 없다면 이전 과제를 계속한다.
      // 이전 과제가 있다면
      if (stack.length) {
        let [pScore, pTime] = stack.pop();
        if (pTime - 1 === 0) {
          result += pScore;
        } else {
          stack.push([pScore, pTime - 1]);
        }
      }
    }
  }

  console.log(result);
}

{
  // 백준 다른 분 풀이인데 이해하면 되게 간단하게 푸셨다는 것을 알 수 있음!
  let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
  let task = parseInt(input[0]);
  let score = 0;
  let stack = [];

  for (let i = 1; i <= task; i++) {
    if (input[i][0] === '1') {
      stack.push(input[i].replace('1 ', '').split(' ').map(Number));
    }

    if (stack.length !== 0) {
      stack[stack.length - 1][1] -= 1;
      if (stack[stack.length - 1][1] === 0) score += stack.pop()[0];
    }
  }

  console.log(score);
}

{
  const fs = require('fs');
  const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

  const N = parseInt(input[0]);

  let score = 0;
  const stack = [];

  for (let i = 1; i < N + 1; i++) {
    if (input[i] === '0' && stack.length === 0) continue;
    else if (input[i] === '0') stack[stack.length - 1][2] -= 1;
    else {
      stack.push(input[i].split(' ').map((e) => parseInt(e)));
      stack[stack.length - 1][2] -= 1;
    }

    if (stack.length > 0 && stack[stack.length - 1][2] === 0) {
      score += stack[stack.length - 1][1];
      stack.pop();
    }
  }

  console.log(score);
}
