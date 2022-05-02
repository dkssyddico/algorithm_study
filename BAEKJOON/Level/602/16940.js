/**
 * BFS 스페셜 저지
 * 메모리 초과 때문에 다른 방법을 찾아야했음.
 * shift를 쓰면 시간 초과가 난다는 것 같고 그래서 index로 파악을 해야함.
 */

// const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
// const N = +input.shift();
// const route = input.pop();
// const board = input.map((i) => i.split(' ').map(Number));

const N = 4;

const board = [
  [1, 2],
  [1, 3],
  [2, 4],
];

const route = '1 2 3 4';

const tree = Array.from({ length: N + 1 }, () => new Array(N + 1).fill(0));

for (let i = 0; i < board.length; i++) {
  const [first, second] = board[i];
  tree[first][second] = 1;
  tree[second][first] = 1;
}

const result = [];

function BFS1() {
  const check = Array(N + 1).fill(0);
  const path = Array(N + 1).fill(0);
  let order = '1 ';
  const queue = [1];
  check[1] = 1;
  while (queue.length) {
    const x = queue.shift();
    for (let i = 0; i <= N; i++) {
      // 노드끼리 연결되어 있고.
      if (check[i]) continue;
      if (tree[x][i] && !check[i]) {
        path[i] = x;
        check[i] = 1;
        order += `${i} `;
        queue.push(i);
      }
    }
  }
  result.push(order.trim());
}

BFS1();

console.log(result.includes(route) ? 1 : 0);

{
  /**
   * https://www.acmicpc.net/source/42548164
   * 이분 풀이 방식은 주어진 방문 순서를 가지고 실제로 노드들이 그 방문 순서를 만족하는지 알아보는 것.
   * 나는 여러가지 방문 결과를 저장하고 그 방문 순서를 포함하는지 보려고 했는데 이게 더 효율적인 것 같다.
   */

  let input = `4\n1 2\n1 3\n2 4\n1 2 3 4`.split('\n');

  // 인접리스트 만들기

  const n = +input[0].trim();

  let graph = new Array(n + 1);

  for (let i = 1; i <= n; i++) {
    graph[i] = new Array();
  }

  for (let i = 1; i <= n - 1; i++) {
    const [a, b] = input[i]
      .trim()
      .split(' ')
      .map((v) => +v);

    graph[a].push(b);
    graph[b].push(a);
  }

  console.log(graph);

  // 입력에 주어진 탐색 순서를 seq 배열에 저장
  // 1번 노드부터 시작하는 BFS를 진행하면서, seq 베열의 순서대로 BFS를 진행할 수 있는지 체크한다.
  // [1, 2, 3, 4]
  let seq = input[n]
    .trim()
    .split(' ')
    .map((v) => +v);

  // BFS

  let answer = [];

  // DFS에서 확인할 seq의 index
  let seqIdx = 1;

  // 1번 노드부터 BFS 수행(문제 조건)
  BFS(1);

  // seq와 answer이 같다면, graph를 seq 순서대로 BFS를 이용해 탐색할 수 있다는 것을 의미함
  if (JSON.stringify(seq) === JSON.stringify(answer)) {
    // if (answer.length === seq.length) {
    console.log(1);

    // seq와 answer이 다르다면, graph를 seq 순서대로 BFS를 이용해 탐색할 수 없다는 것을 의미함
  } else {
    console.log(0);
  }

  function BFS(startNode) {
    // 방문 예정 목록(큐)를 생성하고, 시작점을 큐에 넣는다.
    let queue = [];
    queue.push(startNode);
    answer.push(startNode); // answer은 빈 배열

    // idx는 큐를 shift하지 않고, index로 사용하기 위해 쓰는 변수이다.
    // idx는 곧 큐에서 방문 완료한 노드의 갯수와 같다.
    let idx = 0;

    // 만일 큐의 길이가 idx 값과 같다면,
    // 큐의 모든 노드를 탐색했다는 것이므로 반복을 종료한다.
    // (큐의 length가 0일 때 멈추는 것과 같은 논리이다.)
    while (queue.length !== idx) {
      // 현재 단계에서 탐색을 수행할 x는 큐에 남아 있는 노드들이다.
      // 따라서 탐색 구간을 startIndex부터 lastIndex까지로 한다.

      // startIndex는 큐의 순서상 다음에 꺼내야할 노드의 index이고,
      // lastIndex는 큐의 마지막 index이다. (BFS를 진행하면서 큐의 길이가 변하므로, 미리 저장한다.)
      const startIndex = idx;
      const lastIndex = queue.length - 1;

      console.log('------------------');
      // startIndex부터 lastIndex까지 탐색한다
      for (let a = startIndex; a <= lastIndex; a++) {
        // 큐에서 index a에 저장된 노드를 꺼낸다.
        const x = queue[a];
        console.log('queue', queue, 'a-startIndex', a, '노드', x, '마지막 인덱스', lastIndex);

        // 다음에 꺼내야 할 index의 값을 저장한 idx 변수의 값을 1 증가시킨다.
        idx++;

        // 만약 answer의 길이가 seq의 길이와 같다면
        // 더 이상 BFS를 진행할 필요가 없으므로 종료한다.

        // (ex) seq가 [1, 2, 3, 4] 인데, answer의 길이가 4가 되었다면,
        // 이미 BFS를 진행하는 과정에서 seq대로 answer를 구했다는 것을 의미하므로
        // 더이상의 BFS를 진행하지 않고 종료한다.

        // 순서를 저장하는 answer에 추가로 더 저장할 필요가 없고,
        // seq와 answer가 같은지만 비교하면 된다.)
        while (answer.length !== seq.length) {
          // 이번 BFS 순서에서 방문할 수 있는지 체크할 노드를 target에 넣음
          const target = seq[seqIdx];
          console.log('target', target);

          // 만약 x번 노드에서 target으로 이동할 수 없다면
          if (!graph[x].includes(target)) {
            // 종료함
            break;
          }

          // x번 노드의 인접 노드 갯수만큼 반복
          for (let i = 0; i < graph[x].length; i++) {
            // x번 노드의 인접 노드 y번 노드를 변수 y에 저장
            const y = graph[x][i];
            console.log('인접 노드', y);

            // 만약 y번 노드가 현재 BFS 단계에서 방문해야할 target과 같고, 아직 y를 방문한 적이 없다면
            if (y === target) {
              // seqInx를 1 증가시켜 다음 target을 가르킬 수 있도록 변경하고
              seqIdx++;

              // 큐와 answer에 y를 저장하고
              queue.push(y);
              answer.push(y);
              console.log('answer', answer);
              break;
            }
          }
        }
      }
    }
  }
}

