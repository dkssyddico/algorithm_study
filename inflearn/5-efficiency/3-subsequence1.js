function solution(len, targetNum, arr) {
  let answer = 0;
  // 이게 투포인터
  let left = 0,
    sum = 0;
  for (let right = 0; right < len; right++) {
    sum += arr[right];
    if (sum === targetNum) answer++;
    while (sum >= targetNum) {
      // 빼고 증가
      sum -= arr[left++];
      if (sum === targetNum) answer++;
    }
  }
  console.log(`answer: ${answer}`);
  return answer;
}

let arr = [1, 2, 1, 3, 1, 1, 1, 2];

console.log(solution(8, 6, arr));
