/**
 * 유한소수 판별하기
 * 분모와 분자의 최대공약수를 구하고, 최대공약수로 분모를 나눔
 * 결국엔 분모에 2, 5가 있어야 하니까 분모만 가지구 판별하면 됨.
 */

function solution(a, b) {
  // 최대공약수 구하는 것
  const getGCD = (a, b) => {
    let gcd = 1;
    for (let i = 1; i <= Math.min(a, b); i++) {
      if (a % i === 0 && b % i === 0) gcd = i;
    }
    return gcd;
  };

  const getPrimeFactors = (num) => {
    let pFactors = [];
    for (let i = 2; i <= Math.sqrt(num); i++) {
      while (num % i === 0) {
        pFactors = [...pFactors, i];
        num /= i;
      }
    }
    if (num > 2) pFactors = [...pFactors, num];
    return pFactors;
  };

  return getPrimeFactors(b / getGCD(a, b)).find((n) => n !== 2 && n !== 5) ? 2 : 1;
}

console.log(solution(7, 20));

function solution1(a, b) {
  let gcd = 1;
  for (let i = 2; i <= Math.min(a, b); i++) {
    if (a % i === 0 && b % i === 0) gcd = i;
  }
  b /= gcd;
  while (b % 2 === 0) {
    b /= 2;
  }
  while (b % 5 === 0) {
    b /= 5;
  }
  return b === 1 ? 1 : 2;
}

console.log(solution1(7, 20));
