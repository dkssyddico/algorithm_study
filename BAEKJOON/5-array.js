{
  // 10818 최소값, 최대값
  let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
  let numbers = input[1].split(' ');

  let max = parseInt(numbers[0]);
  let min = parseInt(numbers[0]);

  for (let i = 1; i <= Number(input[0]); i++) {
    let num = parseInt(numbers[i]);
    if (max < num) {
      max = num;
    }
    if (min > num) {
      min = num;
    }
  }

  console.log(min, max);
}

{
  // 2562번 최댓값
  let input = require('fs')
    .readFileSync('/dev/stdin')
    .toString()
    .split('\n')
    .map((n) => Number(n));

  let max = input[0];

  for (let i = 1; i < input.length; i++) {
    if (input[i] > max) {
      max = input[i];
    }
  }

  let count = input.indexOf(max) + 1;

  console.log(`${max}` + '\n' + `${count}`);
}

{
  // 2577 숫자의 갯수
  // 내 풀이
  let input = require('fs')
    .readFileSync('/dev/stdin')
    .toString()
    .split('\n')
    .map((n) => Number(n));

  let result = String(input[0] * input[1] * input[2]);

  let set = {
    0: 0,
    1: 0,
    2: 0,
    3: 0,
    4: 0,
    5: 0,
    6: 0,
    7: 0,
    8: 0,
    9: 0,
  };

  for (let i = 0; i < result.length; i++) {
    set[result[i]]++;
  }

  for (let j = 0; j < 10; j++) {
    console.log(set[j]);
  }

  // 다른 사람 풀이
  // 배열을 썼다는 점에서 이 사람이 더 나음
  const input = require('fs')
    .readFileSync('/dev/stdin')
    .toString()
    .split('\n')
    .map((value) => +value);
  const stringResult = String(input[0] * input[1] * input[2]);
  const stand = Array.from({ length: 10 }, () => 0);

  for (let i = 0; i < stringResult.length; i++) {
    let num = Number(stringResult[i]);
    stand[num]++;
  }

  for (let i = 0; i < stand.length; i++) {
    console.log(stand[i]);
  }
}

{
  // 3052번 나머지
  // 내 풀이
  const input = require('fs')
    .readFileSync('/dev/stdin')
    .toString()
    .trim()
    .split('\n')
    .map((value) => +value);

  const nums = input.map((i) => i % 42);
  let arr = [];

  for (let i = 0; i < nums.length; i++) {
    if (arr.indexOf(nums[i]) === -1) {
      arr.push(nums[i]);
    }
  }

  console.log(arr.length);
  // 다른 사람 풀이
  let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

  const userNum = [];

  input.forEach((x) => {
    const num = x % 42;

    if (userNum.indexOf(num) === -1) {
      userNum.push(num);
    }
  });

  console.log(userNum.length);
  // 다른 사람 풀이 2 set 이용하는 방법
  const input = require('fs')
    .readFileSync('/dev/stdin')
    .toString()
    .trim()
    .split('\n')
    .map((value) => +value);
  const spare = input.map((value) => value % 42);
  const set = new Set(spare);
  const uniqSet = [...set];

  console.log(uniqSet.length);
}

{
  // 1546번 평균
  let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
  let count = Number(input[0]);
  let scores = input[1].split(' ').map((i) => parseInt(i));

  let max = Math.max(...scores);

  let result = scores.map((s) => (s / max) * 100).reduce((p, c) => p + c, 0) / count;

  console.log(result.toFixed(2));
}

{
  // 8958번 OX퀴즈
  let result = 'OOXXOOXXOO'.split('');
  let sum = 0;
  let score = 0;
  for (let i = 0; i < result.length; i++) {
    if (result[i] === 'O') {
      score++;
      console.log('score', score);
      sum += score;
    } else {
      score = 0;
    }
  }
  console.log(sum);

  // 다른 사람 풀이
  // 문자열이 어디까지 있는지 모르기 때문에 꼭 for문을 돌려줘야 함
  let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

  let num = Number(input[0]);

  for (let i = 1; i <= num; i++) {
    let count = 0;
    let sum = 0;

    for (let j = 0; j < input[i].length; j++) {
      if (input[i][j] === 'O') {
        count++;
      } else {
        count = 0;
      }

      sum += count;
    }

    console.log(sum);
  }
}

{
  // 4344번 평균은 넘겠지
  let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

  let total = Number(input[0]);

  for (let i = 1; i <= total; i++) {
    let cases = input[i].split(' ');
    let count = Number(cases[0]);
    let scores = [];
    for (let j = 1; j < cases.length; j++) {
      scores.push(parseInt(cases[j]));
    }
    let average = scores.reduce((a, b) => a + b, 0) / count;
    let above = scores.filter((s) => s > average).length;
    console.log(`${((above / count) * 100).toFixed(3)}%`);
  }
}
