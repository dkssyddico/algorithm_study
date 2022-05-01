/**
 * 알고스팟
 * https://www.acmicpc.net/problem/1261
 * 전형적인 미로찾기 문제인듯하다!
 * 4방향으로만 움직일 수 있음
 * 통과하면 미로 방 1로 만들어주기
 * 부술수 있는 벽만 있는게 아니었음;
 * 미로와 같은 크기를 가진 새로운 배열로 최소 이동 횟수 담아주기
 * 벽을 부순걸 저장하기
 * 추가
 * 벽을 부수지 않는 것에 우선순위를 둬야한다함.. 맞네 ㅠㅠ
 */
const [N, M] = [3, 3];

const maze = [
  [0, 1, 1],
  [1, 1, 1],
  [1, 1, 0],
];

{
  /**
   * 내가 해본 것
   */
  let [input, ...maze] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
  const [N, M] = input.split(' ').map(Number);
  maze = maze.map((input) => input.split('').map(Number));

  function BFS() {
    // 시작 배열 담아주기, y, x, 시간
    const queue = [[0, 0, 0]];
    const check = Array.from({ length: M }, () => Array(N).fill(0));
    check[0][0] = 1;
    while (queue.length) {
      let [y, x, cnt] = queue.shift();
      if (x + 1 === N && y + 1 === M) {
        return cnt;
      }
      const dx = [0, 0, 1, -1];
      const dy = [1, -1, 0, 0];
      for (let i = 0; i < 4; i++) {
        let nx = x + dx[i];
        let ny = y + dy[i];
        // 미로 범위 넘어가면 continue
        if (nx < 0 || nx >= N || ny < 0 || ny >= M) continue;
        // 이미 와본적이 있으면
        if (check[ny][nx]) continue;
        // 만약에 벽이면.
        check[ny][nx] = 1;
        if (maze[ny][nx]) {
          maze[ny][nx] = 0;
          queue.push([nx, ny, cnt + 1]);
        } else {
          queue.unshift([nx, ny, cnt]);
        }
      }
    }
  }

  console.log(BFS());
}

{
  const sol = (input) => {
    const [M, N] = input[0].split(' ').map(Number); // M,N 순서로 데이터가 주어진다.
    input = input.slice(1);
    const adjM = input.map((row) => row.split('').map(Number));

    function bfs(sx, sy) {
      const deque = [];
      deque.push([sx, sy, 0]);
      const check = Array.from({ length: N }, () => new Array(M).fill(0));
      check[sx][sy] = 1;
      const dx = [-1, 0, 1, 0];
      const dy = [0, 1, 0, -1];
      while (deque.length) {
        const [x, y, cnt] = deque.shift();
        if (x === N - 1 && y === M - 1) return cnt; // (N,M) 위치에 도달하면 종료한다.

        for (let i = 0; i < 4; i++) {
          // 현재 위치 (x,y)에서 상하좌우 한번씩 이동을 탐색한다.
          const [nx, ny] = [x + dx[i], y + dy[i]];
          if (nx < 0 || ny < 0 || nx >= N || ny >= M) continue;
          if (check[nx][ny]) continue;
          check[nx][ny] = 1;
          if (adjM[nx][ny]) {
            adjM[nx][ny] = 0;
            deque.push([nx, ny, cnt + 1]);
          } else {
            deque.unshift([nx, ny, cnt]); // 벽이 없어서 바로 이동하는 경우를 우선적으로 처리하도록 맨 앞에 넣어준다.
          }
        }
      }
    }
    return bfs(0, 0);
  };

  // 백준에서 입력을 받는 코드
  const input = [];
  require('readline')
    .createInterface(process.stdin, process.stdout)
    .on('line', (line) => {
      input.push(line);
    })
    .on('close', () => {
      console.log(sol(input));
      process.exit();
    });
}

{
  const path = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
  const input = require('fs').readFileSync(path).toString().trim().split('\n');
  const [M, N] = input.shift().split(' ').map(Number);
  const MAZE = input.map((row) => row.split('').map(Number));

  const deQueue = [[0, 0, 0]];
  const check = Array.from({ length: N }, () => new Array(M).fill(0));

  const dx = [1, 0, -1, 0];
  const dy = [0, 1, 0, -1];

  function bfs() {
    while (deQueue.length) {
      const [currentX, currentY, brokenWallCount] = deQueue.shift();

      if (currentX === N - 1 && currentY === M - 1) return brokenWallCount;
      for (let i = 0; i < 4; i++) {
        const [nx, ny] = [currentX + dx[i], currentY + dy[i]];
        if (nx < 0 || nx > N - 1 || ny < 0 || ny > M - 1) continue;
        if (check[nx][ny]) continue;
        check[nx][ny] = true;
        if (MAZE[nx][ny]) {
          MAZE[nx][ny] === 0;
          deQueue.push([nx, ny, brokenWallCount + 1]);
        } else {
          deQueue.unshift([nx, ny, brokenWallCount]);
        }
      }
    }
  }

  console.log(bfs());
}
