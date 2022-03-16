/**
 * 테트로미노
 *
 * 첫째 줄에 종이의 세로 크기 N과 가로 크기 M이 주어진다. (4 ≤ N, M ≤ 500)
 * 둘째 줄부터 N개의 줄에 종이에 쓰여 있는 수가 주어진다. i번째 줄의 j번째 수는 위에서부터 i번째 칸, 왼쪽에서부터 j번째 칸에 쓰여 있는 수이다. 입력으로 주어지는 수는 1,000을 넘지 않는 자연수이다.
 * 뭔가 가장 가에 있는 가장 큰 수를 찾아서 해야하는 느낌..
 * 모든 경우를 다 체크해야하는 게 맞았다.. 이것이 브루트 포스니까.
 * 참고 https://lhoiktiv.tistory.com/420
 * 조각을 만들 때 경계를 안넘어가는게 중요함
 */

const fs = require('fs');
const input = fs
  .readFileSync('./dev/stdin')
  .toString()
  .trim()
  .split('\n')
  .map((v) => v.split(' ').map(Number));
const [N, M] = input[0]; // 세로 가로
const board = input.splice(1);

// ㅁㅁㅁㅁ
function check1(i, j) {
  if (j + 3 < M) {
    return board[i][j] + board[i][j + 1] + board[i][j + 2] + board[i][j + 3];
  }
  return 0;
}

// ㅁ
// ㅁ
// ㅁ
// ㅁ
function check2(i, j) {
  if (i + 3 < N) {
    return board[i][j] + board[i + 1][j] + board[i + 2][j] + board[i + 3][j];
  }
  return 0;
}

// ㅁ ㅁ
// ㅁ ㅁ
function check3(i, j) {
  if (i + 1 < N && j + 1 < M) {
    return board[i][j] + board[i + 1][j] + board[i][j + 1] + board[i + 1][j + 1];
  }
  return 0;
}

// ㅁ
// ㅁ
// ㅁ ㅁ
function check4(i, j) {
  if (i + 2 < N && j + 1 < M) {
    return board[i][j] + board[i + 1][j] + board[i + 2][j] + board[i + 2][j + 1];
  }
  return 0;
}

// ㅁ ㅁ ㅁ
// ㅁ
function check5(i, j) {
  if (i + 1 < N && j + 2 < M) {
    return board[i][j] + board[i + 1][j] + board[i][j + 1] + board[i][j + 2];
  }
  return 0;
}

// ㅁ ㅁ
//    ㅁ
//    ㅁ
function check6(i, j) {
  if (i + 2 < N && j + 1 < M) {
    return board[i][j] + board[i][j + 1] + board[i + 1][j + 1] + board[i + 2][j + 1];
  }
  return 0;
}

//       ㅁ
// ㅁ ㅁ ㅁ
function check7(i, j) {
  if (i + 1 < N && j + 2 < M) {
    return board[i][j + 2] + board[i + 1][j] + board[i + 1][j + 1] + board[i + 1][j + 2];
  }
  return 0;
}

// ㅁ
// ㅁ ㅁ
//    ㅁ
function check8(i, j) {
  if (i + 2 < N && j + 1 < M) {
    return board[i][j] + board[i + 1][j] + board[i + 1][j + 1] + board[i + 2][j + 1];
  }
  return 0;
}

//    ㅁ ㅁ
// ㅁ ㅁ
function check9(i, j) {
  if (i + 1 < N && j + 2 < M) {
    return board[i + 1][j] + board[i + 1][j + 1] + board[i][j + 1] + board[i][j + 2];
  }
  return 0;
}

// ㅁ ㅁ ㅁ
//    ㅁ
function check10(i, j) {
  if (i + 1 < N && j + 2 < M) {
    return board[i][j] + board[i][j + 1] + board[i][j + 2] + board[i + 1][j + 1];
  }
  return 0;
}

//    ㅁ
// ㅁ ㅁ
//    ㅁ
function check11(i, j) {
  if (i + 2 < N && j + 1 < M) {
    return board[i][j + 1] + board[i + 1][j] + board[i + 1][j + 1] + board[i + 2][j + 1];
  }
  return 0;
}

// ㅁ
// ㅁ ㅁ
// ㅁ
function check12(i, j) {
  if (i + 2 < N && j + 1 < M) {
    return board[i][j] + board[i + 1][j] + board[i + 2][j] + board[i + 1][j + 1];
  }
  return 0;
}

//    ㅁ
// ㅁ ㅁ ㅁ
function check13(i, j) {
  if (i + 1 < N && j + 2 < M) {
    return board[i][j + 1] + board[i + 1][j] + board[i + 1][j + 1] + board[i + 1][j + 2];
  }
  return 0;
}

////대칭할 수도 있다니!!

//    ㅁ
//    ㅁ
// ㅁ ㅁ
function check14(i, j) {
  if (i + 2 < N && j + 1 < M) {
    return board[i][j + 1] + board[i + 1][j + 1] + board[i + 2][j] + board[i + 2][j + 1];
  }
  return 0;
}

// ㅁ ㅁ ㅁ
//       ㅁ
function check15(i, j) {
  if (i + 1 < N && j + 2 < M) {
    return board[i][j] + board[i][j + 1] + board[i][j + 2] + board[i + 1][j + 2];
  }
  return 0;
}

// ㅁ ㅁ
// ㅁ
// ㅁ
function check16(i, j) {
  if (i + 2 < N && j + 1 < M) {
    return board[i][j] + board[i][j + 1] + board[i + 1][j] + board[i + 2][j];
  }
  return 0;
}

// ㅁ
// ㅁ ㅁ ㅁ
function check17(i, j) {
  if (i + 1 < N && j + 2 < M) {
    return board[i][j] + board[i + 1][j] + board[i + 1][j + 1] + board[i + 1][j + 2];
  }
  return 0;
}

//    ㅁ
// ㅁ ㅁ
// ㅁ
function check18(i, j) {
  if (i + 2 < N && j + 1 < M) {
    return board[i][j + 1] + board[i + 1][j] + board[i + 1][j + 1] + board[i + 2][j];
  }
  return 0;
}

// ㅁ ㅁ
//    ㅁ ㅁ
function check19(i, j) {
  if (i + 1 < N && j + 2 < M) {
    return board[i][j] + board[i][j + 1] + board[i + 1][j + 1] + board[i + 1][j + 2];
  }
  return 0;
}

let max = 0;
for (let i = 0; i < N; i++) {
  for (let j = 0; j < M; j++) {
    max = Math.max(
      max,
      check1(i, j),
      check2(i, j),
      check3(i, j),
      check4(i, j),
      check5(i, j),
      check6(i, j),
      check7(i, j),
      check8(i, j),
      check9(i, j),
      check10(i, j),
      check11(i, j),
      check12(i, j),
      check13(i, j),
      check14(i, j),
      check15(i, j),
      check16(i, j),
      check17(i, j),
      check18(i, j),
      check19(i, j)
    );
  }
}
console.log(max);
