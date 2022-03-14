/**
 * 리모컨
 * 수빈이는 TV를 보고 있다. 수빈이는 채널을 돌리려고 했지만, 버튼을 너무 세게 누르는 바람에, 일부 숫자 버튼이 고장났다.
 * 리모컨에는 버튼이 0부터 9까지 숫자, +와 -가 있다. +를 누르면 현재 보고있는 채널에서 +1된 채널로 이동하고, -를 누르면 -1된 채널로 이동한다. 채널 0에서 -를 누른 경우에는 채널이 변하지 않고, 채널은 무한대 만큼 있다.
 * 수빈이가 지금 이동하려고 하는 채널은 N이다. 어떤 버튼이 고장났는지 주어졌을 때, 채널 N으로 이동하기 위해서 버튼을 최소 몇 번 눌러야하는지 구하는 프로그램을 작성하시오.
 * 수빈이가 지금 보고 있는 채널은 100번이다.
 */

{
  let current = 100;
  let channel = 80000;
  let count = 2;
  let notWork = [8, 9];
  let answer = 0;

  // 가고자하는 버튼이 현재 채널과 같은지 확인
  if (current === channel) {
    answer = 0;
  } else {
    let channelArr = String(channel).split('').map(Number);
    for (let i = 0; i < channelArr.length; i++) {
      let num = channelArr[i];
      if (!notWork.includes(num)) {
        answer++;
      } else {
        // - 했을 때 0이 고장난 버튼이라서 더 이동안할 수도. 더했을 때랑 뺐을 때의 경우 고려해야할 듯.
        let plus = checkPlus(num);
        let minus = checkMinus(num);
        answer += Math.min(plus, minus) + 1;
      }
    }
  }

  function checkPlus(num) {
    let target = num;
    let move = num;
    while (true) {
      if (!notWork.includes(move)) break;
      move++;
    }
    return move - target;
  }

  function checkMinus(num) {
    let target = num;
    let move = num;
    while (true) {
      if (!notWork.includes(move)) break;
      move--;
    }
    return target - move;
  }

  console.log(answer);
}

{
  function solution(n, notWorkedButtons) {
    // 작동되는 버튼들로만 구성하기
    const workedButtons = new Array(10)
      .fill()
      .map((_, i) => String(i))
      .filter((number) => !notWorkedButtons.includes(number));

    // 구하려는 타겟 채널에서 100(현재 채널) 빼주기
    let result = Math.abs(n - 100);

    // 0부터 최대 숫자까지에서 숫자가 모두 작동되는 버튼인 경우를 getClickCount로 구한다.
    // 그 숫자는 i이고 그걸 가고자하는 채널과 빼면 얼만큼 ++ 혹은 -- 해야하는지 구할 수 있다.
    // 그걸 clickCount(작동되는 버튼을 누른 수)랑 더해준다.
    for (let i = 0; i < 1000000; i++) {
      let clickCount = getClickCount(String(i), workedButtons);
      if (clickCount === -1) continue;
      // Math.abs(n - i) 이게 이동한 수이다.
      result = Math.min(result, clickCount + Math.abs(n - i));
    }

    return result;

    function getClickCount(n, workedButtons) {
      for (let i = 0; i < n.length; i++) {
        console.log(n[i]);
        //n의 숫자가 모두 작동되는 버튼의 숫자여야 한다.
        if (!workedButtons.includes(n[i])) {
          return -1;
        }
      }

      return n.length;
    }
  }

  function main() {
    // const path = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
    // const fs = require('fs');
    // const input = fs.readFileSync(path).toString().trim().split('\n');
    const input = '5457\n3\n6 7 8'.split('\n');

    const [n, m] = [input[0], input[1]];
    const notWorkedButton = input[2] ? input[2].split(' ') : [];
    console.log(solution(Number(n), notWorkedButton));
  }
  main();
}
