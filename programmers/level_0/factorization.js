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
    if (isPrime(i)) check[i] = 1;
  }
  let answer = [];
  for (let i = 2; i < check.length; i++) {
    if (check[i] === 1 && n % i === 0) {
      answer.push(i);
    }
  }
  return answer;
}

console.log(solution(12));
