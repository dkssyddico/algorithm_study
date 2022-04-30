/**
 * 숨바꼭질 3
 * https://www.acmicpc.net/problem/13549
 * 수빈이는 동생과 숨바꼭질을 하고 있다. 수빈이는 현재 점 N(0 ≤ N ≤ 100,000)에 있고, 동생은 점 K(0 ≤ K ≤ 100,000)에 있다. 수빈이는 걷거나 순간이동을 할 수 있다. 만약, 수빈이의 위치가 X일 때 걷는다면 1초 후에 X-1 또는 X+1로 이동하게 된다. 순간이동을 하는 경우에는 0초 후에 2*X의 위치로 이동하게 된다.

수빈이와 동생의 위치가 주어졌을 때, 수빈이가 동생을 찾을 수 있는 가장 빠른 시간이 몇 초 후인지 구하는 프로그램을 작성하시오.
 */

{
  /**
   * 내 풀이
   */

  let [N, K] = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(Number);
  // const N = 5;
  // const K = 17;

  function BFS(current) {
    let dist = Array.from({ length: 100001 }, () => -1);
    let queue = [];
    dist[current] = 0;
    queue.push(current);

    while (dist[K] === -1) {
      let cur = queue.shift();
      for (let nxt of [cur - 1, cur + 1, cur * 2]) {
        if (nxt < 0 || nxt > 100000) continue;
        if (dist[nxt] !== -1) continue;
        // 순간이동은 0초가 걸리니까 최우선적으로 처리해야함.
        if (nxt === cur * 2) {
          dist[nxt] = dist[cur];
          queue.unshift(nxt);
        } else {
          dist[nxt] = dist[cur] + 1;
          queue.push(nxt);
        }
      }
    }
    console.log(dist[K]);
  }

  BFS(N);
}

{
  /**
   * 백준 다른 분 풀이
   */
  const path = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';

  const [n, k] = require('fs').readFileSync(path).toString().trim().split(' ').map(Number);

  console.log(getMinTime(n, k));

  function getMinTime(from, to) {
    if (from >= to) return from - to;
    const MAX = 100000;
    const visited = new Array(MAX + 1);
    const queue = [from];
    visited[from] = 0;
    let head = 0;

    while (queue.length > head) {
      const current = queue[head++];

      if (current === to) return visited[current];

      // 위의 풀이에서는 순간이동을 unshift로 넣어줘서 처리했는데 for문에서 맨 앞에 넣어도 괜찮은 것 같다
      for (let next of [current * 2, current - 1, current + 1]) {
        if (isAvailable(next)) {
          visited[next] = next === 2 * current ? visited[current] : visited[current] + 1;
          queue.push(next);
        }
      }
    }
    function isAvailable(num) {
      return num >= 0 && num <= MAX && !visited[num];
    }
  }
}
