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

{
  /**
   * 2606번
   */
  {
    // BFS 로 풀려다가 시간 초과로 실패
    /**
     * 내 생각: 정렬을 먼저 한다.
     * 큐에 제일 낮은 순서부터 해서 어떤 게 연결이 되어있는지는 체크 배열을 통해 정리한다.
     * 배열의 첫번째 숫자는 시작 숫자. 두번째는 연결된 컴퓨터의 숫자
     * 기존에 체크 되어 있는지도 검토해야함
     * 그걸 반복한다.
     * 1번부터 1번과 연관된 애들을 탐색하니까 뒤에는 새로 체크해줄 필요가 없다. 기준이 1번이라고 명확하게 나온 상황
     */

    // let [N, M, ...arr] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

    // let computers = arr.map((i) => i.split(' ').map(Number));

    let computers = [
      [1, 2],
      [2, 3],
      [1, 5],
      [5, 2],
      [5, 6],
      [4, 7],
    ];

    let check = Array(8).fill(0); // 컴퓨터가 오염된 걸 체크해주는 배열
    let count = 0;
    let queue = [1];

    while (queue.length) {
      let start = queue.shift();
      for (let i = 0; i < computers.length; i++) {
        let arr = computers[i];
        if (arr[0] === start) {
          queue.push(arr[1]);
          check[arr[1]] = 1;
        }
      }
    }

    for (let i = 0; i < check.length; i++) {
      if (check[i] === 1) {
        count++;
      }
    }

    console.log(count);
  }
  {
    // DFS 다른 분 풀이
    // https://zereight.tistory.com/744
    // let input = '7\n6\n1 2\n2 3\n1 5\n5 2\n5 6\n4 7';

    let [N, M, ...arr] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

    const n = parseInt(N);
    const m = parseInt(M);
    let computers = arr.map((i) => i.split(' ').map(Number));
    const graph = [...new Array(n + 1)].map(() => []);
    const visited = [...new Array(n + 1)].fill(0);

    let cnt = 0;
    for (const computer of computers) {
      const [start, dest] = computer;
      graph[start].push(dest);
      graph[dest].push(start);
    }
    visited[1] = 1;
    const dfs = (start) => {
      for (const dest of graph[start]) {
        if (!visited[dest]) {
          visited[dest] = 1;
          cnt++;
          dfs(dest);
        }
      }
    };
    dfs(1);
    console.log(cnt);
  }
}

