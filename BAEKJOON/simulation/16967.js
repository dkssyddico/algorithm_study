/**
 * 16967번 배열 복원하기: https://www.acmicpc.net/problem/16967
 * 배열 A를 구하는 문제
 * 크기가 H × W인 배열 A와 두 정수 X와 Y가 있을 때, 크기가 (H + X) × (W + Y)인 배열 B는 배열 A와 배열 A를 아래로 X칸, 오른쪽으로 Y칸 이동시킨 배열을 겹쳐 만들 수 있다. 수가 겹쳐지면 수가 합쳐진다.
 * 즉, 배열 B의 (i, j)에 들어있는 값은 아래 3개 중 하나이다.
 * (i, j)가 두 배열 모두에 포함되지 않으면, Bi,j = 0이다.
 * (i, j)가 두 배열 모두에 포함되면, Bi,j = Ai,j + Ai-X,j-Y이다.
 * (i, j)가 두 배열 중 하나에 포함되면, Bi,j = Ai,j 또는 Ai-X,j-Y이다.
 * 배열 B와 정수 X, Y가 주어졌을 때, 배열 A를 구해보자.
 *
 * 겹치는 부분에서 처리를 어떻게 해줘야하는지가 관건
 * i - X와 j - Y가 유효한 범위이면 Bi,j - Ai-X,j-Y = Ai,j 를 해서 구해준다.
 * 유효하지 않으면 Bi,j = Ai,j 라는 뜻.
 */

// const [H, W, X, Y] = [2, 4, 1, 1];

// 원래 배열은 2 x 4

// let A = Array.from({ length: H }, () => Array(W).fill(0));
// const B = [
//   [1, 2, 3, 4, 0],
//   [5, 7, 9, 11, 4],
//   [0, 5, 6, 7, 8],
// ];

const fs = require('fs');
let [numbers, ...B] = fs
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n')
  .map((line) => line.split(' ').map((el) => el * 1));
const [H, W, X, Y] = numbers;

let A = Array.from({ length: H }, () => Array(W).fill(0));

for (let i = 0; i < H; i++) {
  for (let j = 0; j < W; j++) {
    if (i - X >= 0 && j - Y >= 0) {
      A[i][j] = B[i][j] - A[i - X][j - Y];
    } else {
      A[i][j] = B[i][j];
    }
  }
}

console.log(A.map((a) => a.join(' ')).join('\n'));
