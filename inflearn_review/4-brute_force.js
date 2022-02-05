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

{
  /**
   * 뒤집은 소수
   */
  let nums = [32, 55, 62, 20, 250, 370, 200, 30, 100];
  let answer = [];

  for (let i = 0; i < nums.length; i++) {
    let num = nums[i];
    if (isPrime(reversedNum(num))) {
      answer.push(reversedNum(num));
    }
  }

  function reversedNum(num) {
    let number = 0;
    while (num) {
      let left = num % 10;
      number = number * 10 + left;
      num = parseInt(num / 10);
    }
    return number;
  }

  function isPrime(num) {
    if (num === 1) {
      return false;
    }
    for (let i = 2; i < Math.floor(Math.sqrt(num)); i++) {
      if (num % i === 0) {
        return false;
      }
    }
    return true;
  }

  console.log(answer);
}

{
  /**
   * 멘토링
   * 멘토 - 멘티가 될 수 있는 모든 경우를 다 만들어본다.
   * 그리고 모든 시험에서 멘토와 멘티가 등수가 어떻게 되는지 판별한다.
   * 모든 시험에서 멘토가 멘티의 등수보다 적으면(이래야 시험을 더 잘본거니까) 답에 1을 올려줄 수 있다.
   */
  let test = [
    [3, 4, 1, 2],
    [4, 3, 2, 1],
    [3, 1, 4, 2],
  ];

  let testNum = test.length;
  let students = test[0].length;
  let answer = [];
  // 멘토 멘티가 될 수 있는 경우의 수 구하기

  for (let i = 1; i <= students; i++) {
    for (let j = 1; j <= students; j++) {
      let testCount = 0;
      for (let x = 0; x < testNum; x++) {
        let rankOne = 0;
        let rankTwo = 0;
        for (let y = 0; y < students; y++) {
          if (test[x][y] === i) {
            rankOne = y;
          }
          if (test[x][y] === j) {
            rankTwo = y;
          }
        }
        if (rankOne < rankTwo) testCount += 1;
      }
      if (testCount === testNum) {
        answer.push([i, j]);
      }
    }
  }

  console.log(answer);
}
