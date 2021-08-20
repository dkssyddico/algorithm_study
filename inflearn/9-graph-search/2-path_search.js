function solution(n, arr) {
  let answer = 0;
  let graph = Array.from(Array(n + 1), () => Array(n + 1).fill(0));
  let ch = Array.from({ length: n + 1 }, () => 0);
  let path = [];
  for (let [a, b] of arr) {
    // 방향 그래프 만들기
    graph[a][b] = 1;
  }
  function DFS(v) {
    if (v === n) {
      answer++;
      console.log(path);
      console.log(ch);
    } else {
      for (let i = 1; i <= n; i++) {
        // v에서 i로 갈 수 있으냐!
        // i를 방문했는지
        if (graph[v][i] === 1 && ch[i] === 0) {
          ch[i] = 1; // 방문했다고 체크
          console.log(ch);
          path.push(i);
          DFS(i);
          ch[i] = 0; // 되돌아갈때 방문한 곳 체크 풀어줌
          console.log(ch);

          path.pop();
        }
      }
    }
  }
  path.push(1);
  ch[1] = 1;
  DFS(1);
  return answer;
}

let arr = [
  [1, 2],
  [1, 3],
  [1, 4],
  [2, 1],
  [2, 3],
  [2, 5],
  [3, 4],
  [4, 2],
  [4, 5],
];

console.log(solution(5, arr));
