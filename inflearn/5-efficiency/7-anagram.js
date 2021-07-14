// Anagram이란 두 문자열이 알파벳의 나열 순서를 다르지만 그 구성이 일치하면 두 단어는 아 나그램이라고 합니다.

// 예를 들면 AbaAeCe 와 baeeACA 는 알파벳을 나열 순서는 다르지만 그 구성을 살펴보면 A(2), a(1), b(1), C(1), e(2)로 알파벳과 그 개수가 모두 일치합니다. 즉 어느 한 단어를 재 배열하면 상대편 단어가 될 수 있는 것을 아나그램이라 합니다.

// 길이가 같은 두 개의 단어가 주어지면 두 단어가 아나그램인지 판별하는 프로그램을 작성하세 요. 아나그램 판별시 대소문자가 구분됩니다.

// ▣ 입력설명 첫 줄에 첫 번째 단어가 입력되고, 두 번째 줄에 두 번째 단어가 입력됩니다. 단어의 길이는 100을 넘지 않습니다.

// ▣ 출력설명 두 단어가 아나그램이면 “YES"를 출력하고, 아니면 ”NO"를 출력합니다.
function solution(str1, str2) {
  let answer = 'YES';
  let map1 = new Map(),
    map2 = new Map();
  for (let s of str1) {
    if (map1.has(s)) map1.set(s, map1.get(s) + 1);
    else map1.set(s, 1);
  }
  for (let s of str2) {
    if (map2.has(s)) map2.set(s, map2.get(s) + 1);
    else map2.set(s, 1);
  }
  let arr1 = Array.from(map1).sort();
  let arr2 = Array.from(map2).sort();
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i][0] !== arr2[i][0] || arr1[i][1] !== arr2[i][1]) {
      return (answer = 'NO');
    }
  }
  return answer;
}

let str1 = 'AbaAeCe';
let str2 = 'baeeACA';
let str3 = 'abaCC';
let str4 = 'Caaab';

// console.log(solution(str1, str2));
// console.log(solution(str3, str4));

function tSolution(str1, str2) {
  let answer = 'YES';
  let sH = new Map();
  for (let x of str1) {
    if (sH.has(x)) {
      sH.set(x, sH.get(x) + 1);
    } else {
      sH.set(x, 1);
    }
  }
  for (let y of str2) {
    if (!sH.has(y) || sH.get(y) === 0) answer = 'NO';
    sH.set(y, sH.get(y) - 1);
  }
  return answer;
}

console.log(tSolution(str3, str4));
console.log(tSolution(str1, str2));
