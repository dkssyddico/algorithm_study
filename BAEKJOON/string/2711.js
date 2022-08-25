/**
 * 2711 오타맨 고창영
 */

// let input = '4\n4 MISSPELL\n1 PROGRAMMING\n7 CONTEST\n3 BALLOON'.split('\n');
const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const T = +input.shift();

input = input.map((i) => i.split(' '));

let answer = '';

for (let i = 0; i < T; i++) {
  let word = input[i][1].split('');
  word.splice(Number(input[i][0]) - 1, 1);
  console.log(word.join(''));
}
