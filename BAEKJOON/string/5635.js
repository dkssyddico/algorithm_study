/**
 * 5635 생일: https://www.acmicpc.net/problem/5635
 * 정렬하는 문제가 있길래 풀어봄
 */

// let [total, ...input] =
//   '5\nMickey 1 10 1991\nAlice 30 12 1990\nTom 15 8 1993\nJerry 18 9 1990\nGarfield 20 9 1990'.split(
//     '\n'
//   );

let fs = require('fs');
let [total, ...input] = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

input = input
  .map((i) => i.split(' '))
  .sort((a, b) =>
    Number(a[3]) === Number(b[3])
      ? Number(a[2]) === Number(b[2])
        ? Number(a[1]) - Number(b[1])
        : Number(a[2]) - Number(b[2])
      : Number(a[3]) - Number(b[3])
  );

console.log(`${input[input.length - 1][0]}\n${input[0][0]}`);

{
  // 다른 분 풀이.
  const fs = require('fs');
  let [N, ...input] = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
  N = +N;
  let list = input.map((v) => v.split(' '));
  list.sort(
    (a, b) =>
      Number(b[3]) - Number(a[3]) || Number(b[2]) - Number(a[2]) || Number(b[1]) - Number(a[1])
  );
  console.log(list[0][0]);
  console.log(list[N - 1][0]);
}
