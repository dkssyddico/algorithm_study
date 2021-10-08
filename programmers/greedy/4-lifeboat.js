// function solution(people, limit) {
//   let answer = 0;
//   let p = people.sort((a, b) => a - b);
//   let w = 0;
//   for (let i = 0; i < p.length; i++) {
//     w += p[i];
//     if (w === limit) {
//       answer++;
//       w = 0;
//     } else if (w < limit) {
//       continue;
//     } else {
//       answer++;
//       w = p[i];
//     }
//   }
//   if (w) {
//     answer++;
//   }
//   return answer;
// }

/**
 *  우선 적은 수로 정렬한다.
 *  만약에 처음 수가 리밋을 안넘는다. 그럼 넘김
 *  뒤에 더하는 수가 리밋을 넘는다 그럼 넘김 처리.
 *
 * 카운트 변수 만들기
 * 처음 시도한건 실패..
 * 짝을 찾아줘야하나?
 */

// 가장 무거운 사람과 가벼운 사람을 같이 태우는 것. 구명보트엔 최대 2명까지 탈 수 있다.
function solution(people, limit) {
  let answer = 0;
  people = people.sort((a, b) => b - a);

  for (let i = 0, j = people.length - 1; i <= j; i++, answer++)
    if (people[i] + people[j] <= limit) j--;

  return answer;
}

console.log(solution([70, 50, 80, 50], 100));
console.log(solution([70, 80, 50], 100));
