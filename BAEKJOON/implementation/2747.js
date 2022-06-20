/**
 * 2747 피보나치수
 */

let fs = require('fs');
let input = Number(fs.readFileSync('/dev/stdin').toString().trim());

let first = 0;
let second = 1;

// const input = 3;
let count = 1;

let result = 0;

while (count !== input) {
  result = first + second;
  first = second;
  second = result;
  count++;
}

console.log(input === 1 ? 1 : result);

{
  // 다른 분 풀이: 배열로 푸는 게 깔끔해보인다.
  const inputData = require('fs').readFileSync('/dev/stdin').toString().trim();

  solution();
  function solution() {
    let answer = new Array(inputData + 1);
    answer[0] = 0;
    answer[1] = 1;

    for (let i = 2; i <= inputData; i++) {
      answer[i] = answer[i - 2] + answer[i - 1];
    }
    console.log(answer[inputData]);
  }
}
