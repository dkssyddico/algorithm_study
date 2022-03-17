/**
 * N과 M(2)
 * 오름차순이기 때문에 지난 수를 쓰면 안된다
 * i를 뭔가 바꿔줘야 한다는 거 까지는 알아냈는데 구현은 못함 ㅠㅅㅠ
 * 참고: https://dpsc615.tistory.com/147
 *
 *
 */

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split(' ').map(Number);
const N = input.shift();
const M = input.shift();
const visited = new Array(N);
const output = [];
let result = '';

function dfs(idx, cnt) {
  if (cnt === M) {
    result += `${output.join(' ')}\n`;
    return;
  }

  for (let i = idx; i < N; i++) {
    if (visited[i] === true) continue;
    visited[i] = true;
    output.push(i + 1);
    dfs(i, cnt + 1);
    output.pop();
    visited[i] = false;
  }
}

dfs(0, 0);
console.log(result);
