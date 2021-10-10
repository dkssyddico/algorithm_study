// 자연수 N이 주어지면, N의 각 자릿수의 합을 구해서 return 하는 solution 함수를 만들어 주세요.
// 예를 들어 N = 123이면 1 + 2 + 3 = 6을 return 하면 됩니다.

function solution(n) {
  let sum = 0;
  while (n !== 0) {
    sum += n % 10;
    n = Math.floor(n / 10);
  }
  return sum;
}

console.log(solution(923));
