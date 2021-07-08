// My solution
// let numbers = [5, 3, 7, 11, 1, 15, 17];

// function solution(array) {
//   let answer;
//   array.sort((a, b) => a - b);
//   answer = array[0];
//   return answer;
// }

// console.log(solution(numbers));

// Teacher's solution
function solution2(array) {
  let answer,
    min = Number.MAX_SAFE_INTEGER;
  for (let i = 0; i < array.length; i++) {
    if (array[i] < min) min = array[i];
  }
  answer = min;
  return answer;
}

let result = solution2(numbers);

console.log('');

// Teacher's solution 2
// 내장 함수를 이용한다

function solution3(array) {
  let answer = Math.min(...array);
  // let answer = Math.min.apply(null, array)
  return answer;
}
