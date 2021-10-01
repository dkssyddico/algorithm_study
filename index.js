function solution(name) {
  let answer = 0;
  let nameArr = name.split('').map((n, index) => n.charCodeAt() - 'A'.charCodeAt());
  let end = 26;
  for (let i = 0; i < nameArr.length; i++) {
    let gap = nameArr[i];
    if (gap > 13) {
      let left = end - gap;
      answer = answer + left;
    } else if (gap === 0) {
      continue;
    } else {
      answer = answer + gap;
    }
    if (i !== nameArr.length - 1) {
      answer += 1;
    }
  }
  return answer;
}

// console.log(solution('AAN')); //
// console.log(solution('JAN')); // 23
// console.log(solution('JEROEN')); // 56
// console.log(solution('ZAAAZZZZZZZ')); // 15
console.log(solution('ABAAAAAAAAABB')); // 15
// 1 / + 1 / + 1 / + 1 / + 1

// a b c d e
// f g h i j
// k l m n o
// p q r s t
// u v w x y
// z

//

/**
 * ▲ - 다음 알파벳
▼ - 이전 알파벳 (A에서 아래쪽으로 이동하면 Z로)
◀ - 커서를 왼쪽으로 이동 (첫 번째 위치에서 왼쪽으로 이동하면 마지막 문자에 커서)
▶ - 커서를 오른쪽으로 이동
 */

/**
 * 이전 알파벳을 기억해야 함.
AAA로 시작함.
반절이 넘어가면 거꾸로 출발하는게 나을 수도 있다 a -> z 로 갈 때 방향키 아래로 누르는 것 처럼..
z: 90 a: 65
어디까지가 그냥 위로만 올려도 되고 어디까지가 아래로 내려서 해야할 범위일까 ?
판별하려는 숫자 - 기준 A일 듯
처음 다음에는 +1 씩 해줘야하고 A가 나오면 또 그냥 바로 옆칸으로 옮기는 로직
마지막이면 + 1 할 필요 없음
커서를 한 번 이동한것도 카운트해줘야함.
A가 있고 A 다음에 마지막 한글자 남았을 때 or A 다음에 글자가 더 남았을 때
왼쪽으로 이동하면 아예 마지막으로 이동함.. 
갭보다 큰 수를 만났을 때 왼쪽으로 이동하게 하는 방법을 어떻게 짤까.. 
오른쪽으로 Non-a 가 아닌애 찾는 수, 왼쪽으로 찾는 수 
end의 기준은 26임 
charCodeAt
 */

/**
 * 0 1 2 3 4
 * 5 6 7 8 9
 * 10 11 12 13 14
 * 15 16 17 18 19
 * 20 21 22 23 24
 * 25
 */
