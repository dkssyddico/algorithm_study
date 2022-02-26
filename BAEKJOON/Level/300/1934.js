// let input = ['3', '1 45000', '6 10', '13 17'];
const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

let count = +input[0];
let answer = '';
for (let i = 1; i < count + 1; i++) {
  let [a, b] = input[i].split(' ');
  answer += `${getLCM(+a, +b)}\n`;
}

function getLCM(a, b) {
  let i, j;
  if (a > b) {
    i = a;
    j = b;
  } else {
    i = b;
    j = a;
  }
  while (i % j !== 0) {
    let n = i % j;
    if (n !== 0) {
      i = j;
      j = n;
    }
  }
  return (a * b) / j;
}

console.log(answer);
