/**
 * 1003번 피보나치 함수
 * 0, 1이 몇번 나왔는지 세는 함수
 * 찾아보니 N의 0의 개수는 N-1의 1의 호출 개수와 같다
 * 1이 나와야 0도 나올 수 있어서 그런 듯
 */

let nums = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(Number);
let cases = nums.shift();

for (let i = 0; i < cases; i++) {
  let num = nums[i];
  // 0일때 f(0)은 1번, f(1)은 0번, 1일 때, .. 2일 때.. 합쳐주기. 그럼 새로 계산안해도됨
  let fibonacci = [
    [1, 0],
    [0, 1],
  ];
  for (let j = 2; j <= num; j++) {
    fibonacci[j] = [
      fibonacci[j - 1][0] + fibonacci[j - 2][0],
      fibonacci[j - 1][1] + fibonacci[j - 2][1],
    ];
  }
  console.log(fibonacci[num].join(' '));
}

{
  /**
   * 1904번 타일개수
   * N = 1, 1
   * N = 2, 00, 11
   * N = 3, 001, 100, 111
   * N = 4, 0000, 0011, 1100, 1111, 1001
   * N = 5, 00001, 00100, 10000, 00111, 10011, 11001, 11100, 11111
   * 예전에 피보나치 구하는거랑 비슷하다. 배열에 기존 수 저장해놓고 그거 하나씩 꺼내서 계산하는데 쓰는 것.
   * 근데 왜 굳이 15746으로 나누는 걸까..?
   */

  let target = Number(require('fs').readFileSync('/dev/stdin').toString());

  function solution(target) {
    const arr = new Array();
    arr[1] = 1;
    arr[2] = 2;
    for (let i = 3; i <= target; i++) {
      arr[i] = (arr[i - 2] + arr[i - 1]) % 15746;
    }
    console.log(arr[target]);
  }

  solution(target);

  {
    // 다른 사람 풀이
    const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
    const N = Number(input[0]);

    let dp = new Array(N).fill(0);
    (dp[0] = 1), (dp[1] = 2);

    for (let i = 2; i < N; i++) dp[i] = (dp[i - 1] + dp[i - 2]) % 15746;
    console.log(dp[N - 1]);
  }
}

{
  /**
   * 9461번
   * 피보나치랑 비슷 새로운 값 찾는 공식만 찾으면 됨.
   * 백준은 값 설정하는게 젤 화난다.. 으으
   */
  const [cases, ...inputs] = require('fs')
    .readFileSync('/dev/stdin', 'utf8')
    .trim()
    .split('\n')
    .map(Number);

  let max = Math.max(...inputs);
  let ex = [1, 1, 1, 2, 2, 3, 4, 5, 7, 9];

  for (let i = ex.length; i > max; i++) {
    let result = ex[i - 1] + ex[i - 5];
    ex.push(result);
  }

  inputs.forEach((input) => {
    console.log(ex[input - 1]);
  });
}

{
  /**
   * 11053번 가장 긴 증가하는 부분 수열
   * 이 문제는 인프런에서 배웠던 문제랑 똑같다.
   * LIS.js 파일 참고
   * arr의 n번째의 수는 부분 수열에서 가장 마지막 수가 되고, 그 마지막 수를 가지고 만든 가장 긴 부분 수열의 길이가 dy의 n번째 인덱스에 들어간다.
   */
  let fs = require('fs');
  let input = fs.readFileSync('/dev/stdin').toString().split('\n');
  let cases = Number(input[0]);
  let arr = input[1].split(' ').map((v) => Number(v));
  let dp = new Array(cases).fill(0);
  dp[0] = 1;
  for (let i = 1; i < cases; i++) {
    let max = 0;
    for (let j = i - 1; j >= 0; j--) {
      if (arr[i] > arr[j] && dp[j] > max) {
        max = dp[j];
      }
    }
    dp[i] = max + 1;
  }
  console.log(Math.max(...dp));
}

