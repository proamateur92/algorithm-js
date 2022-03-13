const repeat = require('fs').readFileSync(0).toString().trim().split('\n');

for (let i = 1; i < repeat.length; i++) {
  const [a, b] = repeat[i]
    .trim()
    .split(' ')
    .map(n => {
      return parseInt(n, 10);
    });
  console.log(a + b);
}
