// 다 연결되면 하나, 연결되지 않으면 2개
// 이어졌다는 걸 어떻게 알지? -> DFS를 처음 호출한거로 판단
let computers = [
  [1, 1, 0],
  [1, 1, 0],
  [0, 0, 1],
];
let n = 3;
let answer = 0;
let visited = new Array(n).fill(false);

function dfs(i) {
  visited[i] = true;
  for (let j = 0; j < computers[i].length; j++) {
    if (computers[i][j] === 1 && !visited[j]) {
      dfs(j);
    }
  }
}

for (let i = 0; i < computers.length; i++) {
  if (!visited[i]) {
    dfs(i);
    answer++;
  }
}

return answer;
