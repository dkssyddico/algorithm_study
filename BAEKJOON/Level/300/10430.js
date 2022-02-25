// 첫째 줄에 (A+B)%C, 둘째 줄에 ((A%C) + (B%C))%C, 셋째 줄에 (A×B)%C, 넷째 줄에 ((A%C) × (B%C))%C를 출력한다.
// let num = [5, 8, 4];
let num = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(Number);
let answer = '';

let A = num[0];
let B = num[1];
let C = num[2];

let first = (A + B) % C;
let second = ((A % C) + (B % C)) % C;
let third = (A * B) % C;
let fourth = ((A % C) * (B % C)) % C;

console.log(`${first}\n${second}\n${third}\n${fourth}`);
