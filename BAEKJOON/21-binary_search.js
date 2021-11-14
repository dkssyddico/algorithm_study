{
  /**
   * 1920 수 찾기
   * 기본적인 이분 검색 문제
   * 배열의 시작과 끝 인덱스로 mid 인덱스를 만들어 mid 인덱스의 수와 현재 수를 비교해서 찾아나가는 방식
   * 백준 설정 때매 또 고생..
   */
  const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

  const [N, standard, M, target] = input.map((v) => v.split(' ').map((x) => Number(x)));

  standard.sort((a, b) => a - b);

  const binarySearch = (num) => {
    let answer = 0;
    let low = 0;
    let high = standard.length - 1;
    while (low <= high) {
      let mid = Math.floor((low + high) / 2);
      let guess = standard[mid];
      if (guess === num) {
        return (answer = 1);
      } else if (guess > num) {
        high = mid - 1;
      } else if (guess < num) {
        low = mid + 1;
      }
    }
    return answer;
  };

  const result = target.map((num) => binarySearch(num));

  console.log(result.join('\n'));
}

{
  /**
   * 10816번 숫자 카드 2
   * 중복이 있어서 어떻게 처리할까 하다가 배열을 이용.
   * Map을 이용하면 sort와 이분 검색이 어려움.
   */

  const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

  let cards = input[1].split(' ').map((i) => +i);
  cards.sort((a, b) => a - b);

  let target = input[3].split(' ').map((i) => +i);

  let cardMap = [[cards[0], 1]];

  for (let i = 1; i < cards.length; i++) {
    if (cards[i - 1] === cards[i]) {
      cardMap[cardMap.length - 1][1]++;
    } else {
      cardMap.push([cards[i], 1]);
    }
  }

  const binarySearch = (num) => {
    let answer = 0;
    let low = 0;
    let high = cardMap.length - 1;
    while (low <= high) {
      let mid = Math.floor((low + high) / 2);
      let guess = cardMap[mid][0];
      if (guess === num) {
        return (answer = cardMap[mid][1]);
      } else if (guess > num) {
        high = mid - 1;
      } else if (guess < num) {
        low = mid + 1;
      }
    }

    return answer;
  };

  const result = target.map((num) => binarySearch(num));

  console.log(result.join('\n'));
}

{
  /**
 * 1654번 랜선 자르기
 * parametric search 문제라는데 구글에서 개념을 찾아봐도 아직 확실히 이해는 못했다.
 * 파라메트릭 서치는 이진탐색과 다르게 주어진 일련의 값들이 아니라 주어진 범위 내에서 원하는 값 또는 원하는 조건에 가장 일치하는 값을 찾아내는 알고리즘입니다.
 * 실제로 파라메트릭 서치를 사용하면 최적화 문제를 결정 문제로 바꾸어 풀 수 있게 되어 문제 접근이 상당히 용이해집니다. 최적화 문제를 결정 문제로 바꾸어 푼다는 말은 주어진 상황에서 최솟값, 최댓값 등의 특정 값을 구하는 문제를 특정 값이 어떠한 조건을 만족하는지만 확인하면 되는 문제로 바뀐다는 의미입니다. 라고 한다. 출처(https://marades.tistory.com/7)
 * 다른 사람 풀이를 가져와서 보니 이것도 이진 탐색 문제이기는 하다. 그러나 한 번 조건을 만족해서 바로 그게 답인 것이 아니라 문제 자체에서 최댓값은 얼마인지 물어보기 때문에 계속 while문이 돌아가는 것이다.
 * 이 문제에 대한 다른 분 설명 (https://velog.io/@lake/%EC%9D%B4%EB%B6%84%ED%83%90%EC%83%89-%ED%8C%8C%EB%9D%BC%EB%A9%94%ED%8A%B8%EB%A6%AD-%EC%84%9C%EC%B9%98Parametric-Search):
 * 풀이 아이디어는 적절한 길이를 찾을 때까지 랜선의 길이를 반복해서 조절하는 것이다. 그래서 '현재 이 길이로 자르면 조건을 만족할 수 있는가?'를 확인한 뒤에 조건의 만족 여부('예' 혹은 '아니오')에 따라서 탐색 범위를 좁혀서 해결할 수 있다.
범위를 좁힐 때는 이분 탐색의 원리를 이용하여 절반씩 탐색 범위를 좁혀나간다.
 * 파라메트릭 서치라는 새로운 개념에 겁먹어서 풀어보려고 노력하지 않은게 좀 아쉽다. 어쨌거나 이분 검색을 응용한 문제인데 바로 최소값과 최댓값에 대해 계속 이분 탐색이라도 해봤으면 어땠을까 싶다. 다음 문제를 통해서 계속 익숙해져야겠다. 
 */

  const fs = require('fs');
  const [A, ...B] = fs.readFileSync('./dev/stdin').toString().trim().split('\n');

  const [K, N] = A.split(' ');
  const cable = B.map((v) => +v);

  // const N = 11;
  // const cable = [802, 743, 457, 539];

  let min = 0;
  let max = Math.max(...cable);
  let answer = 0;
  while (min <= max) {
    let mid = Math.floor((min + max) / 2);
    let cnt = 0;
    cable.forEach((c) => {
      cnt += Math.floor(c / mid);
    });
    if (cnt >= N) {
      if (mid > answer) answer = mid;
      min = mid + 1;
    } else {
      max = mid - 1;
    }
  }
  console.log(answer);
}

