{
  /**
   * 1920 수 찾기
   * 기본적인 이분 검색 문제
   * 배열의 시작과 끝 인덱스로 mid 인덱스를 만들어 mid 인덱스의 수와 현재 수를 비교해서 찾아나가는 방식
   * 백준 설정 때매 또 고생..
   */
  const input = require('fs')
    .readFileSync('/dev/stdin')
    .toString()
    .trim()
    .split('\n');

  const [N, standard, M, target] = input.map((v) =>
    v.split(' ').map((x) => Number(x))
  );

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
