// 문제 11
{
  let s = 0;

  for (let i = 1; i <= 100; i++) {
    s += i;
  }

  console.log(s);
}

// 문제 12

{
  class Wizard {
    constructor(health, mana, armor) {
      this.health = health;
      this.mana = mana;
      this.armor = armor;
    }

    attack() {
      console.log('파이어볼');
    }
  }

  const x = new Wizard(545, 210, 10);
  console.log(x.health, x.mana, x.armor);
  x.attack();
}

// 문제 13

{
  let key = 1;

  switch (key) {
    case 1:
      console.log('수성');
      break;
    case 2:
      console.log('금성');
      break;
    case 3:
      console.log('지구');
      break;
    case 4:
      console.log('화성');
      break;
    case 5:
      console.log('목성');
      break;
    case 6:
      console.log('토성');
      break;
    case 7:
      console.log('천왕성');
      break;
    case 8:
      console.log('해왕성');
      break;
    default:
      console.log('찾는 행성이 없습니다.');
      break;
  }
}

{
  // 문제 14

  let randomNumber = 2;

  if (randomNumber % 3 === 0) {
    console.log('짝');
  } else {
    console.log(randomNumber);
  }
}

{
  // 문제 15
  function sayHello(name) {
    console.log(`안녕하세요 ${name}입니다.`);
  }
  sayHello('김다정');
}

{
  // 문제 16
  function makeStringReversed(string) {
    let s = string.split('').reverse().join('');
    console.log(s);
  }

  makeStringReversed('거꾸로');
}

{
  // 문제 17
  function decideHeight(height) {
    if (height >= 150) {
      console.log('Yes');
    } else {
      console.log('No');
    }
  }

  decideHeight(149);
}

{
  // 문제 18
  function makeAverage(a, b, c) {
    let average = Math.floor((a + b + c) / 3);
    console.log(average);
  }
  makeAverage(20, 30, 40);
}

{
  // 문제 19
  // a의 b 제곱은 a를 b번 곱하는 것
  function makeSquare(a, b) {
    let answer = 1;
    for (let i = 1; i <= b; i++) {
      answer = answer * a;
    }
    console.log(answer);
  }
  makeSquare(2, 10);
}

{
  // 문제 20
  function makeDivisionResult(a, b) {
    let x = a / b;
    let y = a % b;
    console.log(x, y);
  }
  makeDivisionResult(10, 2);
}
