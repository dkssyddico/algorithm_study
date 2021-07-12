// 현수의 아빠는 제과점을 운영합니다. 현수 아빠는 현수에게 N일 동안의 매출기록을 주고 연속 된 K일 동안의 최대 매출액이 얼마인지 구하라고 했습니다.

// 만약 N=10이고 10일 간의 매출기록이 아래와 같습니다. 이때 K=3이면 12 15 11 20 25 10 20 19 13 15 연속된 3일간의 최대 매출액은 11+20+25=56만원입니다.

// 여러분이 현수를 도와주세요.

let arr = [12, 15, 11, 20, 25, 10, 20, 19, 13, 15];

let a = 3;

function solution(a, arr) {
  let answer = 0;
  let max = Number.MIN_SAFE_INTEGER;
  let left = 0;
  while (left < arr.length) {
    let sum = 0;
    sum += arr[left];
    for (let right = left + 1; right < left + 3; right++) {
      sum += arr[right];
    }
    if (sum > max) max = sum;
    left++;
  }
  answer = max;
  return answer;
}
console.log(solution(a, arr));

function solution2(a, arr) {
  let answer = 0,
    sum = 0,
    max = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
    if (i >= a) {
      sum = sum - arr[i - a];
      if (sum > max) max = sum;
    }
  }
  answer = max;
  return answer;
}

console.log(solution2(a, arr));

function tSolution(a, arr) {
  let answer,
    sum = 0;
  // 초기 3개 아이템 더한 값 구하기
  for (let i = 0; i < a; i++) {
    sum += arr[i];
  }
  answer = sum;
  for (let j = a; j < arr.length; j++) {
    sum += arr[j] - arr[j - a];
    answer = Math.max(answer, sum);
  }
  return answer;
}

console.log(tSolution(a, arr));
