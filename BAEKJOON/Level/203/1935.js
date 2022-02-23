/**
 * 후위표기식 계산하는 방법.
 * 우선 알파벳을 숫자로 치환하는 방법은 해당 알파벳에 대한 ASCII code를 구하고 ASCII code 최초값인 65와 뺀 값을 nums의 인덱스로 가지고 값을 치환한다.
 * 그리고 이 숫자들은 계산을 해야하므로 stack에 넣어준다. stack에는 오직 숫자만 들어간다.
 * 그리고 연산자가 나오면 스택에서 숫자를 두개 빼준다.
 * 이때 a, b를 잘 설정하는데 있어서 45/ 인 식이 있다면 스택에는 [4, 5]로 되있기 때문에 4/5를 하고 싶으면
 * 먼저 뺀 값이 뒤로 갈 수 있도록 잘 설정해줘야한다.
 * 그리고 계산된 값도 다시 stack에 넣어준다.
 * 소숫점 두 자리까지 출력해야하므로 toFixed(2)를 사용한다.
 */

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
let [n, formula, ...data] = input;
formula = formula.split('');
data = data.map(Number);
// let formula = 'ABC*+DE/-'.split('');
// let data = [1, 2, 3, 4, 5];

let stack = [];

const command = (a, b, ch) => {
  switch (ch) {
    case '+':
      return a + b;
    case '-':
      return a - b;
    case '*':
      return a * b;
    case '/':
      return a / b;
  }
};

for (let i = 0; i < formula.length; i++) {
  let ch = formula[i];
  if (ch >= 'A' && ch <= 'Z') {
    stack.push(data[ch.charCodeAt(0) - 'A'.charCodeAt(0)]);
  } else {
    let b = stack.pop();
    let a = stack.pop();
    stack.push(command(a, b, ch));
  }
}

console.log(stack.pop().toFixed(2));
