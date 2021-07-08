function solution(arr, num) {
  let answer = 0;
  let len = arr.length;
  let sumArr = [];
  let sortedArr = [];
  // 합의 모든 경우 구하기
  for (let i = 0; i < len; i++) {
    let a = arr[i];
    for (let j = 0; j < len; j++) {
      let b = arr[j];
      if (a !== b) {
        for (let k = 0; k < len; k++) {
          let c = arr[k];
          if (b !== c && a !== c) {
            sumArr.push(a + b + c);
          }
        }
      }
    }
  }
  // 중복 제거
  for (let x of sumArr) {
    if (sortedArr.indexOf(x) === -1) sortedArr.push(x);
  }
  answer = sortedArr.sort((a, b) => b - a)[num - 1];
  return answer;
}

let arr = [13, 15, 34, 23, 45, 65, 33, 11, 26, 42];

let num = 3;

console.log(solution(arr, num));

function tSolution(len, num, card) {
  let answer = 0;
  let tmp = new Set();
  for (let i = 0; i < len; i++) {
    for (let j = i + 1; j < len; j++) {
      for (let k = j + 1; k < len; k++) {
        tmp.add(card[i] + card[j] + card[k]);
      }
    }
  }
  let a = Array.from(tmp).sort((a, b) => b - a);
  answer = a[num - 1];
  return answer;
}

console.log(tSolution(10, 3, arr));
