// 체육복
/**
 * 여벌이 남는 애들 기준으로
 * 여벌이 남는 애들 중에 체육복을 잃어버린 애가 있어서 있는지 찾아줘야 됨.
 * 이중 포문 써줘야 될 것 같음
 * 첫번째 포문은 reverse를 기준, 두번째 포문은 lost로 돌려서 쭉 찾기
 */

function solution(n, lost, reserve) {
  let total = n - lost.length;
  // 잃어버린 애랑 여벌 가진 애랑 있는지 확인. 둘 다 빠져야됨
  let filteredReserve = reserve
    .filter((student) => {
      return lost.indexOf(student) === -1;
    })
    .sort((a, b) => a - b);
  let filteredLost = lost.filter((student) => {
    if (reserve.indexOf(student) !== -1) {
      total++;
    }
    return reserve.indexOf(student) === -1;
  });

  // 빌려줄 수 있는 지 판별하기
  let i = 0;
  while (i < filteredReserve.length) {
    let hasUniform = filteredReserve[i];
    if (filteredLost.indexOf(hasUniform - 1) !== -1) {
      total++;
      filteredLost.splice(filteredLost.indexOf(hasUniform - 1), 1);
      i++;
    } else if (filteredLost.indexOf(hasUniform + 1) !== -1) {
      total++;
      filteredLost.splice(filteredLost.indexOf(hasUniform + 1), 1);
      i++;
    } else {
      i++;
    }
  }

  return total;
}

console.log(solution(18, [7, 8, 11, 12], [1, 6, 8, 10]));
