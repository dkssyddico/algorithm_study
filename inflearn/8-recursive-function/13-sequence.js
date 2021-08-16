// // 수열 추측하기

// 가장 윗줄에 1부터 N까지의 숫자가 한 개씩 적혀 있다. 그리고 둘째 줄부터 차례대로 파스칼 의 삼각형처럼 위의 두개를 더한 값이 저장되게 된다. 예를 들어 N이 4 이고 가장 윗 줄에 3 1 2 4 가 있다고 했을 때, 다음과 같은 삼각형이 그려진다.

// 3 1 2 4
// 4 3 6
// 7 9
// 16

// N과 가장 밑에 있는 숫자가 주어져 있을 때 가장 윗줄에 있는 숫자를 구하는 프로그램을 작성하 시오. 단, 답이 여러가지가 나오는 경우에는 사전순으로 가장 앞에 오는 것을 출력하여야 한다.

// ▣ 입력설명 첫째 줄에 두개의 정수 N(1≤N≤10)과 F가 주어진다. N은 가장 윗줄에 있는 숫자의 개수를 의 미하며 F는 가장 밑에 줄에 있는 수로 1,000,000 이하이다.

// ▣ 출력설명 첫째 줄에 삼각형에서 가장 위에 들어갈 N개의 숫자를 빈 칸을 사이에 두고 출력한다. 답이 존재 하지 않는 경우는 입력으로 주어지지 않는다.

// ▣ 입력예제 1) 4 16

// ▣ 출력예제 1) 3 1 2 4

function solution(n, f) {
  let answer;
  let flag = 0;
  let dy = Array.from(Array(11), () => Array(11).fill(0));
  // 순열을 돌려야해서 체크배열
  let ch = Array.from({ length: n + 1 }, () => 0);
  // 조합수 1, 2, 4, 3  같은 거
  let p = Array.from({ length: n }, () => 0);
  // 순열 : 차례로 몇가지 경우가 나오는지, 1 3 3 1 같은
  let b = Array.from({ length: n }, () => 0);
  function combi(n, r) {
    if (dy[n][r] > 0) return dy[n][r];
    if (n === r || r === 0) return 1;
    else return (dy[n][r] = combi(n - 1, r - 1) + combi(n - 1, r));
  }
  function DFS(L, sum) {
    if (flag) return;
    // if (L === n) console.log(p);
    if (L === n && sum === f) {
      answer = p.slice();
      flag = 1;
    } else {
      for (let i = 1; i <= n; i++) {
        if (ch[i] === 0) {
          ch[i] = 1;
          p[L] = i;
          DFS(L + 1, sum + b[L] * p[L]);
          ch[i] = 0;
        }
      }
    }
  }
  // 3C0, 3C1 이런거 구하는 for 문
  for (let i = 0; i < n; i++) {
    b[i] = combi(n - 1, i);
  }
  DFS(0, 0);
  return answer;
}

console.log(solution(4, 16));

function solution2(n, f) {
  let answer;
  let flag = 0;
  let dy = Array.from(Array(11), () => Array(11).fill(0));
  // 순열을 돌려야해서 체크배열
  let ch = Array.from({ length: n + 1 }, () => 0);
  // 조합수 1, 2, 4, 3  같은 거
  let p = [];
  // 순열 : 차례로 몇가지 경우가 나오는지, 1 3 3 1 같은
  let b = Array.from({ length: n }, () => 0);
  function combi(n, r) {
    if (dy[n][r] > 0) return dy[n][r];
    if (n === r || r === 0) return 1;
    else return (dy[n][r] = combi(n - 1, r - 1) + combi(n - 1, r));
  }
  function DFS(L, sum) {
    if (flag) return;
    if (L === n && sum === f) {
      answer = p.slice();
      flag = 1;
    } else {
      for (let i = 1; i <= n; i++) {
        if (ch[i] === 0) {
          ch[i] = 1;
          p.push(i);
          DFS(L + 1, sum + b[L] * p[L]);
          ch[i] = 0;
          p.pop();
        }
      }
    }
  }
  // 3C0, 3C1 이런거 구하는 for 문
  for (let i = 0; i < n; i++) {
    b[i] = combi(n - 1, i);
  }
  DFS(0, 0);
  return answer;
}

console.log(solution2(4, 16));
