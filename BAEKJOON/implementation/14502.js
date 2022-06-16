/**
 * 연구소
 * 14502: https://www.acmicpc.net/problem/14502
 * 0은 영역, 1은 벽, 2는 바이러스
 * 바이러스 보면 벽 세우고 바이러스가 퍼진 것 보고 안전 영역 세기
 * 예시를 보니까 헷갈린다..
 * 새로 세울 수 있는 벽의 개수는 3개이며, 꼭 3개를 세워야 한다: 이게 조건!
 */

{
  // 백준 풀이 참고.
  const input = [];

  const solution = (input) => {
    const [n, m] = input.shift().split(' ').map(Number);
    const arr = [];
    for (let i = 0; i < input.length; i++) {
      const temp = input[i].split(' ').map(Number);
      arr.push(temp);
    }

    let answer = 0;
    const [dx, dy] = [
      [1, -1, 0, 0],
      [0, 0, 1, -1],
    ];

    const bfs = (copyArr) => {
      const queue = [];
      for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
          if (arr[i][j] === 2) {
            queue.push([i, j]); // 바이러스인 부분을 queue에 넣는다.
          }
        }
      }

      while (queue.length > 0) {
        const [y, x] = queue.shift();
        for (let i = 0; i < 4; i++) {
          const ny = y + dy[i];
          const nx = x + dx[i];
          if (ny >= 0 && ny < n && nx >= 0 && nx < m) {
            if (copyArr[ny][nx] === 0) {
              // 0인 부분 바이러스로 덮기
              copyArr[ny][nx] = 2;
              queue.push([ny, nx]);
            }
          }
        }
      }

      let count = copyArr.reduce((acc, row) => acc + row.filter((e) => e === 0).length, 0);

      answer = Math.max(answer, count);
    };

    // 벽 만들어보고 거기서 바이러스 퍼지게 하고 0인 영역을 세는 것 같다.
    // 그래서 문제 분류에 브루트 포스가..
    const makeWall = (r, c, count) => {
      if (count === 3) {
        const copyArr = arr.map((e) => [...e]);
        bfs(copyArr);
        return;
      }
      for (let i = r; i < n; i++) {
        for (let j = 0; j < m; j++) {
          if (arr[i][j] === 0) {
            arr[i][j] = 1;
            makeWall(i, j, count + 1);
            arr[i][j] = 0;
          }
        }
      }
    };

    makeWall(0, 0, 0);
    console.log(answer);
  };

  require('readline')
    .createInterface(process.stdin, process.stdout)
    .on('line', function (line) {
      input.push(line.trim());
    })
    .on('close', function () {
      solution(input);
    });
}
