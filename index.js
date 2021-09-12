function solution(items) {
  let answer = 0;
  let map = new Map();
  let tmp = 1;
  for (let i = 0; i < items.length; i++) {
    let item = items[i];
    map.set(item[1], (map.get(item[1]) || 0) + 1);
  }
  return answer;
}

let items = [
  ['yellowhat', 'headgear'],
  ['bluesunglasses', 'eyewear'],
  ['green_turban', 'headgear'],
];

let item2 = [
  ['crowmask', 'face'],
  ['bluesunglasses', 'face'],
  ['smoky_makeup', 'face'],
];

console.log(solution(items));

console.log(solution(item2));
