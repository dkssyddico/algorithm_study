{
  // 4673번 셀프 넘버

  // 특정한 숫자로 각 자리수의 합을 구하는 함수 만들기.
  function d(n) {
    let num = n;
    let sum = 0;
    for (let i = 0; i < String(n).length; i++) {
      sum += num % 10;
      num = Math.floor(num / 10);
    }
    return (sum += n);
  }

  let limit = 10000;
  let numsArr = Array.from({ length: limit + 1 }, () => true);

  // 자릿수의 합을 만드는 함수로 만들어지는 수 false 처리
  for (let i = 1; i < limit; i++) {
    numsArr[d(i)] = false;
  }

  // 셀프넘버는 true이므로 true만 출력
  for (let i = 1; i < limit; i++) {
    if (numsArr[i]) {
      console.log(i);
    }
  }
}

{
  // 1065번 한수
  let input = Number(require('fs').readFileSync('/dev/stdin').toString());

  function h(num) {
    // 숫자를 우선 배열로 만들어주기.
    const numbers = String(num).split('').map(Number);
    // 100이하는 모두 한수
    if (num < 100) {
      return true;
    } else {
      // 등차수열이면 차이가 모두 동일해야해서 맨 처음 차이로 다음 아이템들 비교
      let distance = numbers[1] - numbers[0];
      for (let i = 1; i < numbers.length - 1; i++) {
        if (numbers[i + 1] - numbers[i] !== distance) {
          return false;
        }
      }
      return true;
    }
  }

  let result = 0;

  // true면 값이 하나씩 더해짐
  for (let i = 1; i <= input; i++) {
    result += h(i);
  }

  console.log(result);
}
