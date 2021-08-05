// 재귀함수

// 자연수 N이 입력되면 재귀함수를 이용하여 1부터 N까지를 출력하는 프로그램을 작성하세요.

// ▣ 입력설명 첫 번째 줄은 정수 N(3<=N<=10)이 입력된다.

// ▣ 출력설명 첫째 줄에 출력한다.

// ▣ 입력예제 1) 3

// ▣ 출력예제 1) 1 2 3

function solution(num) {
  let answer = [];
  for (let i = 0; i < num; i++) {
    answer.push(i + 1);
  }
  return answer;
}

console.log(solution(3));

/**
 * 재귀함수의 원리
 * 스택의 원리
 * 자기가 자기 자신을 호출한다.
 */

function tSolution(n) {
  function DFS(L) {
    if (L === 0) return;
    else {
      DFS(L - 1);
      console.log(L); // 왜 순서가 바뀌는지? 콜스택
    }
  }
  DFS(n);
}

console.log(tSolution(3));
