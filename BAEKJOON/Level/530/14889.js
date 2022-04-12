{
  // 이거는 백준에 돌려보면 계속 틀렸다고 나온다.. 왤까
  const N = 4;
  const stats = [
    [0, 1, 2, 3],
    [4, 0, 5, 6],
    [7, 1, 0, 2],
    [3, 4, 5, 0],
  ];

  // const fs = require('fs');
  // const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

  // const N = +input.shift();
  // const stats = input.map((column) => column.split(' ').map(Number));

  function sol(N, stats) {
    let min = Number.MAX_SAFE_INTEGER;
    let check = new Array(N).fill(false);
    function DFS(level, index) {
      if (level === N / 2) {
        const STeam = [];
        const LTeam = [];
        let sSum = 0;
        let lSum = 0;
        for (let i = 0; i < N; i++) {
          if (check[i]) STeam.push(i);
          else LTeam.push(i);
        }
        for (let i = 0; i < N / 2; i++) {
          for (let j = i + 1; j < N / 2; j++) {
            sSum = stats[STeam[i]][STeam[j]] + stats[STeam[j]][STeam[i]];
            lSum = stats[LTeam[i]][LTeam[j]] + stats[LTeam[j]][LTeam[i]];
          }
        }
        min = Math.min(min, Math.abs(sSum - lSum));
      }

      for (let i = index; i < N; i++) {
        check[i] = true;
        DFS(level + 1, i + 1);
        check[i] = false;
      }
    }
    DFS(0, 0);
    return min;
  }

  console.log(sol(N, stats));
}

{
  /**
   * 참고하고 이걸로 우선 통과하긴 했다 ㅠㅅ ㅠ
   * https://gobae.tistory.com/50
   */
  const sol = (input) => {
    const N = +input[0];
    const halfN = N / 2;
    const stats = input.slice(1).map((str) => str.split(' ').map(Number));

    const check = new Array(N).fill(0);
    let min = Number.MAX_SAFE_INTEGER;
    function dfs(L, K) {
      if (L === halfN) {
        // 스타트팀에 N/2 명이 뽑혔다면
        const sTeam = [];
        const lTeam = [];
        let sSum = (lSum = 0);
        for (let i = 0; i < N; i++) {
          if (check[i]) sTeam.push(i);
          // 체크 배열은 스타트 팀에 넣어주고, 체크 배열에 없으면 링크 팀에 넣어준다.
          else lTeam.push(i);
        }
        for (let i = 0; i < halfN; i++) {
          for (let j = i + 1; j < halfN; j++) {
            // (i,j), (j,i) 쌍을 계속 더해준다.
            sSum = sSum + stats[sTeam[i]][sTeam[j]] + stats[sTeam[j]][sTeam[i]];
            lSum = lSum + stats[lTeam[i]][lTeam[j]] + stats[lTeam[j]][lTeam[i]];
          }
        }
        min = Math.min(min, Math.abs(sSum - lSum));
        return;
      }

      for (let i = K; i < N; i++) {
        // 체크 배열을 스타트 팀 구성에 사용한다.
        check[i] = 1;
        dfs(L + 1, i + 1);
        check[i] = 0;
      }
    }
    dfs(0, 0);
    return min;
  };

  // 백준에서 입력을 받는 코드
  const input = [];
  require('readline')
    .createInterface(process.stdin, process.stdout)
    .on('line', (line) => {
      input.push(line);
    })
    .on('close', () => {
      console.log(sol(input));
      process.exit();
    });
}
