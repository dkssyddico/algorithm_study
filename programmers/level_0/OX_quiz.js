/**
 * OX 퀴즈
 */

function solution(quiz) {
  let answer = [];
  for (let i = 0; i < quiz.length; i++) {
    let [a, operator, b, equal, preAnswer] = quiz[i].split(' ');
    let result;
    if (operator === '-') {
      result = Number(a) - Number(b);
      answer.push(result + '' === preAnswer ? 'O' : 'X');
    } else {
      result = Number(a) + Number(b);
      answer.push(result + '' === preAnswer ? 'O' : 'X');
    }
  }
  return answer;
}

console.log(solution(['3 - 4 = -3', '5 + 6 = 11']));
