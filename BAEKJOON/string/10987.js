/**
 * 10987
 */

const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('');

const vowel = ['a', 'e', 'i', 'o', 'u'];

let answer = 0;

for (let i = 0; i < input.length; i++) {
  if (vowel.includes(input[i])) answer++;
}

console.log(answer);
