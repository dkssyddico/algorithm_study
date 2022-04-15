/**
 * 부등호가 < 이면 바로 숫자를 넣어도 됨.
 * > 이면
 * 계속 부등호가 중첩이 되면?
 */

{
  /**
   * 혼자서 풀이 접근 방식이 나쁘지는 않았는데
   * 모든 숫자를 사용해야 한다는 것과 -> DFS 를 초기 for문으로 돌리기
   * 다음 숫자를 어떻게 가져와야 하는지에 대해서는 떠올리지 못했던게 아쉽다. -> check 배열
   */
  let k = 2; // 부등호 갯수 -> 숫자는 +1 되어야 함
  let input = ['<', '>'];

  function getMinimum(k, input) {
    let minimum = Number.MAX_SAFE_INTEGER;
    let result = [];
    // 레벨이랑 넣는 숫자.
    function DFS(level, index) {
      if (level === k) {
        minimum = minimum > Number(result.join()) ? Number(result.join()) : minimum;
      }
      for (let i = index; i < k; i++) {
        if (input[i] === '<') {
          result.push(i);
          DFS(level + 1, index + 1);
        } else {
        }
      }
    }
    DFS(0, 0);
    return minimum;
  }
}

{
  // https://gobae.tistory.com/47
  const N = 2;
  const inequality = ['<', '>'];
  const visit = new Array(10).fill(0);
  let max = Number.MIN_SAFE_INTEGER;
  let min = Number.MAX_SAFE_INTEGER;

  function dfs(L, prev, result) {
    if (L === N) {
      // L=N 이라면 모든 부등호가 사용 된 것
      max = result > max ? result : max;
      min = result < min ? result : min;
      return;
    }
    if (inequality[L] === '<') {
      for (let i = prev + 1; i < 10; i++) {
        // 부등호가 < 이면 전 숫자보다 큰 숫자에서 사용 가능 여부를 판단
        if (visit[i]) continue; // 쓰였으면 다음거.
        visit[i] = 1;
        dfs(L + 1, i, result + i); // result + i 는 문자열이다. 즉, "02" + "1" => "021" 형태.
        visit[i] = 0; // 재귀적으로 visit 배열을 계속 사용해야 하므로 사용 가능 여부를 없애고 재귀가 끝나면 다시 부여한다.
      }
    } else {
      for (let i = prev - 1; i > -1; i--) {
        // 부등호가 > 이면 전 숫자보다 작은 숫자에서 사용 가능 여부를 판단
        if (visit[i]) continue;
        visit[i] = 1;
        dfs(L + 1, i, result + i);
        visit[i] = 0;
      }
    }
    return;
  }

  for (let i = 0; i < 10; i++) {
    // 첫 숫자가 0~9까지 모두 조회하면 된다.
    visit[i] = 1;
    dfs(0, i, `${i}`);
    visit[i] = 0;
  }

  console.log(`${max}\n${min}`);
}

{
  // 통과한 풀이 위의 풀이를 한 번 더 복습해봤다.
  // const N = 2;
  // const expression = ['<', '>'];
  const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
  const N = Number(input[0]);
  const expression = input[1].split(' ');
  const visited = new Array(10).fill(0); // 방문 여부 판단
  let max = Number.MIN_SAFE_INTEGER;
  let min = Number.MAX_SAFE_INTEGER;

  function DFS(level, prev, result) {
    if (level === N) {
      max = max > result ? max : result;
      min = min < result ? min : result;
      return;
    }
    if (expression[level] === '<') {
      for (let i = prev + 1; i < 10; i++) {
        if (visited[i]) continue;
        visited[i] = 1;
        DFS(level + 1, i, result + i);
        visited[i] = 0;
      }
    } else {
      for (let i = prev - 1; i > -1; i--) {
        if (visited[i]) continue;
        visited[i] = 1;
        DFS(level + 1, i, result + i);
        visited[i] = 0;
      }
    }
    return;
  }

  // 0 ~ 9 모든 숫자를 첫 숫자로 조회해보기
  for (let i = 0; i < 10; i++) {
    visited[i] = 1;
    DFS(0, i, `${i}`);
    visited[i] = 0;
  }
  console.log(`${max}\n${min}`);
}
