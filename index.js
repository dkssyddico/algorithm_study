function solution(answers) {
  let answer = [];
  let first = [1, 2, 3, 4, 5];
  let firstScore = 0;
  let second = [2, 1, 2, 3, 2, 4, 2, 5];
  let secondScore = 0;
  let third = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
  let thirdScore = 0;

  for (let i = 0; i < answers.length; i++) {
    if (answers[i] === first[i]) {
      firstScore++;
    }
    if (answers[i] === second[i]) {
      secondScore++;
    }
    if (answers[i] === third[i]) {
      thirdScore++;
    }
  }

  console.log(firstScore, secondScore, thirdScore);
  return answer;
}

console.log(solution([1, 2, 3, 4, 5]));
