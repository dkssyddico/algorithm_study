// 동전교환

// 다음과 같이 여러 단위의 동전들이 주어져 있을때 거스름돈을 가장 적은 수의 동전으로 교환 해주려면 어떻게 주면 되는가? 각 단위의 동전은 무한정 쓸 수 있다.
// ▣ 입력설명 첫 번째 줄에는 동전의 종류개수 N(1<=N<=12)이 주어진다. 두 번째 줄에는 N개의 동전의 종 류가 주어지고, 그 다음줄에 거슬러 줄 금액 M(1<=M<=500)이 주어진다.
// 각 동전의 종류는 100원을 넘지 않는다.
// ▣ 출력설명 첫 번째 줄에 거슬러 줄 동전의 최소개수를 출력한다.
// ▣ 입력예제 1) 3, 1 2 5, 15
// ▣ 출력예제 1) 3
// 설명 : 5 5 5 동전 3개로 거슬러 줄 수 있다.

function solution(arr, n) {
  let answer = 0;
  let coins = arr.sort((a, b) => b - a);
  let left = n;
  for (let x of coins) {
    while (left >= x) {
      answer++;
      left = left - x;
    }
  }
  return answer;
}

let arr = [1, 2, 5];
console.time();
console.log(solution(arr, 15));
console.timeEnd();

function tSolution(m, arr1) {
  let answer = Number.MAX_SAFE_INTEGER;
  let arr = arr1.sort((a, b) => b - a);
  let n = arr.length;
  function DFS(L, sum) {
    // 숫자가 m보다 갑자기 넘어갈 수 있음. 14 + 2라던지..
    if (sum > m) return;
    // L이 중복되는거 중복된 거 방지.
    if (L >= answer) return;
    if (sum === m) {
      answer = Math.min(answer, L);
    } else {
      // 중복 순열과 같다. 동전을 모두 탐색
      for (let i = 0; i < n; i++) {
        DFS(L + 1, sum + arr[i]);
      }
    }
  }
  DFS(0, 0);
  return answer;
}

let arr1 = [1, 2, 5];

console.time('tSolution');
console.log(tSolution(15, arr1));
console.timeEnd('tSolution');
