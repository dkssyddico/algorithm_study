// const N = 5;
// const S = 0;

// const nums = [-7, -3, -2, 5, 8];

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const [N, S] = input[0].split(' ').map(Number);
const nums = input[1].split(' ').map(Number);
const visited = new Array(N).fill(0);

const output = [];
let count = 0;

function DFS(level, index) {
  let sum = output.reduce((a, b) => a + b, 0);
  if (output.length > 0 && sum === S) {
    count++;
  }
  if (level === N) {
    return;
  }
  for (let i = index; i < N; i++) {
    if (visited[i]) continue;
    visited[i] = 1;
    output.push(nums[i]);
    DFS(level + 1, i + 1);
    visited[i] = 0;
    output.pop();
  }
}

DFS(0, 0);

console.log(count);