{
  /**
   * 11052 가장 긴 바이토닉 수열
   * 한 쪽으로 커지는거 가장 긴걸 고르면..?
   * 그 수를 기준으로 양 옆이 어떤지 계산하다
   * 둘 다 더해서 하나 빼면 됨
   * 생각보다 안어려웠다 헤헤 LIS구하는 것과 같다
   * 대신 기준점을 가지고 왼쪽에서부터 기준점까지 숫자가 증가하는 증가수열과 기준점에서 오른쪽으로 갈수록 숫자가 감소하는 수열을 둘 다 구해줘야 한다.
   *  역시 초깃값 세팅은 제일 첫번째 인덱스는 증가수열에서 1개, 제일 마지막 인덱스는 감소 수열에서 1개로 세팅해줘야 dp(right, left)하는 최초 조건이 된다.
   */

  let fs = require('fs');
  let input = fs.readFileSync('/dev/stdin').toString().split('\n');
  let cases = Number(input[0]);
  let arr = input[1].split(' ').map((v) => Number(v));

  let left = new Array(cases).fill(0);
  let right = new Array(cases).fill(0);
  left[0] = 1;
  right[arr.length - 1] = 1;

  // 왼쪽부터 시작하는 최장 부분 수열 구하기
  for (let i = 1; i < arr.length; i++) {
    let max = 0;
    for (let j = i - 1; j >= 0; j--) {
      if (arr[i] > arr[j] && left[j] > max) {
        max = left[j];
      }
    }
    left[i] = max + 1;
  }

  for (let k = arr.length - 1; k >= 0; k--) {
    let max = 0;
    for (let l = k + 1; l <= arr.length - 1; l++) {
      if (arr[k] > arr[l] && right[l] > max) {
        max = right[l];
      }
    }
    right[k] = max + 1;
  }

  let sumArr = [];
  right.forEach((item, index) => {
    let sum = item + left[index] - 1;
    sumArr.push(sum);
  });

  console.log(Math.max(...sumArr));
}

{
  /**
   * 2579번 계단 오르기
   * 밑에 풀이는 다른 사람의 풀이를 참고한 것이다.
   * 문제에서는 첫번째 계단 밑에 바닥? 이 있지만 코드 내에서는 0번째 계단이 그림에서 첫번째 계단이 된다.
   * 실제로 그림을 그려봤는데
   * 1번째 계단은 1
   * 2번째 계단 1, 2 / 2
   * 3번째 계단 1,3 / 2, 3
   * 4번째 계단 1, 3, 4 / 1, 2, 4 & 2, 4
   * 5번째 계단 1, 3, 5 / 1, 2, 4, 5 & 2, 4, 5
   * 6번째 계단 1, 3, 5, 6 & 2, 3, 5, 6 / 1, 2, 4, 6 & 2, 4, 6 이었다.
   * N번째 계단일 때 바로 전 계단을 밟은 경우는 바로 전 계단 - 2 계단의 경우를 고려해주면 되고,
   * N계단을 오르기 위해 2계단을 건너 뛰었다면 현재 계단과 현재 계단 - 2만 신경써주면 된다.
   * 이는 문제조건처럼 연속된 수를 만들어주지 않기 위해서다.
   * 그림까지 그렸는데 패턴이 보일랑 말랑했었다는 점이 아쉽다 ㅜ
   */

  let fs = require('fs');
  let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
  let target = Number(input.shift());
  let stairs = input.map((i) => parseInt(i));
  // let target = 6;
  // let stairs = [10, 20, 15, 25, 10, 20];
  let dp = Array(301);

  // 0번째 계단은 문제에서 첫번째 계단을 의미한다. dp[0] = 10
  dp[0] = stairs[0];

  // 두번째 계단을 가는 경우는 전의 계단을 밟고 갔을 때, 혹은 바로 두 계단으로 가는 경우다.
  dp[1] = Math.max(stairs[0] + stairs[1], stairs[1]);

  // 세번째 계단을 가는 경우는 두번째 계단으로 가서 세번째로 가는 경우, 첫번째 계단에서 바로 세번째 계단으로 가능 경우다.
  dp[2] = Math.max(stairs[1] + stairs[2], stairs[0] + stairs[2]);

  //두가지의 방법 중 더 큰 값을 택
  for (let i = 3; i < target; i++) {
    // 연속되지 않게 2계단 차이 나는 경우, 지금 계단 전의 계단을 밟고, 그 계단이 2계단을 뛰어서 올라온 경우를 비교해준다.
    dp[i] = Math.max(stairs[i] + dp[i - 2], stairs[i] + stairs[i - 1] + dp[i - 3]);
  }

  console.log(dp[target - 1]);
}

