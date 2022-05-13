/**
 * 18290
 * NM과 K(1): https://www.acmicpc.net/problem/18290
 * 좌표를 (0,0)부터 시작하면서 4방향으로 찾는것. -> 잘못 생각. 그냥 K에 맞춰서 최대값 찾으면 됨.. 다만 인접하지만 않으면
 * 이런 류 문제에서 flag를 쓰는 경우가 많은데 잘 기억해놓고 다음에 나도 써먹어야겠다.
 */

{
  // 잘못 생각한 풀이.. 인접하면 안되는데 인접하게 풀어버림
  // const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
  // const [N, M, K] = input.shift().split(' ').map(Number);
  // const board = input.map((i) => i.split(' ').map(Number));
  const [N, M, K] = [5, 5, 3];
  const board = [
    [1, 9, 8, -2, 0],
    [-1, 9, 8, -3, 0],
    [-5, 1, 9, -1, 0],
    [0, 0, 0, 9, 8],
    [9, 9, 9, 0, 0],
  ];

  const check = Array.from({ length: N }, () => Array(M).fill(0));

  let max = 0;

  function solution(x, y) {
    function DFS(count, sum) {
      if (count === K) {
        max = max > sum ? max : sum;
        return;
      }
      const DX = [0, 0, 1, -1];
      const DY = [1, -1, 0, 0];
      for (let i = 0; i < 4; i++) {
        let newX = x + DX[i];
        let newY = y + DY[i];
        if (newX <= -1 || newY <= -1 || newX >= N || newY >= M) continue;
        if (!check[newX][newY]) {
          check[newX][newY] = 1;
          DFS(count + 1, sum + board[newX][newY]);
          check[newX][newY] = 0;
        }
      }
    }
    DFS(0, 0);
  }

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      solution(i, j); // 현재 좌표에서 인접한 칸을 찾을 수 있도록 한다.
    }
  }

  if (N === 1 && M === 1) {
    max = board[0][0];
  }

  console.log(max);
}

{
  // const fs = require('fs');
  // const input = fs.readFileSync('./dev/stdin').toString().trim().split('\n');
  const [n, m, k] = [5, 5, 3];

  const board = [
    [1, 9, 8, -2, 0],
    [-1, 9, 8, -3, 0],
    [-5, 1, 9, -1, 0],
    [0, 0, 0, 9, 8],
    [9, 9, 9, 0, 0],
  ];
  const board_check = Array.from({ length: n }, () => Array(m).fill(0));

  let ans = Number.MIN_SAFE_INTEGER;

  const dx = [-1, 0, 1, 0];
  const dy = [0, 1, 0, -1];

  function sol(cnt, sum) {
    if (cnt === k) {
      ans = Math.max(sum, ans);
      return;
    }

    for (let x = 0; x < n; x++) {
      for (let y = 0; y < m; y++) {
        if (board_check[x][y]) continue;
        let flag = true;
        // 인접한지 찾는 for문인듯??
        for (let i = 0; i < 4; i++) {
          const nx = x + dx[i];
          const ny = y + dy[i];
          if (nx >= 0 && nx < n && ny >= 0 && ny < m) {
            if (board_check[nx][ny]) flag = false;
          }
        }
        if (flag) {
          board_check[x][y] = true;
          sol(cnt + 1, sum + board[x][y]);
          board_check[x][y] = false;
        }
      }
    }
  }

  sol(0, 0);
  console.log(ans);
}
