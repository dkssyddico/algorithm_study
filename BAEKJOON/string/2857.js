/**
 * 2857 FBI: https://www.acmicpc.net/problem/2857
 */

// let input = 'N-FBI1\n9A-USK\nI-NTER\nG-MI6\nRF-KGB\n'.split('\n');
const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
let FBI = 'FBI';
let result = [];

for (let i = 0; i < input.length; i++) {
  if (input[i].includes(FBI)) {
    result.push(i + 1);
  }
}

console.log(result.length ? result.join(' ') : 'HE GOT AWAY!');
