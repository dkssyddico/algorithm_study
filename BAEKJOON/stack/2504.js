/**
 * 2504: https://www.acmicpc.net/problem/2504
 * 순서를 매기는 방법?
 * 감싸는 괄호냐 (()) 아니면 그냥 ()이거냐
 */

{
  /**
   * 틀린 풀이
   * 내 풀이인데 괄호가 한 번 나왔는지 아닌지 체크해주는게 어려웠다.
   * ) 이나 ] 일 때 합을 새로 계산했어야 했음.
   */
  let input = '([()])';

  let stack = [];

  let answer = 0;

  for (let x of input) {
    let tmp = 0;
    if (x === '(' || x === '[') stack.push(x);
    else if (x === ')') {
      if (stack[stack.length - 1] === '(') {
        stack.pop();
        tmp = 2;
        if (stack[stack.length - 1] === '(') {
          answer += tmp * 2;
        } else if (stack[stack.length - 1] === '[') {
          answer += tmp * 3;
        } else {
          answer += 2;
        }
      }
      // 맨 처음께 ) 이거면
      else {
        answer === 0;
        break;
      }
    } else if (x === ']') {
      if (stack[stack.length - 1] === '[') {
        stack.pop();
        tmp = 3;
        if (stack[stack.length - 1] === '(') {
          answer += tmp * 2;
        } else if (stack[stack.length - 1] === '[') {
          answer += tmp * 3;
        } else {
          answer += 3;
        }
      } else {
        answer = 0;
        break;
      }
    }
  }
}

{
  // const fs = require('fs');
  // const input = fs.readFileSync('/dev/stdin').toString().trim();
  let input = '([()])[()]';
  let stack = [];
  let isError = false;
  for (let el of input) {
    if (el === ')') {
      let sum = 0;
      let cnt = 0;
      while (stack[stack.length - 1] !== '(') {
        // 맨 처음으로 )일 경우
        if (stack.length === 0) {
          isError = true;
          break;
        }
        sum += stack.pop();
        cnt++;
      }
      stack.pop();
      // () 괄호가 한 번씩 나왔는지 아닌지 체크하는 것
      if (cnt === 0) stack.push(2);
      else {
        sum *= 2;
        stack.push(sum);
      }
    } else if (el === ']') {
      let sum = 0;
      let cnt = 0;
      while (stack[stack.length - 1] !== '[') {
        // 맨 처음으로 ]일 경우
        if (stack.length === 0) {
          isError = true;
          break;
        }
        sum += stack.pop();
        cnt++;
      }
      stack.pop();
      if (cnt === 0) stack.push(3);
      else {
        sum *= 3;
        stack.push(sum);
      }
    } else stack.push(el);
  }
  let sum = stack.reduce((a, b) => a + b, 0);
  // 스택에 순수 숫자만 남았는지 체크.
  if (!isNaN(sum) && !isError) console.log(sum);
  else console.log(0);
}
