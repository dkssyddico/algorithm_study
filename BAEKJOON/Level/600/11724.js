/**
 * 연결요소의 갯수
 * 연결요소가 뭔지 몰라서 찾아봤다.
 * 그래프 이론에서 연결 요소(connected component)란 무방향 그래프(undirected graph)의 부분 그래프(subgraph)로서 부분 그래프 내의 모든 정점(vertex)쌍에 대하여 항상 경로가 존재하고 다른 연결 요소와 연결되어 있지 않은 것을 말합니다.
 * 그래서 예제 1은 2개고, 예제 2는 답이 1일 수 밖에 없다. (예제 2를 그려보니 모든 간선들이 이어진다)
 * 출처: https://annajeong.github.io/algorithm/baekjoon11724/
 * 풀이방식은 어제 ABCDE와 비슷하지만 조금 다르다.
 */
const N = 6;
const M = 5;
const lines = [
  [1, 2],
  [2, 5],
  [5, 1],
  [3, 4],
  [4, 6],
];

const graph = Array.from({ length: N + 1 }, () => new Array(N + 1).fill(0));
const visited = new Array(N + 1).fill(0);
let count = 0;

for (let i = 0; i < M; i++) {
  const [first, second] = lines[i];
  graph[first][second] = 1;
  graph[second][first] = 1;
}

function DFS(start) {
  visited[start] = 1;
  console.log(visited);
  for (let i = 1; i < N; i++) {
    if (graph[start][i] === 1 && !visited[i]) {
      DFS(i);
    }
  }
}

for (let i = 1; i < N; i++) {
  if (!visited[i]) {
    DFS(i);
    count++; // 정점이 이어진 것에 대한 확인이 끝나야 카운트 갯수가 올라간다.
  }
}

console.log(count);

{
  let [input, ...inputs] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
  let [N, M] = input.split(' ').map(Number);
  let graph = Array.from({ length: N + 1 }, () => new Array(N + 1).fill(0));
  let visited = new Array(N + 1).fill(false);
  let cnt = 0;
  for (let i = 0; i < inputs.length; i++) {
    let [a, b] = inputs[i].split(' ').map((e) => +e);
    graph[a][b] = 1;
    graph[b][a] = 1;
  }

  function DFS(v) {
    if (visited[v] == true) return;
    visited[v] = true;
    for (let i = 0; i < graph[v].length; i++) {
      if (graph[v][i] === 1 && !visited[i]) {
        DFS(i);
      }
    }
  }

  for (let i = 1; i <= N; i++) {
    if (!visited[i]) {
      DFS(i);
      cnt++;
    }
  }

  console.log(cnt);
}
