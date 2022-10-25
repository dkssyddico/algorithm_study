/**
 * 진료 순서 정하기
 */

function solution(emergency) {
  let answer;
  let original = [...emergency];
  let sorted = emergency.sort((a, b) => b - a, 0);
  answer = original.map((v) => sorted.indexOf(v) + 1);
  return answer;
}

console.log(solution([3, 76, 23]));
