/**
 * 세로 읽기: https://www.acmicpc.net/problem/10798
 */

// let input = 'ABCDE\nabcde\n01234\nFGHIJ\nfghij'.split('\n');

// let words = 'AABCDD\nafzz\n09121\na8EWg6\nP5h3kx'.split('\n');

const words = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const maxLength = Math.max(...words.map((i) => i.length));
let answer = '';
for (let i = 0; i < maxLength; i++) {
  for (let j = 0; j < words.length; j++) {
    answer += words[j][i] || '';
  }
}
console.log(answer);
