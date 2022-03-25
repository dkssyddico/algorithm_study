/**
 * N과 M(10)
 * 중복되는 수열 X
 */

const fs = require('fs');
const input = fs
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n')
  .map((v) => v.split(' ').map(Number));
const [N, M] = input[0];
const nums = input[1].sort((a, b) => a - b);

// let N = 4;
// let M = 2;
// let nums = [9, 7, 9, 1].sort((a, b) => a - b);

let result = [];
let output = [];

function dfs(index, cnt) {
  if (cnt === M) {
    result.push(output.join(' '));
    return;
  }

  for (let i = index; i < N; i++) {
    output.push(nums[i]);
    dfs(i + 1, cnt + 1);
    output.pop();
  }
}

dfs(0, 0);

console.log([...new Set(result)].join('\n'));
