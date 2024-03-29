const lengthOfLongestSubstring = function (s) {
  let max = 0;
  if (s.length === 0) {
    max = 0;
  } else if (s.length === 1) {
    max = 1;
  }
  let stringArr = s.split('');
  let tmp = [];
  for (let i = 0; i < stringArr.length; i++) {
    let first = stringArr[i];
    tmp.push(first);
    for (let j = i + 1; j < stringArr.length; j++) {
      let compare = stringArr[j];
      if (compare !== first) {
        if (tmp.includes(compare)) {
          tmp = [];
          break;
        } else {
          tmp.push(compare);
          first = compare;
          max = Math.max(max, tmp.length);
        }
      } else {
        max = Math.max(max, tmp.length);
        tmp = [];
        break;
      }
    }
  }
  return max;
};

console.log(lengthOfLongestSubstring('bbbbb'));

// aab, dvdf,"bbbbb",
// "pwwkew"

// ㅇㄹㄴㅇㄹ
// 첫번째 글자부터 판별해야됨
// 다음 글자랑 같은지 다른지
// 같으면 끝내야 하고 기준점이 다음 글자가 된다. 배열도 비워줘야함.
// 그때까지 배열에 얼마나 담겼는지 length를 재서 저장한다.
// 다르면 계속 판별한다.
// 중간에 같은 글자가 있으면 ? 배열로 만들어야 하는ㄱ ㅓㅅ 같음.. indexOf 이런걸로 찾기
// 보니까 첫글자부터 뺑 돌아야하는거 같음. a가 첫글자일때 v가 첫글자일때...

var lengthOfLongestSubstring2 = function (s) {
  let n = s.length;
  let counter = 0;
  let left = 0;
  let right = 0;
  let chars = {};

  while (right < n) {
    if (!chars[s[right]]) {
      chars[s[right]] = 1;
      right++;
      counter = Math.max(counter, Object.keys(chars).length);
    } else {
      delete chars[s[left]];
      left++;
    }
  }
  return counter;
};

console.log(lengthOfLongestSubstring2('pkewew'));
