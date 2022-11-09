/**
 * 옹알이
 */

function solution(babbling) {
  let answer = 0;
  const possible = ['aya', 'ye', 'woo', 'ma'];
  for (let i = 0; i < babbling.length; i++) {
    let word = babbling[i];
    word = word.replace(possible[0], ' ');
    word = word.replace(possible[1], ' ');
    word = word.replace(possible[2], ' ');
    word = word.replace(possible[3], ' ');
    if (word.trim().length === 0) answer += 1;
  }
  return answer;
}

console.log(solution(['aya', 'yee', 'u', 'maa', 'wyeoo']));
