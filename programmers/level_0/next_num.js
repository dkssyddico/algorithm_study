/**
 * 다음에 올 숫자
 * 이전꺼랑 다음꺼 뺀 숫자가 같으면 등차
 * 아니면 등비.
 */

function solution(common) {
  const isAP = (arr) => arr[2] - arr[1] === arr[1] - arr[0];
  return isAP(common)
    ? common[common.length - 1] + common[1] - common[0]
    : common[common.length - 1] * (common[1] / common[0]);
}
