/**
 * 2차원으로 만들기
 */

// 내 풀이
function solution(num_list, n) {
  let answer = [];
  let count = 0;
  let temp = [];
  for (let i = 0; i < num_list.length; i++) {
    temp.push(num_list[i]);
    count++;
    if (count === n) {
      answer.push(temp);
      temp = [];
      count = 0;
    }
  }
  return answer;
}

console.log(solution([1, 2, 3, 4, 5, 6, 7, 8], 2));

// 다른 사람 풀이. 왜 잘라넣을 생각을 못했지..

function solution(num_list, n) {
  var answer = [];

  while (num_list.length) {
    answer.push(num_list.splice(0, n));
  }

  return answer;
}

function solution(num_list, n) {
  return Array(num_list.length / n)
    .fill([])
    .map(() => num_list.splice(0, n));
}
