function solution(str) {
  let answer = [];
  for (let x of str) {
    if (answer.indexOf(x) === -1) answer.push(x);
  }
  return answer;
}

let str = ['good', 'time', 'good', 'time', 'student'];

console.log(solution(str));

// filter 쓰기
function tSolution(str) {
  let answer;
  answer = str.filter(function (v, i) {
    // if (str.indexOf(v) === i) return true;
    // 밑에 두개가 같은 것만 담는 것
    console.log(str.indexOf(v), i);
    return str.indexOf(v) === i;
  });
  return answer;
}

console.log(tSolution(str));
