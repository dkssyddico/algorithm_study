/**
 * 1357 뒤집힌 덧셈: https://www.acmicpc.net/problem/1357
 * 어떤 수 X가 주어졌을 때, X의 모든 자리수가 역순이 된 수를 얻을 수 있다. Rev(X)를 X의 모든 자리수를 역순으로 만드는 함수라고 하자. 예를 들어, X=123일 때, Rev(X) = 321이다. 그리고, X=100일 때, Rev(X) = 1이다.

두 양의 정수 X와 Y가 주어졌을 때, Rev(Rev(X) + Rev(Y))를 구하는 프로그램을 작성하시오
 */

// let [x, y] = ['105', '994'];
let [x, y] = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ');

x = x.split('').reverse().join('');
y = y.split('').reverse().join('');

let sum = +x + +y + '';

console.log(Number(sum.split('').reverse().join('')) + '');

{
  // 아예 함수화하는게 깔끔하긴 하다. 문제에서도 그렇게 요구하고 있고 반복을 줄여야 좋은 코드!
  const [a, b] = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ');
  function rev(n) {
    return Number(n.toString().split('').reverse().join(''));
  }

  const answer = rev(rev(a) + rev(b));
  console.log(answer);
}
