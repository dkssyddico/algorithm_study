function solution(arr) {
  let answer = 0,
    count = 0;

  for (let x of arr) {
    if (x === 1) {
      count += 1;
      answer += count;
    } else {
      count = 0;
    }
  }
  return answer;
}

let arr = [1, 0, 1, 1, 1, 0, 0, 1, 1, 0];

console.log(solution(arr));
