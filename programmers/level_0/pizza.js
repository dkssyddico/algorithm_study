{
  // 피자 나눠먹기 2

  function solution(n) {
    let pizzaBox = 1;

    while ((pizzaBox * 6) % n !== 0) {
      pizzaBox += 1;
    }

    return pizzaBox;
  }
}

{
  // 피자 나눠먹기 3
  function solution(slice, n) {
    var answer = 0;
    answer = n % slice === 0 ? parseInt(n / slice) : parseInt(n / slice) + 1;
    return answer;
  }
}
