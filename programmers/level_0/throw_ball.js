/**
 * 공 던지기
 * 패턴을 찾아야 함
 * 문제 읽어보면 실제로는 k - 1 번째를 찾는 것
 */

function solution(numbers, k) {
  const goNext = (current) => (current + 2) % numbers.length;
  let current = 0;
  for (let i = 0; i < k - 1; i++) current = goNext(current);
  return numbers[current];
}

function solution(numbers, k) {
  return numbers[(2 * (k - 1)) % numbers.length];
}
