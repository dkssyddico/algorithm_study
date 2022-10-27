/**
 * 점의 위치 구하기
 * 단순하게 if else 구문으로 풀었는데 다른 사람 풀이 보니 두 좌표를 곱해서 판별하는 풀이가 있어서 가져옴
 * 숫자가 음수면 false가 되니까..
 */

function solution(dot) {
  const [num, num2] = dot;
  const check = num * num2 > 0;
  return num > 0 ? (check ? 1 : 4) : check ? 3 : 2;
}

// 위에꺼 변형시켜서 숫자로만 판별하기

function solution(dot) {
  const [num, num2] = dot;
  const check = num2 > 0;
  return num > 0 ? (check ? 1 : 4) : check ? 2 : 3;
}
