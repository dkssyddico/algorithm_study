/**
 * 배열 돌리기 1: https://www.acmicpc.net/problem/16926
 * 모서리에 부딪히면 처리.
 * 안에 있는 건 어떻게 돌리지? 모서리가 점점 작아짐.
 */

const [N, M, R] = [4, 4, 2];

const original = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
  [13, 14, 15, 16],
];

const result = Array.from({ length: N }, () => Array(M).fill(0));

const count = Math.min(N, M) / 2;

for (let i = 0; i < N; i++) {
  for (let j = 0; j < M; j++) {
    let [x, y] = [i, j];
    let newX = x + R;
    // 왼쪽 아래 모서리
  }
}

{
  /**
   * https://www.acmicpc.net/source/42067925
   */
  let stdin = 'input.txt';
  stdin = '/dev/stdin';
  let input = require('fs').readFileSync(stdin).toString().trim().split('\n');

  let [N, M, R] = input[0].split(' ').map(Number);
  let arr = [];

  for (let i = 1; i <= N; i++) {
    arr[i - 1] = input[i].split(' ').map(Number);
  }

  // 회전시키기
  while (R) {
    for (let count = 0; count < Math.min(N, M) / 2; count++) {
      let maxN = N - 1 - count; // 세로
      let maxM = M - 1 - count; // 가로

      let tmp = arr[count][count];

      // 왼쪽으로 당기기
      for (let i = count; i < maxM; i++) {
        arr[count][i] = arr[count][i + 1];
      }

      // 위로 올리기
      for (let i = count; i < maxN; i++) {
        arr[i][maxM] = arr[i + 1][maxM];
      }

      // 오른쪽으로 밀기
      for (let i = maxM; i > count; i--) {
        arr[maxN][i] = arr[maxN][i - 1];
      }

      // 아래로 내리기
      for (let i = maxN; i > count; i--) {
        arr[i][count] = arr[i - 1][count];
      }

      arr[count + 1][count] = tmp;
    }

    R--;
  }

  console.log(arr.join('\n').replace(/,/g, ' '));
}
