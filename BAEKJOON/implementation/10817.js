const fs = require('fs');
let input = fs
  .readFileSync('/dev/stdin')
  .toString()
  .split(' ')
  .map((num) => +num)
  .sort((a, b) => b - a)[1];

console.log(input);
