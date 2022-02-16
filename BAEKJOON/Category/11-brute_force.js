{
  // 2798번 블랙잭
  let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
  let target = Number(input[0].split(' ')[1]);
  let nums = input[1].split(' ').map(Number);

  let sum = 0;
  let max = 0;

  for (let i = 0; i < nums.length; i++) {
    let x = nums[i];
    for (let j = i + 1; j < nums.length; j++) {
      let y = nums[j];
      for (let k = j + 1; k < nums.length; k++) {
        const z = nums[k];
        sum = x + y + z;
        if (sum > max && target >= sum) {
          max = sum;
        }
      }
    }
  }

  console.log(max);
}

{
  // 2231번 분해합
  // 1부터 모든 경우의 수를 다 해봐야함 ;ㅁ;
  // 제일 먼저 나오는게 가장 작은 생성자. 11부터 생성자가 있다. 11 = 10 + 1 + 0
  // 내 풀이
  let target = Number(require('fs').readFileSync('/dev/stdin').toString());
  let answer = 0;

  for (let i = 0; i < 1000000; i++) {
    let sum = 0;
    sum += i;
    let newNum = i;
    while (newNum !== 0) {
      sum += newNum % 10;
      newNum = Math.floor(newNum / 10);
    }
    if (sum === target) {
      answer = i;
      break;
    }
  }
  if (answer) {
    console.log(answer);
  } else {
    console.log(0);
  }
  {
    // split, reduce로 푸는 방법
    // 시간이랑 메모리 엄청 씀

    let target = Number(require('fs').readFileSync('/dev/stdin').toString());
    let answer = 0;

    for (let i = 1; i <= 1000000; i++) {
      let sum = i + plus(i);
      if (sum === target) {
        answer = i;
        break;
      }
    }

    function plus(num) {
      let strArr = num.toString().split('');
      return strArr.reduce((p, c) => parseInt(p) + parseInt(c), 0);
    }

    if (answer) {
      console.log(answer);
    } else {
      console.log(0);
    }
  }
}

{
  // 7568번 덩치
  const [n, ...arr] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
  const people = arr.map((p) => [parseInt(p.split(' ')[0]), parseInt(p.split(' ')[1])]);

  let ranks = [];

  for (let i = 0; i < people.length; i++) {
    let rank = 1;
    let myWeight = people[i][0];
    let myHeight = people[i][1];
    // 같은 사람 처리
    for (let j = 0; j < people.length; j++) {
      let otherWeight = people[j][0];
      let otherHeight = people[j][1];
      if (otherWeight > myWeight && otherHeight > myHeight) {
        rank++;
      }
    }
    ranks.push(rank);
  }

  console.log(ranks.join(' '));
}

{
  // 1018번 체스판 다시 칠하기
  const fs = require('fs');
  const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
  const [N, M] = input
    .shift()
    .split(' ')
    .map((mn) => parseInt(mn));

  const board = [];
  input.forEach((line) => {
    board.push(line);
  });

  let column = N;
  let row = M;

  const whiteList = [
    'WBWBWBWB',
    'BWBWBWBW',
    'WBWBWBWB',
    'BWBWBWBW',
    'WBWBWBWB',
    'BWBWBWBW',
    'WBWBWBWB',
    'BWBWBWBW',
  ];

  const blackList = [
    'BWBWBWBW',
    'WBWBWBWB',
    'BWBWBWBW',
    'WBWBWBWB',
    'BWBWBWBW',
    'WBWBWBWB',
    'BWBWBWBW',
    'WBWBWBWB',
  ];

  let wrongCounts = [];

  // 체스판 구하기: 체스판을 0, 0부터 시작해서 옆으로 그리고 아래로 한 블럭씩 이동시키는 것
  for (let i = 0; i + 7 < column; i++) {
    for (let j = 0; j + 7 < row; j++) {
      wrongCounts.push(compareBoards(i, j, board, whiteList));
      wrongCounts.push(compareBoards(i, j, board, blackList));
    }
  }

  function compareBoards(y, x, board, compareBoard) {
    let count = 0;
    // 한 줄씩 쭈르르 비교
    for (let i = y; i < y + 8; i++) {
      for (let j = x; j < x + 8; j++) {
        if (board[i][j] !== compareBoard[i - y][j - x]) {
          count++;
        }
      }
    }
    return count;
  }

  console.log(Math.min(...wrongCounts));
}

{
  /**
   * 1436번
   * 최대 숫자까지 for문 돌려서 666들어간 수 다 구해서 array에 넣기
   * 처음에 생각하는건 666이 들어간 숫자만 있는 배열을 만들고 거기서 index를 찾으려고 했는데, 666이 나올 수 있는 숫자 제한이 없고 n번째에 대한 제한만 나와서 실패. 그래도 숫자를 문자열로 만들어서 includes든 match를 하려고 하든 생각해낸건 잘한듯!
   */

  let input = Number(require('fs').readFileSync('/dev/stdin').toString().trim());
  let count = 1;
  let num = 666;
  while (input !== count) {
    num++;
    if (String(num).includes('666')) {
      count++;
    }
  }

  console.log(num);
}