{
  // 1463번 1로 만들기
  let target = 6;
  let dp = Array(target + 1).fill(0);

  // 목표로 하는 숫자가 되기까지 1이되는 최소값을 dp에 저장한다.
  for (let i = 2; i <= target; i++) {
    // 1을 빼야 하는 경우를 먼저 해준다. 전의 숫자에서 최솟값과 1을 빼는 경우 하나를 더해준다.
    dp[i] = dp[i - 1] + 1;

    if (i % 2 === 0) {
      // 1을 빼서 만들어진 최솟값과 2를 나눠서 만들어지는 최솟값 + 1 중에 작은 숫자가 최종 값이 된다.
      // + 1 해주는 이유는 2를 나눠줬기 때문에 연산을 한 번 더 했다는 의미이다.
      dp[i] = Math.min(dp[i], dp[i / 2] + 1);
    }

    if (i % 3 === 0) {
      // 1을 빼서 만들어진 최솟값과 2를 나눠서 만들어지는 최솟값 + 1 중에 작은 숫자가 최종 값이 된다.
      dp[i] = Math.min(dp[i], dp[i / 3] + 1);
    }
    console.log(dp);
  }

  console.log(dp[target]);
}

{
  /**
   * 1932번 정수 삼각형
   */
  let nums = '7\n3 8\n8 1 0\n2 7 4 4\n4 5 2 6 5';

  const fs = require('fs');
  const [target, ...arr] = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

  const num = +target;
  let dp = arr.map((v) => v.split(' ').map((v) => +v));

  // 0번째 배열부터 시작해서 차례로 더할 수 있는 것들을 더해주면서 마지막 배열에서 가장 큰 수를 찾으면 된다.

  // 첫번째 배열부터 시작하는 이유는 i - 1을 해서 0번째 경우부터 계산해줘야 하기 때문!
  for (let i = 1; i < num; i++) {
    for (let j = 0; j <= i; j++) {
      let prev;
      // 0은 다음 배열의 0번째 인덱스와 합해질 수 밖에 없다.
      if (j === 0) prev = dp[i - 1][j];
      // 마지막은 마지막끼리 합쳐진다.
      else if (j === i) prev = dp[i - 1][j - 1];
      // 중간 x 인덱스로 오는 방법은 이전 배열의 x - 1에서 오거나 x에서 올 수 밖에 없다.
      // 이전 배열이라서 i - 1, j는 인덱스의 개념
      else prev = Math.max(dp[i - 1][j - 1], dp[i - 1][j]);
      dp[i][j] += prev;
    }
  }
  console.log(Math.max(...dp[num - 1]));
}

{
  // 1149번 RGB 거리
  let fs = require('fs');
  let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
  const target = Number(input[0]);
  input.shift();
  let houses = input.map((value) => value.split(' ').map((element) => Number(element)));

  let houses = [
    [26, 40, 83],
    [49, 60, 57],
    [13, 89, 99],
  ];

  let target = 3;

  for (let i = 1; i < target; i++) {
    // 첫번째 집이 칠해질 수 있다는 것은 두번째 세번째 집 중에서 최소가 되는 값의 집이 칠해져서 칠해졌다는 의미 + 칠해졌으므로 자기 자신을 더한다
    houses[i][0] = Math.min(houses[i - 1][1], houses[i - 1][2]) + houses[i][0];
    // 두번째 집이 칠해질 수 있다는 것은 첫번째 세번째 집 중에서 최소가 되는 값의 집이 칠해져서 칠해졌다는 의미
    houses[i][1] = Math.min(houses[i - 1][0], houses[i - 1][2]) + houses[i][1];
    // 세번째 집이 칠해질 수 있다는 것은 두번째 세번째 집 중에서 최소가 되는 값의 집이 칠해져서 칠해졌다는 의미
    houses[i][2] = Math.min(houses[i - 1][0], houses[i - 1][1]) + houses[i][2];
  }

  console.log(Math.min(...houses[target - 1]));
}

