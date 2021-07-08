function solution(str) {
  let answer = Number.MIN_SAFE_INTEGER;
  answer = parseInt(str.replace(/[a-z]/gi, ''));
  return answer;
}

let str = 'g0en2T0s8eSoft';

console.log(solution(str));

function tSolution(str) {
  let answer = '';
  for (let x of str) {
    // isNaN이 false일 때만 숫자다
    if (!isNaN(x)) answer += x;
  }
  return parseInt(answer);
}

console.log(tSolution(str));

// parseInt 쓰지 않는 경우
function tSolution2(str) {
  let answer = 0;
  for (let x of str) {
    // answer 자리수 늘려주는 방법
    if (!isNaN(x)) answer = answer * 10 + Number(x);
  }
  return answer;
}

console.log(tSolution2(str));
