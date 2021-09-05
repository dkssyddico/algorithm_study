{
  //문제 31 시간복잡도 2, 5
}

{
  //문제 32
  let sentence = '안녕하세요. 저는 제주대학교 컴퓨터공학전공 혜림입니다.';
  function findWords(sentence) {
    let answer = sentence.split(' ').length;
    console.log(answer);
  }
  findWords(sentence);
}

{
  // 문제 33 거꾸로 출력하기
  let nums = '1 2 3 4 5';
  function makeNumbersReversed(nums) {
    let answer = nums.split(' ').reverse().join(' ');
    console.log(answer);
  }
  makeNumbersReversed(nums);
}

{
  // 문제 34: sort
  let heights = '176 156 155 165 166 169';
  function isItSorted(heights) {
    let answer = 'YES';
    let arr = heights.split(' ');
    for (let i = 1; i < arr.length; i++) {
      if (parseInt(heights[i - 1]) > parseInt(heights[i])) {
        answer = 'NO';
        break;
      }
    }
    console.log(answer);
  }
  isItSorted(heights);
}

{
  // 문제 35 factory 함수 이용하기
  function one(n) {
    function two(v) {
      return Math.pow(v, n);
    }
    return two;
  }

  const a = one(2);
  const b = one(3);
  const c = one(4);

  console.log(a(10));
  console.log(b(10));
  console.log(c(10));
}

{
  // 문제 36 구구단 출력하기

  function makeMultiples(n) {
    let answer = '';
    for (let i = 1; i < 10; i++) {
      answer += n * i + ' ';
    }
    console.log(answer);
  }
  makeMultiples(2);
}

{
  // 문제 37 반장 선거
  let names = '원범 원범 혜원 혜원 혜원 혜원 유진 유진';
  function decidePresident(names) {
    let arr = names.split(' ');
    let nameSet = new Map();
    for (let i = 0; i < arr.length; i++) {
      if (nameSet.has(arr[i])) {
        nameSet.set(arr[i], nameSet.get(arr[i]) + 1);
      } else {
        nameSet.set(arr[i], 1);
      }
    }
    let max = 0;
    let president = '';
    for (let [key, value] of nameSet) {
      if (value > max) {
        max = value;
        president = key;
      }
    }
    console.log(`${president}(이)가 총 ${max}표로 반장이 되었습니다.`);
  }
  decidePresident(names);

  const array = '원범 원범 혜원 혜원 혜원 혜원 유진 유진'.split(' ');
  let result = {};
  let winner = '';

  for (let index in array) {
    let val = array[index];
    result[val] = result[val] === undefined ? 1 : (result[val] = result[val] + 1);
  }

  winner = Object.keys(result).reduce(function (a, b) {
    return result[a] > result[b] ? a : b;
  });

  console.log(`${winner}(이)가 총 ${result[winner]}표로 반장이 되었습니다.`);
}

{
  // 문제 38 호준이의 아르바이트
  let scores = '97 86 75 66 55 97 85 97 97 95';
  function candyNums(scores) {
    let arr = scores.split(' ').sort((a, b) => parseInt(b) - parseInt(a));
    let scoresMap = new Map();
    for (let i = 0; i < arr.length; i++) {
      if (scoresMap.has(parseInt(arr[i]))) {
        scoresMap.set(parseInt(arr[i]), scoresMap.get(parseInt(arr[i])) + 1);
      } else scoresMap.set(parseInt(arr[i]), 1);
    }
    let candy = 0;
    let count = 0;
    for (let value of scoresMap.values()) {
      candy += value;
      count++;
      if (count === 3) {
        break;
      }
    }
    console.log(candy);
  }
  candyNums(scores);
}

{
  const scores = '97 86 75 66 55 97 85 97 97 95'.split(' ').map(function (n) {
    return parseInt(n, 10);
  });

  scores.sort((a, b) => {
    return a - b;
  });

  let count = 0;
  let arr = [];

  while (arr.length < 3) {
    let n = scores.pop();
    if (!arr.includes(n)) {
      arr.push(n);
    }
    count += 1;
  }

  console.log(count);
}

{
  // 문제 39 오타 수정하기
  let word = 'querty';
  function findTypo(word) {
    let revision = '';
    for (let x of word) {
      if (x === 'q') {
        x = 'e';
        revision += x;
      } else {
        revision += x;
      }
    }
    console.log(revision);
  }
  findTypo(word);
}

{
  // 문제 40 놀이동산에 가자
  function decideWeight(max, nums, arr) {
    let count = 0;
    let weights = 0;
    for (let i = 0; i < arr.length; i++) {
      weights += arr[i];
      if (weights < max) {
        count++;
      } else break;
    }
    console.log(count);
  }
  decideWeight(50, 5, [20, 20, 20, 20, 20]);
}
