// 직사각형 별찍기
process.stdin.setEncoding('utf8');
process.stdin.on('data', data => {
  const n = data.split(' ');
  const a = Number(n[0]),
    b = Number(n[1]);
  const star = '*';
  let printStar = '';

  for (let i = 0; i < a; i++) {
    printStar += star;
  }

  for (let i = 0; i < b; i++) {
    console.log(printStar);
  }
});
