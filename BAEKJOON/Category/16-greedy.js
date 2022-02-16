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

{
  // 1026번 보물
  // 그리디라기 보단 정렬에 가까운 듯한 문제
  const fs = require('fs');
  let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
  let number = Number(input[0]);

  let a = input[1].split(' ').map(Number);
  let b = input[2].split(' ').map(Number);

  a = a.sort((a, b) => a - b);
  b = b.sort((a, b) => b - a);

  let result = a.reduce((prev, curr, index) => {
    return prev + curr * b[index];
  }, 0);

  console.log(result);
}

{
  /**
   * 5585번 거스름돈
   */
  const fs = require('fs');
  let input = Number(fs.readFileSync('/dev/stdin').toString().trim());
  let target = 1000 - input;
  let coins = [500, 100, 50, 10, 5, 1];
  let count = 0;
  for (let i = 0; i < coins.length; i++) {
    let coin = coins[i];
    if (Math.floor(target / coin) === 0) {
      continue;
    }
    count += Math.floor(target / coin);
    target = target % coin;
  }

  console.log(count);
}

{
  /**
   * 2217번 로프
   * 로프가 여러 개 있을 때 로프 중량을 내림차순으로 정렬한다.
   * 가장 많이 들 수 있는 무게를 가장 높은 중량을 가진 로프로 초기화한다.
   * 로프가 여러 개 일 때 들 수 있는 최대 중량은 가장 적은 중량을 가진 로프의 중량 * 로프의 개수다.
   * for문을 돌면서 max값과 비교해서 max값을 계속 바꿔주면 된다.
   */
  const fs = require('fs');
  let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
  let nums = input.shift();
  // let input = [10, 15];

  let lopes = input.map(Number).sort((a, b) => b - a);
  let max = lopes[0];

  for (let i = 1; i < nums; i++) {
    if (lopes[i] * (i + 1) > max) {
      max = lopes[i] * (i + 1);
    }
  }

  console.log(max);
}

{
  /**
   * 10126번
   */
  const fs = require('fs');
  let target = Number(fs.readFileSync('/dev/stdin').toString().trim());
  let times = [300, 60, 10];
  let count = new Array(times.length).fill(0);

  for (let i = 0; i < times.length; i++) {
    let time = times[i];
    if (Math.floor(target / time) === 0) {
      continue;
    }
    count[i] = Math.floor(target / time);
    target = target % time;
  }

  console.log(target > 0 ? -1 : count.join(' '));
}

{
  /**
   * 10610번 30
   */
  const fs = require('fs');
  let target = fs.readFileSync('/dev/stdin').toString().trim();

  let sum = 0;
  let answer = -1;
  target = Array.from(target);
  target.forEach((e) => {
    sum += parseInt(e);
  });
  if (sum % 3 === 0) {
    target.sort((a, b) => b - a);
    if (target[target.length - 1] === '0') {
      answer = target.join('');
    }
  }
  console.log(answer);
}

{
  /**
   * 1789번 수들의 합
   * https://zereight.tistory.com/736
   */
  const fs = require('fs');
  let target = Number(fs.readFileSync('/dev/stdin').toString().trim());

  let num = 1;

  let sum = num;

  while (sum <= target) {
    num++;
    sum += num;
  }

  console.log(num - 1);
}

{
  /**
   * 4796번 캠핑
   */
  const fs = require('fs');
  let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

  for (let i = 0; i < input.length - 1; i++) {
    let target = input[i].split(' ').map(Number);

    let V = target[2];
    let P = target[1];
    let L = target[0];

    let count = 0;

    // V가 P보다 클 경우 L날을 다 이용할 수 있다는 의미
    while (V > P) {
      V = V - P;
      count += L;
    }

    // 캠핑 이용일자가 휴가보다 크면 휴가 날짜 모두 이용해야하므로
    if (L > V) {
      count += V;
    } else {
      // 휴가 날짜가 더 크면 이용일자를 모두 이용할 수 있어서
      count += L;
    }
    console.log(`Case ${i + 1}: ${count}`);
  }
}

