/**
 * 17299 오등큰수
 * 배열에 있는 각 숫자들이 몇번씩 나왔는지도 계산해줘야 함.
 * 아직 이해를 못했음. 저번 오큰수랑 비슷한 문제인건 알겠는데 ㅜ
 */

let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');
let cases = input[0];
let splited = input[1].split(' ');
let arr = [];
let stack = [];

let count = {};
for (let c in splited) {
  if (!count[splited[c]]) {
    count[splited[c]] = 1;
  } else {
    count[splited[c]]++;
  }
}
for (let i = 0; i < Number(cases); i++) {
  while (stack.length !== 0 && count[splited[i]] > count[splited[stack[stack.length - 1]]]) {
    arr[stack.pop()] = splited[i];
  }
  stack.push(i);
}

while (stack.length !== 0) {
  arr[stack.pop()] = -1;
}
console.log(arr.join(' ').trim());
