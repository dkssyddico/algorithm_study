/**
 * 이모티콘: https://www.acmicpc.net/problem/14226
 * 영선이는 매우 기쁘기 때문에, 효빈이에게 스마일 이모티콘을 S개 보내려고 한다.

영선이는 이미 화면에 이모티콘 1개를 입력했다. 이제, 다음과 같은 3가지 연산만 사용해서 이모티콘을 S개 만들어 보려고 한다.

- 화면에 있는 이모티콘을 모두 복사해서 클립보드에 저장한다.
- 클립보드에 있는 모든 이모티콘을 화면에 붙여넣기 한다.
- 화면에 있는 이모티콘 중 하나를 삭제한다.
모든 연산은 1초가 걸린다. 또, 클립보드에 이모티콘을 복사하면 이전에 클립보드에 있던 내용은 덮어쓰기가 된다. 클립보드가 비어있는 상태에는 붙여넣기를 할 수 없으며, 일부만 클립보드에 복사할 수는 없다. 또한, 클립보드에 있는 이모티콘 중 일부를 삭제할 수 없다. 화면에 이모티콘을 붙여넣기 하면, 클립보드에 있는 이모티콘의 개수가 화면에 추가된다.

영선이가 S개의 이모티콘을 화면에 만드는데 걸리는 시간의 최솟값을 구하는 프로그램을 작성하시오.

풀이 방법은 2차원 배열을 만들어서 현재 이모티콘 숫자와 클립보드를 체크해주는 것. 
클립보드에 복사할 때는 현재 이모티콘 숫자를 두차례 쓰면 된다. visited[현재 숫자][현재 숫자]
붙여넣기 할 때는 visited[현재 숫자+클립보드][클립보드]를 쓰면 된다. 뒤에 클립보드를 넣는 것은 클립보드 수는 변함이 없기 때문. 
 */

{
  const S = Number(require('fs').readFileSync('/dev/stdin').toString().trim());
  const MAX = 1000;
  let answer = 0;
  function BFS() {
    // visited[현재위치][clipboard]
    const visited = Array.from({ length: MAX + 1 }, () => Array(MAX + 1).fill(0));
    // [현재위치, 클립보드, 시간]
    const queue = [[1, 0, 0]];
    // 현재위치 체크
    visited[1][0] = 1;
    while (queue.length) {
      const [current, clipboard, time] = queue.shift();
      if (current === S) {
        answer = time;
        return;
      }
      if (current <= 0 || current > MAX) continue;
      // 클립보드에 현재 숫자 저장하기
      if (!visited[current][current]) {
        visited[current][current] = 1;
        queue.push([current, current, time + 1]);
      }
      // 클립보드에 있는 숫자 붙여 넣기
      if (clipboard && current + clipboard <= MAX) {
        if (!visited[current + clipboard][clipboard]) {
          visited[current + clipboard][clipboard] = 1;
          queue.push([current + clipboard, clipboard, time + 1]);
        }
      }
      // 현재 화면에서 한개 삭제하기
      if (!visited[current - 1][clipboard]) {
        visited[current - 1][clipboard] = 1;
        queue.push([current - 1, clipboard, time + 1]);
      }
    }
  }
  BFS();
  console.log(answer);
}

{
  /**
   * 혼자서 시도한 풀이(실패)
   * 클립보드에 복사하는 처리가 문제였음.
   */
  const S = 18;

  function BFS() {
    const queue = [1];
    const visited = Array.from({ length: 1001 }, () => 0);
    let clipboard = 0;
    while (visited[S] === 0) {
      let current = queue.shift();
      clipboard = current;
      for (let next of [current + clipboard, current - 1]) {
        if (next < 0 || next > 1001) continue;
        if (visited[next] !== 0) continue;
        if (next === current + clipboard) {
          visited[next] = visited[current] + 2;
        } else {
          visited[next] = visited[current] + 1;
        }
        queue.push(next);
      }
    }
    console.log(visited[S]);
  }

  BFS();
}

{
  /**
   * 백준 다른 분 풀이
   */
  const fs = require('fs');
  const s = +fs.readFileSync('/dev/stdin').toString().trim();

  console.log(getMinTime(s));

  function getMinTime(emoticons) {
    const visited = Array.from(Array(emoticons + 1), () => new Array(emoticons + 1));
    visited[1][0] = 1;
    const queue = [[1, 0]]; // screen, clipboard
    let head = 0;

    while (queue.length > head) {
      const [screen, clipboard] = queue[head++];

      for (let [screenNext, clipboardNext] of [
        [screen, screen],
        [screen + clipboard, clipboard],
        [screen - 1, clipboard],
      ]) {
        if (isAvailable(screenNext, clipboardNext)) {
          if (screenNext === emoticons) return visited[screen][clipboard];

          visited[screenNext][clipboardNext] = visited[screen][clipboard] + 1;
          queue.push([screenNext, clipboardNext]);
        }
      }
    }

    function isAvailable(screen, clipboard) {
      return screen >= 0 && screen <= emoticons && !visited[screen][clipboard];
    }
  }
}