{
  /**
   * 2156번
   * -2
   * -1
   * 이전에 풀었던 계단 오르기 문제랑 비슷해서 거의 똑같이 풀었는데, 한 가지 주의할 점이 있었다.
   * 그건 n번째 와인 순서가 왔을 때, 그 와인을 안마실 수도 있는 경우. 계단이랑 약간 다르다.
   * 계단은 꼭 그 계단을 거쳐야했는데, 와인은 그냥 안마시고 넘길 수도 있다.
   * 그건 앞의 두가지 경우들이 해당 와인을 마시는 경우보다 클 수 있어서다.
   */
  let fs = require('fs');
  let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
  let target = Number(input.shift());
  // let wines = [6, 10, 13, 9, 8, 1];
  let wines = input.map((i) => +i);
  let dp = new Array(wines.length).fill(0);

  dp[0] = wines[0];
  dp[1] = Math.max(wines[0] + wines[1], wines[1]);
  dp[2] = Math.max(wines[2] + wines[0], wines[2] + wines[1], dp[1]);

  for (let i = 3; i < wines.length; i++) {
    dp[i] = Math.max(
      // 이번 와인 마시고 그 전전 와인에서 최댓값
      wines[i] + dp[i - 2],
      // 이번 와인 마시고 전에 와인도 마시고 그 전전 와인에서 최댓값
      wines[i] + wines[i - 1] + dp[i - 3],
      // 이번 와인 안마시는 경우
      dp[i - 1]
    );
  }

  console.log(dp[target - 1]);
}

{
  /**
   *  2565번 전깃줄 문제
   * 전깃줄들이 안겹치도록 최소한으로 전깃줄을 빼주는 수를 구하는 문제.
   * n번째와 n+1번째의 줄이 겹치는 건 n+1의 전기줄이 n보다 적은데 위치해서라는 것은 알았는데. 더 이전에 겹치는 것이 있다면? 그것까지는 해결을 못했다.
   * 다른 사람의 풀이를 보고 이 문제가 왜 LIS인지 이해하게 되었다.
   * 처음에 주어지는 전깃줄은 순서대로 되있지 않아 정렬이 필요하다.
   * 왼쪽줄을 오름차순으로 정렬해주자.
   * 그럼 오른쪽은 [8, 2, 9, 1, 4, 6, 7, 10] 이렇게 된다.
   * 문제 요약?에서도 LIS응용이라고 했으니 알아차렸어야 했는데 ㅜ
   * 여기서 최장 부분수열을 구해서 전깃줄의 수와 빼주는 것이 답이었다.
   * 순서대로 온 전깃줄이 가장 긴 것이 최대 전깃줄의 수가 된다.
   * 풀이를 알고나니 무언가 허무한 문제.
   */
  // let wires = [
  //   [1, 8],
  //   [3, 9],
  //   [2, 2],
  //   [4, 1],
  //   [6, 4],
  //   [10, 10],
  //   [9, 7],
  //   [7, 6],
  // ];

  const fs = require('fs');
  let [target, ...wires] = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
  target = Number(target);
  wires = wires.map((w) => w.split(' ').map((n) => +n));
  wires.sort((a, b) => a[0] - b[0]);
  let dp = new Array(wires.length).fill(1);

  for (let i = 1; i < wires.length; i++) {
    let max = 0;
    for (let j = i - 1; j >= 0; j--) {
      if (wires[i][1] > wires[j][1] && dp[j] > max) {
        max = dp[j];
      }
    }
    dp[i] = max + 1;
  }

  console.log(target - Math.max(...dp));
}

