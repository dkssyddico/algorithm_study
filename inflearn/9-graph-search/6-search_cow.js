function solution(s, e) {
  let answer = 0;
  // 좌표수 10,000개
  let ch = Array.from({ length: 10001 }, () => 0);
  let dis = Array.from({ length: 10001 }, () => 0);
  let queue = [];
  ch[s] = 1; // 맨 처음 스타트 번호를 체크해준다.
  queue.push(s);
  // 현수의 출발지점은 0
  dis[s] = 0;
  while (queue.length) {
    let x = queue.shift(); // 첫 출발좌표 5가 나온다.
    for (let nx of [x - 1, x + 1, x + 5]) {
      if (nx === e) return dis[x] + 1; // 점핑 횟수
      if (nx > 0 && nx <= 10000 && ch[nx] === 0) {
        ch[nx] = 1;
        queue.push(nx);
        dis[nx] = dis[x] + 1;
      }
    }
  }
  return answer;
}

function solution2(s, e) {
  let answer = 0;
  let ch = Array.from({ length: 10001 }, () => 0);
  let queue = [];
  queue.push(s);
  ch[s] = 1;
  let L = 0;
  while (queue.length) {
    let len = queue.length;
    console.log(`len ${len}`);
    for (let i = 0; i < len; i++) {
      console.log(`i ${i}`);
      let x = queue.shift();
      for (let nx of [x - 1, x + 1, x + 5]) {
        if (nx === e) return L + 1;
        if (nx > 0 && nx <= 10000 && ch[nx] === 0) {
          ch[nx] = 1;
          queue.push(nx);
          console.log(queue);
        }
      }
    }
    L++;
  }
  return answer;
}

// console.log(solution(5, 14));

// s start e end
console.log(solution2(5, 14));
