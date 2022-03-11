/**
 * 1748번 수 이어쓰기1
 */
// {
//   // 틀린 풀이
//   let fs = require('fs');
//   let input = Number(fs.readFileSync('/dev/stdin').toString().trim());
//   // let input = 120;

//   let answer = '';

//   for (let i = 1; i <= input; i++) {
//     answer += i;
//   }

//   console.log(answer.length);
// }

// let input = 120;
// 자리수에 따라 카운트가 올라감
let fs = require('fs');
let input = Number(fs.readFileSync('/dev/stdin').toString().trim());

let cnt = 0;
for (let i = 1; i <= input; i *= 10) {
  cnt += input - i + 1;
}

console.log(cnt);