{
  /**
   * 9251번 최장 공통 부분 수열 LCS
   * 백준 설정은 날 미치게한다.. 가끔씩..ㅎ
   * 결론적으로 이 문제는 어떻게 보면 LIS 응용이라고 볼 수 있다.
   * 가장 도움이 많이 된 블로그 https://velog.io/@emplam27/%EC%95%8C%EA%B3%A0%EB%A6%AC%EC%A6%98-%EA%B7%B8%EB%A6%BC%EC%9C%BC%EB%A1%9C-%EC%95%8C%EC%95%84%EB%B3%B4%EB%8A%94-LCS-%EC%95%8C%EA%B3%A0%EB%A6%AC%EC%A6%98-Longest-Common-Substring%EC%99%80-Longest-Common-Subsequence
   *
   * 간과한 부분은 i 와 j 인덱스를 그대로 바로 비교해주는 것이 아니라 1부터 for loop이 돌기 때문에,
   * i - 1, j - 1 이런식으로 비교해줘야 한다.
   *  let str = 'ACAYKP';
   *  let str2 = 'CAPCAK';
   * 이런 두 문자열이 있다고 가정했을 때 시작은 A가 먼저 도는데 str2에서 같은 문자가 있는지를 찾는다.
   * 같으면 + 1 해준다.
   * 만약에 다르다면 i 인덱스에서 하나 적은 경우와 j 인덱스에서 하나 적은 경우를 비교해 큰 걸 가져온다.
   * 이건 연속된 문자열이 아니어도 괜찮고, 부분 수열 문제에서도 보았듯이 가장 긴 수열을 찾는 문제다.
   * 그래서 다르더라도 기존의 최대값이 2라면 2를 가질 수 있도록 해주는 것이다.
   */
  {
    const readline = require('readline');

    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });

    let input = [];

    rl.on('line', function (line) {
      input.push(line.trim());
    }).on('close', function () {
      let str = input[0].split('');
      let str2 = input[1].split('');

      let LCS = Array.from(Array(str.length + 1), () => Array(str2.length + 1).fill(0));

      for (let i = 1; i <= str.length; i++) {
        let x = str[i - 1];
        for (let j = 1; j <= str2.length; j++) {
          let y = str2[j - 1];
          if (x !== y) {
            LCS[i][j] = Math.max(LCS[i - 1][j], LCS[i][j - 1]);
          } else {
            LCS[i][j] = LCS[i - 1][j - 1] + 1;
          }
        }
      }

      console.log(LCS[str.length][str2.length]);
      process.exit();
    });
  }
  // 다른 사람 풀이
  {
    const [s1, s2] = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');

    const s1Len = s1.length,
      s2Len = s2.length;
    let dp = Array.from(Array(s1Len + 1), () => new Array(s2Len + 1).fill(0));

    for (let i = 1; i <= s1Len; i++) {
      for (let j = 1; j <= s2Len; j++) {
        if (s1[i - 1] === s2[j - 1]) dp[i][j] = dp[i - 1][j - 1] + 1;
        else dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
      }
    }
    console.log(dp[s1Len][s2Len]);
  }
}

{
  /**
   * 연속합이라서 LIS와는 조금 또 다르다.
   * 연속되지 않으면 의미가 없음.
   * 여기 dp안에 들어있는 값은 연속값에서 최대값이다.
   * dp 현재값(nums에서 현재값)이 dp 현재 - 1 값과 새로운 값이랑 더했을 때(연속합)보다 작으면 dp 현재 인덱스의 새로운 값이 된다 = 연속합이 되었단 의미. 만약에 연속합보다 크다면 굳이 더할 필요가 없이 nums의 현재 인덱스 값을 가지면 된다.
   */

  let fs = require('fs');
  let input = fs.readFileSync('/dev/stdin').toString().split('\n');
  let target = Number(input[0]);
  let nums = input[1].split(' ').map((v) => Number(v));
  // let nums = [10, -4, 3, 1, 5, 6, -35, 12, 21, -1];
  let dp = new Array(nums.length).fill(0);

  for (let i = 0; i < nums.length; i++) {
    dp[i] = nums[i];

    if (dp[i] < dp[i - 1] + nums[i]) {
      dp[i] = dp[i - 1] + nums[i];
    }
  }

  console.log(Math.max(...dp));
}

