{
  /**
   * 10828번 스택
   * 스택 기본 문제이다.
   * 진짜 정석적으로 if/else if문 쓰니까 초과 나와서 switch 써야되나 싶었다.
   * 다른 사람의 깔끔한 풀이를 보고 이렇게 하는게 더 좋겠다 싶어서 사용!
   * 답이 여러개일 경우엔 배열에 저장해놓고 join('\n')하는게 좋은 거 같다.
   */
  {
    let stack = [];
    let result = [];
    const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

    let cases = Number(input.shift());

    let order = input.map((item) => item.split(' '));

    for (let i = 0; i < cases; i++) {
      let o = order[i][0];
      switch (o) {
        case 'top':
          result.push(stack[stack.length - 1] || -1);
          break;
        case 'size':
          result.push(stack.length);
          break;
        case 'empty':
          result.push(stack.length > 0 ? 0 : 1);
          break;
        case 'pop':
          result.push(stack.pop() || -1);
          break;
        default:
          stack.push(Number(order[i][1]));
          break;
      }
    }

    console.log(result.join('\n'));
  }
  {
    // reduce를 통해 푸는 방식
    // 간간히 배열이 나오는 알고리즘 문제에서는 reduce를 통해 해결하는 경우도 심심찮게 많이 보인다.
    const array = require('fs').readFileSync('/dev/stdin').toString().split('\n');
    array.shift();

    const stack = [];

    const fun = {
      pop: () => stack.pop() || -1,
      size: () => stack.length,
      empty: () => (stack[0] ? 0 : 1),
      top: () => stack[stack.length - 1] || -1,
      push: (item) => {
        stack.push(item.split(' ')[1]);
        return '';
      },
    };

    const result = array.reduce((acc, v) => acc + (fun[v] ? `${fun[v]()}\n` : fun.push(v)), '');

    console.log(result);
  }
}

{
  /**
   * 10773번 제로
   * 0이 나올 때는 가장 최근의 수를 지울 수 있다.
   * 내가 푼 방식에서 자꾸 출력 초과라는 오류가 떠서 다른 사람 풀이를 참고했다.
   * 보니까 배열에 아예 없는 경우도 고려를 해줘야 하는 것 같다.
   * 차례로 아래 풀이처럼 정석대로 스택에 값 넣고 빼고, 최종적으로 합 구하는게 안전한 풀이인 것 같다.
   * 어제 시간 초과 나온게 계속 신경이 쓰여 빠르게만 하려고 했던 게 잘못이다 ㅜ
   */

  let fs = require('fs');
  let input = fs.readFileSync('/dev/stdin').toString().split('\n');

  const caseCount = Number(input[0]);
  const stack = [];

  for (let i = 1; i <= caseCount; i += 1) {
    const value = Number(input[i]);

    if (value === 0) {
      stack.pop();
    } else {
      stack.push(value);
    }
  }

  let result = 0;

  for (let i = 0; i < stack.length; i += 1) {
    result += stack[i];
  }

  console.log(result);
}
