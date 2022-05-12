/**
 * 약수의 합
 */

{
  // 시간초과 난다.
  let fs = require('fs');
  let input = fs.readFileSync('/dev/stdin').toString().split('\n');
  let T = +input.shift();
  let nums = input.map(Number);

  let result = '';

  function solution(num) {
    let sum = 0;

    for (let i = 1; i <= num; i++) {
      sum += i * Math.floor(num / i);
    }
    return sum;
  }

  for (let i = 0; i < nums.length; i++) {
    result += `${solution(nums[i])}\n`;
  }

  console.log(result);
}

{
  /**
   * 17427 방법으로 풀면 시간 초과가 나기 때문에 DP 형식으로 풀어야 함
   */
  const nums = [1, 2, 10];

  let dp = new Array(11).fill(1);
  // d: 값 누적
  let d = new Array(11);
  dp[0] = 0;
  d[0] = 0;

  // i의 배수에 값 추가하기, 배수마다 차례로 값을 더해주는 식이다. 이해 완료!!!!!
  // 그래서 dp에 처음에 1을 넣어주는 것임
  for (let i = 2; i <= 11; i++) {
    for (let j = 1; i * j <= 11; j++) {
      dp[i * j] += i;
    }
  }

  for (let i = 1; i <= 11; i++) {
    d[i] = d[i - 1] + dp[i];
    console.log(i, d[i - 1], dp[i]);
  }

  const N = 5;
  const answer = [];
  nums.forEach((v) => {
    answer.push(d[v]);
  });

  console.log(answer.join('\n'));
}
