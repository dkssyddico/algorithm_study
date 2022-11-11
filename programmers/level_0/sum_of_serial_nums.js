/**
 * 연속된 수의 합
 */

function solution(num, total) {
  const numArr = Array.from({ length: num }, (_, i) => i);

  const sum = numArr.reduce((a, c) => a + c);

  return numArr.map((n) => {
    return n - (sum - total) / num;
  });
}

console.log(solution(3, 12));
