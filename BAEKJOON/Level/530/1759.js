/**
 * 암호 만들기
 * 최소 한 개의 모음(a, e, i, o, u)과 최소 두 개의 자음으로 구성
 * 알파벳은 사전 순서로
 * 모음 or 자음 수를 카운트해야할 것 같음
 * 총 자릿수 모음 자음
 * 3 / 1 / 2
 * 4  / 1~2 / 최소 2개
 * 5 /
 */

{
  // 내 풀이
  // const fs = require('fs');
  // const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
  // const digits = +input[0].split(' ').shift();
  // const alphabets = input[1].split(' ').sort((a, b) => a.localeCompare(b));

  let vowel = ['a', 'e', 'i', 'o', 'u'];

  // // 사전 순서로 정렬
  let alphabets = ['a', 't', 'c', 'i', 's', 'w'].sort((a, b) => a.localeCompare(b));
  console.log(alphabets);

  const digits = 4;

  let result = '';
  let output = [];

  function DFS(index, count) {
    if (count === digits) {
      let vCount = 0;
      output.filter((a) => (vowel.includes(a) ? vCount++ : vCount));
      if (vCount && digits - vCount >= 2) {
        result += `${output.join()}\n`;
        vCount = 0;
      }
      return;
    }
    for (let i = index; i < alphabets.length; i++) {
      output.push(alphabets[i]);
      DFS(i + 1, count + 1);
      output.pop();
    }
  }

  DFS(0, 0);

  console.log(result);
}

{
  /**
   * 백준에서 가져온 풀이
   * 계속 output 배열로 해결할 생각하지 말고 이런 식의 풀이 계속 보면서 익혀야겠다.
   */
  const fs = require('fs');
  const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

  function dfs(n, pw) {
    if (pw.length === L) {
      let verbCount = 0;
      for (const c of pw) {
        if (['a', 'e', 'i', 'o', 'u'].includes(c)) verbCount += 1;
      }

      if (verbCount >= 1 && pw.length - verbCount >= 2) {
        console.log(pw);
      }
      return;
    }

    for (let i = n + 1; i < C; i += 1) {
      dfs(i, pw + alpha[i]);
    }
  }

  const [LC, line] = input;
  const [L, C] = LC.split(' ').map((n) => parseInt(n));
  const alpha = line.split(' ').sort();

  dfs(-1, '');
}
