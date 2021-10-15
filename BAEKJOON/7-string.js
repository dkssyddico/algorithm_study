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

{
  // 2675번 문자열 반복
  // 내 풀이: 3중 for문이라 복잡해 보인다. 그런데 생각보다 런타임은 얼마 안걸린듯?
  let x = [2, [3, 'ABC'], [5, '/HTP']];
  for (let i = 1; i <= x[0]; i++) {
    let count = x[i][0];
    let string = x[i][1];
    let answer = '';
    for (let j = 0; j < string.length; j++) {
      for (let k = 0; k < count; k++) {
        answer += string[j];
      }
    }
    console.log(answer);
  }
  // 다른 사람 풀이에서 repeat이라고 인자로 받은 갯수만큼 문자열을 반복해주는 함수를 찾아서 응용해봄
  // 메모리는 덜 먹는데 시간은 쬐끔 더 김.
  let x = [2, [3, 'ABC'], [5, '/HTP']];
  for (let i = 1; i <= x[0]; i++) {
    let count = x[i][0];
    let string = x[i][1];
    let answer = '';
    for (let j = 0; j < string.length; j++) {
      answer += string[j].repeat(count);
    }
    console.log(answer);
  }
}

{
  // 1152번 단어의 갯수
  // 텅빈 공백만 주어진 경우에는 0으로 처리해야된다.
  let string = '    '.trim();
  if (string.length === 0) {
    console.log(0);
  }
  console.log(string.split(' ').length);
}

{
  // 2908번 숫자 뒤집기. 주어진 숫자들을 뒤집어서 가장 큰 수 찾기
  let nums = require('fs').readFileSync('/dev/stdin').toString().split(' ').map(Number);

  let reversedNum = [];

  // 숫자 뒤집기 만들기
  for (let i = 0; i < nums.length; i++) {
    let result = makeReversedNum(nums[i]);
    reversedNum.push(result);
  }

  function makeReversedNum(num) {
    let str = '';
    for (let i = 0; i < String(num).length; i++) {
      let x = num % 10;
      str += String(x);
      num = Math.floor(num / 10);
      if (num < 10) {
        str += String(num);
      }
    }
    return Number(str);
  }

  console.log(Math.max(...reversedNum));
}

{
  // 5622번 다이얼
  // 아스키코드를 활용하거나 아예 하드코딩한 사람이 많았다.
  let dial = require('fs').readFileSync('/dev/stdin').toString().trim();
  let strArr = ['ABC', 'DEF', 'GHI', 'JKL', 'MNO', 'PQRS', 'TUV', 'WXYZ'];
  let result = 0;

  for (let i = 0; i < dial.length; i++) {
    const time = calculateTime(dial[i]);
    result += time + 3;
  }

  function calculateTime(str) {
    let idx = 0;
    for (let i = 0; i < strArr.length; i++) {
      let words = strArr[i];
      let result = words.includes(str);
      if (result) {
        idx = i;
      }
    }
    return idx;
  }

  console.log(result);
}

{
  // 2941번 크로아티아 단어
  // split.join 같이 쓰기!
  let croatia = ['c=', 'c-', 'dz=', 'd-', 'lj', 'nj', 's=', 'z='];
  let word = require('fs').readFileSync('/dev/stdin').toString().trim();

  for (let i = 0; i < croatia.length; i++) {
    let c = croatia[i];
    word = word.split(c).join('H');
  }

  console.log(word.length);
}

{
  // 1316번 그룹단어 체커
  // 내풀이 나는 초반에는 i를 1부터 설정해서 word[i-1]과 word[i]를 비교하는 식으로 했는데 이 풀이가 더 나은 듯

  let fs = require('fs');
  let input = fs.readFileSync('/dev/stdin').toString().split('\n');

  const count = Number(input[0]);
  let answer = 0;

  for (let i = 1; i <= count; i++) {
    const word = input[i];
    const letter = [];
    let result = true;

    for (let j = 0; j < word.length; j++) {
      if (letter.indexOf(word[j]) === -1) {
        letter.push(word[j]);
      } else {
        if (letter.indexOf(word[j]) !== letter.length - 1) {
          result = false;
          break;
        }
      }
    }

    if (result) {
      answer += 1;
    }
  }

  console.log(answer);
  {
    // 다른 사람 풀이
    let input = fs.readFileSync(filepath).toString().split('\n');

    let number = Number(input[0]);
    const words = input.slice(1);
    let count = number;

    for (let i = 0; i < number; i++) {
      let word = words[i];

      for (let j = 0; j < word.length; j++) {
        if (word[j] === word[j + 1]) {
        } else {
          if (word.slice(j + 1).includes(word[j])) {
            count -= 1;
            break;
          }
        }
      }
    }
    console.log(count);
  }
}
