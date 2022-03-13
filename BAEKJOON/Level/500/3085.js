/**
 * 사탕게임
 * 문제가 이해가 안되서 찾아보니 애니팡 같은 게임이라고 한다.
 */

const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let [n, ...info] = fs
  .readFileSync(file)
  .toString()
  .trim()
  .split('\n')
  .map((s) => s.trim());

// 오른쪽, 아래 각각 한칸 이동 후 이동한 위치에서 투포인터 상하 / 좌우로

let answer = 0;

n = +n;

info = info.map((arr) => [...arr]);

const check = (x, y) => {
  const base = info[y][x];

  let maxY = 1;
  // 상하
  for (let dy = 1; y + dy < n; dy++) {
    if (info[y + dy][x] === base) maxY++;
    else break;
  }
  for (let dy = -1; y + dy >= 0; dy--) {
    if (info[y + dy][x] === base) maxY++;
    else break;
  }

  let maxX = 1;
  // 좌우
  for (let dx = 1; x + dx < n; dx++) {
    if (info[y][x + dx] === base) maxX++;
    else break;
  }
  for (let dx = -1; x + dx >= 0; dx--) {
    if (info[y][x + dx] === base) maxX++;
    else break;
  }

  answer = Math.max(answer, Math.max(maxX, maxY));
};

const swap = (x, y, dx, dy) => {
  const X = x + dx;
  const Y = y + dy;
  [info[y][x], info[Y][X]] = [info[Y][X], info[y][x]];
  check(x, y);
  if (dx | dy) check(X, Y);
  [info[y][x], info[Y][X]] = [info[Y][X], info[y][x]];
};

for (let y = 0; y < n; y++) {
  for (let x = 0; x < n; x++) {
    swap(x, y, 0, 0);
    if (x + 1 < n) swap(x, y, 1, 0);
    if (y + 1 < n) swap(x, y, 0, 1);
  }
}

console.log(answer);
