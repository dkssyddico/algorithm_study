{
  // 문제 61 문자열 압축하기
  let str = 'aaabbbbcdddd';
  function solution(str) {
    let newMap = new Map();
    let answer = '';
    for (let x of str) {
      if (newMap.has(x)) {
        newMap.set(x, newMap.get(x) + 1);
      } else {
        newMap.set(x, 1);
      }
    }
    for (let [key, value] of newMap) {
      answer += key + value;
    }
    console.log(answer);
  }
  solution(str);

  const user_s = 'aaabbbbcdddd';
  let result_s = '';
  let store_s = user_s[0];

  let count = 0;

  for (let i of user_s) {
    if (i === store_s) {
      count += 1;
    } else {
      result_s += store_s + String(count);
      store_s = i;
      count = 1;
    }
  }

  result_s += store_s + String(count);
  console.log(result_s);
}

{
  // 문제 62 20190923 출력하기

  //abcdefgh
  //20190923
  const user_s = 'aacdddddddddfffffffffgghhh';
  let result_s = '';

  console.log(
    `${user_s.match(/a/g).length}${Number(user_s.match(/b/g))}${user_s.match(/c/g).length}${
      user_s.match(/d/g).length
    }${Number(user_s.match(/e/g))}${user_s.match(/f/g).length}${user_s.match(/g/g).length}${
      user_s.match(/h/g).length
    }`
  );
}

{
  // 문제 63 친해지고 싶어
  let str = '복잡한 세상 편하게 살자';
  function solution(str) {
    let arr = str.split(' ');
    let answer = '';
    for (let x of arr) {
      answer += x[0];
    }
    console.log(answer);
  }
  solution(str);
}

{
  // 문제 64: 이상한 엘레베이터
  function solution(target, arr) {
    let weight = arr.sort((a, b) => b - a);
    let count = 0;
    let left = target;
    for (let x of weight) {
      while (left >= x) {
        count++;
        left = left - x;
      }
    }
    if (left !== 0) {
      count = -1;
    }
    console.log(count);
  }
  solution(24, [3, 7]);

  // 답안
  let N = parseInt(27, 10);
  let result = 0;

  while (true) {
    if (N % 7 === 0) {
      result += parseInt(N / 7, 10);
      console.log(result);
      break;
    }
    N -= 3;
    result += 1;
    if (N < 0) {
      console.log(-1);
      break;
    }
  }
}

{
  // 문제 65
  let a = [1, 2, 3, 4];
  let b = ['a', 'b', 'c', 'd'];
  function solution(a, b) {
    let first = a;
    let second = b;
    let answer = [];
    for (let i = 0; i < b.length; i++) {
      let item = [first[i], second[i]];
      answer.push(item);
    }
    console.log(answer);
  }
  solution(a, b);

  /**
   * // 방법 1 - forEach 사용
  const a = [1, 2, 3, 4];
  const b = ['a', 'b', 'c', 'd'];
  let c = [];

  a.forEach(function (e, i) {
    if (i % 2 === 0) {
      c.push([e, b[i]]);
    } else {
      c.push([b[i], e]);
    }
  });

  console.log(c);

  // 방법 2 - map 사용
  const a = [1, 2, 3, 4];
  const b = ['a', 'b', 'c', 'd'];

  let c = a.map(function (e, i) {
    if (i % 2 === 0) {
      return [e, b[i]];
    } else {
      return [b[i], e];
    }
  });

  console.log(c);
   */
}
