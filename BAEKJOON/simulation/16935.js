/**
 * 16935번 배열 돌리기 3
 * 1번은 상하반전
 * 2번은 좌우반전
 * 3번은 오른쪽으로 90도
 * 4번은 왼쪽으로 90도
 * 1 2
 * 4 3
 * 5번 연산은 1번 그룹의 부분 배열을 2번 그룹 위치로, 2번을 3번으로, 3번을 4번으로, 4번을 1번으로 이동시키는 연산이다.
 * 6번 연산은 1번 그룹의 부분 배열을 4번 그룹 위치로, 4번을 3번으로, 3번을 2번으로, 2번을 1번으로 이동시키는 연산이다.
 */
{
  /**
   * 혼자 힘으로 구현해봤는데 통과는 하지 못했다.
   * 스스로 구현한 것엔 의의를 두지만 효율적인 코드는 아닌 것 같다 ㅠ^ㅠ
   */
  let fs = require('fs');
  let input = fs.readFileSync('/dev/stdin').toString().split('\n');
  let [Height, Width, operations] = input.shift().split(' ').map(Number);
  let orders = input.pop().split(' ').map(Number);
  let original = input.map((i) => i.split(' ').map(Number));
  let answer = '';
  // let original = [
  //   [3, 2, 6, 3, 1, 2, 9, 7],
  //   [9, 7, 8, 2, 1, 4, 5, 3],
  //   [5, 9, 2, 1, 9, 6, 1, 8],
  //   [2, 1, 3, 8, 6, 3, 9, 2],
  //   [1, 3, 2, 8, 7, 9, 2, 1],
  //   [4, 5, 1, 9, 8, 2, 1, 3],
  // ];

  // const Height = 6;
  // const Width = 8;
  // const operations = 6;
  // const orders = [1, 2, 3, 4, 5, 6];

  for (let i = 0; i < operations; i++) {
    let order = orders[i];
    switch (order) {
      case 1:
        original = solution1(original);
        break;
      case 2:
        original = solution2(original);
        break;
      case 3:
        original = solution3(original);
        break;
      case 4:
        original = solution4(original);
        break;
      case 5:
        original = solution5(original);
        break;
      case 6:
        original = solution6(original);
        break;
      default:
        break;
    }
  }

  // 상하반전
  function solution1(arr) {
    let newArr = [];
    for (let i = arr.length; i > 0; i--) {
      newArr.push(original[i - 1]);
    }
    return newArr;
  }

  // 좌우반전
  function solution2(arr) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
      newArr.push(original[i].reverse());
    }
    return newArr;
  }

  // 오른쪽으로 90도
  function solution3(arr) {
    let newArr = Array.from({ length: arr[0].length }, () => Array(arr.length).fill(0));
    for (let i = 0; i < arr.length; i++) {
      let line = arr[i];
      for (let j = 0; j < arr[0].length; j++) {
        let element = line[j];
        newArr[j][arr.length - i - 1] = element;
      }
    }
    return newArr;
  }

  // 왼쪽으로 90도
  function solution4(arr) {
    let newArr = Array.from({ length: arr[0].length }, () => Array(arr.length).fill(0));
    for (let i = 0; i < arr.length; i++) {
      let line = arr[i];
      for (let j = 0; j < arr[0].length; j++) {
        let element = line[j];
        newArr[arr[0].length - j - 1][i] = element;
      }
    }
    return newArr;
  }

  // 1 2
  // 4 3
  // 5번 연산은 1번 그룹의 부분 배열을 2번 그룹 위치로, 2번을 3번으로, 3번을 4번으로, 4번을 1번으로 이동시키는 연산이다.
  function solution5(arr) {
    let halfN = arr.length / 2;
    let halfM = arr[0].length / 2;
    let newArr = Array.from({ length: arr.length }, () => Array(arr[0].length).fill(0));
    for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < arr[0].length; j++) {
        if (i < halfN && j < halfM) {
          newArr[i][j + halfM] = arr[i][j];
        } else if (i < halfN && j >= halfM) {
          newArr[i + halfN][j] = arr[i][j];
        } else if (i >= halfN && j >= halfM) {
          newArr[i][j - halfM] = arr[i][j];
        } else {
          newArr[i - halfN][j] = arr[i][j];
        }
      }
    }
    return newArr;
  }

  // 1 2
  // 4 3
  // 6번 연산은 1번 그룹의 부분 배열을 4번 그룹 위치로, 4번을 3번으로, 3번을 2번으로, 2번을 1번으로 이동시키는 연산이다.
  function solution6(arr) {
    let halfN = arr.length / 2;
    let halfM = arr[0].length / 2;
    let newArr = Array.from({ length: arr.length }, () => Array(arr[0].length).fill(0));
    for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < arr[0].length; j++) {
        if (i < halfN && j < halfM) {
          newArr[i + halfN][j] = arr[i][j];
        } else if (i < halfN && j >= halfM) {
          newArr[i][j - halfM] = arr[i][j];
        } else if (i >= halfN && j >= halfM) {
          newArr[i - halfN][j] = arr[i][j];
        } else {
          newArr[i][j + halfM] = arr[i][j];
        }
      }
    }
    return newArr;
  }

  original.forEach((o, index) => (answer += `${original[index].join(' ')}\n`));
  console.log(answer);
}

