function solution(str) {
  let answer = [];
  let strArray = str.split('');
  console.log(strArray);
  for (let x of str) {
    if (answer.indexOf(x) === -1) answer.push(x);
  }
  answer = answer.join('');
  return answer;
}

let str = 'ksekkset';

console.log(solution(str));

function tSolution(str) {
  let answer = '';
  for (let i = 0; i < str.length; i++) {
    // console.log(str[i], i, str.indexOf(str[i]));
    if (str.indexOf(str[i]) === i) answer += str[i];
  }
  return answer;
}

console.log(tSolution(str));

// 특정 문자가 몇 번 나왔는지 찾기
function tSolution2(str) {
  let answer = 0;
  let pos = str.indexOf('k');
  console.log(pos);
  while (pos !== -1) {
    answer += 1;
    pos = str.indexOf('k', pos + 1);
  }
  return answer;
}

console.log(tSolution2(str));
