/**
 * N과 M (1)
 * 자연수 N과 M이 주어졌을 때, 아래 조건을 만족하는 길이가 M인 수열을 모두 구하는 프로그램을 작성하시오.
 * 1부터 N까지 자연수 중에서 중복 없이 M개를 고른 수열
 * M이 얼마인지를 모르기 때문에 for문을 쓸 수 없다.
 * 참고: https://dpsc615.tistory.com/146
 * 브루트 포스 문제라고 되어있는데 살펴보니 dfs 문제 였음.
 * 문제 분류에는 백트래킹이라 되있어서 살펴보니 dfs랑 비슷하다.
 * 백트래킹(backtracking)이란? : 해를 찾는 도중 해가 아니어서 막히면, 되돌아가서 다시 해를 찾아가는 기법을 말합니다.
 * 최적화 문제와 결정 문제를 푸는 방법이 됩니다.
 * visited라는 배열이 각 숫자의 배열이고 그 숫자가 수열에 포함되는지 알게해주는 배열임!
 * 초반엔 모두 방문하지 않았기에 false로 초기화되고, 해당 숫자를 방문한 다음엔 다음 숫자에 대해 함수를 실행시켜준다.
 * output은 수열을 담는 배열로, 여기서도 숫자를 넣었다 뺐다 해준다.
 * 시간을 줄이기 위해 따로 result 문자열을 만들어 답들을 붙여서 출력해준다.
 */

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split(' ').map(Number);
// const input = [4, 3];
const N = input.shift();
const M = input.shift();

const visited = new Array(N);
let output = [];
let result = '';

function dfs(cnt) {
  if (cnt === M) {
    result += `${output.join(' ')}\n`;
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
console.log(result.trim());
