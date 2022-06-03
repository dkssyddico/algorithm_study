/**
 * 14890 경사로: https://www.acmicpc.net/problem/14890
 * 경사로의 높이는 항상 1이다.
 * 길은 가로, 세로 다 사용할 수 있음 - 가로 판별하는거 세로 판별하는거 두 개 다 만들어야하나?
 * 높이가 다 같으면 길.
 *
 * 찾아보니 세로만 딱 뽑아서 만드는 방법이 있었다.
 * for문 만들고
 * const load2 = map.map(row => row[i]) 이렇게.
 *
 * 풀이들을 참고하니 경사로를 둘 수 있는게 가능한지는 얼마나 같은 숫자들이 연속적으로 놓여있는지를 가지고 판단하는 것 같다.
 * possible 변수가 그 역할을 한다.
 *
 * 구현 문제 따로 연습해야겠다.
 */

// 지도의 크기, 경사로의 길이
const [N, L] = [6, 2];
const map = [
  [3, 3, 3, 3, 3, 3],
  [2, 3, 3, 3, 3, 3],
  [2, 2, 2, 3, 2, 3],
  [1, 1, 1, 2, 2, 2],
  [1, 1, 1, 3, 3, 1],
  [1, 1, 2, 3, 3, 2],
];

// L은 경사로의 길이
function check(arr, N, L) {
  let answer = 0;

  for (let i = 0; i < N; i++) {
    const now = arr[i];
    let possible = 1;
    // 배열 1번 index부터 시작
    for (let j = 1; j < N; j++) {
      if (now[j - 1] === now[j]) possible++;
      // 경사로를 놓았다는 의미.
      else if (now[j - 1] + 1 === now[j] && possible >= L) possible = 1;
      else if (now[j - 1] === now[j] + 1 && possible >= 0) possible = 1 - L;
      // 경사로를 놓을 수 없는 경우
      else {
        possible = -1;
        break;
      }
    }
    if (possible >= 0) {
      answer++;
    }
  }
  return answer;
}

console.log(check(map, N, L));

{
  // https://lhoiktiv.tistory.com/567?category=887263
  const fs = require('fs');
  const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

  function check(arr, N, L) {
    let answer = 0;

    for (let i = 0; i < N; i++) {
      const now = arr[i];
      let possible = 1;
      for (let j = 1; j < N; j++) {
        if (now[j - 1] == now[j]) possible++;
        else if (now[j - 1] + 1 == now[j] && possible >= L) possible = 1;
        else if (now[j - 1] == now[j] + 1 && possible >= 0) possible = 1 - L;
        else {
          possible = -1;
          break;
        }
      }
      if (possible >= 0) {
        answer++;
      }
    }
    return answer;
  }

  // 3, 3, 2, 1, 1, 1
  // 1  2 - 1 - 1

  function main(input) {
    const board = input.map((v) => v.split(' ').map(Number));
    const [N, L] = board.shift();
    let newBoard = Array.from(Array(N), () => Array(N));
    for (let i = 0; i < N; i++) {
      for (let j = 0; j < N; j++) {
        newBoard[j][i] = board[i][j];
      }
    }
    const res = check(board, N, L) + check(newBoard, N, L);
    console.log(res);
  }

  main(input);
}

{
  const fs = require('fs');
  const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

  const isLoad = (load, L) => {
    let count = 1;
    for (let i = 0; i < load.length - 1; i++) {
      if (load[i] === load[i + 1]) count++;
      else if (load[i] + 1 === load[i + 1] && count >= L) count = 1;
      else if (load[i] - 1 === load[i + 1] && count >= 0) count = 1 - L;
      else return false;
    }
    return count >= 0 ? true : false;
  };
  const solution = (input) => {
    const [N, L] = input[0].split(' ').map(Number);
    const map = Array.from({ length: N }, (_, i) => input[i + 1].split(' ').map(Number));
    let ways = 0;
    for (let i = 0; i < N; i++) {
      const load1 = map[i];
      // 세로만 뽑아내는 방법이라 신기해서 가져옴!
      const load2 = map.map((row) => row[i]);
      if (isLoad(load1, L)) ways++;
      if (isLoad(load2, L)) ways++;
    }
    console.log(ways);
  };
  solution(input);
}
