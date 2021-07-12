function solution(arr) {
  let answer = [1, 1, 1, 1, 1];
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[j] > arr[i]) {
        answer[i] += 1;
      }
    }
  }

  return answer;
}

let arr = [92, 92, 92, 100, 76];

console.log(solution(arr));

function tSolution(arr) {
  let n = arr.length;
  let answer = Array.from({ length: n }, () => 1);
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (arr[j] > arr[i]) answer[i]++;
    }
  }
  return answer;
}

console.log(tSolution(arr));
