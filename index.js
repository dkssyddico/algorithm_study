// 체육복
/**
 * 여벌이 남는 애들 기준으로
 * 여벌이 남는 애들 중에 체육복을 잃어버린 애가 있어서 있는지 찾아줘야 됨.
 * 이중 포문 써줘야 될 것 같음
 * 첫번째 포문은 reverse를 기준, 두번째 포문은 lost로 돌려서 쭉 찾기
 */

function solution(n, lost, reserve) {
  let total = n - lost.length;
  let i = 0;
  while (reserve.length) {
    let hasUniform = reserve[i];
    if (lost.includes(hasUniform)) {
      total++;
      reserve.shift();
      lost.splice(lost.indexOf(hasUniform), 1);
    } else {
      let noUniform = lost[0];
      if (noUniform === hasUniform + 1 || noUniform === hasUniform - 1) {
        total++;
        lost.splice(lost.indexOf(hasUniform), 1);
      }
      i++;
    }
  }
  return total;
}

console.log(solution(18, [7, 8, 11, 12], [1, 6, 8, 10]));
