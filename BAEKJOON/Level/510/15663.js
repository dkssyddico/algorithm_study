/**
 * N과 M(9)
 * 나온 조합을 중복되지 않도록 해주는 것
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

let visited = new Array(N);
let result = [];
let output = [];

function dfs(cnt) {
  if (cnt === M) {
    result.push(output.join(' '));
    return;
  }

  for (let i = 0; i < N; i++) {
    if (visited[i] === true) continue;
    visited[i] = true;
    output.push(nums[i]);
    dfs(cnt + 1);
    visited[i] = false;
    output.pop();
  }
}

dfs(0);

console.log([...new Set(result)].join('\n'));