{
  /**
   * 1439번
   * 문제를 너무 어렵게 생각한듯?
   */
  {
    /**
     * 틀린 풀이
     */
    const fs = require('fs');
    let input = fs.readFileSync('/dev/stdin').toString().trim();

    let target = input.toString();

    target = target.split('');

    let oneCount = 0;
    // 0일 때 1인지 검사
    for (let i = 0; i < target.length; i++) {
      let num = target[i];
      console.log(num);
      if (num === '1') {
        oneCount++;
        for (let j = i + 1; j < target.length; j++) {
          let x = target[j];
          if (x === '0') {
            i = j;
            break;
          }
        }
      }
    }

    // 1로 시작할 때 0으로 된 거 검사
    let zeroCount = 0;

    for (let i = 0; i < target.length; i++) {
      let num = target[i];
      if (num === '0') {
        zeroCount++;
        for (let j = i + 1; j < target.length; j++) {
          let x = target[j];
          if (x === '1') {
            i = j;
            break;
          }
        }
      }
    }

    console.log(zeroCount <= oneCount ? zeroCount : oneCount);
  }
  {
    /**
     * 다른 사람 풀이 참고한 것
     */
    const fs = require('fs');
    let target = fs.readFileSync('/dev/stdin').toString().trim();

    let countZero = 0;

    let countOne = 0;

    if (target[0] === '1') {
      countZero++;
    } else {
      countOne++;
    }

    for (let i = 0; i < target.length - 1; i++) {
      if (target[i] !== target[i + 1]) {
        if (target[i + 1] === '1') {
          countZero++;
        } else {
          countOne++;
        }
      }
    }

    console.log(Math.min(countZero, countOne));
  }
}

{
  /**
   * 2864번 5와 6의 차이
   * 모두 5로 바꾼 경우가 최솟값, 모두 6으로 바꾼 경우가 최댓값
   */

  let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
  input = input[0].split(' ');

  let M = input.map((s) => +s.replace(/5/g, '6'));

  let m = input.map((s) => +s.replace(/6/g, '5'));

  console.log(m[0] + m[1], M[0] + M[1]);
}

{
  /**
   * 1715번 카드 정렬하기
   * 어려운 문제.
   * 어떻게 풀어야 하는지는 도출해냈다.
   * 카드를 오름차순으로 정렬하고, 2개의 카드를 빼내서 합을 구한 뒤 그 다음 카드랑 합치고를 반복해 최종 결과를 낸다.
   * 근데 내가 푼 방법으로는 계속 틀렸다고 나와서 다른 사람 풀이를 참고했다.
   * 힙?을 써야 풀 수 있는 것 같았다. 힙에 대한 공부가 필요한 것 같아 리드미에는 incomplete로 표기할 예정
   */
  {
    // 다른 사람 풀이
    function MinHeap() {
      this.heap = [0];
      this.insert = (v) => {
        this.heap.push(v);
        let p = this.heap.length - 1;
        while (p > 1 && this.heap[Math.floor(p / 2)] > this.heap[p]) {
          let tmp = this.heap[Math.floor(p / 2)];
          this.heap[Math.floor(p / 2)] = this.heap[p];
          this.heap[p] = tmp;
          p = Math.floor(p / 2);
        }
      };
      this.getLength = () => {
        return this.heap.length;
      };
      this.delete = () => {
        if (this.heap.length - 1 < 1) {
          return 0;
        }
        let deletedItem = this.heap[1];
        this.heap[1] = this.heap[this.heap.length - 1];
        this.heap.pop();
        let p = 1;
        while (p * 2 < this.heap.length) {
          let min = this.heap[p * 2];
          let minP = p * 2;
          if (p * 2 + 1 < this.heap.length && min > this.heap[p * 2 + 1]) {
            min = this.heap[p * 2 + 1];
            minP = p * 2 + 1;
          }
          if (this.heap[p] < min) {
            break;
          }
          let tmp = this.heap[p];
          this.heap[p] = this.heap[minP];
          this.heap[minP] = tmp;
          p = minP;
        }
        return deletedItem;
      };
    }

    const solution = (n, list) => {
      let cnt = 0;

      for (let i = 1; i < n; i++) {
        //제일 작은 카드 두개의 묶음을 빼낸다.
        let card1 = list.delete();
        let card2 = list.delete();
        //카드 두 묶음을 계산후 카운트
        let sum = card1 + card2;
        cnt += sum;
        //계산된 결과를 최소힙에 넣어줌
        list.insert(sum);
      }
      console.log(cnt);
    };

    const readline = require('readline');
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });

    let input = [];
    rl.on('line', function (line) {
      //여러줄 입력
      input.push(line);
    }).on('close', function () {
      let n = Number(input.shift());

      //최소힙 클래스 생성
      let list = new MinHeap();
      for (let i = 0; i < n; i++) {
        //최소힙을 이용하여 값을 하나씩 넣어준다.
        let tmp = Number(input.shift());
        list.insert(tmp);
      }
      solution(n, list);
      process.exit();
    });
  }
  {
    // 내 풀이 - 통과 하지는 못함
    let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

    let cases = Number(input.shift());

    input = input.map((i) => +i).sort((a, b) => a - b);

    let result = 0;

    for (let i = 1; i < cases; i++) {
      let first = input.shift();
      let second = input.shift();
      let sum = first + second;
      result += sum;
      input.unshift(sum);
    }

    console.log(result);
  }
}

