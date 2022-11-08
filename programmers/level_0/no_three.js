/**
 * 저주의 숫자 3
 */

function solution(n) {
  let num = 0;
  let count = 0;

  while (count < n) {
    num += 1;
    if (!('' + num).includes('3') && num % 3 !== 0) count += 1;
  }

  return num;
}

console.log(solution(3));
