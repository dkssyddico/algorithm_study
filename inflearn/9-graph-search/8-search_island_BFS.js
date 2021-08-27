function solution(board) {
  let answer = 0;
  let n = board.length;
  let dx = [-1, -1, 0, 1, 1, 1, 0, -1];
  let dy = [0, 1, 1, 1, 0, -1, -1, -1];
  let queue = [];
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      // 섬인가?
      if (board[i][j] === 1) {
        console.log(`i, j ${i} ${j}`);
        board[i][j] = 0; //바다로 만들기
        queue.push([i, j]);
        // 0이 되면 종료된다.
        answer++; // 섬을 발견한거니 카운팅!
        while (queue.length) {
          // 출발점 보기
          let [x, y] = queue.shift();
          console.log(`x, y ${x} ${y}`);
          // 8 방향 보기
          for (let k = 0; k < 8; k++) {
            let nx = x + dx[k];
            let ny = y + dy[k];
            // 8방향에서 새로운 섬을 찾는 경우
            if (nx >= 0 && nx < n && ny >= 0 && ny < n && board[nx][ny] === 1) {
              board[nx][ny] = 0;
              // 그 좌표를 다시 큐에 넣어주기
              queue.push([nx, ny]);
            }
          }
        }
        console.log('BFS end');
      }
    }
  }

  return answer;
}

let arr = [
  [1, 1, 0, 0, 0, 1, 0],
  [0, 1, 1, 0, 1, 1, 0],
  [0, 1, 0, 0, 0, 0, 0],
  [0, 0, 0, 1, 0, 1, 1],
  [1, 1, 0, 1, 1, 0, 0],
  [1, 0, 0, 0, 1, 0, 0],
  [1, 0, 1, 0, 1, 0, 0],
];

console.log(solution(arr));
