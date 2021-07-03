// 둘 다 선생님 풀이임

function solution(n, arr) {
  let answer,
    max = Number.MIN_SAFE_INTEGER;
  for (let x of arr) {
    // x의 값은 변하면 안되서 임시 변수에 x 값을 담아준다
    let sum = 0,
      tmp = x;
    // tmp 가 0이면 멈춤
    while (tmp) {
      sum += tmp % 10;
      // 몫으로 바뀜
      tmp = Math.floor(tmp / 10);
    }
    // console.log(sum); 자릿수의 합
    if (sum > max) {
      max = sum;
      answer = x; // x 원본
    }
    // 더 큰 자리수가 있는지 찾기
    // 자리수 합이 같은 걸 발견
    else if (sum === max) {
      if (x > answer) answer = x;
    }
  }
  return answer;
}

let arr = [128, 460, 603, 40, 521, 137, 123];

console.log(solution(7, arr));

function solution2(n, arr) {
  let answer,
    max = Number.MIN_SAFE_INTEGER;
  for (let x of arr) {
    let sum = x
      .toString()
      .split('')
      .reduce((a, b) => a + Number(b), 0); // 0은 reduce 실행할 때 초기에 더해주는 값을 뜻함
    console.log(sum);
    if (sum > max) {
      max = sum;
      answer = x;
    } else if (sum === max) {
      if (x > answer) answer = x;
    }
  }
  return answer;
}

console.log(solution2(7, arr));
