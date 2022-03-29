/**
 * 다음 순열
 */

{
  // 내 풀이 메모리 초과
  // let input = '4\n1 2 3 4'.split('\n');
  const fs = require('fs');
  const input = fs.readFileSync('/dev/stdin').toString().split('\n');
  let N = Number(input.shift());
  let M = N;
  let target = input.shift();
  const visited = new Array(N);
  let output = [];
  let result = [];
  function dfs(cnt) {
    if (cnt === M) {
      result.push([...output]);
      return;
    }
    for (let i = 0; i < N; i++) {
      if (visited[i] === true) continue;
      visited[i] = true;
      output.push(i + 1);
      dfs(cnt + 1);
      output.pop();
      visited[i] = false;
    }
  }
  dfs(0);
  let idx;
  result.filter((arr, index) => {
    if (arr.join(' ') === target) {
      idx = index;
    }
  });
  console.log(result[idx + 1] ? result[idx + 1].join(' ') : -1);
}

{
  // 참고한 풀이  https://tesseractjh.tistory.com/m/154
  // 아직 이해는 다 하지 못했음

  // const [ N, ...arr ] = require('fs').readFileSync('/dev/stdin').toString().trim().split(/\s+/).map(v => +v);

  let N = 4;
  let arr = [1, 2, 3, 4];

  const solve = (N, arr) => {
    const arrCopy = [...arr].sort((a, b) => b - a);

    if (arr.every((v, i) => v === arrCopy[i])) {
      console.log(-1);
    } else {
      let i = N - 2;
      while (arr[i] > arr[i + 1]) {
        i--;
      }
      let j = N - 1;
      while (arr[i] > arr[j]) {
        j--;
      }
      console.log(i, j);
      [arr[i], arr[j]] = [arr[j], arr[i]];
      console.log([...arr.slice(0, i + 1), ...arr.slice(i + 1).sort((a, b) => a - b)].join(' '));
    }
  };

  solve(N, arr);
}
