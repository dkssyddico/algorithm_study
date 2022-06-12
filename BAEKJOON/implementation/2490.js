/**
 * 윷놀이: https://www.acmicpc.net/problem/2490
 * 우리나라 고유의 윷놀이는 네 개의 윷짝을 던져서 배(0)와 등(1)이 나오는 숫자를 세어 도, 개, 걸, 윷, 모를 결정한다. 네 개 윷짝을 던져서 나온 각 윷짝의 배 혹은 등 정보가 주어질 때 도(배 한 개, 등 세 개), 개(배 두 개, 등 두 개), 걸(배 세 개, 등 한 개), 윷(배 네 개), 모(등 네 개) 중 어떤 것인지를 결정하는 프로그램을 작성하라.
 * 첫째 줄부터 셋째 줄까지 한 줄에 하나씩 결과를 도는 A, 개는 B, 걸은 C, 윷은 D, 모는 E로 출력한다.
 */

// const input = [0, 1, 0, 1];
// 사실 0이나 1이나 하나만 판별하면 끝나는데 일부러 좀 귀찮게 푼듯.

const fs = require('fs');
const input = fs
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n')
  .map((i) => i.split(' ').map(Number));

// const input = [
//   [0, 0, 1, 1],
//   [0, 0, 0, 0],
//   [0, 1, 0, 0],
// ];

for (let i = 0; i < input.length; i++) {
  solution(input[i]);
}

function solution(input) {
  let front = 0;
  let back = 0;
  for (let i = 0; i < input.length; i++) {
    let x = input[i];
    if (x === 0) front++;
    else back++;
  }
  if (back === 4) {
    console.log('E');
  } else if (front === 4) {
    console.log('D');
  } else if (back === 1 && front === 3) {
    console.log('C');
  } else if (back === 2 && front === 2) {
    console.log('B');
  } else if (back === 3 && front === 1) {
    console.log('A');
  }
}

{
  // 다른 분 풀이
  const fs = require('fs');
  const result = fs
    .readFileSync('/dev/stdin')
    .toString()
    .trim()
    .split('\n')
    .map((line) => {
      const list = line.split(' ');
      const ones = list.filter((v) => v === '1').length;

      switch (ones) {
        case 0:
          return 'D';
        case 1:
          return 'C';
        case 2:
          return 'B';
        case 3:
          return 'A';
        case 4:
          return 'E';
      }
    });

  console.log(result.join('\n'));
}
