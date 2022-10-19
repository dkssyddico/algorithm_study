/**
 * 분수의 덧셈
 * 최소공배수, 최대공약수를 구할 줄 알아야 함
 *
 */

// 프로그래머스 풀이
function fnGCD(a, b) {
  return a % b ? fnGCD(b, a % b) : b;
}

function solution(denum1, num1, denum2, num2) {
  let denum = denum1 * num2 + denum2 * num1;
  let num = num1 * num2;
  let gcd = fnGCD(denum, num); //최대공약수

  return [denum / gcd, num / gcd];
}

// 블로그 풀이

function solution(denum1, num1, denum2, num2) {
  let top = denum2 * num1 + denum1 * num2;
  let bottom = num1 * num2;
  let max = 1;
  for (let i = 1; i <= top; i++) {
    if (top % i === 0 && bottom % i === 0) {
      max = i;
    }
  }
  return [top / max, bottom / max];
}
