function solution(a, b) {
  let answer = '';
  for (let x = 0; x < a.length; x++) {
    if (a[x] === b[x]) answer += 'D ';
    else if (a[x] === 1 && b[x] === 3) answer += 'A ';
    else if (a[x] === 2 && b[x] === 1) answer += 'A ';
    else if (a[x] === 3 && b[x] === 2) answer += 'A ';
    else answer += 'B ';
  }
  return answer;
}

let a = [2, 3, 3, 1, 3];
let b = [1, 1, 2, 2, 3];

console.log(solution(a, b));
