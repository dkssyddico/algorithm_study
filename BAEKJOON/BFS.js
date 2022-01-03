{
  /**
   * 2178번 미로 탐색(https://www.acmicpc.net/problem/2178)
   * "너비우선탐색(Breadth First Search) 이란 루트 노드에서 시작해서 인접한 노드 를 먼저 탐색하는 방법이다. "
   * (https://velog.io/@sukong/%EC%95%8C%EA%B3%A0%EB%A6%AC%EC%A6%98-%EA%B0%9C%EB%85%90-%EB%84%88%EB%B9%84%EC%9A%B0%EC%84%A0%ED%83%90%EC%83%89BFS-lp8zywtn)
   * 4방향을 통해 1,1 부터 갈 수 있는 곳을 찾아준뒤, map 자체에 이동한 횟수를 더해주는 방식
   */

  // let map = [
  //   [1, 0, 1, 1, 1, 1],
  //   [1, 0, 1, 0, 1, 0],
  //   [1, 0, 1, 0, 1, 1],
  //   [1, 1, 1, 0, 1, 1],
  // ];

  // let coordinates = [4, 6];

  const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

  const coordinates = input.shift().split(' ');

  const map = input.map((v) => v.split('').map((x) => +x));

  let dx = [-1, 0, 1, 0];
  let dy = [0, 1, 0, -1];

  let stack = [[0, 0, 0]];

  while (stack.length) {
    const [x, y, dis] = stack.shift();

    for (let i = 0; i < 4; i++) {
      const xPos = x + dx[i];
      const yPos = y + dy[i];

      if (0 <= xPos && 0 <= yPos && xPos < coordinates[1] && yPos < coordinates[0]) {
        if (map[yPos][xPos] === 1) {
          map[yPos][xPos] = dis + 2;
          stack.push([xPos, yPos, dis + 1]);
        }
      }
    }
  }

  console.log(map[coordinates[0] - 1][coordinates[1] - 1]);
  {
    /**
     * 다른 분 풀이
     */
    const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
    const [h, w] = input[0].split(' ').map(Number);
    const board = input.slice(1);
    const dir = [
      [0, -1],
      [1, 0],
      [0, 1],
      [-1, 0],
    ];
    const bfs = () => {
      const q = [[0, 0]];
      const isVisited = Array.from(Array(h), () => Array(w).fill(0));
      const dist = Array.from(Array(h), () => Array(w).fill(0));
      isVisited[0][0] = 1;

      while (q.length) {
        const [x, y] = q.shift();

        for (let i = 0; i < dir.length; i += 1) {
          const [dx, dy] = dir[i];
          const nx = x + dx,
            ny = y + dy;

          if (nx < 0 || ny < 0 || nx >= w || ny >= h || board[ny][nx] === '0' || isVisited[ny][nx])
            continue;
          isVisited[ny][nx] = 1;
          dist[ny][nx] = dist[y][x] + 1;
          q.push([nx, ny]);
        }
      }
      console.log(dist[h - 1][w - 1] + 1);
    };
    bfs();
  }
}
