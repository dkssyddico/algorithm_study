{
  // 1978번 소수 찾기
  let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
  let limit = Number(input[0]);
  let nums = input[1].split(' ').map(Number);

  let count = 0;

  for (let i = 0; i < limit; i++) {
    let num = nums[i];
    let result = isPrimeNumber(num);
    if (result) count++;
  }

  function isPrimeNumber(num) {
    if (num === 1) {
      return false;
    }
    for (let i = 2; i <= parseInt(Math.sqrt(num)); i++) {
      if (num % i === 0) {
        return false;
      }
    }
    return true;
  }

  console.log(count);
}

{
  // 2581번 소수
  let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
  let minNum = Number(input[0]);
  let maxNum = Number(input[1]);

  let arr = [];

  for (let i = minNum; i <= maxNum; i++) {
    let result = isPrimeNumber(i);
    if (result) {
      arr.push(i);
    }
  }

  function isPrimeNumber(num) {
    if (num === 1) {
      return false;
    }
    for (let i = 2; i <= parseInt(Math.sqrt(num)); i++) {
      if (num % i === 0) {
        return false;
      }
    }
    return true;
  }

  if (arr.length === 0) {
    console.log(-1);
  } else {
    console.log(arr.reduce((a, b) => a + b, 0));
    console.log(Math.min(...arr));
  }
}

{
  // 내 풀이
  let num = Number(require('fs').readFileSync('/dev/stdin').toString());

  while (num !== 1) {
    num = divide(num);
  }

  function divide(num) {
    for (let i = 2; i <= num; i++) {
      if (num % i === 0) {
        console.log(i);
        return num / i;
      }
    }
  }
  // 다른 사람 풀이
  {
    let num = 72;
    let tmp = num;

    for (let i = 2; i < parseInt(Math.sqrt(num)); i++) {
      while (tmp % i === 0) {
        tmp = tmp / i;
        console.log(i);
      }
    }
  }
}

{
  // let input = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ');
  let minNum = 3;
  let maxNum = 17;
  let ch = Array.from({ length: maxNum + 1 }, () => 0);
  ch[0] = 1;
  ch[1] = 1;

  for (let i = 0; i <= parseInt(Math.sqrt(maxNum)); i++) {
    if (ch[i] === 0) {
      for (let j = i * i; j <= maxNum; j += i) {
        ch[j] = 1;
      }
    }
  }

  for (let k = minNum; k <= maxNum; k++) {
    if (ch[k] === 0) {
      console.log(k);
    }
  }
}
