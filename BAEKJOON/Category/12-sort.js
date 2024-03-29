{
  /**
   * 2750번 수 정렬하기
   */

  {
    /**
     * 이걸로 시도했으나 안되서 sort로 풀어벎..
     */
    const fs = require('fs');
    let nums = fs.readFileSync('./dev/stdin').toString().trim().split('\n');
    let cases = nums.shift();
    // let nums = [5, 2, 3, 4, 1];

    for (let i = 0; i < nums.length - 1; i++) {
      let currentIdx = i;
      for (let j = i + 1; j < nums.length; j++) {
        // 뒤에 있는 수(nums[j])가 더 크면 현재 인덱스를 j와 바꾼다.
        if (nums[j] < nums[currentIdx]) currentIdx = j;
      }
      [nums[i], nums[currentIdx]] = [nums[currentIdx], nums[i]];
    }

    console.log(nums.join('\n'));
  }
  {
    // 내가 원하는 식이랑 가까운 것 같다. 이렇게 해야 통과하는 듯?
    const fs = require('fs');
    const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

    const N = parseInt(input[0]);
    const data = [];

    for (let i = 1; i < N + 1; i++) {
      data.push(parseInt(input[i]));
    }

    for (let j = 0; j < data.length; j++) {
      for (let k = j + 1; k < data.length; k++) {
        if (data[j] > data[k]) {
          let temp = data[j];
          // 크기에 따라 둘의 데이터를 바꿔버림
          data[j] = data[k];
          data[k] = temp;
        }
      }
    }

    for (i = 0; i < data.length; i++) console.log(data[i]);
  }
}

{
  /**
   * 2751번 수 정렬하기 2
   * console.log로 출력하면 느려져서 최대 100만번 호출될 수 있다고 한다.
   * 그래서 문자열을 하나로 합쳐서 출력하는게 빠른 방법이라고 함!
   * 백준을 풀면서 몇번 봤던 이야기였는데 다음 문제부터는 join을 이용해 하나의 문자열로 출력할 수 있도록 노력해야겠다.
   * 출처: https://www.acmicpc.net/board/view/47265
   *
   * 다른 사람은 퀵 정렬으로 문제를 풀었다.
   * 퀵 정렬은 하나의 기준점(pivot)을 설정하고 기준점보다 이상인지 이하인지 비교해서 정렬하는 방법이다. 하나의 기준점으로 분류하고 그 나눠진 이하, 이상 그룹도 그 안에서 하나의 pivot을 정해서 이상 이하로 분류해주는 방법이다.
   * 퀵소트 방법 출처: https://dpsc615.tistory.com/138
   */
  const fs = require('fs');
  let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

  const cases = Number(input.shift());

  input = input.sort((a, b) => a - b);

  console.log(input.join('\n'));
}

{
  /**
   * 11650번 좌표 정렬하기
   * 한 번에 모아서 출력하는게 시간 절약에 좋다!
   */
  const fs = require('fs');
  const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
  let cases = input.shift();

  let arrs = input.map((i) => i.split(' ').map(Number));

  let result = '';

  arrs
    .sort((a, b) => (a[0] === b[0] ? a[1] - b[1] : a[0] - b[0]))
    .forEach((i) => (result += `${i[0]} ${i[1]}\n`));

  console.log(result);
}

{
  /**
   * 2309 일곱난쟁이
   * 다른 사람 풀이를 참고해서 풀었음.
   * 모든 난쟁이들의 키의 합을 구하고 100을 뺀다.
   * 모든 키의 합은 일곱 난장이의 키의 합 + 2명의 합인데, 이 2명의 합을 반복문으로 찾아주면 되는 거였다.
   * 해당하는 인덱스를 변수에 할당해주고 출력할 때 그 인덱스만 출력해주지 않으면 쉽게 해결!
   */
  const fs = require('fs');
  let dwarfs = fs.readFileSync('/dev/stdin').toString().trim().split('\n').map(Number);

  // let dwarfs = [20, 7, 23, 19, 10, 15, 25, 8, 13];

  dwarfs.sort((a, b) => a - b);

  let sum = dwarfs.reduce((a, b) => a + b);

  let minus = sum - 100;

  let p1, p2;
  for (let i = 0; i < 8; i++) {
    for (let j = i + 1; j < 9; j++) {
      if (dwarfs[i] + dwarfs[j] === minus) {
        [p1, p2] = [i, j];
        break;
      }
    }
  }

  let result = '';

  for (let i = 0; i < dwarfs.length; i++) {
    if (i !== p1 && i !== p2) {
      result += `${dwarfs[i]}\n`;
    }
  }

  console.log(result);
}

{
  /**
   * 10814번 나이 순 정렬
   * sort 메소드에서 split을 사용하면 시간이 오래걸린다고 함.
   */

  // let arr = [
  //   [21, 'Junkyu'],
  //   [21, 'Dohyun'],
  //   [20, 'Sunyoung'],
  // ];

  const fs = require('fs');
  let arr = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
  let cases = arr.shift();

  arr.sort((a, b) => a.split(' ')[0] - b.split(' ')[0]);

  console.log(arr.join('\n'));

  {
    /**
     * 이 코드를 하니 거의 3배의 시간이 절약됨!
     * parseInt와 parseFloat는 문자를 분석해서 정수를 반환하는 기능이 있다고 함.
     */
    const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

    const len = input.shift();

    input.sort((a, b) => parseFloat(a) - parseFloat(b));

    console.log(input.join('\n'));
  }
}

