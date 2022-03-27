/**
 * N과 M(11)
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
let result = [];
let output = [];

function dfs(cnt) {
  if (cnt === M) {
    result.push(output.join(' '));
    return;
  }

  for (let i = 0; i < N; i++) {
    output.push(nums[i]);
    dfs(cnt + 1);
    output.pop();
  }
}

dfs(0);

console.log([...new Set(result)].join('\n'));
