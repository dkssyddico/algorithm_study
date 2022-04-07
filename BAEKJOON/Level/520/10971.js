/**
 * 외판원 순회 2
 * 외판원 순회 1을 먼저 풀어봐야할 듯 하다.
 * 아직 풀이가 제대로 이해되지 않음.
 * 답안 출처는 백준에서 가져온 것
 * https://www.acmicpc.net/source/40558134
 */

let N = 4;
let cost = [
  [0, 10, 15, 20],
  [5, 0, 9, 10],
  [6, 13, 0, 12],
  [8, 8, 9, 0],
];

// const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
let input = '4\n0 10 15 20\n5 0 9 10\n6 13 0 12\n8 8 9 0';
input = input.split('\n');

const city = input.shift();
const costs = input.map((v) => v.split(/\s+/).map(Number));

console.log(getMinCost(costs));

function getMinCost(costs) {
  const { length } = costs;
  const visited = new Array(length);
  let minCost = 10000000;

  backtracking(0, 0, 0, 0);

  return minCost;

  function backtracking(depth, start, current, cost) {
    let currentWeight = costs[current][start];

    if (depth === length - 1 && currentWeight) {
      minCost = Math.min(minCost, cost + currentWeight);
      return;
    }

    for (let i = 1; i < length; i++) {
      currentWeight = costs[current][i];
      if (!visited[i] && currentWeight) {
        if (cost + currentWeight < minCost) {
          visited[i] = true;
          backtracking(depth + 1, start, i, cost + currentWeight);
          visited[i] = false;
        }
      }
    }
    return minCost;
  }
}
