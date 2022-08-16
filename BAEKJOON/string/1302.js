/**
 * 베스트셀러: https://www.acmicpc.net/problem/1302
 */

// let total = 5;
// let books = ['top', 'top', 'top', 'top', 'kim'];
const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let total = +input.shift();
let books = input;

let obj = {};

for (let i = 0; i < total; i++) {
  if (obj[books[i]]) {
    obj[books[i]]++;
  } else {
    obj[books[i]] = 1;
  }
}

let result = [];
let max = 0;
for (let x of Object.values(obj)) {
  max = max > x ? max : x;
}

for (let x of Object.keys(obj)) {
  if (obj[x] === max) result.push(x);
}

result.sort();

console.log(result[0]);

{
  // filter로 찾는 방법 좋은듯
  const fs = require('fs');
  const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

  const N = input.shift();

  const dict = {};
  let max = 1;

  input.forEach((book) => {
    if (!dict[book]) dict[book] = 1;
    else {
      let a = dict[book];
      dict[book] = a + 1;
      if (a + 1 > max) max = a + 1;
    }
  });

  const answer = Object.keys(dict)
    .filter((book) => dict[book] == max)
    .sort();

  console.log(answer[0]);
}
