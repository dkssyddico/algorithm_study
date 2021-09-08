{
  // 문제 51: 병합 정렬
  function mergeSort(arr) {
    if (arr.length <= 1) {
      return arr;
    }

    const mid = Math.floor(arr.length / 2);
    const left = arr.slice(0, mid);
    const right = arr.slice(mid);

    return merge(mergeSort(left), mergeSort(right));
  }

  function merge(left, right) {
    let result = [];

    while (left.length && right.length) {
      if (right[0] > left[0]) {
        result.push(left.shift());
      } else {
        result.push(right.shift());
      }
    }
    while (left.length) {
      result.push(left.shift());
    }
    while (right.length) {
      result.push(right.shift());
    }

    return result;
  }

  const array = '2 4 3 1 5'.split(' ').map((n) => parseInt(n, 10));

  // console.log(mergeSort(array));
}

{
  // 문제 52: 퀵 정렬
  function quickSort(arr) {
    if (arr.length <= 1) {
      return arr;
    }

    const pivot = arr[0];
    const left = [];
    const right = [];

    for (let i = 1; i < arr.length; i++) {
      if (arr[i] < pivot) {
        left.push(arr[i]);
      } else {
        right.push(arr[i]);
      }
    }

    return quickSort(left).concat(pivot, quickSort(right));
  }

  const array = '3 9 8 2 5 4 6'.split(' ').map((n) => parseInt(n, 10));

  // console.log(quickSort(array));
}

{
  // 문제 53 괄호 문자열
  function solution(string) {
    let answer = 'YES';
    let stack = [];
    for (let x of string) {
      if (x === '(') {
        stack.push('(');
      } else {
        stack.pop();
      }
    }
    if (stack.length % 2 !== 0) {
      answer = 'NO';
    }
    // console.log(answer);
  }
  solution('((())()');
}

{
  // 문제 54 연속되는 수
  function solution(input) {
    let answer = 'YES';
    let arr = input.split(' ').map((item) => parseInt(item));
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] - arr[i - 1] !== 1) {
        answer = 'NO';
        break;
      }
    }
    console.log(answer);
  }
  // solution('1 2 4 3 5');
}

{
  // 문제 55 하노이의 탑
  const route = [];

  function hanoi(num, start, end, temp) {
    //원판이 한 개일 때에는 바로 옮기면 됩니다.
    if (num === 1) {
      route.push([start, end]);
      return NaN;
    }

    //원반이 n-1개를 경유기둥으로 옮기고
    hanoi(num - 1, start, temp, end);
    //가장 큰 원반은 목표기둥으로
    route.push([start, end]);
    //경유기둥과 시작기둥을 바꿉니다.
    hanoi(num - 1, temp, end, start);
  }

  hanoi(3, 'A', 'B', 'C');
  // console.log(route);
  // console.log(route.length);
}

{
  // 문제 56 객체의 함수 응용
  let nationWidth = {
    korea: 220877,
    Russia: 17098242,
    China: 9596961,
    France: 543965,
    Japan: 377915,
    England: 242900,
  };

  const w = nationWidth['korea'];

  delete nationWidth['korea'];

  const entry = Object.entries(nationWidth);
  const values = Object.values(nationWidth);

  //gap에 최댓값 저장
  let gap = Math.max.apply(null, values);
  let item = [];

  for (let i in entry) {
    if (gap > Math.abs(entry[i][1] - w)) {
      gap = Math.abs(entry[i][1] - w);
      item = entry[i];
    }
  }

  console.log(item[0], item[1] - w);
}

{
  // 문제 57 1의 갯수
  function solution(num) {
    let count = 0;
    let string = '';
    for (let i = 1; i <= num; i++) {
      string += String(i);
    }
    for (let x of string) {
      if (x === '1') count++;
    }
    console.log(count);
  }
  // solution(1000);
}

{
  // 문제 58 콤마찍기
  function solution(num) {
    console.log(num.toLocaleString());
  }
  // solution(12345678);
}

{
  // 문제 59 빈칸채우기
  function solution(word) {
    let arr = [];
    let wordLength = word.length;
    for (let i = 1; i < 50; i++) {
      arr.push('=');
      if (i === Math.floor(25 - wordLength / 2)) {
        for (let x of word) {
          arr.push(x);
        }
      }
      if (arr.length > 49) {
        break;
      }
    }
    console.log(arr);
  }
  // solution('hi');

  const str = 'hello';

  const n = 25 + parseInt(str.length / 2, 10);

  //왼쪽부터 채우기
  const a = str.padStart(n, '=');

  //오른쪽까지 채워서 출력
  console.log(a.padEnd(50, '='));

  //padStart(길이, 채울 문자열) : 주어진 길이만큼 원래 문자열의 왼쪽부터 주어진 문자열로 채움
  //padEnd(길이, 채울 문자열) : 주어진 길이만큼 원래 문자열의 오른쪽부터 주어진 문자열로 채움
}

{
  //문제 60 번호 매기기
  let students = [
    '강은지',
    '김유정',
    '박현서',
    '최성훈',
    '홍유진',
    '박지호',
    '권윤일',
    '김채리',
    '한지호',
    '김진이',
    '김민호',
    '강채연',
  ];
  function solution(students) {
    students.sort().forEach((student, index) => {
      console.log(`번호: ${index}, 이름: ${student}`);
    });
  }
  // solution(students);
}
