/**
 * 최대값 찾기
 */

function solution(numbers) {
  let answer = 0;
  let flag = false; // 음수가 있는지 체크
  let numArr = numbers.sort((a, b) => a - b, 0);
  numArr.forEach((i) => {
    if (i < 0) {
      flag = true;
    }
  });

  answer = flag
    ? numArr[0] * numArr[1] < 1
      ? numArr[numArr.length - 1] * numArr[numArr.length - 2]
      : numArr[0] * numArr[1]
    : numArr[numArr.length - 1] * numArr[numArr.length - 2];

  answer =
    numArr[0] * numArr[1] > numArr[numArr.length - 1] * numArr[numArr.length - 2]
      ? numArr[0] * numArr[1]
      : numArr[numArr.length - 1] * numArr[numArr.length - 2];
  return answer;
}

console.log(solution([-1, 7, 1, -6]));

{
  // 이게 더 쉽네 ㅜㅜ 생각만 많았음

  function solution(numbers) {
    var answer = numbers.sort((a, b) => a - b);
    return answer[0] * answer[1] > answer[answer.length - 1] * answer[answer.length - 2]
      ? answer[0] * answer[1]
      : answer[answer.length - 1] * answer[answer.length - 2];
  }
}
