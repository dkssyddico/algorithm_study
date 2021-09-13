function solution(genres, plays) {
  let answer = [];
  let tmp = [];
  let obj = {};
  let tmp2 = [];
  if (genres.length === 1) {
    answer.push(0);
  } else {
    // 음악 별로 총 재생시간 구하기
    for (let i = 0; i < genres.length; i++) {
      obj[genres[i]] = (obj[genres[i]] || 0) + plays[i];
    }
    for (let key in obj) {
      tmp.push([key, obj[key]]);
    }
    tmp.sort((a, b) => b[1] - a[1]);
    for (let i = 0; i < genres.length; i++) {
      let empty = [genres[i], plays[i], i];
      tmp2.push(empty);
    }
    for (let i = 0; i < tmp.length; i++) {
      let gen = tmp[i][0];
      let newArr = tmp2
        .filter((i) => i[0] === gen)
        .sort((a, b) => b[1] - a[1])
        .sort((a, b) => a[1] === b[1] && a[2] - b[2]);
      for (let i = 0; i < 2; i++) {
        newArr[i] && answer.push(newArr[i][2]);
      }
    }
  }
  return answer;
}

// let genres = ['B', 'A'];
// let plays = [600, 500];

let genres = ['classic', 'pop', 'classic', 'classic', 'pop'];
let plays = [500, 600, 150, 800, 2500];

// console.log(solution(genres, plays));

function solution2(genres, plays) {
  let dic = {};
  // 장르별로 총 재생 시간 구하기
  genres.forEach((t, i) => {
    dic[t] = dic[t] ? dic[t] + plays[i] : plays[i];
  });

  let dupDic = {};

  return genres
    .map((t, i) => ({ genre: t, count: plays[i], index: i }))
    .sort((a, b) => {
      if (a.genre !== b.genre) return dic[b.genre] - dic[a.genre]; // 더 많은 재생횟수를 가진 장르로 sort하기
      if (a.count !== b.count) return b.count - a.count; // 재생시간이 다르면 재생시간 내림차순
      return a.index - b.index; // 재생시간이 같으면 오름차순
    }) // 노래를 장르별로 sort한대로 2곡씩 빼는 것. dupDic에 장르가 2개 이상이면 안넣어준다.
    .filter((t) => {
      if (dupDic[t.genre] >= 2) return false;
      dupDic[t.genre] = dupDic[t.genre] ? dupDic[t.genre] + 1 : 1;
      return true;
    })
    .map((t) => t.index);
}

console.log(solution2(genres, plays));
