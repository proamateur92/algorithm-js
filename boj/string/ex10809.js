const input = require('fs').readFileSync(0).toString().trim().split('\n');
const str = input[0];
const num = new Array(26);
num.fill(-1);
for (let i of str) {
  const c = i.charCodeAt();
  num[c - 97] = str.indexOf(i);
}

for (let n of num) {
  console.log(n);
}
