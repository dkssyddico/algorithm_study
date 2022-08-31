/**
 * 1264
 */

{
  // 정규식으로도 푸는 법.
  let input =
    'How are you today?\nQuite well, thank you, how about yourself?\nI live at number twenty four.\n#'.split(
      '\n'
    );

  for (let i = 0; i < input.length - 1; i++) {
    const match = input[i].match(/[aeiou]/gi);
    console.log(match);
  }
}

{
  const fs = require('fs');
  const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
  const vowel = 'aeiou';

  let result = [];
  for (let i = 0; i < input.length - 1; i++) {
    let count = 0;
    for (let j = 0; j < input[i].length; j++) {
      if (vowel.includes(input[i][j].toLowerCase())) {
        count++;
      }
    }
    result.push(count);
  }

  console.log(result.join('\n'));
}
