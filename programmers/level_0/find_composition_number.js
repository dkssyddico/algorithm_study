/**
 * 합성수 찾기
 */

{
  // 소수만 제외하면 되니까 이전에 소수판별하는 함수 가져와서 풀었음 ㅎ
  function isPrime(num) {
    if (num === 1) {
      return false;
    }
    for (let i = 2; i <= Math.floor(Math.sqrt(num)); i++) {
      if (num % i === 0) {
        return false;
      }
    }
    return true;
  }

  function solution(n) {
    let check = Array(n + 1).fill(0);
    for (let i = 1; i <= n; i++) {
      if (!isPrime(i)) check[i] = 1;
    }
    return check.filter((i) => i === 1).length - 1;
  }
}

// 다른 분 풀이
// 이것도 에라토스테네스의 체 풀이다.
{
  function solution(n) {
    let dp = new Array(n + 1).fill(1);
    for (let i = 2; i <= n; i++) {
      if (dp[i]) {
        for (let j = 2; i * j <= n; j++) {
          dp[i * j] = 0;
        }
      }
    }

    return dp.filter((el) => el === 0).length;
  }
}
