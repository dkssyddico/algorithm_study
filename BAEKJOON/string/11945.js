/**
 * 뜨거운 붕어빵: https://www.acmicpc.net/problem/11945
 */

const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
input.shift();

for (let i = 0; i < input.length; i++) {
  console.log(input[i].split('').reverse().join(''));
}
