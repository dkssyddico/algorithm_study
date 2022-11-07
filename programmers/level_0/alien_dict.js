/**
 * 외계어 사전
 */

function solution(spell, dic) {
  let answer = [];
  for (let i = 0; i < dic.length; i++) {
    let flag = false;
    let word = dic[i];
    for (let j = 0; j < spell.length; j++) {
      if (word.includes(spell[j])) {
        flag = true;
      } else {
        flag = false;
        break;
      }
    }
    if (flag) {
      answer.push(word);
      break;
    }
  }
  return answer.length ? 1 : 2;
}

console.log(solution(['z', 'd', 'x'], ['def', 'dww', 'dzx', 'loveaw']));

{
  // 다른 분들 풀이
  function solution(spell, dic) {
    return dic.filter((n) => {
      let bool = true;
      spell.forEach((m) => {
        if (!n.includes(m)) bool = false;
      });
      return bool;
    }).length > 0
      ? 1
      : 2;
  }

  function solution(spell, dic) {
    return dic.filter((v) => spell.every((c) => v.includes(c))).length ? 1 : 2;
  }
}