{
  /**
   * 12865번 평범한 배낭
   * 인프런에서 풀었던 최고 점수 푸는 문제와 같다.
   * dp 배열을 만드는데 dp 배열 길이는 무게 + 1로 해준다.
   * dp 인덱스는 무게로, 해당 무게일 때 값에 최댓값이 들어가는 것이다.
   * 처음에 주어진 배낭이 무게가 6이고 13이면
   * dp[6], dp[7]까지 구할 수 있다.
   * 왜냐면 6 이상이어야지만 저 배낭을 들 수 있기 때문이다.
   * [0, 0, 0, 0, 0, 0, 13, 13]
   * [0, 0, 0, 0, 8, 8, 13, 13]
   * [0, 0, 0, 6, 8, 8, 13, 14]
   * [0, 0, 0, 6, 8, 12, 13, 14]
   */
  // let bagsNum = 4;
  // let maxWeight = 7;
  // let bags = [
  //   [6, 13],
  //   [4, 8],
  //   [3, 6],
  //   [5, 12],
  // ];

  let fs = require('fs');
  let input = fs
    .readFileSync('/dev/stdin')
    .toString()
    .split('\n')
    .map((i) => i.split(' ').map((v) => +v));
  let cases = input.shift();

  let dp = Array.from({ length: cases[1] + 1 }, () => 0);

  for (let i = 0; i < cases[0]; i++) {
    let weight = input[i][0]; // 가방 무게
    let worth = input[i][1]; //가방 가치
    // 최대 무게부터 현재 배낭의 무게까지 구한다.
    for (let j = cases[1]; j >= weight; j--) {
      // dp[j - weight]를 해주는 이유는 현재 가치 + dp(j - 현재 무게)가 현재 가방 무게 + 그 무게에서 남는 무게 즉, 모든 배낭 무게를 커버하고 총 가치값이 되기 때문이다.
      dp[j] = Math.max(dp[j], dp[j - weight] + worth);
    }
  }
  console.log(dp[cases[1]]);
}

{
  /**
   * 11726번 2xn 타일링
   * 타일을 만들 수 있는 경우를 1부터 4정도까지 그려보니 피보나치인게 감이 와서 바로 풀음
   * 정답률에 비해 쉬운 문제였다.
   */
  let fs = require('fs');
  let input = Number(fs.readFileSync('/dev/stdin').toString().trim());

  let dp = new Array(1001).fill(0);
  dp[1] = 1;
  dp[2] = 2;

  for (let i = 3; i <= input; i++) {
    dp[i] = (dp[i - 1] + dp[i - 2]) % 10007;
  }

  console.log(dp[input]);
}

{
  /**
   * 2748번 피보나치 수열
   * 원래 하던 방식으로 dp를 이용해 구했으나 통과가 안됐다!
   * 찾아보니 피보나치 수가 커질 수록 JS가 표현할 수 있는 범위를 넘어버리기 때문에 bigInt 처리를 해줘야한다고 한다.
   * 저번에 문제 풀면서 배웠듯이, bigInt 처리를 하면 출력할 때는 문자열 처리를 마지막으로 해줘야 한다.
   */
  let target = Number(require('fs').readFileSync('/dev/stdin').toString().trim());

  let dp = new Array(90).fill(0);
  dp[0] = 0;
  dp[1] = 1;
  dp[2] = 1;

  for (let i = 3; i <= target; i++) {
    dp[i] = BigInt(dp[i - 1]) + BigInt(dp[i - 2]);
  }

  console.log(dp[target].toString());
}

{
  /**
   * 2193번 이친수
   * 역시나 피보나치 문제.. 위에꺼 고대로 갖다씀
   */
  let target = Number(require('fs').readFileSync('/dev/stdin').toString().trim());

  let dp = new Array(90).fill(0);
  dp[0] = 0;
  dp[1] = 1;
  dp[2] = 1;

  for (let i = 3; i <= target; i++) {
    dp[i] = BigInt(dp[i - 1]) + BigInt(dp[i - 2]);
  }

  console.log(dp[target].toString());
}

