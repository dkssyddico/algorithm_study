/**
 * 분수 찾기: https://www.acmicpc.net/problem/1193
 * 이와 같이 나열된 분수들을 1/1 → 1/2 → 2/1 → 3/1 → 2/2 → … 과 같은 지그재그 순서로 차례대로 1번, 2번, 3번, 4번, 5번, … 분수라고 하자.
 * X가 주어졌을 때, X번째 분수를 구하는 프로그램을 작성하시오.
 *
 * 1일 때는 1개
 * 2일 때는 2개
 * 3일 때 3개.. X번을 포함하는 그룹을 찾아야한다.
 * counter는 몇번째 그룹인지 찾는 변수다.
 *
 * 1/1
 * 1/2 2/1
 * 3/1 2/2 1/3
 */

const fs = require('fs');
let X = Number(fs.readFileSync('/dev/stdin').toString().trim());

// let X = 5;
let counter = 0;

while (X > 0) {
  counter++;
  X -= counter;
}
// counter에 X를 더해주면 counter그룹에서 몇번째인지 알 수 있다.

// counter가 짝수이면 분모가 내림차순, 분자가 오름차순이고 홀수이면 분모가 오름차순, 분자가 내림차순이다.
if (counter % 2 === 0) {
  console.log(`${counter + X}/${1 + -X}`);
} else {
  console.log(`${1 + -X}/${counter + X}`);
}
