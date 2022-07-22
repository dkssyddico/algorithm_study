/**
 * 화학식량: https://www.acmicpc.net/problem/2257
 * 먼저 알파벳은 원자를 나타내는 것으로 H는 수소(Hydrogen), C는 탄소(Carbon), O는 산소(Oxygen) 원자를 뜻한다.
 * 또한 원자를 나타내는 알파벳 뒤에 따르는 숫자는 그 원자가 몇 개 포함되어 있는지를 뜻한다.
 * 수소 원자 하나의 질량은 1, 탄소 원자 하나의 질량은 12, 산소 원자 하나의 질량은 16이다. 물은 두 개의 수소 원자와 한 개의 산소 원자로 이루어져 있으므로 물의 화학식량은 18이다.
 *
 * 괄호 안에 괄호가 계속 나오면??
 * 알파벳이 나오면 알파벳에 대응하는 숫자를 넣고 숫자가 나오면 스택에 있는 마지막 숫자에 곱해주고 나중엔 다 더하면 되는 건 알겠음
 * https://js1jj2sk3.tistory.com/79 이 분 코드 뜯어보면서 풀 수 있었다.
 * 괄호가 나오면 스택에 새로 쌓아주고 이전에 계산한 숫자를 변수에 저장해서 숫자가 나오면 곱해줄 수 있도록 한다!
 */

const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim();

// let input = '((CH)2(OH2H)(C(H))O)3'.split('');

let stack = new Array(100).fill(0);
let tmp = 0;
let cnt = 0;

for (let i = 0; i < input.length; i++) {
  let x = input[i];
  if (x === '(') {
    stack[++cnt] = 0;
  } else if (x === 'H') {
    tmp = 1;
    stack[cnt] += 1;
  } else if (x === 'C') {
    tmp = 12;
    stack[cnt] += 12;
  } else if (x === 'O') {
    tmp = 16;
    stack[cnt] += 16;
  } else if (x === ')') {
    tmp = stack[cnt];
    stack[--cnt] += tmp;
  } else {
    stack[cnt] += tmp * (+x - 1);
  }
}

console.log(stack[0]);
