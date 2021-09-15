// 대기 목록에서 가장 앞에 있는 문서를 꺼냄
// 중요도는 숫자가 클수록 높다.
// answer은 새로만든 배열에서 그 숫자를 만족하는 걸 찾으면 되는데 숫자가 중복되면 어쩌지.
// 중복되지 않게 문자열로 배열 만들어주기
function solution(priorities, location) {
  let answer = 0;
  let arr = Array.from({ length: priorities.length }, (v, i) => String.fromCharCode(i + 65));
  let target = arr[location];
  let sorted = [];
  while (arr.length) {
    let max = Math.max(...priorities);
    let first = priorities.shift();
    let left = arr.shift();
    if (first === max) {
      sorted.push(left);
    } else {
      priorities.push(first);
      arr.push(left);
    }
  }
  answer = sorted.indexOf(target) + 1;
  return answer;
}

// 프로그래머스 다른 분 풀이
function solution2(priorities, location) {
  // original priorities
  let arr = priorities.map((priority, index) => {
    return {
      index: index,
      priority: priority,
    };
  });
  let queue = [];
  while (arr.length) {
    let firstEle = arr.shift();
    let hasHigherPriority = arr.some((ele) => ele.priority > firstEle.priority);
    if (hasHigherPriority) {
      arr.push(firstEle);
    } else {
      queue.push(firstEle);
    }
  }
  return queue.findIndex((queueEle) => queueEle.index === location) + 1;
}

let p = [2, 1, 3, 2];
let l = 2;

let p1 = [1, 1, 9, 1, 1, 1];
let l1 = 0;

let p2 = [2, 1, 3, 2];
let l2 = 2;

let p3 = [1, 1, 9, 1, 1, 1];
let l3 = 0;

console.log(solution(p, l));
console.log(solution(p1, l1));
console.log(solution2(p2, l2));
console.log(solution2(p3, l3));
