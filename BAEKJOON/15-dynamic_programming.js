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
