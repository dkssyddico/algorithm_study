let str = 'teachermode';

function solution(str, a) {
  let answer = [];
  let count = 0;
  let left = [],
    right = [];

  for (let i = 0; i < str.length; i++) {
    if (str[i] !== a) {
      count += 1;
      left.push(count);
    } else {
      count = 0;
      left.push(count);
    }
  }

  for (let i = str.length; i >= 0; i--) {
    if (str[i] !== a) {
      count += 1;
      right.unshift(count);
    } else {
      count = 0;
      right.unshift(count);
    }
  }

  for (let i = 0; i < str.length; i++) {
    if (left[i] > right[i]) {
      answer.push(right[i]);
    } else if (left[i] < right[i]) {
      answer.push(left[i]);
    } else {
      answer.push(left[i]);
    }
  }

  return answer;
}

console.log(solution(str, 'e'));

function tSolution(str, t) {
  let answer = [],
    p = 1000;

  // 왼쪽 e에서의 거리
  for (let x of str) {
    if (x === t) {
      p = 0;
      answer.push(p);
    } else {
      p += 1;
      answer.push(p);
    }
  }

  // 오른쪽 e에서의 거리
  for (let i = str.length - 1; i >= 0; i--) {
    if (str[i] === t) p = 0;
    else {
      p += 1;
      answer[i] = Math.min(answer[i], p);
    }
  }

  return answer;
}

console.log(tSolution(str, 'e'));
