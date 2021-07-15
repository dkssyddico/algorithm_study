// 모든 아나그램 찾기(해쉬, 투포인터, 슬라이딩 윈도우)

// S문자열에서 T문자열과 아나그램이 되는 S의 부분문자열의 개수를 구하는 프로그램을 작성하 세요. 아나그램 판별시 대소문자가 구분됩니다. 부분문자열은 연속된 문자열이어야 합니다.

// ▣ 입력설명 첫 줄에 첫 번째 S문자열이 입력되고, 두 번째 줄에 T문자열이 입력됩니다.

// S문자열의 길이는 10,000을 넘지 않으며, T문자열은 S문자열보다 길이가 작거나 같습니다.

// ▣ 출력설명 S단어에 T문자열과 아나그램이 되는 부분문자열의 개수를 출력합니다.

let str = 'bacaAacba';
let word = 'abc';

function solution(str, word) {
  let answer;
  let sum = 0;
  str = str.toLowerCase();
  let newWord = [];
  let count = 0;

  for (let a = 0; a < str.length; a++) {
    newWord.push(str[a]);
    if (newWord.length === 3) {
      let wordHash = new Map();
      for (let x of word) {
        if (wordHash.has(x)) wordHash.set(x, wordHash.get(x) + 1);
        else wordHash.set(x, 1);
      }
      for (let b of newWord) {
        if (!wordHash.has(b) || wordHash.get(b) === 0) {
          break;
        }
        wordHash.set(b, wordHash.get(b) - 1);
      }
      for (let value of wordHash.values()) {
        sum += value;
      }
      if (sum === 0) {
        count++;
      }
      newWord.shift();
      sum = 0;
    }
  }
  answer = count;
  return answer;
}

console.log(solution(str, word));

function compareMaps(map1, map2) {
  if (map1.size !== map2.size) return false;
  for (let [key, value] of map1) {
    // map2에도 있는지 확인
    // 키는 있는데 밸류값이 다를 때도 제외
    if (!map2.has(key) || map2.get(key) !== value) {
      return false;
    }
  }
  return true;
}

function tSolution(s, t) {
  let answer = 0;
  let tH = new Map();
  let sH = new Map();
  for (let x of t) {
    if (tH.has(x)) tH.set(x, tH.get(x) + 1);
    else tH.set(x, 1);
  }
  // t보다 하나 작게 sH 세팅
  let len = t.length - 1;
  for (let i = 0; i < len; i++) {
    if (sH.has(s[i])) sH.set(s[i], sH.get(s[i]) + 1);
    else sH.set(s[i], 1);
  }
  let lt = 0;
  // 슬라이딩 윈도우 세팅, rt 하나 추가하교 비교 빼고 올라가서 다시 추가, 비교 반복
  for (let rt = len; rt < s.length; rt++) {
    if (sH.has(s[rt])) sH.set(s[rt], sH.get(s[rt]) + 1);
    else sH.set(s[rt], 1);
    if (compareMaps(sH, tH)) answer++;
    // 기존 값 빼기(=맨 앞에 있는 값 빼기)
    sH.set(s[lt], sH.get(s[lt]) - 1);
    // 값이 없다면 삭제
    if (sH.get(s[lt]) === 0) sH.delete(s[lt]);
    // lt가 rt를 쫓아가도록 1씩 증가
    lt++;
  }
  return answer;
}

console.log(tSolution(str, word));
