/**
 * 단어 뒤집기 2
 * 괄호랑 공백의 변수를 생각해서 풀어야 했던 문제였다.
 */

{
  // <problem>17413<is hardest>problem ever<end>
  // <problem>31471<is hardest>melborp reve<end>
  // baekjoon online judge
  // <open>tag<close>
  // <ab cd>ef gh<ij kl>
  // one1 two2 three3 4fourr 5five 6six
  /**
   * < 가 있을 때  없을 때
   */

  let fs = require('fs');
  let string = fs.readFileSync('/dev/stdin').toString().trim();
  // let string = '<   space   >space space space<    spa   c e>'.split('');
  let stack = [];
  let tmp = '';
  let answer = [];

  for (let i = 0; i < string.length; i++) {
    let x = string[i];
    // 괄호가 있는 경우
    if (x === '<') {
      tmp += x;
      for (let j = i + 1; j < string.length; j++) {
        let y = string[j];
        tmp += y;
        if (y === '>') {
          answer.push(tmp);
          i = j;
          tmp = '';
          break;
        }
      }
    } else {
      // 괄호가 없는 경우 공백도 고려해야 함!!
      if (x === ' ') {
        answer.push(' ');
      } else {
        stack.push(x);
        // 첫번째 조건이랑 두번째 조건 || 로 표현할 수 있을 듯.
        if (string[i + 1] === ' ') {
          answer.push(stack.reverse().join(''));
          stack = [];
        }
        if (string[i + 1] === '<') {
          answer.push(stack.reverse().join(''));
          stack = [];
        }
        if (i === string.length - 1) {
          answer.push(stack.reverse().join(''));
          stack = [];
        }
      }
    }
  }

  console.log(answer.join(''));
}

{
  /**
   * 다른 사람 풀이
   * 정규표현식을 이용한 풀이가 시간이 짧았다.
   */

  const filePath = process.platform === 'linux' ? 'dev/stdin' : './input.txt';
  const input = require('fs').readFileSync(filePath).toString();
  let answer = '';
  const regex = /(<.+?>|\s)/g;
  const words = input.split(regex);
  words.map((w) => {
    if (regex.test(w)) {
      // 정규표현식 만족하는지 판별하기
      answer += w; // 맞으면 answer에 추가
    } else {
      answer += w.split('').reverse().join('');
    }
  });
  console.log(answer);
}