{
  /**
   * 11651번 좌표 정렬하기 2
   * 이전에 풀었던거랑 같지만 답을 구하는 조건이 약간 다른 문제.
   */

  const fs = require('fs');
  const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
  let cases = input.shift();

  let arrs = input.map((i) => i.split(' ').map(Number));

  let result = '';

  arrs
    .sort((a, b) => (a[1] === b[1] ? a[0] - b[0] : a[1] - b[1]))
    .forEach((i) => (result += `${i[0]} ${i[1]}\n`));

  console.log(result);
}

{
  /**
   * 2108 통계학
   * 참고: https://nyang-in.tistory.com/225
   * 평균, 범위, 중간값 구하는 거는 쉬운데 최빈값이 약간 까다롭다.
   * 원본 숫자 배열을 오름차순으로 정리해주고 Map으로 각 숫자가 몇번 나왔는지 정리해준다
   */
  let fs = require('fs');
  let input = fs.readFileSync('/dev/stdin').toString().split('\n');
  const N = Number(input[0]);
  input.shift();
  const result = [];
  const array = new Array(8001);
  array.fill(0);
  for (let i = 0; i < N; i++) {
    let index = Number(input[i]) + 4000;
    array[index]++;
  }
  for (let j = 0; j < array.length; j++) {
    if (array[j] !== 0) {
      for (let k = 0; k < array[j]; k++) {
        result.push(j - 4000);
      }
    } else {
      continue;
    }
  }
  // 산술평균 : N개의 수들의 합을 N으로 나눈 값
  function getAverage(array) {
    let sum = 0;
    for (let i = 0; i < N; i++) {
      sum += array[i];
    }
    return Math.round(sum / N);
  }
  // 중앙값 : N개의 수들을 증가하는 순서로 나열했을 경우 그 중앙에 위치하는 값
  function getMedian(array) {
    const mid = Math.floor(array.length / 2);
    return array[mid];
  }
  // 최빈값 : N개의 수들 중 가장 많이 나타나는 값
  function getMostValue(array) {
    const map = new Map();
    for (let i = 0; i < N; i++) {
      if (!map.has(array[i])) {
        map.set(array[i], 1);
      } else {
        map.set(array[i], map.get(array[i]) + 1);
      }
    }
    let maxValue = 0;
    let answer = [];
    map.forEach((element, key) => {
      // forEach(값, 키, map 객체 자체)
      if (maxValue < element) {
        maxValue = element;
        answer = [];
        answer.push(key);
        // answer = key;
      } else if (maxValue === map.get(key)) {
        answer.push(key);
      }
    });
    return answer.length !== 1 ? answer[1] : answer[0];
  }
  // 범위 : N개의 수들 중 최댓값과 최솟값의 차이
  function getRange(array) {
    return array[array.length - 1] - array[0];
  }

  console.log(getAverage(result));
  console.log(getMedian(result));
  console.log(getMostValue(result));
  console.log(getRange(result));
  {
    /**
     * 내가 푼 풀이
     * 나도 로컬에서 테스트하면 예제 답안과 같게 나오는데 실제로 돌려봤을 땐 계속 틀렸습니다가 나왔다 ㅜ
     */
    const fs = require('fs');
    let arr = fs.readFileSync('/dev/stdin').toString().trim().split('\n').map(Number);
    let cases = arr.shift();

    // let arr = [-1, -2, -3, -1, -2];

    arr = arr.sort((a, b) => a - b);

    function getAverage(arr) {
      let sum = arr.reduce((a, b) => a + b);
      return Math.round(sum / arr.length);
    }

    function getMiddleValue(arr) {
      let m = Math.floor(arr.length / 2);
      return arr[m];
    }

    function getFrequentValue(arr) {
      let map = new Map();
      for (let i = 0; i < arr.length; i++) {
        let num = arr[i];
        if (map.has(num)) {
          map.set(num, map.has(num) + 1);
        } else {
          map.set(num, 1);
        }
      }

      let max = 0;
      let answer = [];
      map.forEach((element, index) => {
        if (max < element) {
          max = element;
          answer = [];
          answer.push(index);
        } else if (max === map.get(index)) {
          answer.push(index);
        }
      });
      return answer.length !== 1 ? answer[1] : answer[0];
    }

    function getRange(arr) {
      return arr[arr.length - 1] - arr[0];
    }

    console.log(getAverage(arr));
    console.log(getMiddleValue(arr));
    console.log(getFrequentValue(arr));
    console.log(getRange(arr));
  }
}

{
  /**
   * 2752번 세 수
   */
  const fs = require('fs');
  let arr = fs.readFileSync('/dev/stdin').toString().trim().split(' ').map(Number);

  arr = arr.sort((a, b) => a - b);

  console.log(`${arr[0]} ${arr[1]} ${arr[2]}`);
}

