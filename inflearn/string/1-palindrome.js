function solution(str) {
  let answer = '';
  let x = str.toLowerCase();
  let reversedX = x.split('').reverse().join('');
  if (x === reversedX) answer = 'yes';
  else answer = 'no';
  return answer;
}

let str = 'gooooG';

console.log(solution(str));

function tSolution(str) {
  let answer = 'yes';
  str = str.toLowerCase();
  let len = str.length;
  for (let i = 0; i < Math.floor(len / 2); i++) {
    // 비교할 숫자 구하는 방법
    if (str[i] !== str[len - i - 1]) return 'no';
  }
  return answer;
}

console.log(tSolution(str));

function tSolution2(str) {
  let answer = 'YES';
  str = str.toLowerCase();
  if (str.split('').reverse().join('') !== str) return 'No';
  return answer;
}

console.log(tSolution2(str));
