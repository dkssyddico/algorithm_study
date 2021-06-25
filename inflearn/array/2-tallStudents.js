function solution(arr) {
  let answer = [];
  let max = arr[0];
  answer.push(max);
  for (let x of arr) {
    if (x > max) {
      max = x;
      answer.push(x);
    }
  }
  return answer.length;
}

let arr = [130, 135, 148, 140, 145, 150, 150, 153];

console.log(solution(arr));

function tSolution(arr) {
  let answer = 1,
    max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      answer++;
      max = arr[i];
    }
  }
  return answer;
}

console.log(tSolution(arr));
