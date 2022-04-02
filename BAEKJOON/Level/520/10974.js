/**
 * 모든 순열
 */

const fs = require('fs');
const N = Number(fs.readFileSync('/dev/stdin').toString().trim());

let visited = new Array(3);
let output = [];
let result = '';

function DFS(count) {
  if (count === N) {
    result += `${output.join(' ')}\n`;
    return;
  }
  for (let i = 0; i < N; i++) {
    if (visited[i] === true) continue;
    visited[i] = true;
    output.push(i + 1);
    DFS(count + 1);
    visited[i] = false;
    output.pop();
  }
}

DFS(0);

console.log(result);
