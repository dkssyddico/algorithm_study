{
  // 문제 41 소수 판별
  function solution(num) {
    let answer = 'YES';
    let halfNum = parseInt(Math.sqrt(num));
    if (num === 1) answer = 'NO';
    for (let i = 2; i <= halfNum; i++) {
      if (num % i === 0) answer = 'NO';
    }
    console.log(answer);
  }
  solution(17);

  // 답안지

  function check_prime(num) {
    for (let i = 2; i < num; i++) {
      const result = num % i;
      if (result === 0) {
        console.log('NO');
        return false;
      }
    }
    if (num === 1) {
      console.log('NO');
      return;
    }
    console.log('YES');
  }
  let num = 17;
  check_prime(num);
}

{
  // 문제 42 2020년

  function solution(a, b) {
    const day = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];

    const x = new Date(`2020-${a}-${b}`);
    return day[x.getDay()];
  }
  let month = 5;
  let date = 24;
  console.log(solution(month, date));
}

{
  // 문제 43
  function solution(num) {
    let answer = '';
    function DFS(num) {
      if (num === 1) {
        answer += 1;
      } else {
        DFS(parseInt(num / 2));
        answer += num % 2;
      }
    }
    DFS(num);
    console.log(answer);
  }
  solution(13);
}

{
  // 문제 44 나누면 될 것 같은데
  function solution(num) {
    let string = String(num);
    let answer = 0;
    for (let x of string) {
      answer += parseInt(x);
    }
    console.log(`44번 문제 ${answer}`);
  }
  solution(18342);

  // 답안
  let n = 2389734;
  let sum = 0;

  while (n !== 0) {
    sum += n % 10;
    n = Math.floor(n / 10);
  }

  console.log(sum);
}

{
  // 문제 45
  const d = new Date();
  let year = d.getTime();
  year = Math.floor(year / (3600 * 24 * 365 * 1000)) + 1970;

  console.log(year);
}

{
  // 문제 46
  let nums = '1234567891011121314151617181920';
  function makeSum(nums) {
    let answer = nums
      .split('')
      .map((n) => parseInt(n))
      .reduce((a, b) => a + b);
    console.log(answer);
  }
  makeSum(nums);

  // 답안
  let arr = [];
  let sum = 0;

  for (let i = 0; i < 20; i++) {
    arr[i] = i + 1;
  }

  arr.forEach((n) => {
    while (n !== 0) {
      sum += n % 10;
      n = Math.floor(n / 10);
    }
  });

  console.log(sum);
}

{
  // 문제 47

  const people = {
    이호준: '01050442903',
    이호상: '01051442904',
    이준호: '01050342904',
    이호준: '01050442903',
    이준: '01050412904',
    이호: '01050443904',
    이호준: '01050442903',
  };
  console.log(Object.keys(people).length);

  // 답안
  let result = new Set();
  for (let key in people) {
    console.log(key);
    result.add(people[key]);
  }
  console.log(result.size); //size 는 set 객체 내 값의 개수를 반환합니다.
}

{
  // 문제 48
  let string = 'AAABBBcccddd';
  function solution(string) {
    let answer = '';
    for (let x of string) {
      if (x === x.toUpperCase()) {
        answer += x.toLowerCase();
      } else answer += x.toUpperCase();
    }
    console.log(answer);
  }
  solution(string);
}

{
  // 문제 49
  let nums = '10 9 8 7 6 5 4 3 2 1';
  function solution(nums) {
    let arr = nums.split(' ').map((a) => parseInt(a));
    let max = 0;
    for (let i = 0; i < arr.length; i++) {
      if (max < arr[i]) max = arr[i];
    }
    console.log(max);
  }
  solution(nums);
}

{
  // 문제 50
  function bubble(arr) {
    let result = arr.slice();

    for (let i = 0; i < result.length - 1; i++) {
      for (let j = 0; j < result.length - 1; j++) {
        if (result[j] > result[j + 1]) {
          [result[j], result[j + 1]] = [result[j + 1], result[j]];
        }
      }
    }

    return result;
  }

  const items = '4 2 3 8 5'.split(' ').map((n) => {
    return parseInt(n, 10);
  });

  console.log(bubble(items));
}
