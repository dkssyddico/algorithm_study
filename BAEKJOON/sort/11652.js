/**
 * 11652 카드
 *
 * BigInt를 사용해야 해결할 수 있는 문제
 * 2의 -62제곱까지 잇으니 당연한거였음..
 */

// https://velog.io/@ppmyor/%EB%B0%B1%EC%A4%80BOJ-11652-%EC%B9%B4%EB%93%9C-node.js-javascript

const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n')
  .map((v) => BigInt(v));

// const input = '5\n1\n2\n1\n2\n1'.split('\n').map((i) => BigInt(i));

const [, ...numbers] = input;
numbers.sort((a, b) => (a < b ? -1 : a > b ? 1 : 0));

let count = 1;
let maxValue = numbers[0];
let maxCount = 0;

// for문 말고도 배열 함수를 이용하면 편해질 때가 있음
numbers.forEach((v, i) => {
  let next = numbers[i + 1];
  if (v === next) {
    count++;
  } else {
    count = 1;
  }

  if (count > maxCount) {
    maxCount = count;
    maxValue = v;
  }
});

console.log(String(maxValue));

{
  // const input = '5\n1\n2\n1\n2\n1'.split('\n').map(Number);
  const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(Number);

  const N = input.shift();

  const check = new Array(100001).fill(0);

  for (let i = 0; i < N; i++) {
    check[input[i]]++;
  }

  let max = Math.max(...check);

  console.log(check.indexOf(max));
}
