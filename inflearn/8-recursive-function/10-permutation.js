// 순열 구하기

// 10이하의 N개의 자연수가 주어지면 이 중 M개를 뽑아 일렬로 나열하는 방법을 모두 출력합니다.

// ▣ 입력설명 첫 번째 줄에 자연수 N(3<=N<=10)과 M(2<=M<=N) 이 주어집니다. 두 번째 줄에 N개의 자연수가 오름차순으로 주어집니다.

// ▣ 출력설명 첫 번째 줄에 결과를 출력합니다. 맨 마지막 총 경우의 수를 출력합니다. 출력순서는 사전순으로 오름차순으로 출력합니다.

// ▣ 입력예제 1) 3 / 2 / 3, 6, 9

// ▣ 출력예제 1) 3 6 / 3 9 / 6 3 / 6 9 / 9 3 / 9 6 / 6

function solution(arr, n) {
  let answer;
  let tmp = Array.from({ length: n }, () => 0);
  function DFS(l) {
    if (l == n) {
      // 중복 제거 어떻게??
      console.log(tmp);
    } else {
      for (let i = 0; i < arr.length; i++) {
        tmp[l] = arr[i];
        DFS(l + 1);
      }
    }
  }
  DFS(0);
  return answer;
}

let arr = [3, 6, 9, 5];

// console.log(solution(arr, 2));

function tSolution(m, arr) {
  let answer = [];
  let n = arr.length;
  let ch = Array.from({ length: n }, () => 0); // arr 안에 있는 수를 썼는지 안썼는지 판별하는 배열
  let tmp = Array.from({ length: m }, () => 0);
  function DFS(L) {
    if (L === m) {
      answer.push(tmp.slice());
    } else {
      for (let i = 0; i < n; i++) {
        if (ch[i] == 0) {
          ch[i] = 1;
          tmp[L] = arr[i];
          DFS(L + 1);
          ch[i] = 0;
        }
      }
    }
  }
  DFS(0);
  return answer;
}

console.log(tSolution(2, arr));
