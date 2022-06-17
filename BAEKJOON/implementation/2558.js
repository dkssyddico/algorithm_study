/**
 * 2558: https://www.acmicpc.net/problem/2558
 */

let fs = require('fs');
let [A, B] = fs.readFileSync('/dev/stdin').toString().split('\n').map(Number);
console.log(A + B);
