{
  /**
   * 에디터 https://www.acmicpc.net/problem/1406
   */
  {
    /**
     * 내 풀이: 시간 초과
     *
     */
    // let count = 9;
    // let orders = ['L', 'L', 'L', 'L', 'L', 'P x', 'L', 'B', 'P y'];
    let count = 11;
    let orders = ['B', 'B', 'P x', 'L', 'B', 'B', 'B', 'P y', 'D', 'D', 'P z'].map((i) =>
      i.split(' ')
    );
    // console.log(orders);
    let word = 'dmih';
    word = word.split('');

    // let fs = require('fs');
    // let input = fs.readFileSync('/dev/stdin').toString().split('\n');
    // let word = input[0].split('');
    // let count = Number(input[1]);
    let cursorIndex = word.length;
    // let orders = input.splice(2, count).map((order) => order.split(' '));

    for (let i = 0; i < count; i++) {
      let order = orders[i];
      if (order[0] === 'P') {
        word.splice(cursorIndex, 0, order[1]);
        cursorIndex++;
      } else if (order[0] === 'L') {
        if (cursorIndex === 0) {
          continue;
        }
        cursorIndex--;
      } else if (order[0] === 'D') {
        if (cursorIndex === word.length) {
          continue;
        }
        cursorIndex++;
      } else if (order[0] === 'B') {
        if (cursorIndex === 0) {
          continue;
        }
        word.splice(cursorIndex - 1, 1);
        cursorIndex--;
      }
    }

    console.log(word.join(''));
  }
  {
    /**
     * https://gobae.tistory.com/23 풀이 참고
     * 와 이렇게 생각할 수 있다는게 정말 신기하다.
     * 이게 바로 스택 문제의 정수인가? 싶기도 하고 ㅎㅎ
     * 이 분 풀이의 요점은 두 스택 사이에 커서가 있다고 생각하고 문제를 푸는 것이다.
     * [] 커서 []
     * 그래서 커서가 왼쪽으로 옮겨지면 왼쪽 스택 맨 마지막에 있는 아이템을 오른쪽 스택에 넣어주고,
     * 커서가 오른쪽으로 가면 오른쪽 스택의 맨 마지막 아이를 넣어준다.
     * (오른쪽 스택에 왼쪽에 있던 아이템이 들어갈 때는 반대의 순서로 들어가게 된다.)
     * pop, push를 이렇게 멋지게 사용할 수 있다니 ㅜㅜ 풀이가 너무 경외롭다.
     */
    let fs = require('fs');
    let input = fs.readFileSync('/dev/stdin').toString().split('\n');
    let lStack = input[0].split('');
    let rStack = [];
    let len = parseInt(input[1]);

    for (let i = 2; i < 2 + len; i++) {
      let [cmd, value] = input[i].split(' ');
      if (cmd === 'L' && lStack.length) rStack.push(lStack.pop());
      else if (cmd === 'D' && rStack.length) lStack.push(rStack.pop());
      else if (cmd === 'B') lStack.pop();
      else if (cmd === 'P') lStack.push(value);
    }

    let answer = lStack.join('');
    answer += rStack.reverse().join('');
    console.log(answer);
  }
}
