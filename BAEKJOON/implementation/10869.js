/**
 * 사칙연산: https://www.acmicpc.net/problem/10869
 * 첫째 줄에 A+B, 둘째 줄에 A-B, 셋째 줄에 A*B, 넷째 줄에 A/B, 다섯째 줄에 A%B를 출력한다.
 */

const fs = require('fs');
const [A, B] = fs.readFileSync('/dev/stdin').toString().trim().split(' ').map(Number);

console.log(`${A + B}\n${A - B}\n${A * B}\n${Math.floor(A / B)}\n${A % B}`);
