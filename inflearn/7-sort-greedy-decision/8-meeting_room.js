// 회의실 배정

// 한 개의 회의실이 있는데 이를 사용하고자 하는 n개의 회의들에 대하여 회의실 사용표를 만들 려고 한다. 각 회의에 대해 시작시간과 끝나는 시간이 주어져 있고, 각 회의가 겹치지 않게 하 면서 회의실을 사용할 수 있는 최대수의 회의를 찾아라. 단, 회의는 한번 시작하면 중간에 중 단될 수 없으며 한 회의가 끝나는 것과 동시에 다음 회의가 시작될 수 있다.

// ▣ 입력설명 첫째 줄에 회의의 수 n(1<=n<=100,000)이 주어진다. 둘째 줄부터 n+1 줄까지 각 회의의 정 보가 주어지는데 이것은 공백을 사이에 두고 회의의 시작시간과 끝나는 시간이 주어진다. 회의의 시작시간과 끝나는 시간의 조건은 (시작시간 <= 끝나는 시간)입니다.

// ▣ 출력설명 첫째 줄에 최대 사용할 수 있는 회의 수를 출력하여라.

function solution(arr) {
  let answer = 0;
  let max = Number.MIN_SAFE_INTEGER;
  let i = 0;
  let a = 0;
  arr.sort((a, b) => a[1] - b[1]);
  while (i < arr.length) {
    let tmp = [];
    tmp.push(arr[i]);
    for (a = i; a < arr.length; a++) {
      let end = arr[a][1];
      for (let b = a + 1; b < arr.length; b++) {
        let start = arr[b][0];
        if (end === start) {
          tmp.push(arr[b]);
          a = b - 1;
          break;
        }
      }
    }
    i++;
    if (tmp.length > max) max = tmp.length;
    tmp = [];
  }
  answer = max;
  return answer;
}

let arr = [
  [1, 4],
  [2, 3],
  [3, 5],
  [4, 6],
  [5, 7],
];

let arr2 = [
  [3, 3],
  [1, 3],
  [2, 3],
];

console.log(solution(arr));

function tSolution(meeting) {
  let answer = 0;
  meeting.sort((a, b) => {
    if (a[1] === b[1]) return a[0] - b[0];
    else return a[1] - b[1];
  });
  let et = 0;
  for (let x of meeting) {
    if (x[0] >= et) {
      answer++;
      // 끝나는 시간 넣기
      et = x[1];
    }
  }
  return answer;
}
console.log(tSolution(arr));
