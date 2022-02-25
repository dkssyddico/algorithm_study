/**
 * 네 수 문제
 */

// let num = ['10', '20', '30', '40'];
let num = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ');

let front = num.slice(0, 2).reduce((a, b) => a + b);
let back = num.slice(2).reduce((a, b) => a + b);

console.log(+front + +back);
