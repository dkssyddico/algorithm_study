{
  // 2798번 블랙잭
  let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
  let target = Number(input[0].split(' ')[1]);
  let nums = input[1].split(' ').map(Number);

  let sum = 0;
  let max = 0;

  for (let i = 0; i < nums.length; i++) {
    let x = nums[i];
    for (let j = i + 1; j < nums.length; j++) {
      let y = nums[j];
      for (let k = j + 1; k < nums.length; k++) {
        const z = nums[k];
        sum = x + y + z;
        if (sum > max && target >= sum) {
          max = sum;
        }
      }
    }
  }

  console.log(max);
}

{
  // 2231번 분해합
  // 1부터 모든 경우의 수를 다 해봐야함 ;ㅁ;
  // 제일 먼저 나오는게 가장 작은 생성자. 11부터 생성자가 있다. 11 = 10 + 1 + 0
  // 내 풀이
  let target = Number(require('fs').readFileSync('/dev/stdin').toString());
  let answer = 0;

  for (let i = 0; i < 1000000; i++) {
    let sum = 0;
    sum += i;
    let newNum = i;
    while (newNum !== 0) {
      sum += newNum % 10;
      newNum = Math.floor(newNum / 10);
    }
    if (sum === target) {
      answer = i;
      break;
    }
  }
  if (answer) {
    console.log(answer);
  } else {
    console.log(0);
  }
  {
    // split, reduce로 푸는 방법
    // 시간이랑 메모리 엄청 씀

    let target = Number(require('fs').readFileSync('/dev/stdin').toString());
    let answer = 0;

    for (let i = 1; i <= 1000000; i++) {
      let sum = i + plus(i);
      if (sum === target) {
        answer = i;
        break;
      }
    }

    function plus(num) {
      let strArr = num.toString().split('');
      return strArr.reduce((p, c) => parseInt(p) + parseInt(c), 0);
    }

    if (answer) {
      console.log(answer);
    } else {
      console.log(0);
    }
  }
}

{
  // 7568번 덩치
  const [n, ...arr] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
  const people = arr.map((p) => [parseInt(p.split(' ')[0]), parseInt(p.split(' ')[1])]);

  let ranks = [];

  for (let i = 0; i < people.length; i++) {
    let rank = 1;
    let myWeight = people[i][0];
    let myHeight = people[i][1];
    // 같은 사람 처리
    for (let j = 0; j < people.length; j++) {
      let otherWeight = people[j][0];
      let otherHeight = people[j][1];
      if (otherWeight > myWeight && otherHeight > myHeight) {
        rank++;
      }
    }
    ranks.push(rank);
  }

  console.log(ranks.join(' '));
}
