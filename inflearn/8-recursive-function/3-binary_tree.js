/**
 * 전위순회: 부 왼 오
 * 중위순회: 왼 부 오
 * 후위순회 왼 오 부
 */

// 전위순회
// 두가닥으로 뻗는 바로 위쪽에서 출력하면 됨
// 1 2 4 5 3 6 7
function solution(v) {
  let answer;
  function DFS(v) {
    if (v > 7) {
      return;
    } else {
      console.log(v);
      DFS(v * 2); // 왼쪽 자식
      DFS(v * 2 + 1);
    }
  }
  DFS(v);
  return answer;
}
console.log(solution(1));

/**
 * 중위순회
 * 4 2 5 1 6 3 7
 */
function solution1(v) {
  let answer;
  function DFS(v) {
    if (v > 7) {
      return;
    } else {
      DFS(v * 2); // 왼쪽 자식
      console.log(v);
      DFS(v * 2 + 1);
    }
  }
  DFS(v);
  return answer;
}

console.log(solution1(1));

/**
 * 후위순회
 * 4 5 2 6 7 3 1
 */
function solution2(v) {
  let answer;
  function DFS(v) {
    if (v > 7) {
      return;
    } else {
      DFS(v * 2); // 왼쪽 자식
      DFS(v * 2 + 1);
      console.log(v);
    }
  }
  DFS(v);
  return answer;
}

console.log(solution2(1));
