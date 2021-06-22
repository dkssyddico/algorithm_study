function solution(str) {
  let answer = '';
  let length = str.length;
  if (length % 2 === 1) {
    answer = str.substr(Math.floor(length / 2), 1);
  } else {
    answer = str.substr(length / 2 - 1, 2);
  }
  return answer;
}

let str = 'length';

console.log(solution(str));

function tSolution(str) {
  let answer;
  let mid = Math.floor(str.length / 2);
  if (str.length % 2 == 1) answer = str.substring(mid, mid + 1);
  else answer = str.substring(mid - 1, mid + 1);
  return answer;
}

console.log(tSolution(str));
