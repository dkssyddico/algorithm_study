/**
 * 약수 구하기
 */

function solution(n) {
  let answer = [];
  for (let i = 1; i < Math.sqrt(n); i++) {
    if (n % i === 0) answer.push(i, n / i);
  }
  if (Number.isInteger(Math.sqrt(n))) answer = [...answer, Math.sqrt(n)];
  return answer.sort((a, b) => a - b, 0);
}

{
  // 다른 분 풀이
  function solution1(n) {
    return Array(n)
      .fill(0)
      .map((v, index) => v + index + 1)
      .filter((v) => n % v === 0);
  }
  console.log(solution1(24));
}
