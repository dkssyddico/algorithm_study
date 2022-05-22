/**
 * 15662 톱니바퀴(2): https://www.acmicpc.net/problem/15662
 *
 * 첫째 줄에 톱니바퀴의 개수 T (1 ≤ T ≤ 1,000)가 주어진다.
 * 둘째 줄부터 T개의 줄에 톱니바퀴의 상태가 가장 왼쪽 톱니바퀴부터 순서대로 주어진다. 상태는 8개의 정수로 이루어져 있고, 12시방향부터 시계방향 순서대로 주어진다. N극은 0, S극은 1로 나타나있다.
 * 다음 줄에는 회전 횟수 K(1 ≤ K ≤ 1,000)가 주어진다. 다음 K개 줄에는 회전시킨 방법이 순서대로 주어진다. 각 방법은 두 개의 정수로 이루어져 있고, 첫 번째 정수는 회전시킨 톱니바퀴의 번호, 두 번째 정수는 방향이다. 방향이 1인 경우는 시계 방향이고, -1인 경우는 반시계 방향이다.
 * 톱니바퀴를 회전시키려면, 회전시킬 톱니바퀴와 회전시킬 방향을 결정해야 한다. 톱니바퀴가 회전할 때, 서로 맞닿은 극에 따라서 옆에 있는 톱니바퀴를 회전시킬 수도 있고, 회전시키지 않을 수도 있다. 톱니바퀴 A를 회전할 때, 그 옆에 있는 톱니바퀴 B와 서로 맞닿은 톱니의 극이 다르다면, B는 A가 회전한 방향과 반대방향으로 회전하게 된다. 예를 들어, 아래와 같은 경우를 살펴보자.
 * 0 1 1 2
 * 3 7 3 7
 */

// const T = 4;
// // const wheels = [
// //   [1, 0, 1, 0, 1, 1, 1, 1],
// //   [0, 1, 1, 1, 1, 1, 0, 1],
// //   [1, 1, 0, 0, 1, 1, 1, 0],
// //   [0, 0, 0, 0, 0, 0, 1, 0],
// // ];
// const wheels = [
//   [1, 1, 1, 1, 1, 1, 1, 1],
//   [1, 1, 1, 1, 1, 1, 1, 1],
//   [1, 1, 1, 1, 1, 1, 1, 1],
//   [1, 1, 1, 1, 1, 1, 1, 1],
// ];
// const K = 3;
// // 회전시킬 톱니바퀴, 방향/  홀수인지 짝수인지 구해야함.
// const methods = [
//   [1, 1],
//   [2, 1],
//   [3, 1],
// ];

const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const T = +input.shift();

const wheels = [];
for (let i = 0; i < T; i++) {
  const wheel = input.shift().split('').map(Number);
  wheels.push(wheel);
}
const K = +input.shift();
let methods = input.map((i) => i.split(' ').map(Number));

function rotate(direction, num) {
  let standard = wheels[num];
  // 시계
  if (direction === 1) {
    let x = standard.pop();
    standard.unshift(x);
    wheels[num] = standard;
  } else if (direction === -1) {
    // 반시계
    let x = standard.shift();
    standard.push(x);
    wheels[num] = standard;
  }
}

// 도는 거 어떻게?
for (let i = 0; i < K; i++) {
  let [num, direction] = methods[i];
  let directions = Array(T).fill(0);
  directions[num - 1] = direction;
  // 기준 좌측 확인
  for (let j = num - 2; j >= 0; j--) {
    // 다르면 회전
    if (wheels[j + 1][6] !== wheels[j][2]) {
      directions[j] = -directions[j + 1];
    } else {
    }
  }

  // 기준 우측 확인
  for (let k = num; k < T; k++) {
    // 다르면 회전
    if (wheels[k - 1][2] !== wheels[k][6]) {
      directions[k] = -directions[k - 1];
    } else {
    }
  }
  for (let i = 0; i < directions.length; i++) {
    rotate(directions[i], i);
  }
}

let count = 0;
for (let i = 0; i < T; i++) {
  if (wheels[i][0] === 1) count++;
}

console.log(count);
