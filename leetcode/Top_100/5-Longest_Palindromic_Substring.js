// 문자열에서 가장 긴 회문 문자열 구하는 것
/**
 * 지금 생각나는 방법은 문자열에서 하나씩 빼면서 검토해보는 것..?
 * DP로 풀어야함
 * 아니다 투포인터 쓰면 될 거 같음
 * length가 이미 같으면 빼준다
 * 계속 time limit exceeded에 걸린다 ㅜ
 */

// const longestPalindrome = function (s) {
//   let answer = '';
//   let strArr = s.split('');
//   while (strArr.length) {
//     let start = strArr[0];
//     let original = start;
//     let reversed = start.split('').reverse().join('');
//     if (original === reversed) {
//       if (original.length > answer.length) {
//         answer = original;
//       }
//     }
//     for (let i = 1; i < strArr.length; i++) {
//       start += strArr[i];
//       original = start;
//       reversed = start.split('').reverse().join('');
//       if (original === reversed) {
//         if (original.length > answer.length) {
//           answer = original;
//         }
//       }
//     }
//     strArr.shift();
//   }

//   return answer;
// };

// const longestPalindrome = function (s) {
//   let answer = '';
//   let strArr = s;
//   let original = strArr[0];
//   answer = original;
//   for (let i = 0; i < strArr.length; i++) {
//     let original = strArr[i];
//     for (let j = i + 1; j < strArr.length; j++) {
//       original += strArr[j];
//       let reversed = original.split('').reverse().join('');
//       if (original === reversed) {
//         if (original.length > answer.length) {
//           answer = original;
//         }
//       }
//     }
//   }
//   return answer;
// };

var longestPalindrome = function (s) {
  let longest = '';

  // 양 옆으로 뻗어나가는 것이다.
  const GetLongestPalindrome = (l, r) => {
    while (l >= 0 && r < s.length && s[l] === s[r]) {
      // 왜 r - l + 1을 하지..
      if (r - l + 1 > longest.length) {
        longest = s.slice(l, r + 1);
      }
      l--;
      r++;
    }
  };

  // palindrome의 센터만드는 것. 홀수일때 센터는 1개, 짝수일 때는 2개다
  for (let i = 0; i < s.length; i++) {
    GetLongestPalindrome(i, i);
    GetLongestPalindrome(i, i + 1);
  }
  return longest;
};

console.log(longestPalindrome('babad'));
// console.log(longestPalindrome('babadada'));
// console.log(longestPalindrome('cbbd'));
// console.log(longestPalindrome('a'));
// console.log(longestPalindrome('ac'));
// console.log(longestPalindrome('xabay'));
