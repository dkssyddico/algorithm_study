// 각 행의 합, 열의 합, 대각선의 합 중 가장 큰 수 출력하기

function solution(arr) {
  let answer = Number.MIN_SAFE_INTEGER;
  let n = arr.length;
  let sum1 = 0,
    sum2 = 0;
  // 이중 for 문 : i가 0에서 시작할 때 j는 1 ~ 4 까지 돌고, 다시 i은 1...
  for (let i = 0; i < n; i++) {
    sum1 = sum2 = 0;
    for (let j = 0; j < n; j++) {
      console.log(`i: ${i}, j: ${j}`); // i가 고정 j 변동
      sum1 += arr[i][j]; // 행의 합
      sum2 += arr[j][i]; // 열의 합
    }
    console.log(`sum1: ${sum1}`);
    console.log(`sum2: ${sum2}`);
    answer = Math.max(answer, sum1, sum2);
    console.log(answer);
  }
  sum1 = sum2 = 0;
  // 대각선의 합 구하기
  for (let i = 0; i < n; i++) {
    sum1 += arr[i][i];
    sum2 += arr[i][n - i - 1]; // i: 0 4 / 1 3 / 2 2 / 3 1 / 4 0
    answer = Math.max(answer, sum1, sum2);
  }
  return answer;
}

let arr = [
  [10, 13, 10, 12, 15],
  [12, 39, 30, 23, 11],
  [11, 25, 50, 53, 15],
  [19, 27, 29, 37, 27],
  [19, 13, 30, 13, 19],
];

console.log(solution(arr));
