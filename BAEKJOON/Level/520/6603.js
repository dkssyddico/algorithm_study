/**
 * 로또
 * 기본적으로 N과 M 문제와 비슷한 문제
 */
let target = 6;
let [s, ...nums] = [7, 1, 2, 3, 4, 5, 6, 7];

let result = [];
let output = [];

function dfs(index, cnt) {
  if (cnt === target) {
    result.push(output.join(' '));
    return;
  }

  for (let i = index; i < s; i++) {
    output.push(nums[i]);
    dfs(i + 1, cnt + 1);
    output.pop();
  }
}

dfs(0, 0);

console.log(result);

{
  /**
   * 통과는 이쪽껄로..
   * https://gobae.tistory.com/51
   */
  const sol = (input) => {
    let idx = 0;
    let answer = '';

    while (input[idx].length !== 1) {
      const [N, ...S] = input[idx++].split(' ').map(Number);

      function dfs(V, pick) {
        if (pick.length === 6) {
          answer += `${pick.join(' ')}\n`;
          return;
        }
        for (let i = V; i < N; i++) {
          dfs(i + 1, [...pick, S[i]]);
          // spread operator를 사용해서 기존의 pick배열에 선택한 원소를 추가해 다음 재귀로 전달
        }
      }
      dfs(0, []);
      answer += '\n';
    }
    return answer;
  };

  // 백준에서 입력을 받는 코드
  const input = [];
  require('readline')
    .createInterface(process.stdin, process.stdout)
    .on('line', (line) => {
      input.push(line);
    })
    .on('close', () => {
      console.log(sol(input));
      process.exit();
    });

  // 백준에서 입력을 받는 코드
}
