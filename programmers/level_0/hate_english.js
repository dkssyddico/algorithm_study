/**
 * 영어가 싫어요
 */

function solution(numbers) {
  let change = numbers
    .replaceAll(/one/g, 1)
    .replaceAll(/two/g, 2)
    .replaceAll(/three/g, 3)
    .replaceAll(/four/g, 4)
    .replaceAll(/five/g, 5)
    .replaceAll(/six/g, 6)
    .replaceAll(/seven/g, 7)
    .replaceAll(/eight/g, 8)
    .replaceAll(/nine/g, 9)
    .replaceAll(/zero/g, 0);

  return +change;
}

console.log(solution('onetwothreefourfivesixseveneightnine'));

{
  // 다른 분 풀이
  // replace에서도 두번째 인자로 함수가 올 수 있구나
  function solution(numbers) {
    const obj = {
      zero: 0,
      one: 1,
      two: 2,
      three: 3,
      four: 4,
      five: 5,
      six: 6,
      seven: 7,
      eight: 8,
      nine: 9,
    };

    const num = numbers.replace(/zero|one|two|three|four|five|six|seven|eight|nine/g, (v) => {
      return obj[v];
    });

    return Number(num);
  }
}
