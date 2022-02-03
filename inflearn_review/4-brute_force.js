{
  /**
   * 자릿수의 합
   * toString을 썼다면 더 간결하게 풀 수 있었을 것.
   * % 10을 이용해서 숫자의 각 자릿수의 합을 구할 수도 있다.
   *  */
  let nums = [128, 460, 603, 40, 521, 137, 123];
  let answer = Number.MIN_SAFE_INTEGER;
  let max = 0;

  for (let i = 0; i < nums.length; i++) {
    let num = nums[i];
    let stringNum = String(num);
    let sum = stringNum.split('').reduce((p, c) => Number(p) + Number(c), 0);
    if (sum > max) {
      answer = num;
      max = sum;
    } else if (sum === max) {
      if (num > max) {
        answer = num;
      }
    }
  }

  console.log(answer);
}
