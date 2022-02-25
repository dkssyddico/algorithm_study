// let num = [24, 18];
// let num = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(Number);
// let a = num[0];
// let b = num[1];

// let gcd = 1;

// for (let i = 2; i < Math.min(a, b); i++) {
//   if (a % i === 0 && b % i === 0) {
//     gcd = i;
//   }
// }

// let lcm = 1;

// while (true) {
//   if (lcm % a === 0 && lcm % b === 0) {
//     break;
//   }
//   lcm++;
// }

// console.log(`${gcd}\n${lcm}`);

/**
 * 최대공약수와 최대공배수
 * 유클리드 호제법이라는 것을 처음 배웠다.
 * 두 수가 있으면 큰 수 % 작은 수 를 반복하고 이 결과값이 0이 될 때 나누는 값으로 사용된 것이 최대공약수라는 것이다.
 * 그리고 최소공배수를 구하는 것은 큰 수와 작은 수를 곱하고 최대공약수로 나눈 값이 된다.
 */

const [a, b] = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split(' ')
  .map((i) => parseInt(i));

let i = a;
let j = b;

while (i % j !== 0) {
  let n = i % j;
  if (n !== 0) {
    i = j;
    j = n;
  }
}
console.log(j);
console.log((a * b) / j);
