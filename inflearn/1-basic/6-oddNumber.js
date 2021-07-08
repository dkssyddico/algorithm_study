// My solution
function solution(array) {
  let answer1, answer2;
  let odds = array.filter((num) => num % 2 === 1);
  answer1 = odds.reduce((prev, cur) => prev + cur);
  answer2 = odds.sort((a, b) => a - b)[0];
  return [answer1, answer2];
}

console.log(solution([12, 77, 38, 41, 53, 92, 85]));

// Teacher's solution
// function solution(array) {
//   let answer = [];
//   let sum = 0,
//     min = Number.MAX_SAFE_INTEGER;
//   for (let x of array) {
//     if (x % 2 === 1) {
//       sum += x;
//       if (x < min) {
//         min = x;
//       }
//     }
//   }
//   answer.push(sum);
//   answer.push(min);
//   return answer;
// }

// console.log(solution([12, 77, 38, 41, 53, 92, 85]));
