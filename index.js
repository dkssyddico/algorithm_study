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
}

{
  // 문제 42
}

{
  // 문제 43
}

{
  // 문제 44 나누면 될 것 같은데
  function solution(num) {}
  solution(18342);
}

{
  // 문제 45
  const now = Date.now();
  // console.log(now);
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
