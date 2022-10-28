/**
 * 팩토리얼
 */

function factorial(n) {
  return n ? n * factorial(n - 1) : 1;
}

function solution(n) {
  let check = new Array(11).fill(0);
  for (let i = 1; i <= 10; i++) {
    check[i] = factorial(i);
  }
  for (let j = 0; j < check.length; j++) {
    if (check[j] === n) {
      return j;
    }
    if (check[j] > n) {
      return j - 1;
    }
  }
}

console.log(solution(7));
