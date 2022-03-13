const num = require('fs').readFileSync(0).toString().trim();

for (let i = 1; i < 10; i++) {
  console.log(`${num} * ${i} = ${num * i}`);
}
