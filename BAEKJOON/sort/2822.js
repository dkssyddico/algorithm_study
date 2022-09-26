/**
 * 2822
 */

let score = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(Number);
// let score = [20, 30, 50, 48, 33, 66, 0, 64];

let max = [...score].sort((a, b) => b - a, 0).slice(0, 5);

let order = [];

for (let i = 0; i < max.length; i++) {
  if (score.includes(max[i])) {
    order.push(score.indexOf(max[i]) + 1);
  }
}

console.log(`${max.reduce((a, b) => a + b, 0)}\n${order.sort((a, b) => a - b, 0).join(' ')}`);
