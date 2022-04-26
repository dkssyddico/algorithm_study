/**
 * 숨바꼭질
 * 수빈이는 동생과 숨바꼭질을 하고 있다.
 * 수빈이는 현재 점 N(0 ≤ N ≤ 100,000)에 있고, 동생은 점 K(0 ≤ K ≤ 100,000)에 있다.
 * 수빈이는 걷거나 순간이동을 할 수 있다.
 * 만약, 수빈이의 위치가 X일 때 걷는다면 1초 후에 X-1 또는 X+1로 이동하게 된다. 순간이동을 하는 경우에는 1초 후에 2*X의 위치로 이동하게 된다.
 * 수빈이와 동생의 위치가 주어졌을 때, 수빈이가 동생을 찾을 수 있는 가장 빠른 시간이 몇 초 후인지 구하는 프로그램을 작성하시오.
 *
 * 고민
 * 순간이동을 하는 경우..
 */

// const N = 5;
// const K = 17;

// 5-10-9-18-17

{
  /**
   * 내가 구현한 코드인데 통과는 했는데 시간이 엄청 오래걸림.. (7156ms)
   */
  let [N, K] = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(Number);

  let result = 0;

  function BFS(current) {
    const queue = [];
    queue.push(current);
    const dis = [-1, 1, 2];
    const visited = new Array(100001).fill(0);
    while (true) {
      const pos = queue.shift();
      if (pos === K) {
        result += visited[pos];
        break;
      }
      for (let i = 0; i < dis.length; i++) {
        let newX;
        if (dis[i] === 2) {
          newX = pos * 2;
        } else {
          newX = dis[i] + pos;
        }
        // 이 조건을 꼭 넣어줘야 함.
        if (newX > 100000) continue;
        if (!visited[newX]) {
          visited[newX] = visited[pos] + 1;
          queue.push(newX);
        }
      }
    }
  }

  BFS(N);

  console.log(result);
}

{
  // 다른 분 풀이 for of를 사용하면 +1, -1, *2 조건을 쉽게 쓸 수 있구나

  /* get input */
  const fs = require('fs');
  const filePath = fs.readFileSync('/dev/stdin');
  //const filePath = `5 17`;

  const input = filePath
    .toString()
    .trim()
    .split(' ')
    .map((item) => +item);
  /* get input end */

  /* set param */

  /* set param end */

  /* solve */
  const solution = (input) => {
    'use strict';
    // console.log(input);
    const n = +input[0];
    const m = +input[1];
    let dist = Array.from({ length: 100001 }, () => -1);
    let queue = [];
    dist[n] = 0;
    queue.push(n);

    while (dist[m] === -1) {
      let cur = queue.shift();
      for (let nxt of [cur - 1, cur + 1, cur * 2]) {
        if (nxt < 0 || nxt > 100000) continue;
        if (dist[nxt] !== -1) continue;
        dist[nxt] = dist[cur] + 1;
        queue.push(nxt);
      }
      // console.log(queue);
    }
    console.log(dist[m]);
  };
  /* solve end */

  /* print output */
  const output = solution(input);
  // console.log(output);
  /* print output end */
}

{
  /**
   * 수정 코드: 훨씬 빨라짐 440ms
   */
  let [N, K] = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(Number);

  function BFS(current) {
    let dist = Array.from({ length: 100001 }, () => 0);
    let queue = [];
    dist[current] = 0;
    queue.push(current);

    while (dist[K] === -1) {
      let cur = queue.shift();
      for (let nxt of [cur - 1, cur + 1, cur * 2]) {
        if (nxt < 0 || nxt > 100000) continue;
        if (dist[nxt] !== -1) continue;
        dist[nxt] = dist[cur] + 1;
        queue.push(nxt);
      }
    }
    console.log(dist[K]);
  }

  BFS(N);
}
