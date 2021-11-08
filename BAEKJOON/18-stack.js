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
    const input = require('fs')
      .readFileSync('/dev/stdin')
      .toString()
      .trim()
      .split('\n');

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
    const array = require('fs')
      .readFileSync('/dev/stdin')
      .toString()
      .split('\n');
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

    const result = array.reduce(
      (acc, v) => acc + (fun[v] ? `${fun[v]()}\n` : fun.push(v)),
      ''
    );

    console.log(result);
  }
}
