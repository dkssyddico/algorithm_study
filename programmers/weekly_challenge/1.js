function solution(price, money, count) {
  let standard = price;
  let sum = 0;
  for (let i = count; i >= 1; i--) {
    sum += standard * i;
  }
  if (money >= sum) {
    return 0;
  } else {
    return sum - money;
  }
}

console.log(solution(3, 20, 4));
