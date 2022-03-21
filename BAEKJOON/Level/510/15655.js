/**
 * N과 M(6)
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
// let nums = [9, 8, 7, 1].sort((a, b) => a - b);

let result = '';
let output = [];

function dfs(idx, cnt) {
  if (cnt === M) {
    result += `${output.join(' ')}\n`;
    return;
  }

  for (let i = idx; i < N; i++) {
    output.push(nums[i]);
    dfs(i + 1, cnt + 1);
    output.pop();
  }
}

dfs(0, 0);

console.log(result);
