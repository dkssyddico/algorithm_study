function solution(str) {
  let answer;
  answer = str
    .split('')
    .map((item) => item.toUpperCase())
    .join('');
  return answer;
}

let str = 'itsTimetoSTUDY';

console.log(solution(str));

function tSolution(str) {
  let answer = '';
  for (let x of str) {
    // if (x === x.toLowerCase()) answer += x.toUpperCase();
    // else answer += x;
    let num = x.charCodeAt();
    // if (num >= 97 && num <= 122) answer += x.toUpperCase();
    if (num >= 97 && num <= 122) answer += String.fromCharCode(num - 32);
    else answer += x;
  }
  return answer;
}

console.log(tSolution(str));
