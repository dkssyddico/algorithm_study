/**
 * 5988
 * bigInt가 잇을 수 있어서 아래와 같이 문자열로 처리한 후 다시 숫자로 만드는 것.
 */

const fs = require('fs');

const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const N = input.shift();

for (let i = 0; i < N; i++) {
  let num = Number(String(input[i].slice(-1)));
  if (num % 2 === 1) {
    console.log('odd');
  } else {
    console.log('even');
  }
}
