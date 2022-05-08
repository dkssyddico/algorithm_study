/**
 * 트리의 부모 찾기: https://www.acmicpc.net/problem/11725
 * 다른 분 풀이 참고: https://gobae.tistory.com/44
 */

const N = 7;
const nodes = [
  [1, 6],
  [6, 3],
  [3, 5],
  [4, 1],
  [2, 4],
  [4, 7],
];

const tree = Array.from({ length: N + 1 }, () => []);

for (let i = 0; i < N - 1; i++) {
  const [from, to] = nodes[i];
  tree[from].push(to);
  tree[to].push(from);
}

let check = Array.from({ length: N + 1 }, () => 0);

function bfs() {
  const queue = [];
  check[1] = 1;
  for (let next of tree[1]) {
    // next(child) 노드 값의 인덱스에 1(부모 노드)값을 넣어주고, 큐에 넣어준다.
    check[next] = 1;
    queue.push(next);
  }
  while (queue.length) {
    const node = queue.shift();
    for (let next of tree[node]) {
      // 노드를 순회하면서, 방문한 노드라면 건너뛴다.
      if (check[next]) continue;
      check[next] = node; // 위와 같이 next 인덱스에는 node(부모 노드)값을 넣는다.
      queue.push(next);
    }
  }
}
bfs();

check = check.slice(2);
let result = '';
check.map((v) => (result += `${v}\n`)); // 체크 배열의 2번 인덱스(2번 노드)부터 출력한다.
console.log(result);
