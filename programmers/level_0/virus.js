/**
 * 세균 증식
 */

// 내 풀이
function solution(n, t) {
  let answer = n;
  for (let i = 1; i <= t; i++) {
    answer *= 2;
  }
  return answer;
}

console.log(solution(2, 10));

// 다른 사람 풀이

function solution(n, t) {
  return n * Math.pow(2, t);
}
