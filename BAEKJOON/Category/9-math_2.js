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

{
  // 4948번 베르트랑 공준
  // 자연수 n이 주어졌을 때, n보다 크고, 2n보다 작거나 같은 소수의 개수를 구하는 프로그램을 작성하시오.
  let tests = require('fs').readFileSync('/dev/stdin').toString().split('\n').map(Number);

  for (let i = 0; i < tests.length; i++) {
    let result = primeNumLength(tests[i]);
    if (result !== 0) {
      console.log(result);
    }
  }

  function primeNumLength(num) {
    let arr = [];
    for (let i = num + 1; i <= num * 2; i++) {
      let result = isPrime(i);
      if (result) {
        arr.push(i);
      }
    }
    return arr.length;
  }

  function isPrime(num) {
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
}

{
  // 9020번 골드바흐의 추측
  // 내 풀이는 시간이 너무 오래걸렸다 ㅠ
  let nums = require('fs').readFileSync('/dev/stdin').toString().split('\n').map(Number);
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > 2 && nums[i] % 2 === 0) {
      let answer = makesEven(nums[i], primeArray(nums[i]));
      console.log(answer.splice(',').join(' '));
    }
  }

  function makesEven(targetNum, arr) {
    let answer = [];
    let gap = Number.MAX_SAFE_INTEGER;
    for (let i = 0; i < arr.length; i++) {
      let x = arr[i];
      if (x + x === targetNum) {
        answer = [x, x];
        break;
      }
      for (let j = arr.length - 1; j > 0; j--) {
        let y = arr[j];
        if (x + y === targetNum) {
          if (gap > Math.abs(x - y)) {
            gap = Math.abs(x - y);
            answer = [x, y];
          }
        }
      }
    }
    return answer;
  }

  makesEven(10, [2, 3, 5, 7]);

  function primeArray(num) {
    let arr = [];
    for (let i = 2; i <= num; i++) {
      let result = isPrime(i);
      if (result) {
        arr.push(i);
      }
    }
    return arr;
  }

  function isPrime(num) {
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
  // 다른 사람 풀이
  /**
   * 아예 조건을 가지고 모든 소수 배열을 만들고, 타겟 넘버를 만들 수 있는 두 소수를 만든 다음 가장 차이가 적은 소수의 배열을 가져옴
   */
  {
    const fs = require('fs');
    const input = fs
      .readFileSync('/dev/stdin')
      .toString()
      .split('\n')
      .map((item) => +item);

    var N = 2;
    var M = 10001;
    var isPrimeNumber = Array(M + 1).fill(true);
    isPrimeNumber[0] = isPrimeNumber[1] = false;
    const results = [];

    for (let i = 2; i <= Math.ceil(Math.sqrt(M)); i++) {
      if (isPrimeNumber[i]) {
        let m = 2;
        while (i * m <= M) {
          isPrimeNumber[i * m] = false;
          m++;
        }
      }
    }

    for (let i = N; i <= M; i++) {
      if (isPrimeNumber[i]) {
        // results가 소수들 넣어둔 배열
        results.push(i);
      }
    }

    for (let i = 1; i <= input[0]; i++) {
      // 골드바흐 파티션 구하기
      const num = input[i];
      // 가능한 골드바흐 파티션을 저장할 배열
      let answer = [];
      // 주어진 수의 절반보다 작은 소수만 탐색하면 됨
      for (let j = 0; results[j] < num / 2 + 1; j++) {
        // (주어진 수 - 소수)가 소수인지
        const index = results.indexOf(num - results[j]);
        // 소수라면
        if (index !== -1) {
          // 골드바흐 파티션이므로 배열에 저장
          answer.push([results[j], results[index]]);
        }
      }
      // 골드바흐 파티션이 존재했다면
      if (answer.length !== 0) {
        // 가장 마지막 파티션을 가져옴 (두 소수의 차이가 가장 작음)
        const a = answer.pop();
        // 출력
        console.log(a[0], a[1]);
      }
    }
  }
}

{
  // 1085번 직사각형 탈출
  // 내 풀이. w, h뿐만 아니라 (0, 0)도 고려해야함.
  {
    let positions = require('fs').readFileSync('/dev/stdin').toString().split(' ').map(Number);
    let x = positions[0];
    let y = positions[1];
    let w = positions[2];
    let h = positions[3];

    console.log(Math.min(Math.abs(0 - x), Math.abs(0 - y), w - x, h - y));
  }
  // 다른 사람 풀이 보니까 굳이 0이랑 뺄 필요가 없음. 헉!!
  {
    const fs = require('fs');
    const input = fs
      .readFileSync('/dev/stdin')
      .toString()
      .split(' ')
      .map((item) => +item);
    const arr = [];
    arr.push(input[2] - input[0]);
    arr.push(input[0]);
    arr.push(input[3] - input[1]);
    arr.push(input[1]);

    console.log(Math.min(...arr));
  }
}

{
  // 3009번 네 번째 점
  // 짝을 맞추면 됨. 없는 숫자가 나머지 숫자임
  let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
  let pos = input.map((i) => i.split(' ').map(Number));

  let x = 0;
  let y = 0;
  // x좌표 구하기
  if (pos[0][0] !== pos[1][0]) {
    if (pos[0][0] !== pos[2][0]) {
      x = pos[0][0];
    } else {
      x = pos[1][0];
    }
  } else {
    x = pos[2][0];
  }

  // 첫번째 포지션 y랑 두번째 포지션 y랑 같지 않으면
  if (pos[0][1] !== pos[1][1]) {
    // 첫번째 y랑 세번째 y랑도 안같으면
    if (pos[0][1] !== pos[2][1]) {
      y = pos[0][1];
    } else {
      y = pos[1][1];
    }
  } else {
    y = pos[2][1];
  }

  console.log(x, y);
}

{
  // 4153번 피타고라스의 정리
  // 모든 경우를 다 해봐야한다
  let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
  let heights = input.map((i) => i.split(' ').map(Number));

  for (let i = 0; i < heights.length; i++) {
    let a = heights[i][0];
    let b = heights[i][1];
    let c = heights[i][2];

    if (a > 0 && b > 0 && c > 0) {
      if (a * a + b * b === c * c || b * b + c * c === a * a || a * a + c * c === b * b) {
        console.log('right');
      } else {
        console.log('wrong');
      }
    }
  }
}
