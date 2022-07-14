/**
 * 단어순서 뒤집기: https://www.acmicpc.net/problem/12605
 * array reverse 하는 방법도 있지만 저번 방법 복습겸 ㅎㅎ
 */

// const N = 3;

// let input = ['this is a test', 'foobar', 'all your base'];

const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

let N = +input.shift();

input = input.map((i) => i.split(' '));

let stack = Array.from({ length: N }, () => new Array());

for (let i = 0; i < N; i++) {
  let example = input[i];
  for (let j = example.length - 1; j >= 0; j--) {
    // console.log('i', i, 'j', j);
    stack[i].push(example[j]);
  }
}

stack.forEach((s, i) => {
  console.log(`Case #${i + 1}: ${s.join(' ')}`);
});
