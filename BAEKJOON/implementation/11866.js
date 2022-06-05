/**
 * 11866번: 요세푸스 문제 0
 * https://www.acmicpc.net/problem/11866
 */

let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split(' ');

let N = Number(input[0]);
let people = [];
for (let i = 1; i < N + 1; i++) {
  people.push(i);
}

let queue = [];
let K = Number(input[1]);

let count = 0;
while (people.length) {
  let person = people.shift();
  count++;
  if (count === K) {
    queue.push(person);
    count = 0;
  } else {
    people.push(person);
  }
}

console.log(`<${queue.join(', ')}>`);
