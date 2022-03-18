const numArr = new Array(10001);
numArr.fill(0);
numArr[0] = 1;

const m = 10;
const n = 100;
const o = 1000;

for (let i = 1; i < 10000; i++) {
  let s = 0;

  if (i < 10) {
    s = s + s;
  }

  if (10 < i < 100) {
    s = i + Math.floor(i / m) + (i % m);
  }

  if (100 <= i < 1000) {
    const quotient = Math.floor(i / n);
    const remainder = i % n;
    s = i + quotient + Math.floor(remainder / m) + (remainder % m);
  }

  if (1000 <= i < 10001) {
    const quotient = Math.floor(i / o);
    const remainder = i % o;
    const quotient1 = Math.floor(remainder / n);
    const remainder2 = remainder % n;

    s = i + quotient + quotient1 + Math.floor(remainder2 / m) + (remainder2 % m);
  }

  numArr[s] = 1;
}

for (let i in numArr) {
  if (numArr[i] === 0) {
    console.log(i);
  }
}
