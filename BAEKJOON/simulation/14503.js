/**
 * 14503 로봇청소기: https://www.acmicpc.net/problem/14503
 * 
첫째 줄에 세로 크기 N과 가로 크기 M이 주어진다. (3 ≤ N, M ≤ 50)

둘째 줄에 로봇 청소기가 있는 칸의 좌표 (r, c)와 바라보는 방향 d가 주어진다. d가 0인 경우에는 북쪽을, 1인 경우에는 동쪽을, 2인 경우에는 남쪽을, 3인 경우에는 서쪽을 바라보고 있는 것이다.

셋째 줄부터 N개의 줄에 장소의 상태가 북쪽부터 남쪽 순서대로, 각 줄은 서쪽부터 동쪽 순서대로 주어진다. 빈 칸은 0, 벽은 1로 주어진다. 지도의 첫 행, 마지막 행, 첫 열, 마지막 열에 있는 모든 칸은 벽이다.

로봇 청소기가 있는 칸의 상태는 항상 빈 칸이다.

로봇 청소기는 다음과 같이 작동한다.

1. 현재 위치를 청소한다.
2. 현재 위치에서 다음을 반복하면서 인접한 칸을 탐색한다.
  a. 현재 위치의 바로 왼쪽에 아직 청소하지 않은 빈 공간이 존재한다면, 왼쪽 방향으로 회전한 다음 한 칸을 전진하고 1번으로 돌아간다. 그렇지 않을 경우, 왼쪽 방향으로 회전한다. 이때, 왼쪽은 현재 바라보는 방향을 기준으로 한다.
  b. 1번으로 돌아가거나 후진하지 않고 2a번 단계가 연속으로 네 번 실행되었을 경우, 바로 뒤쪽이 벽이라면 작동을 멈춘다. 그렇지 않다면 한 칸 후진한다.

  청소했는지 확인하는 배열이 필요할 듯. 
 */

const [N, M] = [3, 3];
// (r, c), d
const [startX, startY, direction] = [1, 1, 0];
const place = [
  [1, 1, 1],
  [1, 0, 1],
  [1, 1, 1],
];

let count = 0;

// 가로 세로가 반대라고 이해해야함.
const dx = [-1, 0, 1, 0];
const dy = [0, 1, 0, -1];

const queue = [];

queue.push([startX, startY, direction]);
while (true) {
  let [x, y, dir] = queue.shift();
  if (place[x][y] === 0) {
    place[x][y] = 2; // 청소는 2로 표시
    count++;
  }

  let flag = false;
  for (let i = 0; i < 4; i++) {
    // 왼쪽으로 회전
    const nextDir = dir === 0 ? 3 : dir - 1;
    const nx = x + dx[nextDir];
    const ny = y + dy[nextDir];
    // 청소할 필요가 없으면 다시 왼쪽 방향으로 돌아야함 그래서 dir에 nextDir을 할당하는 것
    dir = nextDir;

    // 현재 위치의 바로 왼쪽에 아직 청소하지 않은 빈 공간이 존재한다면, 왼쪽 방향으로 회전한 다음 한 칸을 전진하고 1번으로 돌아간다.
    if (place[nx][ny] === 0) {
      queue.push([nx, ny, dir]);
      flag = true;
      break;
    }
  }
  // 1번으로 돌아가거나 후진하지 않고 2a번 단계가 연속으로 네 번 실행되었을 경우: 그래서 위에서 4까지 하는 for문을 만드는 것
  if (!flag) {
    // 처음엔 이해가 안됐는데 후진하는 것도 방향을 돌리는 걸로 보는 듯. 동이 서로 되게 만드는걸보니.
    const back = dir === 1 ? 3 : Math.abs(dir - 2);
    const backX = x + dx[back];
    const backY = y + dy[back];
    // 뒷쪽이 벽인지
    if (place[backX][backY] === 1) break;
    else {
      queue.push([backX, backY, dir]);
    }
  }
}

console.log(count);

{
  function solution(input) {
    const [dx, dy] = [
      [-1, 0, 1, 0],
      [0, 1, 0, -1],
    ];

    const [startX, startY, direction] = input[1].split(' ').map((v) => Number(v));
    const room = input.slice(2).map((v) => v.split(' ').map((k) => Number(k)));

    const queue = [];
    let count = 0;
    queue.push([startX, startY, direction]);
    while (true) {
      let [x, y, dir] = queue.shift();
      if (room[x][y] === 0) {
        room[x][y] = 2; // 청소
        count++;
      }

      let flag = false;
      for (let i = 0; i < 4; i++) {
        const nextDir = dir === 0 ? 3 : dir - 1;
        const nx = x + dx[nextDir];
        const ny = y + dy[nextDir];
        dir = nextDir;

        if (room[nx][ny] === 0) {
          queue.push([nx, ny, dir]);
          flag = true;
          break;
        }
      }
      if (!flag) {
        const back = dir === 1 ? 3 : Math.abs(dir - 2);
        const backX = x + dx[back];
        const backY = y + dy[back];
        if (room[backX][backY] === 1) break;
        else {
          queue.push([backX, backY, dir]);
        }
      }
    }

    return count;
  }

  const fs = require('fs');
  const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

  console.log(solution(input));
}
