function solution(boards, moves) {
  let answer;
  let stack = [];
  let count = 0;
  for (let x of moves) {
    for (let i = 0; i < boards.length; i++) {
      if (boards[i][x - 1] !== 0) {
        if (stack.length > 0 && stack[stack.length - 1] === boards[i][x - 1]) {
          stack.pop();
          count += 2;
        } else {
          stack.push(boards[i][x - 1]);
        }
        boards[i][x - 1] = 0;
        break;
      }
    }
  }
  answer = count;
  return answer;
}

const boards = [
  [0, 0, 0, 0, 0],
  [0, 0, 1, 0, 3],
  [0, 2, 5, 0, 1],
  [4, 2, 4, 4, 2],
  [3, 5, 1, 3, 1],
];

const moves = [1, 5, 3, 5, 1, 2, 1, 4];

console.log(solution(boards, moves));

function tSolution(boards, moves) {
  let answer = 0;
  let stack = [];
  moves.forEach((pos) => {
    for (let i = 0; i < boards.length; i++) {
      if (boards[i][pos - 1] !== 0) {
        let tmp = boards[i][pos - 1];
        boards[i][pos - 1] = 0;
        if (tmp === stack[stack.length - 1]) {
          stack.pop();
          answer += 2;
        } else stack.push(tmp);
        break;
      }
    }
  });
  return answer;
}

console.log(tSolution(boards, moves));