{
  // https://www.acmicpc.net/source/41729231
  // const fs = require('fs');
  // const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
  let input = `4\n1 2\n1 3\n2 4\n1 2 3 4`.split('\n');

  console.log(isCorrectOrder(input));

  function isCorrectOrder(input) {
    const nodes = +input[0];
    const edges = input.slice(1, -1).map((edge) => edge.split(' ').map(Number));
    const [answer] = input.slice(-1).map((str) => str.split(' ').map(Number));

    if (answer[0] !== 1) return 0;

    const adjacencyList = getAdjacencyList(nodes, edges);
    const order = new Array(nodes + 1);

    for (let i = 0; i < nodes; i++) {
      order[answer[i]] = i + 1;
    }

    console.log(order);
    adjacencyList.map((node) => node.sort((a, b) => order[a] - order[b]));
    console.log(adjacencyList);

    return bfs(1);

    function bfs(start) {
      const visited = new Array(nodes + 1);
      const queue = [];
      queue.push(start);
      visited[start] = 1;
      let head = 0;

      while (queue.length > head) {
        const current = queue[head];
        if (answer[head++] !== current) return 0;
        for (let next of adjacencyList[current]) {
          if (!visited[next]) {
            queue.push(next);
            visited[next] = 1;
          }
        }
      }
      return 1;
    }
  }

  function getAdjacencyList(nodes, edges) {
    const adjList = Array.from(Array(nodes + 1), () => new Array());
    edges.forEach(([from, to]) => {
      adjList[from].push(to);
      adjList[to].push(from);
    });
    return adjList;
  }
}
