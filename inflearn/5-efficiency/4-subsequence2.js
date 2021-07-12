function solution(targetNum, arr) {
  let answer = 0;
  let count = 0;
  for (let left = 0; left < arr.length; left++) {
    let sum = 0;
    sum += arr[left];
    if (sum <= targetNum) {
      count++;
    }
    for (let right = left + 1; right < arr.length; right++) {
      sum += arr[right];
      if (sum <= targetNum) {
        count++;
      } else break;
    }
  }
  answer = count;
  return answer;
}

{
  let left = 0;
  let arr = [10, 5, 2, 6];
  let count = 0;
  while (left < arr.length) {
    let sum = 0;
    sum += arr[left];
    if (sum <= 100) {
      count++;
    }
    for (let right = left + 1; right < 5; right++) {
      sum += arr[right];
      if (sum <= 100) count++;
      else {
        break;
      }
    }
    left++;
  }
  console.log(count);
}

let arr = [10, 5, 2, 6];

console.log(solution(100, arr));

{
  let a = [1, 3, 1, 2, 3];
  function tSolution(m, arr) {
    let answer = 0,
      sum = 0,
      lt = 0;
    for (let rt = 0; rt < arr.length; rt++) {
      sum += arr[rt];
      while (sum > m) {
        sum -= arr[lt++];
      }
      answer += rt - lt + 1;
    }
    return answer;
  }
  console.log(tSolution(5, a));
}
