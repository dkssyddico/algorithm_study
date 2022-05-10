/**
 * 약수의 합2:https://www.acmicpc.net/problem/17427
 * 자연수 N
 *
 * 1
 * 12
 * 13
 * 124
 *
 * 4 / 1 + 4 / 2 + 4 / 3 + 4/ 4
 * 1부터 N까지의 약수의 합을 구하는 문제임
 * N의 배수는 무조건 N을 약수로 가진다.
 * 이 논리로 하면 N 이하의 자연수에서 i를 약수로 갖는 갯수는 N / i 인 것.
 * 갯수에 약수를 곱해서 차례로 더해주면 문제의 답.
 * 참고: https://enhjh.tistory.com/37, https://mine-it-record.tistory.com/523
 */

{
  let fs = require('fs');
  let input = fs.readFileSync('/dev/stdin').toString().split(' ');

  let N = Number(input[0]);
  let result = 0;

  for (let i = 1; i <= N; i++) {
    result += i * Math.floor(N / i);
  }

  console.log(result);
}
