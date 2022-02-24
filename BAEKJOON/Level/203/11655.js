console.log('a'.charCodeAt(0));
console.log('z'.charCodeAt(0));
console.log('A'.charCodeAt(0));
console.log('Z'.charCodeAt(0));

let fs = require('fs');
let string = fs.readFileSync('/dev/stdin').toString().split('');

let answer = '';

for (let i = 0; i < string.length; i++) {
  let x = string[i];
  let code = x.charCodeAt(0);
  if (x >= 'a' && x <= 'z') {
    if (code + 13 > 122) {
      answer += String.fromCharCode(code + 13 - 122 + 96);
    } else {
      answer += String.fromCharCode(code + 13);
    }
  } else if (x >= 'A' && x <= 'Z') {
    if (code + 13 > 90) {
      answer += String.fromCharCode(code + 13 - 90 + 64);
    } else {
      answer += String.fromCharCode(code + 13);
    }
  } else if (code === 32) {
    answer += ' ';
  } else {
    answer += x;
  }
}

console.log(answer);
