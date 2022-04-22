/**
 * 나이트의 이동
 * 문제: https://www.acmicpc.net/problem/7562
 * BFS로 풀어야한다는 것도 알았고,
 * 나이트가 이동할 수 있는 좌표도 스스로 만들었다.
 * 그런데 이제 도착했을 때의 처리라던가, 최소 이동 숫자를 구하는것이 헷갈려서 다른 사람 풀이를 참고했다.
 * 그리고 푸는 과정에서 visited 배열에 꼭 x, y를 뒤집어 넣을 필요가 없다는 것을 깨달았다.
 * https://gobae.tistory.com/34
 */
const Length = 8;
const start = [0, 0];
const dest = [7, 0];

// 나이트가 이동할 수 있는 좌표

let result = 0;

function bfs() {
  const queue = [];
  queue.push(start);
  const visit = Array.from({ length: Length }, () => Array(Length).fill(0));
  visit[start[0]][start[1]] = 1;
  const dx = [-2, -1, 1, 2, 2, 1, -1, -2];
  const dy = [1, 2, 2, 1, -1, -2, -2, -1];
  while (queue.length) {
    const [x, y] = queue.shift();
    if (x === dest[0] && y === dest[1]) {
      result += visit[x][y] - 1; // 시작 위치 값을 0이 아닌 1로 설정했으므로, 최종 도착 값에서 1을 빼준다.
      break;
    }
    for (let i = 0; i < 8; i++) {
      const [nx, ny] = [x + dx[i], y + dy[i]];
      if (nx < 0 || ny < 0 || nx >= Length || ny >= Length) continue;
      if (!visit[nx][ny]) {
        visit[nx][ny] = visit[x][y] + 1; // visit[x][y]는 (x,y)까지의 최단경로이므로, 1을 더해주면 (nx,ny)까지의 최단경로.
        queue.push([nx, ny]);
      }
    }
  }
}

bfs();

console.log(result);
