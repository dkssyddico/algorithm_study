{
  /**
   * 11047번 동전 0
   * n원의 돈이 있을 때 동전 몇개로 나눌 수 있냐는 그리디의 대표적인 문제다.
   */

  let [nk, ...rest] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
  let target = Number(nk.split(' ')[1]);
  let count = 0;
  let coins = rest.map((coin) => parseInt(coin));

  for (let i = coins.length; i >= 0; i--) {
    let coin = coins[i];
    if (Math.floor(target / coin) > 0) {
      count += Math.floor(target / coin);
      target = target % coin;
    }
    if (target === 0) {
      break;
    }
  }

  console.log(count);
}

{
  /**
   * 1931번 회의실 배정
   * 가장 먼저 끝나는 회의를 찾는 것이 관건.
   * 그래야 다음 회의를 시작하는 시간이 빨라져서 최대한 많은 수의 회의를 할 수 있게 된다.
   * 그래서 먼저 회의들을 끝나는 시간으로 정렬해준 다음(만약에 끝나는 시간이 같으면 시작하는 시간이 빠른 것으로 으로 정렬한다.)
   * 회의 끝나는 시간을 다음 회의 시작 시간과 비교해가면서 찾아준다.
   */

  let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
  let meetingNum = input.shift();

  let meetings = input.map((i) => i.split(' ').map(Number));

  meetings = meetings.sort((a, b) => {
    if (a[1] === b[1]) {
      return a[0] - b[0];
    } else return a[1] - b[1];
  });

  let count = 0;
  let endTime = 0;

  for (let x of meetings) {
    if (x[0] >= endTime) {
      count++;
      endTime = x[1];
    }
  }

  console.log(count);
}

{
  /**
   * 11399번 ATM
   * 가장 적은 시간으로 sort한 다음에 계속 누적
   * 1
   * 1, 2
   * 1, 2, 3,
   * 1, 2, 3, 3
   * 1, 2, 3, 3, 4
   * 5 8 9 6 4
   * DP 문제에 가깝지 않나? 이런 생각이 든다. 정렬도..
   */

  let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
  let lines = input[1].split(' ').map(Number);
  lines.sort((a, b) => a - b);
  let times = [];
  let time = 0;

  for (let i = 0; i < lines.length; i++) {
    time += lines[i];
    times.push(time);
  }

  console.log(times.reduce((a, b) => a + b, 0));
}
