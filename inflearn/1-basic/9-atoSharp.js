function solution(str) {
  let answer;
  answer = str
    .split('')
    .map((item) => {
      if (item === 'A') {
        item = '#';
      }
      return item;
    })
    .join('');

  return answer;
}

let str = 'BANANA';

console.log(solution(str));

function TSolution1(str) {
  let answer = '';
  for (let x of str) {
    if (x === 'A') answer += '#';
    else answer += x;
  }
  return answer;
}

console.log(TSolution1(str));

function TSolution2(str) {
  let answer = str;
  answer = answer.replace(/A/g, '#');
  return answer;
}
console.log(TSolution2(str));
