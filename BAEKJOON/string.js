{
  // 11654번 아스키코드
  let input = require('fs').readFileSync('/dev/stdin').toString();

  console.log(input.charCodeAt());
}

{
  // 11720번 숫자의 합
  let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
  let count = Number(input[0]);
  let nums = input[1];
  let sum = 0;

  for (let i = 0; i < count; i++) {
    sum += Number(nums[i]);
  }

  console.log(sum);
}

{
  // 1157번 단어 공부
  let word = 'Missisipi'.toUpperCase();

  let arr = Array.from({ length: 26 }, () => 0);
  for (let i = 0; i < word.length; i++) {
    arr[word[i].charCodeAt() - 65]++;
  }

  let max = Math.max(...arr);
  let maxIdx = arr.indexOf(max);
  let duplicate = false;

  for (let j = 0; j < arr.length; j++) {
    if (arr[j] === max && maxIdx !== j) {
      duplicate = true;
      break;
    }
  }

  console.log(duplicate ? '?' : String.fromCharCode(maxIdx + 65));
}
