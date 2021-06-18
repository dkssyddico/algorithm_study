function solution(str) {
  let answer = 0;
  for (let x of str) {
    if (x.match(/[A-Z]/)) {
      answer += 1;
    }
  }
  return answer;
}

let str = 'DKSYDDICO';

console.log(solution(str));

function tSolution(str) {
  let answer = 0;
  for (let x of str) {
    // if (x === x.toUpperCase()) answer += 1;
    // ASCII NUM 대문자는 65 ~ 90 소문자 97 ~ 122
    let num = x.charCodeAt();
    if (num >= 65 && num <= 90) answer += 1;
  }
  return answer;
}

console.log(tSolution(str));
