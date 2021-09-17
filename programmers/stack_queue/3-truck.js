// 트럭 무게가 다리가 견딜 수 있는 무게인지 판별
// 다리 하나 건너는데는 1초가 걸림. 다리에서 내리는 것도 1초가 걸림
function solution(bridge_length, weight, truck_weights) {
  let answer = 0;
  let bridge = [];
  let dest = [];
  let time = 0;
  // // 무언가 2가 되면 브릿지에 맨 앞 아이템이 빠지는 걸로. 데스티네이션에 따로 넣던지.
  // // 시간을 누적해야 함.
  // // 다리를 건넜다는 걸 어떻게 알지?
  // let sum = bridge.reduce((a, b) => a + b);
  // if (sum < weight) {
  //   let truck = truck_weights[1];
  //   bridge.push(truck);
  // }
  // console.log(bridge);
  // 처음 트럭을 넣었을 때 다음 트럭을 넣을 때 다리 무게와 영향이 있는지?
  // 2의 배수가 되면 아이템이 하나 빠져야함.

  let truck = truck_weights.shift();
  bridge.push(truck);
  time++;
  console.log(truck, bridge);
  let i = 0;
  while (dest.length !== 4) {
    let sum = bridge.reduce((a, b) => a + b);
    if (bridge[0] === 0) {
      bridge.shift();
    }
    let nextTruck = truck_weights.shift();
    if (!nextTruck) {
      time++;
      break;
    }
    if (sum + nextTruck > weight) {
      bridge.push(0);
      time++;
    } else {
      bridge.push(nextTruck);
      time++;
    }
    if (bridge.length === bridge_length) {
      let arrival = bridge.shift();
      dest.push(arrival);
    }
    let sumCheck = bridge.reduce((a, b) => a + b);
    if (sumCheck === 0) {
      bridge.push(nextTruck);
    } else {
    }
    time++;
  }
  answer = time;
  return answer;
}

// console.log(solution2(2, 10, [7, 4, 5, 6]));
console.log(solution2(100, 100, [10]));

function solution2(bridge_length, weight, truck_weights) {
  let bridge = Array.from({ length: bridge_length }, () => 0);
  console.log(bridge);

  let time = 0;

  while (bridge.length) {
    bridge.shift();
    time += 1;

    if (truck_weights.length) {
      let sum = bridge.reduce(function add(sum, curValue) {
        return sum + curValue;
      });

      if (sum + truck_weights[0] <= weight) {
        bridge.push(truck_weights.shift());
      } else {
        bridge.push(0);
      }
    }
  }

  return time;
}
