function solution(test) {
  let answer = 0,
    numTest = test.length, // 시험의 갯수
    numStudent = test[0].length,
    set = [];
  // 멘토와 멘티가 되는 경우의 수부터 구하기
  // i는 멘토, j는 멘티
  for (let i = 1; i <= numStudent; i++) {
    for (let j = 1; j <= numStudent; j++) {
      let count = 0;
      // 시험 내에서 등수찾기
      // x는 수학 테스트 번호
      for (let x = 0; x < numTest; x++) {
        let rankI = 0,
          rankJ = 0;
        // y는 등수
        for (let y = 0; y < numStudent; y++) {
          // i가 x번째 시험에서 몇등(y)인지 확인
          // test[x][y]에서 y가 i와 j의 등수
          if (test[x][y] === i) rankI = y;
          if (test[x][y] === j) rankJ = y;
        }
        if (rankI < rankJ) count += 1;
      }
      if (count === numTest) {
        set.push([i, j]);
        answer += 1;
      }
    }
  }
  console.log(set);
  return answer;
}

let test = [
  [3, 4, 1, 2],
  [4, 3, 2, 1],
  [3, 1, 4, 2],
];

console.log(solution(test));
