function solution(clothes) {
  let answer = 1;
  let obj = {};
  // for (let i = 0; i < clothes.length; i++) {
  //   if (obj[clothes[i][1]] >= 1) {
  //     obj[clothes[i][1]] += 1; // 중복되는 의상 종류일 때 +1
  //   } else {
  //     obj[clothes[i][1]] = 1; // 처음 등장하는 종류일 때 1로 초기화
  //   }
  // }
  for (let i = 0; i < clothes.length; i++) {
    obj[clothes[i][1]] = (obj[clothes[i][1]] || 0) + 1;
  }
  console.log(obj);
  for (let key in obj) {
    console.log(obj[key], key);
    console.log(`answer: ${answer}`);
    answer *= obj[key] + 1; // 의상의 종류별로 모든 조합의 수 곱함, 해당 의상을 안입는 경우가 있어서 + 1을 해줌!
  }
  return answer - 1; // 아무것도 안입는 경우를 빼주기 위해 -1
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

// console.log(solution(item2));

function solution2(clothes) {
  let answer = 1;
  let map = new Map();
  for (let i = 0; i < clothes.length; i++) {
    map.set(clothes[i][1], (map.get(clothes[i][1]) || 0) + 1);
  }
  console.log(map);
  for (let value of map.values()) {
    answer *= value + 1;
  }
  return answer - 1;
}

console.log(solution2(items));
