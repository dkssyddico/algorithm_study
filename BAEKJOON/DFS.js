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
