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
  // 문제 56 객체의 함수 응용
  let nationWidth = {
    korea: 220877,
    Russia: 17098242,
    China: 9596961,
    France: 543965,
    Japan: 377915,
    England: 242900,
  };
  function solution(nationWidth) {}
  // console.log(solution(nationWidth));
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
