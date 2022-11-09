/**
 * 등수 매기기
 */
function solution(score) {
  let average = score.map(([a, b]) => (a + b) / 2);
  let averageRank = [...average]
    .sort((a, b) => b - a, 0)
    .map((v, i) => ({ v, rank: i + 1 }))
    .map((v, i, arr) => (i > 0 && v.v === arr[i - 1].v ? { ...v, rank: arr[i - 1].rank } : v));

  return average.map((a) => averageRank.find((av) => av.v === a).rank);
}

console.log(
  solution([
    [80, 70],
    [70, 80],
    [30, 50],
    [90, 100],
    [100, 90],
    [100, 100],
    [10, 30],
  ])
);

{
  /**
   * 다른 분 풀이
   * 나보다 평균이 높은 게 몇개나 있는지 + 1 하면 그 점수 평균의 등수가 됨
   */
  function solution(score) {
    return score.map((el) => {
      return score.filter((v) => (v[0] + v[1]) / 2 > (el[0] + el[1]) / 2).length + 1;
    });
  }

  console.log(
    solution1([
      [80, 70],
      [70, 80],
      [30, 50],
      [90, 100],
      [100, 90],
      [100, 100],
      [10, 30],
    ])
  );
}
