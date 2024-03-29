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

{
  /**
   * 11721번 열 개씩 끊어 출력하기
   * while문으로 하는 방법을 생각했었는데 이 방법이 훨씬 좋은 것 같다.
   * 문자열 length와 10단위를 비교하는 것까지 생각해냈었음.
   */
  let str = require('fs').readFileSync('/dev/stdin').toString();
  let length = str.length;

  for (let i = 0; i < length; i += 10) {
    console.log(str.slice(i, i + 10));
  }
}

{
  /**
   * 11718번, 11719번 그대로 출력하기 1, 2
   */
  let input = require('fs').readFileSync('/dev/stdin').toString();

  console.log(input);
}

{
  /**
   * 1427번 소트 인사이드
   */
  let str = require('fs').readFileSync('/dev/stdin').toString();

  str = str
    .split('')
    .sort((a, b) => b - a)
    .join('');

  console.log(str);
}

{
  /**
   * 10953번 A + B - 6
   */
  let fs = require('fs');
  let input = fs.readFileSync('/dev/stdin').toString().split('\n');
  let cases = input.shift();
  input = input.map((i) => i.split(',').map(Number));

  for (let i = 0; i < cases; i++) {
    console.log(input[i][0] + input[i][1]);
  }
}

{
  /**
   * 10808번 알파벳 개수
   */
  let str = require('fs').readFileSync('/dev/stdin').toString().toLowerCase();

  let arr = new Array(26).fill(0);

  for (let x of str) {
    arr[x.charCodeAt() - 97]++;
  }

  console.log(arr.join(' '));
}

{
  /**
   * 1181번 단어 정렬
   */
  // let strs = 'but\ni\nwont\nhesitate\nno\nmore\nno\nmore\nit\ncannot\nwait\nim\nyours';

  let fs = require('fs');
  let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
  let cases = input.shift();

  let strs = input.sort((a, b) => a.length - b.length || a.localeCompare(b));

  const final = new Set(strs);

  console.log(Array.from(final).join('\n'));
}

{
  /**
   * 2743번 단어 길이 재기
   */
  let fs = require('fs');
  let input = fs.readFileSync('/dev/stdin').toString().trim();
  console.log(input.length);
}

{
  /**
   * 1764번 듣보잡
   * 각각 배열로 처리해서 한 배열을 sort한 다음, 다른 배열의 아이템에 있는지를 판별해서 출력하는 방법을 썼는데 시간 초과됐다.
   */
  {
    // 내가 하고자 한 풀이
    let personNotHeard = ['ohhenrie', 'charlie', 'baesangwook'].sort((a, b) => a.localeCompare(b));

    let personNotSeen = ['obama', 'baesangwook', 'ohhenrie', 'clinton'];

    for (let i = 0; i < personNotHeard.length; i++) {
      let person = personNotHeard[i];
      if (personNotSeen.includes(person)) {
        console.log(person);
      }
    }
  }
  {
    // 다른 사람 풀이
    // 이진 탐색으로 푸셨다.
    const input = require('fs').readFileSync('/dev/stdin').toString().trim().split(/\s/);
    const n = +input[0];
    const m = +input[1];
    const n_arr = input.slice(2, n + 2);
    const m_arr = input.slice(n + 2);

    function binary_search(arr, name) {
      let high = arr.length - 1;
      let low = 0;
      let mid;

      while (low <= high) {
        mid = Math.floor((high + low) / 2);
        if (arr[mid] > name) high = mid - 1;
        else if (arr[mid] < name) low = mid + 1;
        else return true;
      }
      return false;
    }
    const [long, short] = n_arr.length > m_arr.length ? [n_arr, m_arr] : [m_arr, n_arr];
    long.sort();
    const dbj = short.filter((name) => binary_search(long, name));

    console.log(dbj.length + '\n' + dbj.sort().join('\n'));
  }
}

{
  /**
   * 1100번 하얀 칸
   */
  const board = require('fs').readFileSync('/dev/stdin').toString().split(/\s/);
  let count = 0;
  for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 8; j++) {
      if ((i + j) % 2 === 0 && board[i][j] === 'F') count++;
    }
  }
  console.log(count);
}

{
  /**
   * 1032번
   */
  let strs = require('fs').readFileSync('/dev/stdin').toString().split('\n');
  let cases = Number(strs.shift());

  // let strs = ['config.sys', 'config.inf', 'configures'];

  let empty = [...strs[0]];

  for (let i = 0; i < cases; i++) {
    let str = strs[i];
    for (let j = 0; j < str.length; j++) {
      let a = str[j];
      if (empty[j] !== a) {
        empty[j] = '?';
      }
    }
  }

  console.log(empty.join(''));
}

{
  /**
   * 1259번 팰린드롬수
   */
  let strs = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
  strs.pop();

  for (let i = 0; i < strs.length; i++) {
    let num = strs[i];
    num = num.toString().split('');
    let answer = 'yes';
    for (let i = 0; i < Math.floor(Math.sqrt(num.length)); i++) {
      if (num[i] !== num[num.length - i - 1]) {
        answer = 'no';
        break;
      }
    }
    console.log(answer);
  }
}

{
  /**
   * 11656번 접미사 배열
   */
  let fs = require('fs');
  let str = fs.readFileSync('/dev/stdin').toString().trim();
  str = str.split('');

  let arr = [];

  for (let i = 0; i < str.length; i++) {
    let w = str.slice(i);
    arr.push(w.join(''));
  }

  arr.sort((a, b) => a.localeCompare(b)).forEach((i) => console.log(i));
}

{
  /**
   * 1212번 8진수 2진수
   * parseInt를 이용해 8진법을 만들 수 있고, toString으로 특정 숫자를 2진법으로 출력할 수 있다는 것을 처음 알게 되었다.
   * 문제 조건을 잘 봐야하는 문제.
   * 다른 사람 풀이를 참고했다.
   * 혼자 8진법을 10진법으로 바꾸는 코드를 작성해봤다.
   */
  let fs = require('fs');
  let numbers = fs.readFileSync('/dev/stdin').toString().trim().split('');
  let answer = '';
  numbers.forEach((str, i) => {
    const dex = parseInt(str, 8);
    let binary = dex.toString(2);
    while (i !== 0 && binary.length < 3) {
      binary = '0' + binary;
    }
    answer += binary;
  });

  console.log(answer);

  {
    // 8진수를 2진수로 바꾸는 방법
    let x = 0;
    for (let i = 0; i < num.length; i++) {
      let y = num[i] * Math.pow(8, num.length - i - 1);
      x += y;
    }
  }
}
