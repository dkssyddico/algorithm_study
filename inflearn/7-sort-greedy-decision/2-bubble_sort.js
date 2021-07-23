// 버블 정렬

// N개의 숫자가 입력되면 오름차순으로 정렬하여 출력하는 프로그램을 작성하세요. 정렬하는 방법은 버블정렬입니다.
// ▣ 입력설명 첫 번째 줄에 자연수 N(1<=N<=100)이 주어집니다.
// 두 번째 줄에 N개의 자연수가 공백을 사이에 두고 입력됩니다. 각 자연수는 정수형 범위 안에 있습니다.
// ▣ 출력설명 오름차순으로 정렬된 수열을 출력합니다.

function solution(arr) {
  let answer = arr;
  for (let i = 0; i < arr.length; i++) {
    let x = arr[i];
    for (let j = i + 1; j < arr.length; j++) {
      let y = arr[j];
      if (x > y) {
        [arr[i], arr[j]] = [arr[j], arr[i]];
        break;
      }
      break;
    }
  }
  return answer;
}

let arr = [13, 5, 11, 7, 23, 15];

console.log(solution(arr));

let arr2 = [13, 5, 11, 7, 23, 15];

function solution2(arr) {
  let answer = arr;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  return answer;
}

console.log(solution2(arr2));

function tSolution(arr) {
  let answer = arr;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  return answer;
}

let arr3 = [13, 5, 11, 7, 23, 15];

console.log(tSolution(arr3));
