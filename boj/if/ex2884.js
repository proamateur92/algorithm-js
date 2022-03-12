let [hour, min] = require('fs')
  .readFileSync(0)
  .toString()
  .trim()
  .split(' ')
  .map(num => {
    return parseInt(num);
  });

if (min < 45) {
  min += 60;
  if (hour == 0) {
    hour = 23;
  } else {
    hour -= 1;
  }
}
min -= 45;

console.log(`${hour} ${min}`);
