/**
 * 1652: https://www.acmicpc.net/problem/1652
 */

// const N = 5;

// let input = ['....X', '..XX.', '.....', '.XX..', 'X....'];

const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const N = +input.shift();
input = input.map((i) => i.split(''));

let width = 0;
let length = 0;

// 가로 구하기. X가 나오면 어떻게 하지?

for (let i = 0; i < N; i++) {
  let x = 0;
  for (let j = 0; j < N; j++) {
    if (input[i][j] === '.') {
      x++;
    } else if (input[i][j] === 'X') {
      if (x >= 2) width++;
      x = 0;
      continue;
    }
  }
  if (x >= 2) width++;
}

for (let i = 0; i < N; i++) {
  let x = 0;
  for (let j = 0; j < N; j++) {
    if (input[j][i] === '.') {
      x++;
    } else if (input[j][i] === 'X') {
      if (x >= 2) length++;
      x = 0;
      continue;
    }
  }
  if (x >= 2) length++;
}

console.log(`${width} ${length}`);
