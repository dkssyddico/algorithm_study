/**
 * 10820번 문자열 분석
 * 처음엔 하나하나 ASCII code를 구하는 매소드를 걸어줘서 풀어줘야 한다 생각했음.
 * 근데 저번에 후위 표기식 문제를 풀면서 배웠던 공식이 생각나서 그렇게 품.
 * 새로 안 사실인데 숫자 아스키코드는 0일 때 48, 다른 숫자면 49가 나옴.
 * 어쨋거나 숫자는 소문자, 대문자, 공백에 해당이 안되니까 아예 이외의 경우로 뺌.
 * 그런데 처음엔 통과를 못해서 찾아봤더니 주어진 문자열이 ''이면 아예 처리를 안해줘야 한다고..
 * 출처: https://leylaoriduck.tistory.com/488
 * 이 분 도움을 정말 많이 받는 듯 ㅜㅜ
 */

console.log('a'.charCodeAt(0));
console.log('z'.charCodeAt(0));
console.log('A'.charCodeAt(0));
console.log('Z'.charCodeAt(0));
console.log(' '.charCodeAt(0));
console.log('10000'.charCodeAt(0));

// let strings = [
//   'This is String',
//   'SPACE    1    SPACE',
//   ' S a M p L e I n P u T     ',
//   '0L1A2S3T4L5I6N7E8',
// ];

// 소문자 대문자 숫자 공백

let fs = require('fs');
let strings = fs.readFileSync('/dev/stdin').toString().split('\n');
let answer = '';

for (let s = 0; s < strings.length; s++) {
  let string = strings[s];
  if (string === '') continue;
  let arr = new Array(4).fill(0);
  for (let i = 0; i < string.length; i++) {
    let x = string[i];
    if (x >= 'a' && x <= 'z') {
      arr[0] += 1;
    } else if (x >= 'A' && x <= 'Z') {
      arr[1] += 1;
    } else if (x === ' ') {
      arr[3] += 1;
    } else {
      arr[2] += 1;
    }
  }
  answer += `${arr.join(' ')}\n`;
}

console.log(answer);