{
  /**
   * 1260번 DFS와 BFS
   * DFS는 깊이 우선 탐색으로 한 노드에서 시작한 맨 끝 노드까지 탐색하고 더 이상 갈 노드가 없다면 왔던 길을 되돌아와서 다른 가지를 찾고, 이 과정을 반복한다.
   * BFS는 인접 노드를 먼저 찾는 방식이다.
   * 노드가 어떤 노드와 연결되어있는지 '그래프' 배열을 만들어주고,
   * https://cider.tistory.com/4 : 그래프 예제.
   * DFS, BFS 특성에 따라 각각 stack, queue를 사용해 현재 어떤 노드를 탐색하고 있는지 각각 자료구조에 넣어줘야한다.
   * 그리고 그 해당 노드를 방문했는지 여부를 확인해줄 수 있는 check or visited 배열을 만들어 true, false로 구분한다.
   * DFS는 재귀로 실행할 수 있다.
   */
  {
    // https://jaekwan.tistory.com/113 코드를 리팩토링한것.
    let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
    const [N, M, V] = input.shift().split(' ').map(Number);
    input = input.map((i) => i.split(' ').map(Number));

    let graph = Array.from(Array(N + 1), () => Array(N + 1).fill(0));

    for (let i = 0; i < M; i++) {
      const x = input[i][0];
      const y = input[i][1];

      graph[x][y] = 1;
      graph[y][x] = 1;
    }

    let BFS = function (node) {
      let answer = '';
      let visited = new Array(N + 1).fill(false);
      visited[node] = true;

      let Queue = [];
      Queue.push(node);

      while (Queue.length > 0) {
        let cur = Number(Queue.shift());
        answer += cur + ' ';
        for (let next = 1; next <= N; next++) {
          if (!visited[next] && graph[cur][next]) {
            visited[next] = true;
            Queue.push(next);
          }
        }
      }
      console.log(answer);
    };

    let DFS = function (node) {
      let answer = '';
      let visited = new Array(N + 1).fill(false, 0, N + 1);
      let stack = [];

      stack.push(node);

      while (stack.length > 0) {
        let cur = stack.pop();
        if (!visited[cur]) {
          visited[cur] = true;
          answer += cur + ' ';
          for (let next = N; next >= 1; next--) {
            if (!visited[next] && graph[cur][next]) stack.push(next);
          }
        }
      }
      console.log(answer);
    };

    DFS(V);
    BFS(V);
  }
  {
    // 백준 다른 사람 풀이
    const fs = require('fs');
    const { off } = require('process');
    const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
    const [N, M, V] = input[0].trim().split(' ').map(Number);
    const ARR = [];
    const visited1 = new Array(N + 1).fill(0);
    const visited2 = new Array(N + 1).fill(0);

    for (let i = 0; i <= N; i++) {
      ARR.push([...new Array(N + 1).fill(0)]);
    }

    for (let i = 1; i <= M; i++) {
      const [a, b] = input[i].trim().split(' ').map(Number);
      ARR[a][b] = ARR[b][a] = 1;
    }

    const stack = [];
    const queue = [];
    const resultStr = [];

    function dfs(idx) {
      visited1[idx] = 1;

      stack.push(idx);
      for (let i = 1; i <= N; i++) {
        if (!visited1[i] && ARR[idx][i] !== 0) {
          dfs(i);
        }
      }
      return;
    }

    function bfs(idx) {
      const arr = [];

      visited2[idx] = 1;
      queue.push(idx);
      arr.push(idx);

      while (arr.length) {
        idx = arr.shift();
        for (let i = 1; i <= N; i++) {
          if (!visited2[i] && ARR[idx][i] !== 0) {
            visited2[i] = 1;
            queue.push(i);
            arr.push(i);
          }
        }
      }
      return;
    }

    dfs(V);
    bfs(V);
    resultStr.push(stack.join(' '));
    resultStr.push(queue.join(' '));
    console.log(resultStr.join('\n'));
  }
}

{
  /**
   * 2667번 단지 번호 붙이기
   * 인프런에서 풀었던 섬 찾기 방식으로 푸니까 금방 풀었다.
   * 처음의 houses 배열을 이중 for문으로 돌면서 집을 하나 찾고, DFS 재귀함수를 실행한다.
   * 찾은 집은 방문했다고 0으로 바꿔주고, 4방향에서 집이 있는지를 찾아본다.
   * 각 단지 내 집의 수를 카운트해주는게 어려웠는데, 다른 풀이를 보고 참고했다.
   * 그리고 오름차순으로 출력해줘야함.
   */
  const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
  let n = Number(input.shift());

  let houses = Array.from(Array(n), () => new Array(n));
  for (let i = 0; i < n; i++) {
    houses[i] = input[i].split('').map((el) => Number(el));
  }

  let answer = [];

  let dx = [-1, 0, 1, 0];
  let dy = [0, 1, 0, -1];

  let count = 0;
  function DFS(x, y) {
    houses[x][y] = 0;
    count++;
    for (let k = 0; k < 4; k++) {
      let nx = x + dx[k];
      let ny = y + dy[k];
      if (nx >= 0 && nx < n && ny >= 0 && ny < n && houses[nx][ny] === 1) {
        DFS(nx, ny);
      }
    }
  }

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (houses[i][j] === 1) {
        DFS(i, j);
        answer.push(count);
        count = 0;
      }
    }
  }

  console.log(answer.length);
  answer.sort((a, b) => a - b).forEach((a) => console.log(a));
}

