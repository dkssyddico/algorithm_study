/**
 * ABCDE
 * 그래프 처럼 쭉쭉 이어질 수 있게 하는 것.
 * 0-1-2-3-4
 * 뭔가 보드를 만들어서
 * 이어지는지 봐야할 듯.. ? 지렁이 처럼
 * 친구길이는 총 4명이면 된다.
 * 보드를 만들고, 보드에서 DFS 할 수 있는 함수 만들기
 * 대각선으로 가되 1이어야 하고(친구), 자기를 뒤집은 숫자(0,1 => 1,0) 이면 안된다.
 * 대각선으로 쭉쭉 가야한다고 생각했는데 다른 분 풀이보고 깨달음을 얻었다.
 * 보드는 만드는게 맞고(나도 보드까진 만듦!) 체크하는 방법이 더 쉬움 그 배열에서 1이 있는(친구가 있는)지 체크.
 * DFS 함수 내 i가 level에서 친구가 있는지 체크하는 방법이자 다음 친구로 넘어갈 수 있게 해주는 것임!!
 * 출처: https://gobae.tistory.com/31
 */

const PEOPLE = 5;
const RELATIONSHIP = 4;
const input = [
  [0, 1],
  [1, 2],
  [2, 3],
  [3, 4],
];
// const PEOPLE = 8;
// const RELATIONSHIP = 8;
// const input = [
//   [1, 7],
//   [3, 7],
//   [4, 7],
//   [3, 4],
//   [4, 6],
//   [3, 5],
//   [0, 4],
//   [2, 7],
// ];

let board = Array.from({ length: PEOPLE }, () => new Array(PEOPLE).fill(0));
for (let i = 0; i < RELATIONSHIP; i++) {
  const [first, second] = input[i].map(Number);
  board[first][second] = 1;
  board[second][first] = 1;
}

const check = Array.from({ length: PEOPLE }, () => 0);

let flag = 0;
function DFS(level, count) {
  check[level] = 1;
  if (flag) return;
  if (count === 4) {
    flag = 1;
    return;
  }
  for (let i = 0; i < PEOPLE; i++) {
    if (board[level][i] === 1 && !check[i]) {
      console.log(level, i);
      DFS(i, count + 1);
    }
  }
  check[level] = 0;
}

for (let i = 0; i < PEOPLE; i++) {
  DFS(i, 0);
}

console.log(flag);