{
  /**
   * 16953번 A -> B
   * 오롯이 내 힘으로 푼 문제. ㅜㅜ오랜만
   * B가 A가 될 수 있도록 하면 된다.
   */
  let fs = require('fs');
  let input = fs.readFileSync('/dev/stdin').toString().split(' ');

  let a = Number(input[0]);
  let b = Number(input[1]);

  /**
   * b를 가지고 a를 구한다
   */

  let count = 0;
  while (a < b) {
    if (b % 2 === 0) {
      b = b / 2;
      count++;
    } else {
      let newB = b.toString().split('');
      if (newB[newB.length - 1] === '1') {
        newB = newB.splice(0, newB.length - 1);
        b = Number(newB.join(''));
        count++;
      } else {
        count = -1;
        break;
      }
    }
  }

  console.log(a === b ? count + 1 : -1);
}

{
  /**
   * 1543번 문서 검색
   * 첫번째 방법: match와 정규 표현식 사용하기 -> 런타임 에러 뜸
   * 두번째 방법: 다른 분 풀이 참조. 찾으려는 문자열의 길이만큼 맞는지 확인해서 잘라주고 카운트에 더해주는 것 반복
   */
  {
    let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
    let qString = input[0];
    let aString = input[1];
    aString = RegExp(aString, 'gi');

    console.log(qString.match(aString).length);
  }
  {
    let fs = require('fs');
    let input = fs.readFileSync('/dev/stdin').toString().split('\n');
    input[0] = input[0].split('');
    let start = 0;
    let end = input[1].length;
    let count = 0;

    while (true) {
      if (input[0].slice(start, end).join('') === input[1]) {
        input[0].splice(start, input[1].length);
        count++;
      } else {
        start++;
        end++;
      }
      if (end > input[0].length) break;
    }

    console.log(count);
  }
}

{
  /**
   * 1783번 병든 나이트
   * 참고: https://ghost4551.tistory.com/20
   */
  let input = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ');
  let height = Number(input[0]);
  let width = Number(input[1]);

  // 이동횟수가 4번이 넘을 경우 모든 이동 방법을 다 써야함
  // 이동횟수가 4번보다 적으면 이동 방법에 대한 제약이 없음

  if (height === 1) {
    console.log(1);
  } else if (height === 2) {
    console.log(Math.min(4, parseInt((width + 1) / 2)));
  } else {
    if (width <= 6) {
      console.log(Math.min(4, width));
    } else {
      console.log(width - 2);
    }
  }
}
