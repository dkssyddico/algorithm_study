/**
 * 1: https://www.acmicpc.net/problem/4375
 * 2와 5로 나누어 떨어지지 않는 정수 n(1 ≤ n ≤ 10000)가 주어졌을 때, 1로만 이루어진 n의 배수를 찾는 프로그램을 작성하시오.
 * 1로 이루어진 n의 배수 중 가장 작은 수의 자리수를 출력한다.
 *
 * 풀이를 봤는데 아직 완벽하게 이해가 가지 않음 ㅠㅠ
 * https://merry555.tistory.com/m/13 이 분 풀이 방법이 그나마 이해가 되는 것 같기도 ..
 */

const n = 3;

const solution = (n) => {
  let num = 1;
  let cnt = 1;
  while (num % n !== 0) {
    num = num * 10 + 1;
    num %= n;
    cnt++;
  }
  return cnt;
};

console.log(solution(n));
