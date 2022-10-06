/**
 * 11931 수 정렬하기 4
 */

let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(Number);
input.shift();

console.log(input.sort((a, b) => b - a).join('\n'));
