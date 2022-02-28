/**
 * 팩토리얼 0의 개수
 * N!에서 뒤에서부터 처음 0이 아닌 숫자가 나올 때까지 0의 개수를 구하는 프로그램을 작성하시오.
 * 라고 나와있는데 이해를 못해서 무슨 말인가 찾아보니 N!을 했을 때 뒤에 0이 몇개 나오냐구하는 문제다.
 * 주어진 숫자에서 0을 만들 수 있는 5의 배수가 몇개인지 찾으면 답이 나온다고 한다.
 * 참고 블로그: https://gigibean.tistory.com/26
 */

// const target = 10;
const target = Number(require('fs').readFileSync('/dev/stdin').toString().trim());
let answer = 0;
for (let i = 5; i <= target; i *= 5) {
  answer += parseInt(target / i);
}

console.log(answer);
