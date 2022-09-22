/**
 * 10867
 */

const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
// const input = '10\n1 4 2 3 1 4 2 3 1 2'.split('\n');

const N = +input.shift();

const nums = input[0]
  .split(' ')
  .map(Number)
  .sort((a, b) => a - b);
const set = new Set(nums);

let answer = [...set].sort((a, b) => a - b);

console.log(answer.join(' '));
