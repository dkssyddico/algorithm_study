/**
 * 쉬운 계단 수
 * 1 2 3 4 5 6 7 8 9
 * 특정 숫자 다음에 특정 숫자 -1 이 와도 되고 특정 숫자 + 1이 와도 된다.
 * 무조건 2개가 더해지는데 9로 끝나는 건 예외. 9는 한 개다.
 * 23 + [2] || [4]
 * 10 12 21 23 32 34 43 45 54 56 65 67 76 78 87 89 98
 * 3자리숫자 이상이면? 세개를 다 비교해야함.
 * 마지막 숫자를 제외하고 앞에 숫자가 우선 쉬운 계단수인지 확인.
 * 쉬운 계단 수가 맞고 뒤에서 끝자리 수랑 맨 뒤에 수랑 -1 || 1 차이나면 쉬운 계단수.
 * 작은 수에서 확인해야함.
 */

{
  /**
   * 내 풀이 rangeError가 나서 실패.
   * 너무 큰 범위를 가지고 for문을 돌리는 게 실패한 이유같다.
   * 그래도 - 1, + 1 이라는 것을 생각해낸건 셀프 기특..
   */
  const target = Number(require('fs').readFileSync('/dev/stdin').toString().trim());
  const condition = BigInt(1000000000);
  const dp = new Array(target + 1).fill(0);
  dp[1] = 9;
  const check = new Array(Math.pow(10, target) + 1).fill(0);

  for (let i = 1; i <= 9; i++) {
    check[i] = 1;
  }

  for (let i = 1; i <= Math.pow(10, target - 1); i++) {
    console.log(i);
    let num = i;
    if (check[num] === 1) {
      let end = num % 10;
      if (end === 9) {
        check[num * 10 + (end - 1)] = 1;
      } else if (end === 0) {
        check[num * 10 + (end + 1)] = 1;
      } else {
        check[num * 10 + (end - 1)] = 1;
        check[num * 10 + (end + 1)] = 1;
      }
    }
  }

  // dp[자릿수]에 어떻게 집어넣지 - 이게 실패 요인같음.
  for (let i = 10; i < check.length; i++) {
    let num = i;
    if (check[i] === 1) {
      let string = num + '';
      dp[string.length] += 1;
    }
  }

  console.log(dp[target] % condition);
}

{
  /**
   * 참고 : https://leylaoriduck.tistory.com/522
   * dp[n]은 자리수고 그 다음 [x]는 마지막 수다.
   */

  let fs = require('fs');
  let inputs = Number(fs.readFileSync('/dev/stdin').toString());

  // let inputs = 2;
  let dp = [];
  dp[0] = [];
  dp[1] = new Array(10).fill(1);
  dp[1][0] = 0;
  for (let i = 1; i < inputs; i++) {
    dp[i + 1] = new Array(10).fill(0);
    dp[i + 1][1] += dp[i][0] % 1000000000;
    for (let k = 1; k < dp[i].length - 1; k++) {
      dp[i + 1][k - 1] += dp[i][k] % 1000000000;
      dp[i + 1][k + 1] += dp[i][k] % 1000000000;
    }
    dp[i + 1][8] += dp[i][9] % 1000000000;
  }
  console.log(dp[inputs].reduce((a, v) => a + v, 0) % 1000000000);
}
