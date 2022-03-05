/**
 * 가장 긴 증가하는 부분 수열 4
 */

{
  // 실패한 풀이
  let cases = 6;
  let nums = [10, 20, 10, 30, 20, 50];

  let fs = require('fs');
  // let input = fs.readFileSync('/dev/stdin').toString().split('\n');
  // let cases = Number(input[0]);
  // let nums = input[1].split(' ').map((v) => Number(v));

  let dp = Array.from({ length: cases }, () => new Array());
  let lengthDp = [];

  for (let i = 0; i < nums.length; i++) {
    let firstNum = nums[i];
    dp[i].push(firstNum);
    for (let j = i + 1; j < nums.length; j++) {
      let nextNum = nums[j];
      if (firstNum < nextNum) {
        dp[i].push(nextNum);
        firstNum = nextNum;
      }
    }
    lengthDp.push(dp[i].length);
  }

  // 가장 길이가 긴 것을 어떻게 빼내지?

  console.log(Math.max(...lengthDp));
  console.log(dp[lengthDp.indexOf(Math.max(...lengthDp))].join(' '));
}

{
  /**
   * 성공한 풀이
   * https://kscodebase.tistory.com/361
   * 작은 수들을 넣어주는 것 같다.
   */
  let fs = require('fs');
  let input = fs.readFileSync('/dev/stdin').toString().split('\n');
  let cases = Number(input[0]);
  let numbers = input[1].split(' ').map((v) => Number(v));

  const DP = new Array(numbers.length).fill(0);

  for (let i = 0; i < numbers.length; i++) {
    DP[i] = [1, [numbers[i]]];

    for (let j = 0; j < i; j++) {
      if (DP[i][0] < DP[j][0] + 1 && numbers[j] < numbers[i]) {
        DP[i][1] = [...DP[j][1], numbers[i]];
        DP[i][0] = DP[j][0] + 1;
      }
    }
  }

  let maxValue = DP[0][0];
  let temp = DP[0][1];

  for (let i = 1; i < DP.length; i++) {
    if (maxValue < DP[i][0]) {
      maxValue = DP[i][0];
      temp = DP[i][1];
    }
  }
  // console.log(DP);
  console.log(temp.length);
  // 배열을 출력하고 있었다...
  console.log(temp.join(' '));
}
