/**
 * 치킨 쿠폰
 */

function solution(chicken) {
  const order = (coupons) => {
    if (coupons < 10) return 0;
    const service = Math.floor(coupons / 10);
    return service + order(service + (coupons % 10));
  };
  return order(chicken);
}

console.log(solution(1081));

{
  // 내가 원했던 풀이
  function solution(chicken) {
    var answer = 0;
    let coupon = chicken;

    while (coupon > 9) {
      const bonus = Math.floor(coupon / 10);
      answer += bonus;
      coupon += bonus - bonus * 10;
    }
    return answer;
  }
}
