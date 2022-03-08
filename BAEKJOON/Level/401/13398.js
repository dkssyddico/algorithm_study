/**
 * 연속합2
 * 수를 하나 제거할 수도 있다는 게 포인트 같음
 * 저번 문제랑 비슷하게 하되 최솟값을 제외한 전체 합을 마지막과 비교해볼 것. - 이렇게 하면 안됨
 * 제거했을 때랑 안했을 때.
 * dp 첫번째는 이전에 했을 때처럼 이전 dp[i-1]의 값과 현재 숫자를 더했을 때와 현재 숫자 대소를 비교하고 큰 걸 넣어준다.
 * 두번째 dp는 값을 삭제하는 경우의 dp다.
 * dp2를 구하는 점화식은 이전 값에 현재 숫자를 더했을 경우와 더하지 않았을 때를 비교하고 큰 값을 넣어주는 것이다.
 * 현재 숫자를 더할 경우엔 이전 값 중에 어떤 한 숫자가 없어진 경우이다.
 * https://leylaoriduck.tistory.com/535
 */

let cases = 10;
let nums = [10, -4, 3, 1, 5, 6, -35, 12, 21, -1];

{
  /**
   * 맞은 풀이
   * https://leylaoriduck.tistory.com/535
   */
  let fs = require('fs');
  let input = fs.readFileSync('/dev/stdin').toString().split('\n');
  let cases = Number(input[0]);
  let nums = input[1].split(' ').map((v) => Number(v));

  let dp = [nums[0]];
  let dp2 = [nums[0]];
  for (let i = 1; i < cases; i++) {
    dp[i] = nums[i] > nums[i] + dp[i - 1] ? nums[i] : nums[i] + dp[i - 1];
  }
  for (let i = 1; i < cases; i++) {
    dp2[i] = dp[i - 1] > nums[i] + dp2[i - 1] ? dp[i - 1] : nums[i] + dp2[i - 1];
  }

  let dpMax = Math.max(...dp);
  let dp2Max = Math.max(...dp2);
  console.log(Math.max(dpMax, dp2Max));
}

{
  /**
   * 틀린 풀이
   * dp를 2개 만들어야한다는 거까진 생각.
   * 최소값 하나만 빼줘야한다는 생각이 잘못된듯..
   */
  let fs = require('fs');
  let input = fs.readFileSync('/dev/stdin').toString().split('\n');
  let target = Number(input[0]);
  let nums = input[1].split(' ').map((v) => Number(v));
  let min = Math.min(...nums);
  let original = [...nums];
  nums.splice(nums.indexOf(min), 1);

  let dp = new Array(nums.length).fill(0);
  let dp2 = new Array(original.length).fill(0);

  for (let i = 0; i < nums.length; i++) {
    dp[i] = nums[i];
    if (dp[i] < dp[i - 1] + nums[i]) {
      dp[i] = dp[i - 1] + nums[i];
    }
  }

  for (let i = 0; i < original.length; i++) {
    dp2[i] = original[i];
    if (dp2[i] < dp2[i - 1] + original[i]) {
      dp2[i] = dp2[i - 1] + original[i];
    }
  }

  let max = Math.max(...dp);
  let max2 = Math.max(...dp2);
  console.log(Math.max(max, max2));
}