{
  /**
   * 다른 분 코드 https://degurii.tistory.com/215
   * 귀찮은 구현 문제입니다. 자바스크립트로 풀었습니다.
   * 이런 류의 문제에서는 구현해둔 함수를 이용하는 게 코드량을 줄이는 포인트입니다.
   * 1) 상하 반전은 행의 순서를 reverse() 함수를 이용해 바꿔주면 됩니다.
   * 2) 좌우 반전은 각 행마다 reverse() 함수를 적용하여 열의 순서를 바꿔줍니다.
   * 3) 오른쪽 90도 회전을 열심히 구현합니다.
   * 4) 왼쪽 90도 회전은 오른쪽 90도 회전을 세 번 한 것과 같습니다. 만들어둔 함수를 이용하면 쉽게 구현할 수 있습니다.
   * 5) 사 등분 오른쪽 90도 회전을 열심히 구현합니다. 자바스크립트는 배열을 사 등분 해서 적당히 이어 붙여주는 방식으로 구현할 수 있습니다.
   * 6) 사 등분 왼쪽 90도 회전은 5번 연산을 세 번 한 것과 같습니다.
   */
  const fs = require('fs');
  const stdin = fs.readFileSync('/dev/stdin').toString().split('\n');
  const input = (() => {
    let line = 0;
    return () => stdin[line++];
  })();

  const main = function () {
    const go = [
      // 0번 연산은 없으므로 null로 채워줍시다.
      null,
      // 1번 연산: 상하 반전
      (board) => [...board].reverse(),
      // 2번 연산: 좌우 반전
      (board) => board.map((row) => [...row].reverse()),
      // 3번 연산: 오른쪽 90도 회전
      (board) => {
        const n = board.length,
          m = board[0].length;
        const ret = Array.from(Array(m), () => new Array(n));
        for (let i = 0; i < m; i++) {
          for (let j = 0; j < n; j++) {
            ret[i][j] = board[n - j - 1][i];
          }
        }
        return ret;
      },
      // 4번 연산: 왼쪽 90도 회전
      (board) => go[3](go[3](go[3](board))),
      // 5번 연산: 사 등분 오른쪽 90도 회전
      (board) => {
        const n = board.length / 2,
          m = board[0].length / 2;
        const top = board.slice(0, n),
          bottom = board.slice(n);
        const part1 = top.map((row) => row.slice(0, m)),
          part2 = top.map((row) => row.slice(m)),
          part3 = bottom.map((row) => row.slice(0, m)),
          part4 = bottom.map((row) => row.slice(m));
        return [
          ...part3.map((row, i) => [...row, ...part1[i]]),
          ...part4.map((row, i) => [...row, ...part2[i]]),
        ];
      },
      // 6번 연산: 사 등분 왼쪽 90도 회전
      (board) => go[5](go[5](go[5](board))),
    ];
    const [n, m, r] = input().split(' ').map(Number);
    const board = Array(n);
    for (let i = 0; i < n; i++) {
      board[i] = input().split(' ');
    }

    const commands = input().split(' ');
    const ans = commands.reduce((ans, cmd) => go[cmd](ans), board);
    const ansString = ans.reduce((str, row) => (str += row.join(' ') + '\n'), '');
    console.log(ansString);
  };

  main();
}
