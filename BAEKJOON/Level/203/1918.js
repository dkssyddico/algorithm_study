/**
 * 후위표기식
 * https://plas.tistory.com/119
 * 컴퓨터가 계산하기 쉬운 수식이라 한다.
 * https://velog.io/@ywc8851/%EB%B0%B1%EC%A4%80-1918-%ED%9B%84%EC%9C%84-%ED%91%9C%EA%B8%B0%EC%8B%9D-javascript
 * A*(B+C) -> ABC+
 * +, - 는 같은 우선순위, *, /는 같은 우선 순위고 연산자 중 우선 순위가 가장 높다.
 * () 도 stack에 넣어준다.
 * stack은 기본적으로 연산자만 넣는다. 연산자에도 우선순위가 있음을 고려해야한다.
 * 숫자는 무조건 문자열에 먼저 붙여준다.
 */

let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString();
const infix = input.split('');
let postfix = '';
let stack = [];

for (let i = 0; i < infix.length; i++) {
  let ch = infix[i];
  if (ch >= 'A' && ch <= 'Z') postfix += ch;
  else if (ch === '(') stack.push(ch);
  else if (ch === ')') {
    while (stack.length && stack[stack.length - 1] !== '(') postfix += stack.pop();
    // ( 을 빼주는 방법
    stack.pop();
  } else if (ch === '+' || ch === '-') {
    while (stack.length && stack[stack.length - 1] !== '(') postfix += stack.pop();
    stack.push(ch);
  } else if (ch === '*' || ch === '/') {
    // *, / 는 같은 우선 순위다.
    while (stack.length && (stack[stack.length - 1] === '*' || stack[stack.length - 1] === '/'))
      postfix += stack.pop();
    stack.push(ch);
  }
}

while (stack.length) postfix += stack.pop();

console.log(postfix);
