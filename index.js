function solution(progresses, speeds) {
  let answer = [];
  // 소요된 작업 시간 계산
  let queue = progresses.map((item, index) => {
    return Math.ceil((100 - item) / speeds[index]);
  });
  // 맨 처음 시간을 기준으로 잡고 어디까지 같이 없어질 수 있는지
  // 다음 아이템이 걸리는 시간이 더 크다면 어떻게 한 개 아이템만 없어질 수 있는지
  console.log('queue', queue);

  while (queue.length) {
    let first = queue.shift();
    console.log(`first: ${first}`);
    let flag = true;
    let count = 1;
    for (let i = 0; flag; i++) {
      let compare = queue[0];
      if (first >= compare) {
        count++;
        queue.shift();
      } else {
        flag = false;
        break;
      }
    }
    answer.push(count);
  }
  return answer;
}

let p = [93, 30, 55];
let s = [1, 30, 5];

let p1 = [95, 90, 99, 99, 80, 99];
let s1 = [1, 1, 1, 1, 1, 1];

let p2 = [20, 99, 93, 30, 55, 10];
let s2 = [5, 10, 1, 1, 30, 5];

let p3 = [99, 99, 99];
let s3 = [1, 1, 1];

let p4 = [96, 99, 98, 97];
let s4 = [1, 1, 1, 1];

let p5 = [40, 93, 30, 55, 60, 65];
let s5 = [60, 1, 30, 5, 10, 7];

let p6 = [93, 30, 55, 60, 40, 65];
let s6 = [1, 30, 5, 10, 60, 7];

console.log(solution(p, s)); // [2, 1]
console.log(solution(p1, s1)); // [1, 3, 2]
console.log(solution(p2, s2)); // [3, 3]
console.log(solution(p3, s3)); // [3]
console.log(solution(p4, s4)); // [4]
console.log(solution(p5, s5)); // [1, 2, 3]
console.log(solution(p6, s6)); // [2, 4]
console.log(solution([1], [1])); // [2, 4]

// [3, 3]
