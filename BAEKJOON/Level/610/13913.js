/**
 * 숨바꼭질 4: https://www.acmicpc.net/problem/13913
 * 족적까지 출력해내야하는 문제
 * 어떤게 이어지고 K까지 가는지 어떻게 알 수 있을까
 * node의 헤드랑 테일을 연결되게..?
 * 다른 분 풀이 참고해서 path 배열에 이전 숫자를 넣을 수 있도록 만들었다.
 * 출처: https://gobae.tistory.com/38
 */

let [N, K] = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(Number);

let result = '';

function BFS(current) {
  let dist = Array.from({ length: 100001 }, () => -1);
  let path = Array.from({ length: 100001 }, () => -1);
  let order = [K];
  let queue = [];
  dist[current] = 0;
  queue.push(current);
  while (dist[K] === -1) {
    let cur = queue.shift();
    for (let nxt of [cur - 1, cur + 1, cur * 2]) {
      if (nxt < 0 || nxt > 100000) continue;
      if (dist[nxt] !== -1) continue;
      path[nxt] = cur;
      dist[nxt] = dist[cur] + 1;
      queue.push(nxt);
    }
  }

  let prev = path[K];
  for (let i = 0; i < dist[K]; i++) {
    order.push(prev);
    prev = path[prev];
  }
  result += `${dist[K]}\n${order.reverse().join(' ')}`;
}

BFS(N);

console.log(result);
