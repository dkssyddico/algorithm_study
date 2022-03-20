/**
 * N과 M(5)
 * N개의 자연수와 자연수 M이 주어졌을 때, 아래 조건을 만족하는 길이가 M인 수열을 모두 구하는 프로그램을 작성하시오. N개의 자연수는 모두 다른 수이다.
 * N개의 자연수 중에서 M개를 고른 수열
 */

// let N = 4;
// let M = 2;
// let nums = [9, 8, 7, 1];

const fs = require('fs');
const input = fs
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n')
  .map((v) => v.split(' ').map(Number));
const [N, M] = input[0];
const nums = input[1].sort((a, b) => a - b);

let visited = new Array(N);
let result = '';
let output = [];

function dfs(count) {
  if (count === M) {
    result += `${output.join(' ')}\n`;
  }
  for (let i = 0; i < N; i++) {
    if (visited[i] === true) continue;
    visited[i] = true;
    output.push(nums[i]);
    dfs(count + 1);
    output.pop();
    visited[i] = false;
  }
}

dfs(0);

console.log(result);
