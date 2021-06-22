function solution(str, word) {
  let answer = 0;
  for (let x of str) {
    if (x === word) {
      answer++;
    }
  }
  return answer;
}

function TSolution(str, word) {
  let answer = str.split(word);
  return answer - 1;
}

let str = 'COMPUTERPROGRAMMING';
console.log(solution(str, 'R'));
