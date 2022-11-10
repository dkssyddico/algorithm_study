/**
 * k의 개수
 * k가 몇번 등장하는지 찾기
 * 1 10 11 12 13
 *
 */

function solution(i, j, k) {
  let answer = 0;
  for (let a = i; a <= j; a++) {
    answer += a
      .toString()
      .split('')
      .filter((a) => a === k + '').length;
  }
  return answer;
}

console.log(solution(1, 13, 1));

function solution1(i, j, k) {
  let a = '';
  for (i; i <= j; i++) {
    a += i;
  }
  console.log(a.split(k));
  return a.split(k).length - 1;
}

console.log(solution1(1, 13, 1));
