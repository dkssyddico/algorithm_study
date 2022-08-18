/**
 * 9086
 */

// let num = 3;
// let input = ['ACDKJFOWIEGHE', 'O', 'AB'];
const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const num = +input.shift();

for (let i = 0; i < num; i++) {
  console.log(`${input[i][0]}${input[i][input[i].length - 1]}`);
}
