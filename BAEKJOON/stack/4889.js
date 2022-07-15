/**
 * 안정적인 문자열: https://www.acmicpc.net/problem/4889
 */

// let input = ['{{}}', '}{', '{}{}{}', '{{{}', '}}}{', '}}{{'];

const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
input.pop();

for (let i = 0; i < input.length; i++) {
  let x = input[i].split('');
  let stack = [];
  let answer = 0;
  for (let j = 0; j < x.length; j++) {
    let y = x[j];
    if (y === '{') {
      stack.push(y);
    } else {
      // } 일 때
      if (!stack.length) {
        answer++;
        stack.push('{');
      } else if (stack[stack.length - 1] === '{') {
        stack.pop();
      }
    }
  }

  console.log(`${i + 1}. ${answer + stack.length / 2}`);
}
