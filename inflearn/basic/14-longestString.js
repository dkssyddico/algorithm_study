function solution(arr) {
  let answer = 0;
  let max = 0;
  for (let x of arr) {
    let length = x.length;
    if (length > max) max = length;
    answer = max;
  }
  return answer;
}

let arr = ['time', 'beautiful', 'study', 'coding', 'intelligent'];

console.log(solution(arr));

function tSolution(arr) {
  let answer,
    max = Number.MIN_SAFE_INTEGER;
  for (let x of arr) {
    if (x.length > max) {
      max = x.length;
      answer = max;
    }
  }
  return answer;
}

console.log(tSolution(arr));
