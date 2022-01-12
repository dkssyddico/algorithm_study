let routes = [
  [-20, -15],
  [-14, -5],
  [-18, -13],
  [-5, -3],
];

// 전의 차 진출이 다음 차 진입보다 빠르면 같이 걸리는 것.

// 1. 시작점을 기준으로 오름차순 정렬한다.  기준점은 시작점의 끝나는 지점이다. (end)

// 2. 만약 다음 배열의 시작점이 기준점(이전 지점)보다 먼저라면 범위가 겹치는 지점이다. 끝나는 점이 더 작은 걸로 end를 갱신한다.

// 3. 만약 다음 지점의 시작점과 기준점보다 크다면 범위가 겹치치 않는다.  현재의 end지점에 카메라를 설치하고 end를 새로운 범위의 끝점으로 갱신해라.

routes = routes.sort((a, b) => a[0] - b[0]);
let count = 1;
let end = routes[0][1];
for (let i = 1; i < routes.length; i++) {
  let [s, e] = routes[i];
  if (s <= end) {
    if (e < end) {
      end = e;
    }
  } else {
    count++;
    end = e;
  }
}

return count;
