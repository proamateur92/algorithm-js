const input = require('fs').readFileSync(0).toString().trim().split('\n');
let check = input[0].split(' ');
check = parseInt(check[1]);
let nums = input[1].split(' ').map(n => {
  return parseInt(n);
});

let result = '';

for (let i = 0; i <= nums.length; i++) {
  if (check > nums[i]) {
    result += nums[i] + ' ';
  }
}

console.log(result);
