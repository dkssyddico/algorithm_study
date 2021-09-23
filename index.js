const lengthOfLongestSubstring = function (s) {
  let answer = '';
  let first = s[0];
  let max = 0;
  if (first) {
    answer += first;
    max = answer.length;
  }
  for (let i = 1; i < s.length; i++) {
    let compare = s[i];
    if (compare !== first) {
      if (!answer.includes(compare)) {
        answer += compare;
        first = compare;
        max = Math.max(max, answer.length);
      } else {
        answer = '';
        answer += first;
        first = s[i];
        answer += compare;
      }
    } else {
      answer = '';
      first = s[i];
      answer += first;
    }
  }
  console.log(answer);
  return max;
};

console.log(lengthOfLongestSubstring('anviaj'));

// aab, dvdf

/**
 * 첫번째 글자부터 판별해야됨
 * 다음 글자랑 같은지 다른지
 * 같으면 끝내야 하고 기준점이 다음 글자가 된다. 배열도 비워줘야함.
 * 그때까지 배열에 얼마나 담겼는지 length를 재서 저장한다.
 * 다르면 계속 판별한다.
 * 보니까 첫글자부터 뺑 돌아야하는거 같음. a가 첫글자일때 v가 첫글자일때...
 */