{
  /**
   * 2805번 나무자르기
   * StackSizeExceeded 나와서 다른 사람 풀이 참고. 높이가 커서 Math.max를 하면 안되나보다.
   * 전체적인 풀이는 위에 문제랑 비슷하다.
   */
  // let trees = [4, 42, 40, 26, 46];
  // let minimumTrees = 20;

  const fs = require('fs');
  const [n, t] = fs.readFileSync('./dev/stdin').toString().trim().split('\n');

  const minimumTrees = n.split(' ')[1];
  const trees = [];
  let max = 0;
  t.split(' ').forEach((v) => {
    v = +v;
    if (+v > max) max = v;
    trees.push(v);
  });

  let min = 0;
  let answer = 0;
  while (min <= max) {
    let mid = Math.floor((min + max) / 2);
    let cnt = 0;
    trees.forEach((t) => {
      let left = t - mid;
      if (left > 0) {
        cnt += left;
      }
    });
    if (cnt >= minimumTrees) {
      if (mid > answer) {
        answer = mid;
      }
      min = mid + 1;
    } else {
      max = mid - 1;
    }
  }

  console.log(answer);
}

{
  /**
   * 2110번 공유기 설치
   * 주어진 공유기 갯수와 집 갯수를 가지고 공유기를 설치하는 데 있어서 집 사이의 최대 거리를 구하는 문제
   * 1, 2, 4, 8, 9
   * 위에 문제와는 다른 점은 주어진 집을 가지고 범위를 정해야한다는 점이다.
   * 가장 적은 거리는 1, 초기 최대 거리는 가장 큰 수 - 가장 적은 수를 한다.
   * 그리고 이분 탐색 답게 mid를 구하고, 처음 집을 기준으로 다음 집과의 거리를 mid와 비교해본다.
   * 이때 공유기 카운트는 미리 1을 해주는데, 이건 처음 집에 설치된다는 의미다.
   * 처음 집 거리와 다음 집의 거리가 mid보다 같거나 크면 그때는 공유기를 하나 설치해줘야 한다.
   * mid 거리와 실제 거리차이가 맞지 않기 때문에 설치해주는 것!
   * 그 다음은 최대 거리를 구하기 위해 계속 반복이다. 주어진 공유기 갯수를 만족하지 못하면 max 값을 mid -1 값으로 줄여주고, 크게 나오면 min 값을 mid + 1 값으로 올려주면 된다.
   * 참고 블로그(https://knowable.tistory.com/29)
   */
  const fs = require('fs');
  let [A, ...B] = fs.readFileSync('./dev/stdin').toString().trim().split('\n');

  let [houseNum, share] = A.split(' ');
  const houses = B.map((v) => +v).sort((a, b) => a - b);

  let max = houses[houses.length - 1] - houses[0];
  let min = 1;
  let answer = 0;

  while (min <= max) {
    let mid = Math.floor((min + max) / 2);
    let cnt = 1;
    let prevHouse = houses[0];
    for (let i = 1; i < houses.length; i++) {
      if (houses[i] - prevHouse >= mid) {
        cnt++;
        prevHouse = houses[i];
      }
    }
    if (cnt >= share) {
      if (mid > answer) {
        answer = mid;
      }
      min = mid + 1;
    } else {
      max = mid - 1;
    }
  }

  console.log(answer);
}

{
  /**
   * 1300번 문제
   * 이해를 제대로 하지 못했다 ㅜ
   * 참고 블로그(https://devowen.com/265)/(https://maivve.tistory.com/151)
   */
  // let K = 7;
  // let N = 4;

  const fs = require('fs');
  let [N, K] = fs.readFileSync('./dev/stdin').toString().trim().split('\n');

  let min = 1;
  let max = K;
  let result = 0;

  while (min <= max) {
    let mid = Math.floor((min + max) / 2);
    let count = 0;
    for (let i = 1; i <= N; i++) {
      count += Math.min(Math.floor(mid / i), N);
    }
    if (count >= K) {
      result = mid;
      max = mid - 1;
    } else {
      min = mid + 1;
    }
  }

  console.log(result);
}

{
  /**
   * 12015번 가장 긴 증가하는 부분수열
   * 가장 긴 부분수열을 담을 수 있는 새로운 배열을 하나 만든다.
   * 이 배열을 result라고 하고, 문제 배열에 가장 첫번째에 위치한 값을 하나 먼저 담아둔다.
   * 그리고 cases의 숫자만큼 for문을 돈다.
   * 여기서 result 배열에 마지막 수가 nums의 현재값보다 작으면 result에 새로운 값이 들어갈 수 있다.
   * 그런데 만약 nums의 현재값이 더 작을 경우엔 result에서 새로 들어갈 수 있는 경우(result의 index)를 찾아야 한다.
   * 그게 binarySearch 함수가 하는 일이다. result와 문제 배열, i를 받는다.
   * 이분 탐색으로 새로운 수가 result에서 적절한 idx를 가지고 result 배열에 들어갈 수 있게 해주는 일을 한다.
   * 이때 이미 같은 수가 있다면 이 함수로 인해서 그 해당 인덱스로 들어갈 수 있다.
   */
  const fs = require('fs');
  let [cases, nums] = fs.readFileSync('./dev/stdin').toString().trim().split('\n');
  nums = nums.split(' ').map((i) => +i);

  let result = [nums[0]];

  function binarySearch(result, nums, i) {
    let low = 0;
    let high = result.length - 1;
    while (low < high) {
      const mid = Math.floor((low + high) / 2);
      if (result[mid] < nums[i]) {
        low = mid + 1;
      } else if (result[mid] > nums[i]) {
        high = mid;
      } else {
        return mid;
      }
    }
    return high;
  }

  for (let i = 1; i < cases; i++) {
    if (result[result.length - 1] < nums[i]) {
      result.push(nums[i]);
      continue;
    }
    const idx = binarySearch(result, nums, i);
    result[idx] = nums[i];
  }

  console.log(result.length);
}
