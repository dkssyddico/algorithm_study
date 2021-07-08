function solution(arr1, arr2) {
  let answer = [];
  answer = [...arr1, ...arr2].sort((a, b) => a - b);
  return answer;
}

let arr1 = [1, 3, 5];

let arr2 = [2, 3, 6, 7, 9];

console.log(solution(arr1, arr2));

// 투포인터 알고리즘 사용

function tSolution(arr1, arr2) {
  let answer = [];
  let n = arr1.length,
    m = arr2.length;
  let p1 = 0,
    p2 = 0;
  while (p1 < n && p2 < m) {
    console.log(p1, p2);
    if (arr1[p1] <= arr2[p2]) {
      // arr1[p1이 들어가고 p1 숫자가 하나씩 등장]
      answer.push(arr1[p1++]);
    } else answer.push(arr2[p2++]);
  }
  while (p1 < n) answer.push(arr1[p1++]);
  while (p2 < m) answer.push(arr2[p2++]);
  return answer;
}

console.log(tSolution(arr1, arr2));
