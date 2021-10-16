let nums = require('fs').readFileSync('/dev/stdin').toString().split(' ');
let start = 0;
let up = nums[0];
let down = nums[1];
let goal = nums[2];
let count = 0;

while (start < goal) {
  count++;
  start += up;
  if (start === goal) {
    break;
  }
  start -= down;
}

console.log(count);
