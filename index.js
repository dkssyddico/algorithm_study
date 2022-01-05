// const NMV = input.shift().split(' ');
// const N = 4;
// const M = 5;
// const V = 1;

// let input = [
//   [1, 2],
//   [1, 3],
//   [1, 4],
//   [2, 4],
//   [3, 4],
// ];

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