{
  /**
   * 10825번 국영수 (https://www.acmicpc.net/problem/10825)
   */
  {
    // 내 풀이: 실패
    // 삼항 연산자로 풀려고 했으나 문자열 비교에 대해서는 제대로 정렬이 되지 않았음.
    let arr = [
      ['Junkyu', 50, 60, 100],
      ['Sangkeun', 80, 60, 50],
      ['Sunyoung', 80, 70, 100],
      ['Soong', 50, 60, 90],
      ['Haebin', 50, 60, 100],
      ['Kangsoo', 60, 80, 100],
      ['Donghyuk', 80, 60, 100],
      ['Sei', 70, 70, 70],
      ['Wonseob', 70, 70, 90],
      ['Sanghyun', 70, 70, 80],
      ['nsj', 80, 80, 80],
      ['Taewhan', 50, 60, 90],
    ];

    let result = '';
    // 이름 국 영 수

    let arr2 = [2, 3, 9, 7, 8];

    // 감소하는 순서
    console.log(arr2.sort((a, b) => b - a));

    arr.sort((a, b) =>
      a[1] === b[1]
        ? a[1] === b[1] && a[2] === b[2]
          ? a[1] === b[1] && b[2] === a[2] && a[3] === b[3]
            ? a[0].toLowerCase() - b[0].toLowerCase()
            : b[3] - a[3]
          : a[2] - b[2]
        : b[1] - a[1]
    );

    console.log(arr);
  }
  const [n, ...arr] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

  arr
    .map((v) => v.split(' ').map((vv) => Number(vv) || vv))
    .sort((a, b) => {
      if (a[1] > b[1]) return -1;
      else if (a[1] < b[1]) return 1;
      else {
        if (a[2] > b[2]) return 1;
        else if (a[2] < b[2]) return -1;
        else {
          if (a[3] < b[3]) return 1;
          else if (a[3] > b[3]) return -1;
          else {
            if (a[0] > b[0]) return 1;
            else if (a[0] < b[0]) return -1;
            else return 0;
          }
        }
      }
    });

  arr.forEach((a) => (result += `${a[0]}\n`));

  console.log(result);
  {
    // 백준 다른 사람 풀이
    // 직관적이고 눈에 잘 들어온다..
    const stdin = require('fs').readFileSync('/dev/stdin').toString();
    const [N, ...input] = stdin
      .trim()
      .split('\n')
      .map((x) => x.split(' ').map((v, i) => (i === 0 ? v : +v)));

    input.sort((a, b) => {
      const isEqualAllScores = a[1] === b[1] && a[2] === b[2] && a[3] === b[3];
      const isEqualKorEng = a[1] === b[1] && a[2] === b[2];
      const isEqualKor = a[1] === b[1];
      if (isEqualAllScores) {
        return a[0] > b[0] ? 1 : -1;
      }
      if (isEqualKorEng) {
        return b[3] - a[3];
      }
      if (isEqualKor) {
        return a[2] - b[2];
      }
      return b[1] - a[1];
    });

    let answer = '';

    input.forEach((x) => (answer += x[0] + '\n'));

    console.log(answer);
  }
}

{
  /**
   * 10815번 숫자 카드
   * 이분 검색을 하는 거라 대체로 쉽게 풀었다! 내 기억력 만세 ㅎㅎ
   */
  // let counts = 5;
  // let cardArr = [6, 3, 2, 10, -10];
  // let total = 8;
  // let cardArr2 = [10, 9, -5, 2, 3, 4, 5, -10];
  const fs = require('fs');
  const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
  let counts = Number(input[0]);
  let cardArr = input[1].split(' ').map(Number);
  let total = Number(input[2]);
  let cardArr2 = input[3].split(' ').map(Number);

  cardArr = cardArr.sort((a, b) => a - b);

  for (let i = 0; i < total; i++) {
    let card = cardArr2[i];
    let result = hasCard(card);
    if (result) {
      cardArr2[i] = 1;
    } else {
      cardArr2[i] = 0;
    }
  }

  function hasCard(card) {
    let result = false;
    let left = 0;
    let right = cardArr.length - 1;
    while (left <= right) {
      let middle = Math.floor((left + right) / 2);
      if (cardArr[middle] === card) {
        result = true;
        break;
      } else if (cardArr[middle] < card) {
        left = middle + 1;
      } else if (cardArr[middle] > card) {
        right = middle - 1;
      }
    }
    return result;
  }

  console.log(cardArr2.join(' '));
}

{
  // 11004번 K번째 수
  const fs = require('fs');
  const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
  const count = Number(input[0].split(' ')[0]);
  const K = Number(input[0].split(' ')[1]);
  const arr = input[1]
    .split(' ')
    .map(Number)
    .sort((a, b) => a - b);

  console.log(arr[K - 1]);
}

{
  // 11728번 배열 합치기
  const fs = require('fs');
  const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
  let a = input[1].split(' ').map(Number);
  let b = input[2].split(' ').map(Number);

  console.log(
    a
      .concat(b)
      .sort((a, b) => a - b)
      .join(' ')
  );
}