{
  /**
   * 11727번 2xn 타일링 2
   */
  let fs = require('fs');
  let input = Number(fs.readFileSync('/dev/stdin').toString().trim());

  let dp = new Array(1001).fill(0);
  dp[1] = 1;
  dp[2] = 3;

  for (let i = 3; i <= input; i++) {
    dp[i] = (dp[i - 1] + 2 * dp[i - 2]) % 10007;
  }

  console.log(dp[input]);
}

{
  /**
   * 14501번 퇴사
   * 푸는 방법을 알아내서 만족.
   * https://kscodebase.tistory.com/366
   */

  // let cases = [
  //   [3, 10],
  //   [5, 20],
  //   [1, 10],
  //   [1, 20],
  //   [2, 15],
  //   [4, 40],
  //   [2, 200],
  // ];

  let cases = [
    [1, 1],
    [1, 2],
    [1, 3],
    [1, 4],
    [1, 5],
    [1, 6],
    [1, 7],
    [1, 8],
    [1, 9],
    [1, 10],
  ];

  // const fs = require('fs');
  // let [deadline, ...cases] = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

  const days = [0];
  const money = [0];

  cases.forEach((c) => {
    days.push(parseInt(c[0]));
    money.push(parseInt(c[1]));
  });

  let deadline = cases.length;

  const DP = new Array(days.length).fill(0);

  for (let i = 1; i < DP.length; i++) {
    DP[i] = money[i];

    // 현재 날이랑 끝나는 날을 합쳐서 퇴사날을 넘으면, dp[i-1] 값이 dp[i]의 최대값이 된다.
    if (i + days[i] - 1 > deadline) {
      DP[i] = DP[i - 1];
      continue;
    }

    let temp = DP[i];
    for (let j = 1; j < i; j++) {
      // i일 이전에 얻을 수 있는 경우의 수를 dp[i]에 넣어주는 작업!
      if (j + days[j] <= i) {
        // dp[i]와 / i일에 얻을 수 있는 이익과 이전에 얻었던 이익의 최댓값을 합한 값을 비교해준다.
        temp = Math.max(temp, DP[j] + money[i]);
      }
    }
    DP[i] = temp;
  }

  console.log(Math.max(...DP));
}

{
  /**
   * 1010번 다리놓기
   * 조합으로 푸는 문제
   * mCn이 된다. = m! / (m-n)! * n!
   * https://tesseractjh.tistory.com/3
   */
  let east = 13;
  let west = 29;

  const factorial = (num) => {
    if (num === 1 || num === 0) {
      return 1;
    }
    return num * factorial(num - 1);
  };

  cases.forEach((item) => {
    let east = parseInt(item[0]);
    let west = parseInt(item[1]);
    const answer = factorial(east) / (factorial(west) * factorial(east - west));
    console.log(parseInt(answer + 0.5));
  });
}

{
  // 11052번 카드 구매하기
  // let cards = 5;
  // //          1 2 3 4
  // let price = [10, 9, 8, 7, 6];

  // 비싸게 주고 산다.
  // 4장을 살 때는 자기 자신이거나 혹은 이전에 있는 숫자를 조합하거나다. 4+0, 1 + 3, 2+ 2 이런식으로
  // 이 숫자 조합하는 방법에 대해서 어렴풋하게 계속 깨우쳐가는 것 같다. 굿!

  const fs = require('fs');
  let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
  let cards = input[0];
  price = input[1].split(' ').map(Number);

  let dp = new Array(cards + 1).fill(0);

  for (let a = 1; a <= cards; a++) {
    dp[a] = price[a - 1];
  }

  for (let i = 1; i <= cards; i++) {
    for (let j = 1; j <= i; j++) {
      dp[i] = Math.max(dp[i], dp[i - j] + dp[j]);
    }
  }

  console.log(dp[cards]);
}
