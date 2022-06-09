/**
 * 음계: https://www.acmicpc.net/problem/2920
 */

const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split(' ').map(Number);

// const input = [8, 1, 7, 2, 6, 3, 5, 4];

const ascending = [1, 2, 3, 4, 5, 6, 7, 8];
const descending = [8, 7, 6, 5, 4, 3, 2, 1];

let result = '';

if (input[0] === 1) {
  for (let i = 0; i < 8; i++) {
    if (input[i] !== ascending[i]) {
      result = 'mixed';
      break;
    }
    result = 'ascending';
  }
} else if (input[0] === 8) {
  for (let i = 0; i < 8; i++) {
    if (input[i] !== descending[i]) {
      result = 'mixed';
      break;
    }
    result = 'descending';
  }
} else {
  result = 'mixed';
}

console.log(result);

{
  const fs = require('fs');
  const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
  let input = fs
    .readFileSync(filePath)
    .toString()
    .split(' ')
    .map((num) => +num);

  let originalNum = Array.from(input);

  if (originalNum.join('') === input.sort().join('')) {
    console.log('ascending');
  } else if (originalNum.join('') === input.sort((a, b) => b - a).join('')) {
    console.log('descending');
  } else {
    console.log('mixed');
  }
}
