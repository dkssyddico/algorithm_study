// let sentences = ['I am happy today', 'We want to win the first prize'];
// let count = 2;

let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');
let count = Number(input[0]);

for (let i = 1; i < count + 1; i++) {
  let sentence = input[i];
  makeReversed(sentence);
}

function makeReversed(sentence) {
  let target = sentence.split(' ');
  let answer = [];

  for (let i = 0; i < target.length; i++) {
    let word = target[i];
    let newWord = '';
    for (let j = word.length - 1; j >= 0; j--) {
      let x = word[j];
      newWord += x;
    }
    answer.push(newWord);
  }
  console.log(answer.join(' ').trim());
}
