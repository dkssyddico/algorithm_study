function solution(answers) {
  let answer = [];
  let first = [1, 2, 3, 4, 5];
  let second = [2, 1, 2, 3, 2, 4, 2, 5];
  let third = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
  let firstScore = 0;
  let secondScore = 0;
  let thirdScore = 0;

  for (let i = 0; i < answers.length; i++) {
    if (answers[i] === first[i % first.length]) {
      firstScore++;
    }
    if (answers[i] === second[i % second.length]) {
      secondScore++;
    }
    if (answers[i] === third[i % third.length]) {
      thirdScore++;
    }
  }

  let max = Math.max(firstScore, secondScore, thirdScore);

  if (max === firstScore) answer.push(1);
  if (max === secondScore) answer.push(2);
  if (max === thirdScore) answer.push(3);

  return answer;
}

console.log(solution([1, 2, 3, 4, 5]));

function solution2(answers) {
  let answer = [];
  let first = [1, 2, 3, 4, 5];
  let second = [2, 1, 2, 3, 2, 4, 2, 5];
  let third = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

  let firstScore = answers.filter((a, i) => a === first[i % first.length]).length;
  let secondScore = answers.filter((a, i) => a === second[i % second.length]).length;
  let thirdScore = answers.filter((a, i) => a === third[i % third.length]).length;

  let max = Math.max(firstScore, secondScore, thirdScore);

  if (max === firstScore) answer.push(1);
  if (max === secondScore) answer.push(2);
  if (max === thirdScore) answer.push(3);

  return answer;
}
