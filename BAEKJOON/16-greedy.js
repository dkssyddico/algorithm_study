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

{
  /**
   * 1541번 잃어버린 괄호
   * - 를 기준으로 먼저 문자열 나눠주기
   * 나눈 문자열을 한 바퀴 돌면서 +가 있는 식은 +로 나눠서 각각 더해주고, 임시 배열에 넣기.
   * 이 수들을 차례로 누적해 빼주면 최소값이다.
   */

  let math = require('fs').readFileSync('/dev/stdin').toString().trim();

  let minusFirst = math.split('-');
  let tmp = [];

  for (let x of minusFirst) {
    let num = 0;
    let divideByPlus = x.split('+');
    for (let y of divideByPlus) {
      num += parseInt(y);
    }
    tmp.push(num);
  }

  let answer = tmp[0];

  for (let i = 1; i < tmp.length; i++) {
    answer -= tmp[i];
  }

  console.log(answer);
}

{
  /**
   * 13305번 주유소
   * 첫번째 주유소에서 모든 거리 다채우기
   * 첫번째 주유소에서 두번째 도시 갈 정도만 + 두번째에서 모든 도시 다 가기
   * 무조건 첫번째 주유소에서는 두번째 도시까지 채울 수 밖에 없다. 디폴트?
   * 이 기름이 다음 기름보다 싼 기름인지 확인하는게 필요.
   * 근데 내 풀이는 시간이 진짜 오래걸림..
   *  글고 문제에서 나온 정말 큰 수를 고려하지 않고 풀었따 ㅠㅠ
   */

  let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
  let distances = input[1].split(' ').map(Number);
  let oilPrices = input[2].split(' ').map(Number);

  let firstOil = oilPrices[0];
  let count = firstOil * distances.shift();

  for (let i = 1; i < oilPrices.length - 1; i++) {
    if (firstOil > oilPrices[i]) {
      firstOil = oilPrices[i];
    }
    count += firstOil * distances.shift();
  }

  console.log(count);
  {
    // 다른 사람 풀이
    const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
    const n = +input[0];
    const distance = input[1].split(' ').map((v) => BigInt(v));
    const price = input[2].split(' ').map((v) => BigInt(v));

    let curPrice = price[0];
    let cost = 0n;

    for (let i = 0; i < n - 1; i++) {
      cost += curPrice * distance[i];
      if (curPrice > price[i + 1]) curPrice = price[i + 1];
    }
    // 큰 숫자일 땐 꼭 문자열로 반환
    console.log(String(cost));
  }
}
