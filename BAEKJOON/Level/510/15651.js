/**
 * N과 M(3)
 */

// const input = [4, 3];
const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split(' ').map(Number);
const N = input.shift();
const M = input.shift();

const visited = new Array(N);
let output = [];
let result = '';

function dfs(cnt) {
  if (cnt === M) {
    result += `${output.join(' ')}\n`;
    return;
  }

  for (let i = 0; i < N; i++) {
    output.push(i + 1);
    dfs(cnt + 1);
    output.pop();
  }
}

dfs(0);
console.log(result.trim());
