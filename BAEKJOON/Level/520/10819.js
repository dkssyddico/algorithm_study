/**
 * 차이를 최대로
 */

const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

let N = +input.shift();
let nums = input.shift().split(' ').map(Number);
let visited = new Array(N);
let output = [];
let result = [];

function DFS(count) {
  if (count === N) {
    result.push(`${output.join(' ')}`);
    return;
  }
  for (let i = 0; i < N; i++) {
    if (visited[i] === true) continue;
    visited[i] = true;
    output.push(nums[i]);
    DFS(count + 1);
    visited[i] = false;
    output.pop();
  }
}

DFS(0);

function solve() {
  let answer = -Infinity;
  for (let i = 0; i < result.length; i++) {
    let sum = 0;
    let arr = result[i].split(' ');
    for (let j = 1; j < N; j++) {
      sum += Math.abs(arr[j] - arr[j - 1]);
    }
    answer < sum ? (answer = sum) : answer;
  }
  console.log(answer);
}

solve();