{
  /**
   * 1012번 유기농 배추
   */
  {
    let arr = [
      [0, 0],
      [1, 0],
      [1, 1],
      [4, 2],
      [4, 3],
      [4, 5],
      [2, 4],
      [3, 4],
      [7, 4],
      [8, 4],
      [9, 4],
      [7, 5],
      [8, 5],
      [9, 5],
      [7, 6],
      [8, 6],
      [9, 6],
    ];
    // DFS로 풀었을 때
    let width = 10;
    let height = 8;
    let nums = 17;
    let answer = 0;

    // 이거 틀린거같음 width, height가 반대로 들어가야함
    let veggies = Array.from(Array(width), () => Array(height).fill(0));

    // 야채 그래프 만들어주기
    for (let i = 0; i < arr.length; i++) {
      let location = arr[i];
      let x = location[0];
      let y = location[1];
      veggies[x][y] = 1;
    }

    let dx = [-1, 0, 1, 0];
    let dy = [0, 1, 0, -1];

    function DFS(x, y) {
      veggies[x][y] = 0; // 찾은 배추는 0 처리
      for (let i = 0; i < 4; i++) {
        let posX = x + dx[i];
        let posY = y + dy[i];
        if (posX >= 0 && posX < width && posY >= 0 && posY < height && veggies[posX][posY] === 1) {
          DFS(posX, posY);
        }
      }
    }

    // 야채 찾기
    for (let i = 0; i < width; i++) {
      for (let j = 0; j < height; j++) {
        if (veggies[i][j] === 1) {
          answer++;
          DFS(i, j);
        }
      }
    }

    console.log(answer);
  }
  {
    /**
     * https://onelight-stay.tistory.com/362 이 분 풀이 참고
     * BFS를 더 연습해야겠다.
     */
    const readline = require('readline');
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });
    let problemCount = 0; //문제 개수
    let arrInfo = []; // 가로세로와 배추정보
    let inputIndex = 0; // input안 위치 설정
    let untilIndex = 0; // 고정되어야 하는 인덱스
    let input = [];
    let graph = [];
    let visited = [];
    let result = [];
    let count = 0;
    rl.on('line', function (line) {
      if (problemCount === 0) problemCount = Number(line.toString());
      else if (line.toString().split(' ').length === 3) {
        arrInfo.push(
          line
            .toString()
            .split(' ')
            .map((el) => Number(el))
        );
      } else {
        input.push(
          line
            .toString()
            .split(' ')
            .map((el) => Number(el))
        );
      }
    }).on('close', function () {
      for (let i = 0; i < problemCount; i++) {
        count = 0;
        solution(arrInfo[i]);
      }
      console.log(result.join('\n'));
      process.exit();
    });

    let solution = (problem) => {
      graph = []; // 초기화
      visited = []; // 초기화
      let width = problem[0];
      let height = problem[1];
      let veggies = problem[2];
      graph = Array.from(Array(height), () => Array(width).fill(0));
      visited = Array.from(Array(height), () => Array(width).fill(false));
      for (let i = inputIndex; i < inputIndex + problem[2]; i++) {
        graph[input[i][1]][input[i][0]] = 1;
      }

      let BFS = (x, y) => {
        let dy = [0, 0, -1, 1];
        let dx = [-1, 1, 0, 0];
        let queue = [];

        visited[x][y] = true;
        queue.push([x, y]);

        while (queue.length) {
          let [mx, my] = queue.shift();

          for (let i = 0; i < 4; i++) {
            let xx = mx + dx[i];
            let yy = my + dy[i];

            if (0 <= xx && xx < height && 0 <= yy && yy < width) {
              if (graph[xx][yy] === 1 && visited[xx][yy] === false) {
                visited[xx][yy] = true;
                queue.push([xx, yy]);
              }
            }
          }
        }
        return;
      };
      for (let i = untilIndex; i < untilIndex + veggies; i++) {
        if (visited[input[i][1]][input[i][0]] === false) {
          BFS(input[i][1], input[i][0]);
          count++;
        }
        inputIndex++;
      }
      untilIndex = inputIndex;
      result.push(count);
      return;
    };
  }
}
