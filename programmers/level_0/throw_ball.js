/**
 * 공 던지기
 * 패턴을 찾아야 함
 */

function solution(numbers, k) {
  const goNext = (current) => (current + 2) % numbers.length;
  let current = 0;
  for (let i = 0; i < k - 1; i++) current = goNext(current);
  return numbers[current];
}
