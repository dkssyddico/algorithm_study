/**
 * 서울 지하철 2호선
 * https://www.acmicpc.net/problem/16947
 *
 * 문제가 복잡해서 처음엔 무슨 말인가 했는데 해결방법은 다음과 같다.
 * DFS와 BFS를 모두 사용해야 하는 문제다.
 * 사이클을 구한다 -> 그리고 그 사이클 내에서 1에서 N번이 사이클에 속하면 0, 아니면 최단 거리를 구한다.
 * 사이클은 적어도 3개 노드가 서로 연결되어 있어야 함
 * 역과 역이 연결되어있는게 중요한 포인트인데 이걸 배열로 만들어준다.
 * adjArr 배열이 그 역할을 한다.
 * 1번이 2번과 연결되어있으면
 * adjArr[1] = 2, adjArr[2] = 1 이렇게 만들어주는 것이다.
 *
 * https://gobae.tistory.com/36
 */

const N = 6;
const inputs = [
  [1, 2],
  [3, 4],
  [6, 4],
  [2, 3],
  [1, 3],
  [3, 5],
];

const adjArr = Array.from({ length: N + 1 }, () => Array());

inputs.forEach((input) => {
  const [from, to] = input;
  adjArr[from].push(to);
  adjArr[to].push(from);
});

const check = new Array(N + 1).fill(0);
let flag = 0;

let cycle;
function dfs(L, idx) {
  if (flag) return;

  // adjArr[idx]에 들어있는 애들이 연결되었는지 찾아보는 것이다.
  for (let x of adjArr[idx]) {
    if (!check[x]) {
      check[x] = 1;
      dfs(L + 1, x);
      check[x] = 0;
    } else if (L >= 3 && x === start) {
      flag = 1;
      cycle = check.slice();
      return;
    }
  }
}

let start;
for (let i = 1; i <= N; i++) {
  start = i;
  check[i] = 1;
  dfs(1, i);
  check[i] = 0;
  if (flag) break;
}

function bfs(i) {
  const queue = [];
  queue.push(i);
  let dist = 0;
  const check2 = new Array(N + 1).fill(0); // 방문했는지 체크
  check2[i] = 1;
  while (true) {
    dist++;
    for (let i = 0; i < queue.length; i++) {
      const from = queue.shift();
      for (let to of adjArr[from]) {
        // console.log('from', from, 'to', to);
        if (cycle[to]) {
          // from과 연결된 to가 cycle에 있으면 최단거리를 발견한 것임.
          return dist;
        }
        // cycle내에 없고 방문한 적이 없으면 방문 표시해주고 queue에 넣는다.
        if (!check2[to]) {
          check2[to] = 1;
          queue.push(to);
        }
      }
    }
  }
}

let result = [];
for (let i = 1; i <= N; i++) {
  if (cycle[i]) {
    result.push(0);
    continue;
  }
  result.push(bfs(i));
}
