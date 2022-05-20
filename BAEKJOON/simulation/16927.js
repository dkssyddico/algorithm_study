/**
 * 배열 돌리기 2: https://www.acmicpc.net/problem/16927
 * 배열 돌리기 1번 문제보다 돌릴 수 있는 R의 경우가 늘어나서 이에 대한 처리를 해줘야 한다.
 * 테두리 돌리는 방식이 좀 이해가 안간다
 * 이 풀이를 참고해보고는 있는데 나중에 다시 봐야할 듯...
 */

// 16927번 배열 돌리기 2

const fs = require('fs');
let [numbers, ...A] = fs
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n')
  .map((line) => line.split(' ').map((el) => el * 1));
const [N, M, R] = numbers;

rotateMatrix(A, R);
console.log(A.map((line) => line.join(' ')).join('\n'));

function rotateMatrix(matrix, R) {
  const dx = [1, 0, -1, 0];
  const dy = [0, 1, 0, -1];

  // 테두리 별로 회전시킴
  for (let i = 0; i < Math.min(N, M) / 2; i++) {
    // 각 테두리별 회전 횟수를 계산해서 회전
    const computedR = R % ((N - 2 * i - 1) * 2 + (M - 2 * i - 1) * 2);
    let count = 0;
    while (count < computedR) {
      let x = i;
      let y = i;
      let prev = matrix[x][y];

      // dfs
      let edgeCnt = 0;
      while (edgeCnt < 4) {
        const nx = x + dx[edgeCnt];
        const ny = y + dy[edgeCnt];

        // 범위를 넘어가면 방향 전환
        if (nx < i || nx >= N - i || ny < i || ny >= M - i) edgeCnt++;
        else {
          // 범위 내라면, 이동시켜줌
          const curr = matrix[nx][ny];
          matrix[nx][ny] = prev;
          prev = curr;
          x = nx;
          y = ny;
        }
      }
      // 시작값 처리
      matrix[i + 1][i] = prev;
      count++;
    }
  }
}
