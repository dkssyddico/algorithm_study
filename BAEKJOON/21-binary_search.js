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
