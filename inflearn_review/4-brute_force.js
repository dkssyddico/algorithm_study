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
