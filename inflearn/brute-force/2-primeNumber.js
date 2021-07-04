// function solution(arr) {
//   let answer = [];
//   let tmp = [];
//   // 숫자 뒤집기
//   for (let x of arr) {
//     let reversed = x.toString().split('').reverse().join('');
//     reversed = parseInt(reversed);
//   }

//   return answer;
// }

let arr = [32, 55, 62, 20, 250, 370, 200, 30, 100];

// console.log(solution(arr));

function isPrime(num) {
  if (num === 1) return false;
  // Math.sqrt(num) 제곱근 == parseInt(num / 2) 랑 같다. 절반까지만 해도 약수가 있는지 없는지 판별이 가능하다
  for (let i = 2; i <= parseInt(Math.sqrt(num)); i++) {
    // 약수
    if (num % i === 0) return false;
  }
  return true;
}

function tSolution(arr) {
  let answer = [];
  for (let x of arr) {
    let result = 0;
    while (x) {
      // 뒤집는 방법
      let t = x % 10;
      result = result * 10 + t;
      // 몫을 남기는 방법. 0이 되면 false니까 끝난다.
      x = parseInt(x / 10);
    }
    // 소수인지 확인
    if (isPrime(result)) answer.push(result);
  }
  return answer;
}

console.log(tSolution(arr));

// 에라토스테네스의 체: 소수의 개수 구하는 식

function solution(n) {
  let count = 0;
  // 인덱스 번호가 숫자와 대응하도록 +1을 해줌
  let ch = Array.from({ length: n + 1 }, () => 0);
  for (let i = 2; i <= n; i++) {
    // 2부터 시작
    if (ch[i] === 0) {
      count++;
      // j도 2부터 시작
      for (let j = i; j <= n; j += i) {
        console.log(`j:${j} n:${n}`);
        ch[j] = 1;
        console.log(`ch[${j}]: ${ch[j]}`);
      }
    }
  }
  return count;
}
console.log(solution(20));
